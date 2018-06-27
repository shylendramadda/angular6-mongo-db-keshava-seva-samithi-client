import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class StaffService {

  private staff_url = 'http://localhost:8080/api/staff';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveStaff(staff: Staff) {
    return this.http.post(this.staff_url, staff, options)
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

  updateStaff(staff: Staff) {
    return this.http.put(this.staff_url, staff, options)
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