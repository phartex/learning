import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-dispense-error',
  templateUrl: './dispense-error.component.html',
  styleUrls: ['./dispense-error.component.scss']
})
export class DispenseErrorComponent implements OnInit {
  dispenseError: any;
  
  constructor(private requestService: RequestService) { }

  
  ngOnInit(): void {
    this.dispenseError = this.requestService.getRequests().filter(element => element.RequestType === "Dispense Error");
  }

}
