import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ImageListServiceService } from './image-list-service.service';
import { ImageFile } from '../model/ImageFile';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogModule } from '@angular/material/dialog';
import { ViewImageComponent } from '../view-image/view-image.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {

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

  editImage(image: ImageFile): void {
    localStorage.setItem("image", JSON.stringify(image));
    this.router.navigate(['addImage']);
  }

  deleteImage(image: ImageFile): void {
    if (confirm("Are you sure want to delete " + image.name)) {
      this.imageListService.deleteImage(image);
    }
  }

  goBack(): void {
    this.location.back();
  }
}