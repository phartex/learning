import { AfterViewInit, Component, ViewChild, OnInit, Injectable, Input} from '@angular/core';
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
  selector: 'app-reusable-data',
  templateUrl: './reusable-data.component.html',
  styleUrls: ['./reusable-data.component.scss']
})
export class ReusableDataComponent implements OnInit {
  @Input() data? : any;
  public filterForm!: FormGroup;
 
  formValue: any;
  displayedColumns: string[] = [

    'RequestType',
    'DateAndTime',
    'RequestChannel',
    'Date',
    'Status',
  ];

  dataSource: any;

  @ViewChild(MatPaginator, { static: true })

  paginator!: MatPaginator;

  ngOnInit(): void {
    this.createFilterForm();
   this.dataSource = new MatTableDataSource<requestModel>(this.data);
   this.filterForm.valueChanges.subscribe((val)=>{
    if(this.filterForm.valid){
      this.applyDateFilter();
    }
   });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public modal: MatDialog,private requestService: RequestService, private fb: FormBuilder) { }



  createFilterForm() {
    this.filterForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
     
    });
  };

  applyDateFilter() {
    console.log(this.filterForm.value);
    this.dataSource.data = this.requestService.getRequests();
    this.dataSource.data = this.dataSource.data.filter((e: any)=> e.Date >= this.filterForm.value.fromDate && e.Date <= this.filterForm.value.toDate);

  };

}
