import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ImageListServiceService } from '../image-list/image-list-service.service';
import { ImageFile } from '../model/ImageFile';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogModule } from '@angular/material/dialog';
import { ViewImageComponent } from '../view-image/view-image.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: ImageFile[];
  animal: string;
  name: string;

  constructor(private imageListService: ImageListServiceService, private router: Router, private location: Location
    , private dialog: MatDialog) { }

  ngOnInit() {
    this.getImages();
  }

  viewImage(imageFile: ImageFile): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = imageFile;

    const dialogRef = this.dialog.open(ViewImageComponent,
      dialogConfig);

    /* dialogRef.afterClosed().subscribe(
        val => console.log("Dialog output:", val)
    ); */

  }

  getImages() {
    this.imageListService.getImages()
      .subscribe(data => {
        this.images = data;
        console.log(data);
      });
  }

}
