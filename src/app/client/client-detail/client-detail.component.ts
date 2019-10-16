import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {

  isActivated: boolean;
  private activatedSub: Subscription;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.activatedSub =
      this.clientService.activatedEmitter.subscribe(activated => {
        this.isActivated = activated;
      });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
