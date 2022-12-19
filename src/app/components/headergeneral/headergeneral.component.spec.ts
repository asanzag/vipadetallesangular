import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadergeneralComponent } from './headergeneral.component';

describe('HeadergeneralComponent', () => {
  let component: HeadergeneralComponent;
  let fixture: ComponentFixture<HeadergeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadergeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadergeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
