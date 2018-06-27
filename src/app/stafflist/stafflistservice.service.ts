import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class StaffListService{

  private staff_url = 'http://localhost:8080/api/staff';  // URL to web API

  constructor(private http: Http, private router: Router, private httpClient: HttpClient) { }

  getStaffs() {
    return this.httpClient.get<Staff[]>(this.staff_url + "/");
  }

  getStaff(staff: Staff) {
    return this.httpClient.get<Staff>(this.staff_url + "/" + staff.uid);
  }

  addStaffs(staff: Staff) {
    return this.http.post(this.staff_url, staff, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  deleteStaff(staff: Staff) {
    return this.http.delete(this.staff_url + '/' + staff.uid, options)
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