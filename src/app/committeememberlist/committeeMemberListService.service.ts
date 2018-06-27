import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommitteeMember } from '../model/committeeMember';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class CommitteeMemberListService {

  private committeeMember_url = 'http://localhost:8080/api/committeeMember';  // URL to web API

  constructor(private http: Http, private router: Router, private httpClient: HttpClient) { }

  getCommitteeMembers() {
    return this.httpClient.get<CommitteeMember[]>(this.committeeMember_url + "/");
  }

  getCommitteeMember(committeeMember: CommitteeMember) {
    return this.httpClient.get<CommitteeMember>(this.committeeMember_url + "/" + committeeMember.uid);
  }

  addCommitteeMembers(committeeMember: CommitteeMember) {
    alert("hi");
    return this.http.post(this.committeeMember_url, committeeMember, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  deleteCommitteeMember(committeeMember: CommitteeMember) {
    return this.http.delete(this.committeeMember_url + '/' + committeeMember.uid, options)
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