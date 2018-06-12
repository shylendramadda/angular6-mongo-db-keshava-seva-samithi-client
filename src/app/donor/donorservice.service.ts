import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Donor } from 'src/app/model/donor';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class DonorService {

  private donor_url = 'http://localhost:8080/api/donor';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  addDonor(donor: Donor) {
    return this.http.post(this.donor_url, donor, options)
      .subscribe(data => {
        console.log(data);
        if (data.status == 200) {
          alert('Added donor successfully');
          // this.router.navigate(['donorList']);
          this.location.back();
        } else {
          alert('Something went wrong try again');
        }
      });
  }

  updateDonor(donor: Donor) {
    return this.http.put(this.donor_url, donor, options)
      .subscribe(data => {
        console.log(data);
        if (data.status == 200) {
          alert('Updated donor successfully');
          this.location.back();
        } else {
          alert('Something went wrong try again');
        }
      });
  }

}