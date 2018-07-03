import { Component, OnInit } from '@angular/core';
import { Donor } from '../model/donor';
import { DonorListService } from '../donorlist/donorlistservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mail-message',
  templateUrl: './mail-message.component.html',
  styleUrls: ['./mail-message.component.css']
})
export class MailMessageComponent implements OnInit {

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

  goBack(): void {
    this.location.back();
  }

}
