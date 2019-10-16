import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../service/client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: ActivatedRoute, private clientService: ClientService) { }

  clients = [{name: 'John'}, {name: 'Snow'}, {name: 'Southerland'}];

  @ViewChild('f', {static: true})
  form: NgForm;

  ngOnInit() {
    //const id = this.router.children[0].snapshot.params['id'];
    //console.log('client.id', id);
  }

  onActivate() {
    this.clientService.activatedEmitter.next(true);
    this.form.form.patchValue({
      petData : {
        petName: 'Belinha Ueda'
      }
    });
    /*
    this.form.setValue({
      petData : {
        petName: 'Bono Ueda'
      }
    });
    */
    console.log('activating client service component');
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
