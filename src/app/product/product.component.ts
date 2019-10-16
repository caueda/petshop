import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @ViewChild('f', {static: true})
  form: NgForm;

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }
}
