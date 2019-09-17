import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.children[0].snapshot.params['id'];
    console.log('client.id', id);
  }

}
