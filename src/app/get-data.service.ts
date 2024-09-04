import { Injectable } from '@angular/core';
import countryData from './data.json'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() {}

    getAllCountryData() {
      return countryData;
    }

    getCountryDataByID(id:any){
      const result = countryData.filter(x => x.numericCode === id);
      return result;
    }

    getBordersList(data:any){
      const newData: any[] = [];
      console.log(data);
     data.forEach((d:any)=>{
      countryData.forEach((c:any)=>{
        if(d===c.cioc){
          newData.push(c.name)
        }
     })
     })
     return newData
    }

    getUniqueRegionList(){
      const uniqueArray = [...new Map(countryData.map((item:any) =>
        [item['region'], item])).values()];    
      return uniqueArray;
    }

}
