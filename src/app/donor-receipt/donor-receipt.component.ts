import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { Donor } from '../model/donor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-donor-receipt',
  templateUrl: './donor-receipt.component.html',
  styleUrls: ['./donor-receipt.component.css']
})
export class DonorReceiptComponent implements OnInit {

  donor: any = {};
  today: number = Date.now();

  constructor(private location: Location) { }

  ngOnInit() {
    let donor = JSON.parse(localStorage.getItem("donor"));

    if (isUndefined(donor) || donor == null) {
      this.donor = new Donor();
    } else {
      this.donor = donor;
    }
  }

  goBack(): void {
    this.location.back();
  }

  printReceipt() : void {
    let printContents, popupWin;
    printContents = document.getElementById('receipt').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
