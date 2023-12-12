import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventslistfilterComponent } from './eventslistfilter.component';

describe('EventslistfilterComponent', () => {
  let component: EventslistfilterComponent;
  let fixture: ComponentFixture<EventslistfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventslistfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventslistfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
