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
    { id: 1, name: 'pos' },
    { id: 2, name: 'gtb' },
    { id: 3, name: 'interbank' },
    { id: 4, name: 'Nibss' },

  ]

  transactionHistory = [
    { id: 1, narration: 'pos transaction' },
    { id: 2, narration: 'gtb transaction' },
    { id: 3, narration: 'interbank transaction'},
    { id: 4, narration: 'Nibss transaction' },
    { id: 5, narration: 'gtb transaction' },
    { id: 6, narration: 'interbank transaction' },
    { id: 7, narration: 'Nibss transaction' },
    { id: 8, narration: 'pos transaction' },
    
    { id: 9, narration: 'gtb transaction' },
    { id: 10, narration: 'pos transaction' },
    
    { id: 11, narration: 'gtb transaction' },
    { id: 12, narration: 'Nibss transaction' },
    
  ]
  ngOnInit(): void {
    this.selectedOption = false;
  }


  filterFunction(value: any) {
    this.selectedOption = true;
    this.selectedValue = value.name;
    if (value.name === "all") {
      this.newArray = this.transactionHistory
    } else {
      this.newArray = this.transactionHistory.filter(x => x.narration.split(" ")[0] === value.name);

      console.log(this.newArray);
    }

 
  }

}
