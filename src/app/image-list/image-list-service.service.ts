import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageFile } from '../model/ImageFile';
import { RequestOptions, Headers, Http } from '@angular/http';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})
export class ImageListServiceService {

  private image_url = 'http://localhost:8080/api/image';  // URL to web API
  constructor(private http: Http, private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<ImageFile[]>(this.image_url + "/getAll");
  }

  deleteImage(image: ImageFile) {
    return this.http.delete(this.image_url + '/' + image.uid, options)
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
