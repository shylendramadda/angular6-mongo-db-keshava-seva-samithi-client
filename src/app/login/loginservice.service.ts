import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private login_url = 'http://localhost:8080/api/user/login';  // URL to web API

  constructor(private http: Http, private router: Router) { }

  doLogin(user: User) {

    return this.http.post(this.login_url, user)
      .subscribe(data => {
        console.log(data);
        alert('Successfully logged in');
        this.router.navigate(['adminHome']);
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
  }

  extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || {};
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  } */

  /* doLogin(user: User): User {
    // this.http.get(this.url).
    // map((response) ⇒ response.json()).
    // subscribe((data) ⇒ console.log(data))
    return this.http.get(this.url)
      .map(response)
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  } */

  /*  private handleError(error: any): Promise<any> {
     console.error('Error', error);
     return Promise.reject(error.message || error);
   } */
}
