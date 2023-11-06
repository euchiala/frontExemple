import { TestBed } from '@angular/core/testing';

import { CustomerSubscriptionService } from './customer-subscription.service';

describe('CustomerSubscriptionService', () => {
  let service: CustomerSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
