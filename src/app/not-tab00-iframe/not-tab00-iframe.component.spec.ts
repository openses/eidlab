import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTab00IframeComponent } from './not-tab00-iframe.component';

describe('NotTab00IframeComponent', () => {
  let component: NotTab00IframeComponent;
  let fixture: ComponentFixture<NotTab00IframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotTab00IframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotTab00IframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
