import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-cheque-book',
  templateUrl: './cheque-book.component.html',
  styleUrls: ['./cheque-book.component.scss']
})
export class ChequeBookComponent implements OnInit {
  chequeRequest: any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.chequeRequest = this.requestService.getRequests().filter(element => element.RequestType === "Cheque Book");
  }

}
