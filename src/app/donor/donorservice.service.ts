import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Donor } from 'src/app/model/donor';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class DonorService {

  private donor_url = 'http://localhost:8080/api/donor';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveDonor(donor: Donor) {
    return this.http.post(this.donor_url, donor, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
          // this.router.navigate(['donorList']);
          this.location.back();
        } else {
          if (data.json().message == "Donor already exists") {
            alert(data.json().message);
            localStorage.setItem("donor", JSON.stringify(data.json().entity));
            localStorage.setItem("isView", 'true');
            this.router.navigate(['donor']);
            location.reload();          
          } else {
            alert(data.json().message + ' Error code: ' + data.json().code);
          }
        }
      });
  }

  updateDonor(donor: Donor) {
    return this.http.put(this.donor_url, donor, options)
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

}