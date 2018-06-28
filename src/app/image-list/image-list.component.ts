import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ImageListServiceService } from './image-list-service.service';
import { ImageFile } from '../model/ImageFile';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

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

  getImages() {
    this.imageListService.getImages()
      .subscribe(data => {
        this.images = data;
        console.log(data);
      });
  }

  addImage(): void {
    // this.router.navigate(['addImage']);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
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

@Component({
  selector: 'dialog',
  templateUrl: '../add-image/add-image.component.html'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
