import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages',
  standalone: true
})
export class LanguagesPipe implements PipeTransform {

  data : any[] = [];
  transform(value: any, ...args: unknown[]): unknown {

    for(let v of value){
      this.data.push(v.name)
    }
    return this.data;
  }

}
