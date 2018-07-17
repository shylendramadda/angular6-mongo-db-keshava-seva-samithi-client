import { Component, OnInit } from '@angular/core';
import { Donor } from '../model/donor';
import { DonorService } from './donorservice.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';
import { Router } from '@angular/router';
import { DonationService } from '../add-donation/donation.service';
import { Donation } from '../model/donation';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donor: any = {};
  donations: Donation[];
  submitted = false;
  isUpdate = false;
  isView = JSON.parse(localStorage.getItem("isView"));

  constructor(private donorService: DonorService, private location: Location, private router: Router, private donationService: DonationService) {
    this.donor = new Donor();
  }

  ngOnInit() {
    let donor = JSON.parse(localStorage.getItem("donor"));

    if (isUndefined(donor) || donor == null) {
      this.donor = new Donor();
      this.isUpdate = false;
      this.submitted = false;
    } else {
      this.donor = donor;
      this.isUpdate = true;
    }

    this.getDonations();
  }

  save(): void {
    this.donor.eventDate = this.convertDateToString(this.donor.eventDate)
    this.donorService.saveDonor(this.donor)
  }

  update(): void {
    this.donor.eventDate = this.convertDateToString(this.donor.eventDate)
    this.donorService.updateDonor(this.donor)
  }

  editDonor() {
    this.isView = false;
  }

  printReceipt(donor: Donor) {
    localStorage.setItem("donor", JSON.stringify(donor));
    this.router.navigate(['adminHome/receipt']);
  }

  addDonation() {
    localStorage.setItem("donorUid", JSON.stringify(this.donor.uid));
    this.router.navigate(['donor/addDonation']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.isUpdate) {
      this.update();
    } else {
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }

  getDonations() {
    this.donationService.getDonations(this.donor.uid)
      .subscribe(data => {
        this.donations = data;
        console.log(data);
      });
  }

  convertDateToString(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

}
