import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

let headers = new Headers();
headers.append('enctype', 'multipart/form-data');
headers.append('Accept', 'application/json');
//let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class StaffService {
  photo: File;
  private staff_url = 'http://localhost:8080/api/staff';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveStaff(staff: Staff) {

    return this.http.post(this.staff_url, staff, options)
      .subscribe(data => {
        console.log(data);

        if (data.json().code == 200) {
          if (this.photo != null) {
            this.uploadPhoto(data.json().entity.uid);
          } else {
            alert(data.json().message);
            this.location.back();
          }
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
          if (this.photo != null) {
            this.uploadPhoto(data.json().entity.uid);
          } else {
            alert(data.json().message);
            this.location.back();
          }
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  uploadPhoto(staffId: any) {

    let formData: FormData = new FormData();
    formData.append('file', this.photo, this.photo.name);
    formData.append('staffId', staffId);

    this.http.post(this.staff_url + '/upload', formData, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert('Staff member and ' + data.json().message);
          this.location.back();
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

}