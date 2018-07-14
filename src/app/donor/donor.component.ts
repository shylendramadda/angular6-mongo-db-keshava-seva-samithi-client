import { Component, OnInit } from '@angular/core';
import { Donor } from '../model/donor';
import { DonorService } from './donorservice.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donor: any = {};
  submitted = false;
  isUpdate = false;
  isView = JSON.parse(localStorage.getItem("isView"));

  constructor(private donorService: DonorService, private location: Location, private router: Router) {
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
  }

  save(): void {
    this.donorService.saveDonor(this.donor)
  }

  update(): void {
    this.donorService.updateDonor(this.donor)
  }

  editDonor() {
    this.isView = false;
  }

  printReceipt(donor: Donor) {
    localStorage.setItem("donor", JSON.stringify(donor));
    this.router.navigate(['adminHome/receipt']);
  }

  addDonation(donor: Donor){
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

}
