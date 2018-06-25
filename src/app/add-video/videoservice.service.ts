import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Video } from '../model/Video';

let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
let options = new RequestOptions({ headers: headers });

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {

  private video_url = 'http://localhost:8080/api/video';  // URL to web API
  constructor(private http: Http, private router: Router, private location: Location) { }

  saveVideo(video: Video) {
    return this.http.post(this.video_url, video, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
          this.router.navigate(['adminHome/videos']);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }

  updateVideo(video: Video) {
    return this.http.put(this.video_url, video, options)
      .subscribe(data => {
        console.log(data);
        if (data.json().code == 200) {
          alert(data.json().message);
          // this.location.back();
          this.router.navigate(['adminHome/videos']);
        } else {
          alert(data.json().message + ' Error code: ' + data.json().code);
        }
      });
  }
}
