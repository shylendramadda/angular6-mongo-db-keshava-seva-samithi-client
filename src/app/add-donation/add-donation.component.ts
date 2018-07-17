import { Component, OnInit } from '@angular/core';
import { Donation } from '../model/donation';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {

  donorUid = String;
  donation: any = {};

  constructor(private donationService: DonationService) {
    this.donation = new Donation();
  }

  ngOnInit() {
    let donorUid = JSON.parse(localStorage.getItem("donorUid"));
    if (donorUid != null) {
      this.donation.donorUid = donorUid;
    }
  }

  saveDonation() {
    this.donation.eventDate = this.convertDateToString(this.donation.eventDate)
    this.donationService.saveDonation(this.donation);
  }

  convertDateToString(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

}
