import { Component } from '@angular/core';
import countryData from '../data.json'
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { LanguagesPipe } from '../pipes/languages.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LanguagesPipe, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  countryInfo! : any;
  getDataId! : number;
  bordersList: any;

  constructor( private activatedRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getDataId = params['id'];
      this.getData()

      
    });
  }

  getData(){
    this.countryInfo = this.getDataService.getCountryDataByID(this.getDataId)[0]

    if(this.countryInfo.borders){
      this.bordersList = this.getDataService.getBordersList(this.countryInfo.borders);
    }else{
      this.bordersList = ["NA"]
    }
  }

  goBack(){
    this.location.back();
  }
}
