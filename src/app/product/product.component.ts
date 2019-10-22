import { Product } from './../model/product';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  invalidNames = ['test'];

  form: FormGroup;
  product: Product;

  ngOnInit() {
    this.product = new Product('Testando', 'Ajax', 10);
    this.form = new FormGroup({
      'productData' : new FormGroup({
        'name': new FormControl(this.product.name, [Validators.required, this.forbiddenNames.bind(this)]),
        'brand': new FormControl(this.product.brand, Validators.required),
        'weight': new FormControl(this.product.weight, Validators.required)
      })
    });
  }

  onSubmit(){
    console.log(this.form);
  }

  forbiddenNames(control: FormControl) : {[s: string] : boolean} {
    if(this.invalidNames.indexOf(control.value) !== -1) {
      return {'nameIsForbiden' : true};
    }

    return null;
  }

  get name() {
    return this.form.get('productData.name');
  }
}
