import { Component, OnInit } from '@angular/core';
import { SMS } from '../model/sms';
import { MailSmsServiceService } from '../mail/mail-sms-service.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  sms = new SMS;
  submitted = false;
  constructor(private mailSMSService: MailSmsServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.sendSMS(this.sms);
  }

  sendSMS(sms: SMS): void {
    this.submitted = false;
    if (sms.toWhome != null && sms.toWhome) {
      this.mailSMSService.sendSMS(this.sms);
    } else {
      alert('Please select users to send');
    }
  }

}
