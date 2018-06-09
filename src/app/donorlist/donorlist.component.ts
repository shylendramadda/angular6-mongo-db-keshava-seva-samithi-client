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

  donors: Donor[];

  constructor(private donorlistService: DonorListService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getDonors();
  }

  getDonors(){
    this.donorlistService.getDonors()
      .subscribe( data => {
        this.donors = data;
        console.log(data);
      });
  }

  addDonor(): void {
    this.router.navigate(['donor']);
  };

  goBack(): void {
    this.location.back();
  }

}
