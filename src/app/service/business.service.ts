import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { IBusiness } from '../business/bus';
import { Observable } from 'rxjs/observable'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ICategory } from '../business/category';
import { BusinessListComponent } from '../business/businessList.component';



@Injectable()
export class BusinessService {
 private businessItem: FirebaseListObservable<IBusiness[]>;
 private categoryItem: FirebaseListObservable<ICategory[]>;
 private busn: IBusiness[];
 appState: string;
 activeKey: string;
 private _businessUrl = 'https://bizapp-4a7ac.firebaseio.com/bizdetail.json';
constructor(private http: Http, private af: AngularFireDatabase) {}


 /*getBusiness() {
  return this.http.get(this._businessUrl)
  .map((response: Response) => <IBusiness[]>response.json())
  .do(businessItem => console.log('All: ' + JSON.stringify(businessItem)));

}*/

getBusiness(category: string = null) {
  if (category != null) {
  this.businessItem = this.af.list('/businesses', {
    query: {
      orderByChild: 'category',
      equalTo: category
    }
  }) as FirebaseListObservable<IBusiness[]>
  } else {
    this.businessItem = this.af.list('/businesses') as FirebaseListObservable<IBusiness[]>
  }
  return this.businessItem;

  // return this.af.list('/');  working
  /*return this.http.get(this._businessUrl).map((response: Response) => {
    console.log(response);
    return response.json();
  }); 1*/

}

getCategories() {
this.categoryItem = this.af.list('/categories') as FirebaseListObservable<ICategory[]>
return this.categoryItem;
}


getbusi() {
this.categoryItem = this.af.list('/businesses') as FirebaseListObservable<IBusiness[]>
return this.businessItem;
}

addBusiness(newBusiness) {
return this.businessItem.push(newBusiness);
}

    updateBusiness(key, updBusiness) {
       this.businessItem.update(key, updBusiness);
    }

    deleteBusiness(key) {
        this.businessItem.remove(key);
    }

     getbus(key: string) {
     // return this.getbusi().map((item: IBusiness[]) => item.find(p => p.$key === key ));
       return this.getBusiness().map((item: IBusiness[]) => item.find(p => p.$key === key ));
    }

}
