import { Component, OnInit } from '@angular/core';
import { StudentListService } from './studentservice.service';
import { Route } from '@angular/compiler/src/core';
import { Student } from '../model/student';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  student: Student;
  students: Student[];

  constructor(private studentlistService: StudentListService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentlistService.getStudents()
      .subscribe(data => {
        this.students = data;
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

  editStudent(student: Student): void {
    localStorage.setItem("student", JSON.stringify(student));
    this.router.navigate(['student']);
  }

  deleteStudent(student: Student): void {
    if (confirm("Are you sure want to delete " + student.sname + " " + student.admissionNumber)) {
      this.studentlistService.deleteStudent(student)
      this.router.navigate(['studentList']);
    }
  }

}
