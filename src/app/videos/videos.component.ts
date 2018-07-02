import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Video } from '../model/Video';
import { VideoListService } from '../videos-list/videos-list-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];
  constructor(private videoListService: VideoListService, private router: Router, private location: Location,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getVideos()
  }

  getVideos() {
    this.videoListService.getVideos()
      .subscribe(data => {
        this.videos = data;
        console.log(data);
      });
  }

  getTrustedURL(url : any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
