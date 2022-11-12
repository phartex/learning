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
import { RequestServiceService } from 'src/app/services/request-service.service';

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
  formValue: any;
  displayedColumns: string[] = [

    'RequestType',
    'DateAndTime',
    'RequestChannel',
    'Date',
    'Status',
  ];
  dataSource = new MatTableDataSource<requestModel>(this.allRequests.getRequests());

  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

  ngOnInit(): void {
    this.createFilterForm();
    this.filterForm.valueChanges.subscribe((val)=>{
      if(this.filterForm.valid){
        this.applyDateFilter();
      }
     });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(public modal: MatDialog, private fb: FormBuilder,
    private allRequests: RequestServiceService) { }

  createFilterForm() {
    this.filterForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],

    });
  };

  applyDateFilter() {
    console.log(this.filterForm.value);
    this.dataSource.data = this.allRequests.getRequests();
    this.dataSource.data = this.dataSource.data.filter(e=> e.Date >= this.filterForm.value.fromDate && e.Date <= this.filterForm.value.toDate);

  };

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
  }

  register(){
    this.formValue = this.filterForm.value
    console.log('form submitted now')
    console.log(this.formValue);
  }
}
