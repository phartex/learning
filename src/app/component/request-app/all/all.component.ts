import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
allRequests : any;
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.allRequests = this.requestService.getRequests();
  }

}
