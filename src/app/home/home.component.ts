import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterLink} from '@angular/router';
import { GetDataService } from '../get-data.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  countryData!: any[];
  searchText!: string;
  filterText!: string;
  regionList: any;

  constructor(private getDataService: GetDataService){
  }

  ngOnInit(){
    this.countryData = this.getDataService.getAllCountryData();
    this.regionList = this.getDataService.getUniqueRegionList();
    
  }

  filterBy() {
      this.countryData = this.getDataService.getAllCountryData();
      this.countryData = this.countryData.filter(p => p.region === this.filterText)
  }

}
