import { Component, OnInit } from '@angular/core';
import { CommitteeMemberService } from './committeememberservice.service';
import { Location } from '@angular/common';
import { isUndefined } from 'util';
import { CommitteeMember } from '../model/committeeMember';

@Component({
  selector: 'app-addcommitteemember',
  templateUrl: './addcommitteemember.component.html',
  styleUrls: ['./addcommitteemember.component.css']
})
export class AddcommitteememberComponent implements OnInit {
  committeeMember: any = {};
  submitted = false;
  isUpdate = false;
  isView = JSON.parse(localStorage.getItem("isView"));

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
    this.submitted = false;
    this.committeeMember = new CommitteeMember();
  }

  save(): void {
    this.committeeMemberService.saveCommitteeMember(this.committeeMember)
  }

  update(): void {
    this.committeeMemberService.updateCommitteeMember(this.committeeMember)
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


