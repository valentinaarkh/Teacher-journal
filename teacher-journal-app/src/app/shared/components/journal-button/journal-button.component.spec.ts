import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalButtonComponent } from './journal-button.component';

describe('JournalButtonComponent', () => {
  let component: JournalButtonComponent;
  let fixture: ComponentFixture<JournalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
