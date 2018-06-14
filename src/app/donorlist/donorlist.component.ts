import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { DonorListService } from './donorlistservice.service';
import { Donor } from '../model/donor';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})

export class DonorlistComponent implements OnInit {

  donor: Donor;
  donors: Donor[];

  constructor(private donorlistService: DonorListService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getDonors();
  }

  getDonors() {
    this.donorlistService.getDonors()
      .subscribe(data => {
        this.donors = data;
        console.log(data);
      });
  }

  viewDoner(donor: Donor): void {
    this.donorlistService.getDonor(donor)
      .subscribe(data => {
        console.log(data);
        this.donor = data;
        this.router.navigate(['donor']);
      });
  }

  addDonor(): void {
    localStorage.removeItem("donor");
    this.router.navigate(['donor']);
  };

  goBack(): void {
    this.location.back();
  }

  editDonor(donor: Donor): void {
    localStorage.setItem("donor", JSON.stringify(donor));
    this.router.navigate(['donor']);
  }

  deleteDonor(donor: Donor): void {
    if (confirm("Are you sure want to delete " + donor.surname + " " + donor.lastName)) {
      this.donorlistService.deleteDonor(donor)
      this.router.navigate(['donorList']);
    }
  }

}
