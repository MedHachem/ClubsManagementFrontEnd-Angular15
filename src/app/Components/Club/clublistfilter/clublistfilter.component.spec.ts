import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClublistfilterComponent } from './clublistfilter.component';

describe('ClublistfilterComponent', () => {
  let component: ClublistfilterComponent;
  let fixture: ComponentFixture<ClublistfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClublistfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClublistfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
