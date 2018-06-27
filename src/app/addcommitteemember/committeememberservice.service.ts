import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommitteeMember } from '../model/committeeMember';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class CommitteeMemberService {

  private committeeMember_url = 'http://localhost:8080/api/committeeMember';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveCommitteeMember(committeeMember: CommitteeMember) {
    return this.http.post(this.committeeMember_url, committeeMember, options)
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

  updateCommitteeMember(committeeMember: CommitteeMember) {
    return this.http.put(this.committeeMember_url, committeeMember, options)
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