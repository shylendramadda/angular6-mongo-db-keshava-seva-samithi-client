import { Component, OnInit } from '@angular/core';
import { StudentListService } from './studentservice.service';
import { Route } from '@angular/compiler/src/core';
import { Student } from '../model/student';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgProgress } from '../../../node_modules/@ngx-progressbar/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  student: Student;
  students: Student[];

  constructor(private studentlistService: StudentListService, private router: Router, private location: Location,
    public ngProgress: NgProgress) { }

  ngOnInit() {
    this.ngProgress.start();
    this.getStudents();
  }

    getStudents() {
    this.studentlistService.getStudents()
      .subscribe(data => {
        if (data != null && data.length != 0) {
          this.students = data;
          this.ngProgress.complete();
        } else {
          this.ngProgress.complete();
          alert('No Students found. Click on add to register a donor');
        }
        console.log(data);
      });
  }

  viewStudent(student: Student): void {
    this.studentlistService.getStudent(student)
      .subscribe(data => {
        console.log(data);
        this.student = data;
        this.router.navigate(['student']);
      });
  }

  addStudents(): void {
    localStorage.removeItem("student");
    this.router.navigate(['student']);
  };

  goBack(): void {
    this.location.back();
  }

  editStudent(student: Student ,isView : string): void {
    localStorage.setItem("student", JSON.stringify(student));
    localStorage.setItem("isView", isView);
    this.router.navigate(['student']);
  }

  deleteStudent(student: Student): void {
    if (confirm("Are you sure want to delete " + student.sname + " " + student.admissionNumber)) {
      this.studentlistService.deleteStudent(student)
      this.router.navigate(['studentList']);
    }
  }

  searchDonor(inputString: string): void {
    if (inputString != null && inputString) {
      this.studentlistService.getStudentByInput(inputString)
        .subscribe(data => {
          console.log(data);
          if (data != null && data.length != 0) {
            this.students = data;
          } else {
            alert('No student found with given type');
          }
        });
    } else {
      alert('Please enter some text');
    }
  }

  downloadPdf() {
    this.studentlistService.downloadPdf();
  }
}
