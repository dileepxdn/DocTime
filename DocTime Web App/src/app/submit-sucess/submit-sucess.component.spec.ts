import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSucessComponent } from './submit-sucess.component';

describe('SubmitSucessComponent', () => {
  let component: SubmitSucessComponent;
  let fixture: ComponentFixture<SubmitSucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitSucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
