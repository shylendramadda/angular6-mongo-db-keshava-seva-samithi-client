import { Component, OnInit } from '@angular/core';
import { StaffService } from './staffService.service';
import { Staff } from '../model/staff';
import { isUndefined } from 'util';
import { Location } from '@angular/common';
import { ImageFile } from '../model/ImageFile';
import { ImageUploadServiceService } from '../add-image/image-upload-service.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  staff: any = {};
  submitted = false;
  isUpdate = false;
  isView = JSON.parse(localStorage.getItem("isView"));

  image: ImageFile;
  description: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private uploadService: ImageUploadServiceService,private staffService: StaffService, private location: Location) {
    this.staff = new Staff();
    this.image = new ImageFile();
  }

  ngOnInit() {
    let staff = JSON.parse(localStorage.getItem("staff"));
    if (isUndefined(staff) || staff == null) {
      this.staff = new Staff();
      this.isUpdate = false;
      this.newUser();
    } else {
      this.staff = staff;
      this.isUpdate = true;
    }
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
      this.selectedFiles= event.target.files;
      // this.currentFileUpload = this.selectedFiles.item(0);
      this.staff.photoFile = this.selectedFiles.item(0);
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

  newUser(): void {
    this.submitted = false;
    this.staff = new Staff();
  }

  save(): void {
    this.staffService.saveStaff(this.staff)
  }

  update(): void {
    this.staffService.updateStaff(this.staff)
  }
  editStaff() {
    this.isView = false;
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
