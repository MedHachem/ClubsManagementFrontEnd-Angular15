import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubPresidentDashboardComponent } from './Views/club-president-dashboard/club-president-dashboard.component';
import { ClubDashboardComponent } from './Components/club-dashboard/club-dashboard.component';
import { MyEventsComponent } from './Components/my-events/my-events.component';
import { HomeComponent } from './Views/home/home.component';
import { EventsComponent } from './Components/events/events.component';
import { AdminDashboardComponent } from './Views/admin-dashboard/admin-dashboard.component';
import { OverviewAdminComponent } from './Components/overview-admin/overview-admin.component';
import { LoginComponent } from './Views/login/login.component';
import { RegistrationComponent } from './Views/registration/registration.component';
import { UserdetailsComponent } from './Components/Users/userdetails/userdetails.component';
import { AddUserComponent } from './Components/Users/add-user/add-user.component';
import { ClubsComponent } from './Components/clubs/clubs.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { ListfilterComponent } from './Components/Users/listfilter/listfilter.component';
import { NewEventComponent } from './Components/new-event/new-event.component';
import { EventslistfilterComponent } from './Components/eventslistfilter/eventslistfilter.component';
import { ClublistfilterComponent } from './Components/Club/clublistfilter/clublistfilter.component';
import { AddclubComponent } from './Components/Club/addclub/addclub.component';
import { FindEventsComponent } from './Components/find-events/find-events.component';
import { ClubdetailsComponent } from './Components/Club/clubdetails/clubdetails.component';
import { EventdetailsComponent } from './Components/eventdetails/eventdetails.component';
import { MembresComponent } from './Components/Membre/membres/membres.component';
import { ListMembresComponent } from './Components/Membre/list-membres/list-membres.component';
import { AddMembreComponent } from './Components/Membre/add-membre/add-membre.component';
import { UpdateuserComponent } from './Components/Users/updateuser/updateuser.component';
import { UpdateClubComponent } from './Components/Club/update-club/update-club.component';
import { UpdateventComponent } from './Components/updatevent/updatevent.component';
import { BruteForceComponent } from './brute-force/brute-force.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'b',component:BruteForceComponent},
  {path:'login',component:RegistrationComponent},

  {path:'events/list',component:EventslistfilterComponent},

  {path:'clubs',component:ClubsComponent},

  {path:'ClubDashboard',component:ClubPresidentDashboardComponent,
   children: [

    {path:'Overview',component:ClubDashboardComponent,},
    {path:'MyEvents',component:MyEventsComponent,},
    {path:'events',component:FindEventsComponent,},
    {path:'events/list',component:EventslistfilterComponent},
    {path:'membres',component:MembresComponent},
    {path:'membres/list',component:ListMembresComponent},
    {path:'AddMembre',component:AddMembreComponent},
    {path:'NewEvent',component:NewEventComponent},
    {path:'Updatevent/:id',component:UpdateventComponent},


  ],} ,
{path:'AdminDashboard',component:AdminDashboardComponent,
children: [

 {path:'OverviewAdmin',component:OverviewAdminComponent,},
 {path:'users/add',component:AddUserComponent},
 {path:'user',component:UsersComponent},
 {path:'user/:id',component:UserdetailsComponent},
 {path:'users/list',component:ListfilterComponent},
 {path:'events',component:EventsComponent},
 {path:'updateUser/:id',component:UpdateuserComponent},
 {path:'updateClub/:id',component:UpdateClubComponent},
 {path:'events/list',component:EventslistfilterComponent},
 {path:'clubs',component:ClubsComponent},
 {path:'NewClub',component:AddclubComponent},
 {path:'clubs/list',component:ClublistfilterComponent},
 {path:'club/:id',component:ClubdetailsComponent},
 {path:'event/:id',component:EventdetailsComponent},



],
} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
