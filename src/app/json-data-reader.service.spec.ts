import { TestBed } from '@angular/core/testing';

import { JsonDataReaderService } from './json-data-reader.service';

describe('JsonDataReaderService', () => {
  let service: JsonDataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDataReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
