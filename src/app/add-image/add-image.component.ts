import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { ImageUploadServiceService } from './image-upload-service.service';
import { isUndefined } from 'util';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImageFile } from '../model/ImageFile';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  image: ImageFile;
  description: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: ImageUploadServiceService) {
    this.image = new ImageFile();
   }

  ngOnInit() {
    let image = JSON.parse(localStorage.getItem("image"));
    if (isUndefined(image) || image == null) {
      this.image = new ImageFile();
    } else {
      this.image = image;
    }
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.description);
    this.progress.percentage = 100;
    this.selectedFiles = undefined;
  }

}
