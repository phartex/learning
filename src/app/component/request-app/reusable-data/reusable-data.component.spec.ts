import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableDataComponent } from './reusable-data.component';

describe('ReusableDataComponent', () => {
  let component: ReusableDataComponent;
  let fixture: ComponentFixture<ReusableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
