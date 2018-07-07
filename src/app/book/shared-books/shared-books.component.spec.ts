import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBooksComponent } from './shared-books.component';

describe('SharedBooksComponent', () => {
  let component: SharedBooksComponent;
  let fixture: ComponentFixture<SharedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
