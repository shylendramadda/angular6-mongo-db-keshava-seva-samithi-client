import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Donor } from 'src/app/model/donor';
import { Donation } from '../model/donation';
import { HttpHeaders, HttpClient } from '@angular/common/http'

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
    providedIn: 'root'
})

export class DonationService {

    private donation_url = 'http://localhost:8080/api/donation';  // URL to web API
    constructor(private http: Http, private router: Router, private location: Location, private httpClient: HttpClient) { }

    saveDonation(donation: Donation) {
        return this.http.post(this.donation_url, donation, options)
            .subscribe(data => {
                console.log(data);
                if (data.json().code == 200) {
                    alert(data.json().message);
                    this.location.back();
                } else {
                    alert(data.json().message + ' Error code: ' + data.json().code);
                }
            });
    }

    getDonations(donorUid: String) {
        return this.httpClient.get<Donation[]>(this.donation_url + "/" + donorUid);
    }

}