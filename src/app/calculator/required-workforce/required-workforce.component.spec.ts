import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredWorkforceComponent } from './required-workforce.component';

describe('RequiredWorkforceComponent', () => {
  let component: RequiredWorkforceComponent;
  let fixture: ComponentFixture<RequiredWorkforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredWorkforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredWorkforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
