import { Component, OnInit } from '@angular/core';
import { StudentService } from './studentService.service';
import { Student } from '../model/student';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isUndefined } from 'util';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: any = {};
  submitted = false;
  isUpdate = false;
  isView = JSON.parse(localStorage.getItem("isView"));

  constructor(private studentService: StudentService, private location: Location) {
    this.student = new Student();
  }

  ngOnInit() {
    let student = JSON.parse(localStorage.getItem("student"));
    if (isUndefined(student) || student == null) {
      this.student = new Student();
      this.isUpdate = false;
      this.newUser();
    } else {
      this.student = student;
      this.isUpdate = true;
    }
  }
  newUser(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save(): void {
    alert("sadkjl");
    this.studentService.saveStudent(this.student)
  }

  update(): void {
    this.studentService.updateStudent(this.student)
  }
editStudent() {
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
