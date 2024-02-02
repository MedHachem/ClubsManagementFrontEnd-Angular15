import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Views/login/login.component';
import { RegistrationComponent } from './Views/registration/registration.component';
import { AdminDashboardComponent } from './Views/admin-dashboard/admin-dashboard.component';
import { ClubPresidentDashboardComponent } from './Views/club-president-dashboard/club-president-dashboard.component';
import { MatTableModule } from '@angular/material/table'
import { MatCard, MatCardModule, } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './Components/footer/footer.component';
import { ClubDashboardComponent } from './Components/club-dashboard/club-dashboard.component';
import { MyEventsComponent } from './Components/my-events/my-events.component';
import { NewEventComponent } from './Components/new-event/new-event.component';
import { HomeComponent } from './Views/home/home.component';
import { OverviewAdminComponent } from './Components/overview-admin/overview-admin.component';
import { EventsComponent } from './Components/events/events.component';
import { ClubsComponent } from './Components/clubs/clubs.component';
import { FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserdetailsComponent } from './Components/Users/userdetails/userdetails.component';
import { AddUserComponent } from './Components/Users/add-user/add-user.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { ListfilterComponent } from './Components/Users/listfilter/listfilter.component';
import { EventslistfilterComponent } from './Components/eventslistfilter/eventslistfilter.component';
import { AddclubComponent } from './Components/Club/addclub/addclub.component';
import { ClublistfilterComponent } from './Components/Club/clublistfilter/clublistfilter.component';
import { ClubComponent } from './Components/Club/club/club.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { FindEventsComponent } from './Components/find-events/find-events.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ClubdetailsComponent } from './Components/Club/clubdetails/clubdetails.component';
import { EventdetailsComponent } from './Components/eventdetails/eventdetails.component';
import { AddMembreComponent } from './Components/Membre/add-membre/add-membre.component';
import { MembresComponent } from './Components/Membre/membres/membres.component';
import { ListMembresComponent } from './Components/Membre/list-membres/list-membres.component';
import { UpdateuserComponent } from './Components/Users/updateuser/updateuser.component';
import { UpdateClubComponent } from './Components/Club/update-club/update-club.component';
import { UpdateventComponent } from './Components/updatevent/updatevent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminDashboardComponent,
    ClubPresidentDashboardComponent,
    FooterComponent,
    ClubDashboardComponent,
    MyEventsComponent,
    NewEventComponent,
    HomeComponent,
    OverviewAdminComponent,
    EventsComponent,
    ClubsComponent,
    UserdetailsComponent,
    AddUserComponent,
    UsersComponent,
    ListfilterComponent,
    EventslistfilterComponent,
    AddclubComponent,
    ClublistfilterComponent,
    ClubComponent,
    FindEventsComponent,
    ClubdetailsComponent,
    EventdetailsComponent,
    AddMembreComponent,
    MembresComponent,
    ListMembresComponent,
    UpdateuserComponent,
    UpdateClubComponent,
    UpdateventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatCardModule, MatChipsModule,MatAutocompleteModule,
    MatSidenavModule ,MatTabsModule,ReactiveFormsModule,FormsModule,
    MatToolbarModule,    MatGridListModule,
    MatListModule,MatPaginatorModule,MatTableModule, NgChartsModule,
    MatButtonModule,MatExpansionModule,CdkAccordionModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatMenuModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: '{yourDomain}',
      clientId: '{yourClientId}',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [

    { provide: NgChartsConfiguration, useValue: { generateColors: false }},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
