import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurasComponent } from './figuras.component';

describe('FigurasComponent', () => {
  let component: FigurasComponent;
  let fixture: ComponentFixture<FigurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
