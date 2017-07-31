import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../service/business.service';
import { IBusiness } from './bus';
import { ICategory } from './category';

@Component({
  selector: 'app-bedit',
  templateUrl: './businessEdit.component.html'

})

export class BusinessEditComponent implements OnInit {
  pageTitle: 'Business Edit';
  business: IBusiness[];
  categories: ICategory[];
  

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;


  constructor( private _businessService: BusinessService) { }

  ngOnInit(): void {
  this._businessService.getBusiness().subscribe((business) => {
    this.business = business;
  })
 this._businessService.getCategories().subscribe((categories) => {
      this.categories = categories;
  })
}
    updateBusiness(key) {
    const updBusiness = {

      company: this.activeCompany,
      category: this.activeCategory,
      years_in_business: this.activeYearsInBusiness,
      description: this.activeDescription,
      phone: this.activePhone,
      email: this.activeEmail,
      street_address: this.activeStreetAddress,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode
    }

    this._businessService.updateBusiness(key, updBusiness);

  }
}
