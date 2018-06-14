import { Component, OnInit } from '@angular/core';
import { Donor } from '../model/donor';
import { DonorService } from './donorservice.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donor : any = {};
  submitted = false;
  isUpdate = false;

  constructor(private donorService: DonorService, private location: Location) {
    this.donor = new Donor();
   }

  ngOnInit() {
    let donor = JSON.parse(localStorage.getItem("donor"));
    if (isUndefined(donor) || donor == null) {
      this.donor = new Donor();
      this.isUpdate = false;
      this.newUser();
    } else {
      this.donor = donor;
      this.isUpdate = true;
    }
  }

  newUser(): void {
    this.submitted = false;
    this.donor = new Donor();
  }

  save(): void {
    this.donorService.saveDonor(this.donor)
  }

  update(): void {
    this.donorService.updateDonor(this.donor)
  }

  onSubmit() {
    this.submitted = true;
    if(this.isUpdate) {
      this.update();
    } else{
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }

}
