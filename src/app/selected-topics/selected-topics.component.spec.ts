import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTopicsComponent } from './selected-topics.component';

describe('SelectedTopicsComponent', () => {
  let component: SelectedTopicsComponent;
  let fixture: ComponentFixture<SelectedTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedTopicsComponent]
    });
    fixture = TestBed.createComponent(SelectedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
