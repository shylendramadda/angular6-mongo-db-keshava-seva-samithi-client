import { Component, OnInit } from '@angular/core';
import { CommitteeMemberService } from './committeememberservice.service';
import { Location } from '@angular/common';
import { isUndefined } from 'util';
import { CommitteeMember } from '../model/committeeMember';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImageFile } from '../model/ImageFile';

@Component({
  selector: 'app-addcommitteemember',
  templateUrl: './addcommitteemember.component.html',
  styleUrls: ['./addcommitteemember.component.css']
})
export class AddcommitteememberComponent implements OnInit {
  committeeMember: any = {};
  isUpdate = false;
  submitted = false;
  isView = JSON.parse(localStorage.getItem("isView"));
  image: ImageFile;
  currentFileUpload: File;

  constructor(private committeeMemberService: CommitteeMemberService, private location: Location) {
    this.committeeMember = new CommitteeMember();
  }

  ngOnInit() {
    let committeeMember = JSON.parse(localStorage.getItem("committeeMember"));
    if (isUndefined(committeeMember) || committeeMember == null) {
      this.committeeMember = new CommitteeMember();
      this.isUpdate = false;
      this.newUser();
    } else {
      this.committeeMember = committeeMember;
      this.isUpdate = true;
    }
  }
  newUser(): void {
    this.committeeMember = new CommitteeMember();
  }

  save(): void {
    this.committeeMember.frmDate = this.convertDateToString(this.committeeMember.frmDate);
    this.committeeMemberService.saveCommitteeMember(this.committeeMember)
  }

  update(): void {
    this.committeeMember.frmDate = this.convertDateToString(this.committeeMember.frmDate);
    this.committeeMemberService.updateCommitteeMember(this.committeeMember)
  }
  editCommitteeMember() {
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
      this.committeeMemberService.photo = this.currentFileUpload;
    } else {
      alert('invalid format!');
    }
  }
}


