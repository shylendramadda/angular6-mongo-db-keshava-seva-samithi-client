import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Video } from '../model/Video';
import { VideoListService } from './videos-list-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

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

  addVideo(): void {
    localStorage.removeItem('video');
    this.router.navigate(['adminHome/videos/addVideo']);
  };

  editVideo(video: Video): void {
    localStorage.setItem("video", JSON.stringify(video));
    this.router.navigate(['adminHome/videos/addVideo']);
  }

  deleteVideo(video: Video): void {
    if (confirm("Are you sure want to delete Video " + video.id)) {
      this.videoListService.deleteVideo(video);
    }
  }

  goBack(): void {
    this.location.back();
  }

  getTrustedURL(url : any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
