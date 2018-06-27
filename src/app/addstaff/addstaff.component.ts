import { Component, OnInit } from '@angular/core';
import { StaffService } from './staffService.service';
import { Staff } from '../model/staff';
import { isUndefined } from 'util';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  staff : any = {};
  submitted = false;
  isUpdate = false;

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
    this.submitted = false;
    this.staff = new Staff();
  }

  save(): void {
    this.staffService.saveStaff(this.staff)
  }

  update(): void {
    this.staffService.updateStaff(this.staff)
  }

  onSubmit() {
    this.submitted = true;
    if(this.isUpdate) {
      this.update();
    } else{
      this.save();
    }
  }

  goBack(): void {
    this.location.back();
  }

}
