import { Component, OnInit } from '@angular/core';
import { IBusiness } from './bus';
import { Http } from '@angular/http'
import { BusinessService } from '../service/business.service';
import { ICategory } from './category';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bsl',
  templateUrl: './businessList.component.html'

})
export class BusinessListComponent implements OnInit {
  pageTitle = 'Business Lists'
  business: IBusiness[];
  bus: IBusiness;
  categories: ICategory[];
  appState: string;
  activeKey: string;



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



  constructor(private router: Router,

     private _businessService: BusinessService) {
  }

  ngOnInit(): void {

    this._businessService.getBusiness().subscribe((business) => {
      console.log(business);
      this.business = business;
    });
    this._businessService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });


  }

/*   getbus(key: string) {
   this._businessService.getbus(key).subscribe(
     bus => {this.bus = bus; })

  }
 */

  filterCategory(category) {
    this._businessService.getBusiness(category).subscribe(business => {
      this.business = business;
    })
  }


  changeState(state, key = null) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  showEdit(key) {
     this.changeState('edit', key.$key);
    this.activeCompany = key.company;
     this.activeCategory = key.category;
     this.activeYearsInBusiness =  key.years_in_business;
    this.activeDescription =      key.description;
    this.activePhone =            key.phone;
    this.activeEmail =            key.email;
    this.activeStreetAddress =    key.street_address;
    this.activeCity =            key.city;
    this.activeState =            key.state;
    this.activeZipcode =          key.zipcode;
  }

  gotoDetail(): void {
    this.router.navigate(['/add']);
  }

  gotoMore(key) {
    console.log('stuff', key.$key);
 //   this.router.navigate(['/view', key.$key]);
  this.router.navigate(['/view']);
  this.changeState('extend');
  }




  gotoDelete(key) {
    this._businessService.deleteBusiness(key);
    this.changeState('default');
  }

/*  getBusinessKey(company) {
this._businessService.getBusiness(company).subscribe(business => {
  this.business = business;
})
} */


    updateBusiness() {
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

    this._businessService.updateBusiness( this.activeKey, updBusiness);
     this.changeState('default');
  }

}
