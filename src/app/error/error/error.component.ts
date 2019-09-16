import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: string;
  keyMessage = 'message';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data[this.keyMessage];
    console.log('message', this.errorMessage);
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data[this.keyMessage];
      console.log('message1', this.errorMessage);
    });
  }

}
