/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAllPlantsServiceService } from './GetAllPlantsService.service';

describe('Service: GetAllPlantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllPlantsServiceService]
    });
  });

  it('should ...', inject([GetAllPlantsServiceService], (service: GetAllPlantsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
