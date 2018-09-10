import { TestBed, inject } from '@angular/core/testing';

import { FirestoreobjService } from './firestoreobj.service';

describe('FirestoreobjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreobjService]
    });
  });

  it('should be created', inject([FirestoreobjService], (service: FirestoreobjService) => {
    expect(service).toBeTruthy();
  }));
});
