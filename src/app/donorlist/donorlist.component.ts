import { Location, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { DonorListService } from './donorlistservice.service';
import { Donor } from '../model/donor';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})

export class DonorlistComponent implements OnInit {

  donor: Donor;
  donors: Donor[];

  constructor(private donorlistService: DonorListService, private router: Router, private location: Location,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.ngProgress.start();
    this.getDonors();
  }

  getDonors() {
    this.donorlistService.getDonors()
      .subscribe(data => {
        if (data != null && data.length != 0) {
          this.donors = data;
          this.ngProgress.complete();
        } else {
          this.ngProgress.complete();
          alert('No donors found. Click on add to register a donor');
        }
        console.log(data);
      });
  }

  addDonor(): void {
    localStorage.removeItem("donor");
    localStorage.setItem("isView", 'false');
    this.router.navigate(['donor']);
  };

  goBack(): void {
    this.location.back();
  }

  editDonor(donor: Donor, isView: string): void {
    // let date = parseInt(donor.eventDate.toString());
    // var datePipe = new DatePipe("en-us");
    // // var newDate = new Date(date);
    // let d = datePipe.transform(new Date(date), 'yyyy-MM-dd');
    // donor.eventDate = new Date(d);

    localStorage.setItem("donor", JSON.stringify(donor));
    localStorage.setItem("isView", isView);
    this.router.navigate(['donor']);
  }

  deleteDonor(donor: Donor): void {
    if (confirm("Are you sure want to delete " + donor.surname + " " + donor.lastName)) {
      this.donorlistService.deleteDonor(donor);
    }
  }

  searchDonor(inputString: string): void {
    if (inputString != null && inputString) {
      this.donorlistService.getDonorByInput(inputString)
        .subscribe(data => {
          console.log(data);
          if (data != null && data.length != 0) {
            this.donors = data;
          } else {
            alert('No donors found with given query');
          }
        });
    } else {
      alert('Please enter some text');
    }
  }

  downloadPdf() {
    this.donorlistService.downloadPdf();
  }

}
