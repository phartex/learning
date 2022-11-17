import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedValue: any;
  public newArray: any;
  selectedBank?: number;
  selectedOption?: boolean;
  transactionType = [
    { id: 1, name: 'all', debit: true },
    { id: 2, name: 'pos', debit: true },
    { id: 3, name: 'gtb', debit: true },
    { id: 4, name: 'interbank', debit: true },
    { id: 5, name: 'Nibss', debit: true },
    { id: 6, name: 'inflow', debit: true },
    { id: 7, name: 'outflow', debit: true },
  ];

  inflowArray: any = [];



  transactionHistory = [
    { id: 1, narration: 'pos transaction', amountCredit: "", amountDebit: "100" },
    { id: 2, narration: 'gtb transaction', amountCredit: "", amountDebit: "100" },
    { id: 3, narration: 'interbank transaction', amountCredit: "", amountDebit: "100" },
    { id: 4, narration: 'Nibss transaction', amountCredit: "200", amountDebit: "" },
    { id: 5, narration: 'gtb transaction', amountCredit: "200", amountDebit: "" },
    { id: 6, narration: 'interbank transaction', amountCredit: "200", amountDebit: "" },
    { id: 7, narration: 'Nibss transaction', amountCredit: "200", amountDebit: "" },
    { id: 8, narration: 'pos transaction', amountCredit: "200", amountDebit: "" },
    { id: 9, narration: 'gtb transaction', amountCredit: "200", amountDebit: "" },
    { id: 10, narration: 'pos transaction', amountCredit: "200", amountDebit: "" },
    { id: 11, narration: 'gtb transaction', amountCredit: "", amountDebit: "100" },
    { id: 12, narration: 'Nibss transaction', amountCredit: "", amountDebit: "100" },
  ]
  ngOnInit(): void {
    this.selectedOption = false;
  }

 

  filterFunction(value: any) {
    this.selectedOption = true;
    this.selectedValue = value.name;

    switch (value.name) {
      case 'all':
        this.newArray = this.transactionHistory;
        break;
      case 'pos':
      case 'gtb':
      case 'interbank':
      case 'Nibss':
        this.newArray = this.transactionHistory.filter(element => element.narration.split(" ")[0] === value.name);
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'inflow':

        this.newArray = this.transactionHistory.filter(element => element.amountDebit === '');
        console.log(this.newArray)
          break;
      case 'outflow':
        console.log('outflow');
        this.newArray = this.transactionHistory.filter(element => element.amountCredit === '');
        console.log(this.newArray)
        break
      default:
        console.log('ddd');
    }
   
  }

  
}
