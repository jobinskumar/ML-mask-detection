import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlMaskDetectionComponent } from './ml-mask-detection.component';

describe('MlMaskDetectionComponent', () => {
  let component: MlMaskDetectionComponent;
  let fixture: ComponentFixture<MlMaskDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlMaskDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlMaskDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
