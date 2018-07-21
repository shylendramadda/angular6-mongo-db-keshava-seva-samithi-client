import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from './videoservice.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';
import { Video } from '../model/Video';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video: any = {}
  submitted = false;
  isUpdate = false;

  constructor(private videoService: VideoserviceService, private location: Location) {
    this.video = new Video();
  }

  ngOnInit() {
    let video = JSON.parse(localStorage.getItem("video"));
    if (isUndefined(video) || video == null) {
      this.video = new Video();
      this.isUpdate = false;
      this.submitted = false;
    } else {
      this.video = video;
      this.isUpdate = true;
    }
  }

  save(): void {
    this.videoService.saveVideo(this.video)
  }

  update(): void {
    this.videoService.updateVideo(this.video)
  }

  onSubmit() {
    this.submitted = true;
    if (this.isUpdate) {
      this.update();
    } else {
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
