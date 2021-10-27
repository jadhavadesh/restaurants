import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfcRestoInfoComponent } from './kfc-resto-info.component';

describe('KfcRestoInfoComponent', () => {
  let component: KfcRestoInfoComponent;
  let fixture: ComponentFixture<KfcRestoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KfcRestoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KfcRestoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
