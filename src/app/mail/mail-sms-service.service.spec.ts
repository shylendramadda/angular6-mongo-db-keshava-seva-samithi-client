import { TestBed, inject } from '@angular/core/testing';

import { MailSmsServiceService } from './mail-sms-service.service';

describe('MailSmsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailSmsServiceService]
    });
  });

  it('should be created', inject([MailSmsServiceService], (service: MailSmsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
