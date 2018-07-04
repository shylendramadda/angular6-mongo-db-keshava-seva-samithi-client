import { Component, OnInit } from '@angular/core';
import { MailSmsServiceService } from './mail-sms-service.service';
import { Email } from '../model/email';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {

  myEmail = new Email;
  submitted = false;
  constructor(private mailSMSService: MailSmsServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.sendMail(this.myEmail);
  }

  sendMail(email: Email): void {
    this.submitted = false;
    if (email.toWhome != null && email.toWhome) {
      this.mailSMSService.sendMail(this.myEmail);
    } else {
      alert('Please select users to send');
    }
  }

}
