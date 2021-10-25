import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEditDialogComponent } from './mat-edit-dialog.component';

describe('MatEditDialogComponent', () => {
  let component: MatEditDialogComponent;
  let fixture: ComponentFixture<MatEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
