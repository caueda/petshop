import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log('Pet initialized');
    const id = this.router.snapshot.params['id'];
    console.log('pet.id', id);
    this.router.queryParams.subscribe((params: Params) => {
      const id = this.router.snapshot.params['id'];
      console.log('pet.id from subscribe', id);
    });
  }

}
