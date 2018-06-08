import { Component, OnInit } from '@angular/core';
import { Donor } from '../model/donor';
import { DonorService } from './donorservice.service';
import {Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donor = new Donor;
  submitted = false;
  constructor(private donorService: DonorService,
    private location: Location) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.donor = new Donor();
  }

  save(): void {
    this.donorService.create(this.donor)
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
