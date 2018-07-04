import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Email } from '../model/email';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})
export class MailSmsServiceService {

  private mail_url = 'http://localhost:8080/api/mail';  // URL to web API

  constructor(private http: Http, private router: Router) { }

  sendMail(email :  Email) {
    return this.http.post(this.mail_url, email, options)
      .subscribe(data => {
        if (data.json().code == 200) {
          console.log(data);
          alert(data.json().message);
          // this.router.navigate(['adminHome/mailOrMessage']);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }

      });
  }
}
