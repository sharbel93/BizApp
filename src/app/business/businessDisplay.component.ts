import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../service/business.service';
import { IBusiness } from './bus';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component ({
  templateUrl: './businessDisplay.component.html'

})

export class BusinessDisplayComponent  {
  pageTitle: 'Business View';
  business: IBusiness[];
  bus: IBusiness;
  private sub: Subscription;
  appState: string;
 activeKey: string;
 constructor( private route: Router, private _route: ActivatedRoute, private _businessService: BusinessService) {
this._route.params.subscribe( params => console.log(params));
this.sub = this._route.params.subscribe( params => { const key = params['key.$key']
this.getBusiness(key);
});

}

changeState(state, key) {
    if (key) {
      this.activeKey = key.$key;
    }
    this.appState = state;
  }

getBusiness(key) {
this._businessService.getbusi().subscribe(
  business => {this.business = business})

}


filterCategory(company) {
this._businessService.getBusiness(company).subscribe(business => {
  this.business = business;
})
}

}
