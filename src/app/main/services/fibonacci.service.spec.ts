/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FibonacciService } from './fibonacci.service';

describe('Service: Fibonacci', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FibonacciService]
    });
  });

  it('should ...', inject([FibonacciService], (service: FibonacciService) => {
    expect(service).toBeTruthy();
  }));
});
