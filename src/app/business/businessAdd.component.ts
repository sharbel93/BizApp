import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../service/business.service';
import { IBusiness } from './bus';
import { ICategory } from './category';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './businessAdd.component.html',


})

export class BusinessAddComponent implements OnInit {
  title: 'Add Business';
  business: IBusiness[];
  categories: ICategory[];
  appState: string;
  busForm: FormGroup;
  b: IBusiness;
  submitted = false;
  formErrors = { 'company': ''}

  constructor(private router: Router, private _businessService: BusinessService, private fb: FormBuilder) {

  }




  ngOnInit(): void {

     this.buildForm();
    this._businessService.getBusiness().subscribe((business) => {
      this.business = business;
    })
    this._businessService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })


  }

  buildForm() {
    this.busForm = this.fb.group({
      // this.b.company
      'company': ['', [
        Validators.required
        // Validators.minLength(1),
        // Validators.maxLength(24)
        //  forbiddenNameValidator(/bob/i)
      ]],
      'category': ['', Validators.required],
      'years_in_business': ['',
      [
         Validators.required,
        // Validators.minLength(1)

      ]],
      'street_address': ['',
      [
         Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(24)
      ]],
      'city': ['',
      [
         Validators.required,
        // Validators.maxLength(10)
      ]],
      'state': ['',
      [
         Validators.required,
        // Validators.maxLength(15)
      ]],
      'zipcode': ['',
      [
        Validators.required,

        // Validators.maxLength(24)
      ]],
      'phone': ['',
      [
         Validators.required,
        // Validators.maxLength(24)
      ]],
      'email': ['',
      [
         Validators.required,
        // Validators.maxLength(24)
      ]],
      'description': ['',
      [
        Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])
        // Validators.maxLength(50)
      ]]

    });


   // this.busForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.busForm) { return; }
    const form = this.busForm;
  }






  onSubmit() {

    this.submitted = true;
    this.b = this.busForm.value;
     this._businessService.addBusiness(this.b);
     alert('New Business is Added!');
     this.router.navigate(['/list']);

    }
  //    addBusiness(
  //     company: string,
  //     category: string,
  //     years_in_business: number,
  //     description: string,
  //     phone: string,
  //     email: string,
  //     street_address: string,
  //     city: string,
  //     state: string,
  //     zipcode: string

  //    ) {
  //      const created_at = new Date().toString();

  //      const newBusiness = {
  //       company: company,
  //       category: category,
  //       years_in_business: years_in_business,
  //       description: description,
  //       phone: phone,
  //       email: email,
  //       street_address: street_address,
  //       city: city,
  //       state: state,
  //       zipcode: zipcode,
  //       created_at: created_at
  //      }
  // // alert('Your account has been created!')
  //      this._businessService.addBusiness(newBusiness);
  //     }
}
