import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html',
  styleUrls: ['./card-request.component.scss']
})
export class CardRequestComponent implements OnInit {
cardRequest : any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.cardRequest = this.requestService.getRequests().filter(element => element.RequestType === "Card Request")
  }

}
