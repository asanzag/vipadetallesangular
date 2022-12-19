import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraEditComponent } from './figura-edit.component';

describe('FiguraEditComponent', () => {
  let component: FiguraEditComponent;
  let fixture: ComponentFixture<FiguraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguraEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
