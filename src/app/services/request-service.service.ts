import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  public getRequests() {
    return [
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/16/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/16/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/23/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/22/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/23/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/16/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/21/2021'), Status: "Ongoing" },
      { RequestType: "Cheque Book", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/22/2021'), Status: "Ongoing" },
      { RequestType: "Card Request", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/23/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/23/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/16/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/21/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('01/23/2021'), Status: "Ongoing" },
      { RequestType: "Dispense Error", DateAndTime: new Date('01/16/2021'), RequestChannel: "Actions", Date: new Date('02/16/2021'), Status: "Ongoing" },
    ];
  }
}