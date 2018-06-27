import { Component, OnInit } from '@angular/core';
import { CommitteeMemberListService } from './committeeMemberListService.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommitteeMember } from '../model/committeeMember';

@Component({
  selector: 'app-committeememberlist',
  templateUrl: './committeememberlist.component.html',
  styleUrls: ['./committeememberlist.component.css']
})
export class CommitteememberlistComponent implements OnInit {
  committeeMember: CommitteeMember;
  committeeMembers: CommitteeMember[];
  constructor(private committeeMemberListService: CommitteeMemberListService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getCommitteeMembers();
  }
  getCommitteeMembers() {
    this.committeeMemberListService.getCommitteeMembers()
      .subscribe(data => {
        this.committeeMembers = data;
        console.log(data);
      });
  }

  viewCommitteeMember(committeeMember: CommitteeMember): void {
    this.committeeMemberListService.getCommitteeMember(committeeMember)
      .subscribe(data => {
        console.log(data);
        this.committeeMember = data;
        this.router.navigate(['committeeMember']);
      });
  }

  addCommitteeMembers(): void {
    localStorage.removeItem("committeeMember");
    this.router.navigate(['committeeMember']);
  };

  goBack(): void {
    this.location.back();
  }

  editCommitteeMember(committeeMember: CommitteeMember): void {
    localStorage.setItem("committeeMember", JSON.stringify(committeeMember));
    this.router.navigate(['committeeMember']);
  }

  deleteCommitteeMember(committeeMember: CommitteeMember): void {
    if (confirm("Are you sure want to delete " + committeeMember.surName + " " + committeeMember.lastName)) {
      this.committeeMemberListService.deleteCommitteeMember(committeeMember);
    }
  }
}
