import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private login_url = 'http://localhost:8080/api/user/login';  // URL to web API

  constructor(private http: Http, private router: Router) { }

  doLogin(user: User) {

    return this.http.post(this.login_url, user, options)
      .subscribe(data => {
        if (data.json().code == 200) {
          console.log(data);
          alert(data.json().message);
          this.router.navigate(['adminHome']);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
          this.router.navigate(['login']);
        }

      });
  }


  /* doLogin(user: User): Promise<User> {
    return this.http.post(this.url, user, this.options)
      .toPromise()
      .then(response => console.log(response.json() as User))
      .catch(this.handleError);
  } */

  /* doLogin(user: User): Observable<User> {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, user, options)
      .pipe(map(user => this.extractData))
      .catch(this.handleErrorObservable);
  } */

  /*  extractData(res: Response) {
     let body = res.json();
     console.log(body)
     return body || {};
   }
 
   handleErrorObservable(error: Response | any) {
     console.error(error.message || error);
     return Observable.throw(error.message || error);
   } */
}
