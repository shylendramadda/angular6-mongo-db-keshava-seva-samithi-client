import { Injectable } from '@angular/core';
import { Donor } from 'src/app/model/donor';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class DonorListService {

  private donor_url = 'http://localhost:8080/api/donor';  // URL to web API

  constructor(private http: Http, private router: Router, private httpClient: HttpClient) { }

  getDonors() {
    return this.httpClient.get<Donor[]>(this.donor_url + "/");
  }

  getDonor(donor: Donor) {
    return this.httpClient.get<Donor>(this.donor_url + "/" + donor.uid);
  }

  addDonor(donor: Donor) {
    return this.http.post(this.donor_url, donor, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  deleteDonor(donor: Donor) {
    return this.http.delete(this.donor_url + '/' + donor.uid, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
          window.location.reload(); // this wrong way of refreshing list need to do right thing
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

}