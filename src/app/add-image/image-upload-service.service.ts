import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpRequest } from '@angular/common/http'
import { Router } from '@angular/router';

let headers = new Headers();
headers.append('enctype', 'multipart/form-data');
headers.append('Accept', 'application/json');
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})
export class ImageUploadServiceService {

  private upload_image_url = 'http://localhost:8080/api/image';  // URL to web API

  constructor(private http: Http, private router: Router) { }

  pushFileToStorage(file: File) {

    let formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.upload_image_url + '/upload', formData, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });

  }

}
