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
    this.donationService.saveDonation(this.donation);
  }

}
