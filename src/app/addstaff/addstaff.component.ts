import { Component, OnInit } from '@angular/core';
import { StaffService } from './staffService.service';
import { Staff } from '../model/staff';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';
import { ImageFile } from '../model/ImageFile';
import { ImageUploadServiceService } from '../add-image/image-upload-service.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  staff: any = {};
  isUpdate = false;
  submitted = false;
  isView = JSON.parse(localStorage.getItem("isView"));
  image: ImageFile;
  currentFileUpload: File;

  constructor(private staffService: StaffService, private location: Location) {
    this.staff = new Staff();
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
  }
  
  
  newUser(): void {
  //  this.submitted = false;
    this.staff = new Staff();
  }

  save(): void {
    this.staff.frmDate = this.convertDateToString(this.staff.frmDate);
    this.staffService.saveStaff(this.staff)
  }

  update(): void {
    this.staff.frmDate = this.convertDateToString(this.staff.frmDate);
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
  convertDateToString(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.currentFileUpload = event.target.files.item(0);
      this.staffService.photo = this.currentFileUpload;
    } else {
      alert('invalid format!');
    }
  }

}
