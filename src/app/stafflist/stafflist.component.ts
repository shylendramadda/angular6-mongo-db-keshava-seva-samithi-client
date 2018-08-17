import { Component, OnInit } from '@angular/core';
import { Staff } from '../model/staff';
import { StaffListService } from './stafflistservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {
  staff: Staff;
  staffs: Staff[];
  constructor(private stafflistService: StaffListService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getStaffs();
  }
  getStaffs() {
    this.stafflistService.getStaffs()
      .subscribe(data => {
        this.staffs = data;
        console.log(data);
      });
  }

  viewStaff(staff: Staff): void {
    this.stafflistService.getStaff(staff)
      .subscribe(data => {
        console.log(data);
        this.staff = data;
        this.router.navigate(['staff']);
      });
  }

  addStaffs(): void {
    localStorage.removeItem("staff");
    localStorage.setItem("isView", 'false');
    this.router.navigate(['staff']);
  };

  goBack(): void {
    this.location.back();
  }
  editStaff(staff: Staff, isView : string): void {
    localStorage.setItem("staff", JSON.stringify(staff));
    localStorage.setItem("isView", isView);
    this.router.navigate(['staff']);
  }

  deleteStaff(staff: Staff): void {
    if (confirm("Are you sure want to delete " + staff.surName + " " + staff.lastName)) {
      this.stafflistService.deleteStaff(staff);
    }
  }
}
