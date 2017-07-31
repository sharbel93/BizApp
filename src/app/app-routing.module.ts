import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './business/businessList.component';
import { BusinessEditComponent } from './business/businessEdit.component';
import { BusinessDisplayComponent } from './business/businessDisplay.component';
import { BusinessAddComponent } from './business/businessAdd.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'list', component: BusinessListComponent},
  { path: 'edit/:key.$key', component: BusinessEditComponent},
  { path: 'view/:key.$key', component: BusinessDisplayComponent},
  { path: 'add', component: BusinessAddComponent}


]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
