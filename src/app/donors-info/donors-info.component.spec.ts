import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsInfoComponent } from './donors-info.component';

describe('DonorsInfoComponent', () => {
  let component: DonorsInfoComponent;
  let fixture: ComponentFixture<DonorsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
