import { ComponentFixture, TestBed } from '@angular/core/testing';

import { disenosComponent } from './disenos.component';

describe('disenosComponent', () => {
  let component: disenosComponent;
  let fixture: ComponentFixture<disenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ disenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(disenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
