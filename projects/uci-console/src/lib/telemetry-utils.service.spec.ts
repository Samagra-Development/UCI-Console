import { TestBed } from '@angular/core/testing';

import { TelemetryUtilsService } from './telemetry-utils.service';

describe('TelemetryUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelemetryUtilsService = TestBed.get(TelemetryUtilsService);
    expect(service).toBeTruthy();
  });
});
