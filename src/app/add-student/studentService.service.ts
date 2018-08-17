import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  photo: File;
  private student_url = 'http://localhost:8080/api/student';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveStudent(student: Student) {
    return this.http.post(this.student_url, student, options)
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

  updateStudent(student: Student) {
    return this.http.put(this.student_url, student, options)
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
  uploadPhoto(studentId: any) {
    
    let formData: FormData = new FormData();
    formData.append('file', this.photo, this.photo.name);
    formData.append('studentId', studentId);

    this.http.post(this.student_url + '/upload', formData, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert('student member and ' + data.json().message);
          this.location.back();
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

}