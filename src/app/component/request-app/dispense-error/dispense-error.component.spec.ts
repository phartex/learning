import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseErrorComponent } from './dispense-error.component';

describe('DispenseErrorComponent', () => {
  let component: DispenseErrorComponent;
  let fixture: ComponentFixture<DispenseErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenseErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
