/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiCarsService } from './apiCars.service';

describe('Service: ApiCars', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCarsService]
    });
  });

  it('should ...', inject([ApiCarsService], (service: ApiCarsService) => {
    expect(service).toBeTruthy();
  }));
});
