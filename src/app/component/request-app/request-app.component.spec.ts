import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAppComponent } from './request-app.component';

describe('RequestAppComponent', () => {
  let component: RequestAppComponent;
  let fixture: ComponentFixture<RequestAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
