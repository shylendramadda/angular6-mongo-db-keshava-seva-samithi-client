import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

let headers = new Headers();
headers.append('Content-Type', 'application/json;charset=UTF-8');
headers.append('Accept', 'application/pdf');
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class StudentListService {

  private student_url = 'http://localhost:8080/api/student';  // URL to web API

  constructor(private http: Http, private router: Router, private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Student[]>(this.student_url + "/");
  }
  getStudentByInput(inputString: string) {
    return this.httpClient.get<Student[]>(this.student_url + "/search/" + inputString);
  }

  getStudent(student: Student) {
    return this.httpClient.get<Student>(this.student_url + "/" + student.uid);
  }

  addStudents(student: Student) {
    return this.http.post(this.student_url, student, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  deleteStudent(student: Student) {
    return this.http.delete(this.student_url + '/' + student.id, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
          this.getStudents();
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  downloadPdf() {
    this.http.get(this.student_url + "/downloadPdf", { responseType: ResponseContentType.ArrayBuffer })
      .subscribe(data => {
        console.log(data);
        var blob = new Blob([data.blob()], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }
}