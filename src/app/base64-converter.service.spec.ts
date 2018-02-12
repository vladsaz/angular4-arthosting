import { TestBed, inject } from '@angular/core/testing';

import { Base64ConverterService } from './base64-converter.service';

describe('Base64ConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Base64ConverterService]
    });
  });

  it('should be created', inject([Base64ConverterService], (service: Base64ConverterService) => {
    expect(service).toBeTruthy();
  }));
});
