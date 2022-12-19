import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraNewComponent } from './figura-new.component';

describe('FiguraNewComponent', () => {
  let component: FiguraNewComponent;
  let fixture: ComponentFixture<FiguraNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguraNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguraNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
