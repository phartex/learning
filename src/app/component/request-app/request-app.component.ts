import { AfterViewInit, Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RequestService } from 'src/app/services/request-service.service';

export interface requestModel {
  RequestType: string;
  DateAndTime : Date;
  RequestChannel: string;
  Date: Date;
  Status: string;
}

@Component({
  selector: 'app-request-app',
  templateUrl: './request-app.component.html',
  styleUrls: ['./request-app.component.scss']
})

@Injectable()
export class RequestAppComponent implements OnInit, AfterViewInit {
  public filterForm!: FormGroup;

  
 
  public links = [
    {
      route: 'all-request',
      routeDescription: 'All',
    },
    {
      route: 'cheque-book',
      routeDescription: 'Cheque Book',
    },
    {
      route: 'card-request',
      routeDescription: 'Card Request',
    },
    {
      route: 'dispense-error',
      routeDescription: 'Dispense Error',
    },
  ];

  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

  ngOnInit(): void {
 
  }

  ngAfterViewInit() {
   
  }


  constructor(public modal: MatDialog, private fb: FormBuilder,
    private allRequests: RequestService) { }

 
}
