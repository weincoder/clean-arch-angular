import { TestBed } from '@angular/core/testing';

import { AutenticationService } from './infraestructure/entry-points/autentication.service';

describe('AutenticationService', () => {
  let service: AutenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
