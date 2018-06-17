import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ImageListServiceService } from './image-list-service.service';
import { ImageFile } from '../model/ImageFile';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})


export class ImageListComponent implements OnInit {

  images: ImageFile[];

  constructor(private imageListService: ImageListServiceService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageListService.getImages()
      .subscribe(data => {
        this.images = data;
        console.log(data);
      });
  }

  addImage(): void {
    this.router.navigate(['addImage']);
  };

  goBack(): void {
    this.location.back();
  }
}
