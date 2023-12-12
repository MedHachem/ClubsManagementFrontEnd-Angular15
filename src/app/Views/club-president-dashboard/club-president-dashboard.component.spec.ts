import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPresidentDashboardComponent } from './club-president-dashboard.component';

describe('ClubPresidentDashboardComponent', () => {
  let component: ClubPresidentDashboardComponent;
  let fixture: ComponentFixture<ClubPresidentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubPresidentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubPresidentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
