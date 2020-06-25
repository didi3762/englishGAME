import { TestBed } from '@angular/core/testing';

import { MyDBserviceService } from './my-dbservice.service';

describe('MyDBserviceService', () => {
  let service: MyDBserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDBserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
