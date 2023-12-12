import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { Club, ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent {
  id!: number;
  club!: Club;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: ClubService) { }

  ngOnInit() {
    this.club = new Club();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getClubById(this.id)
      .subscribe(data => {
        console.log(data)
        this.club = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateClub(this.id, this.club)
      .subscribe(data => {
        console.log(data);
        this.club = new Club();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/AdminDashboard/clubs/list']);
  }
}
