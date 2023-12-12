import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = new User();



  constructor(private userservice :UserService,private route: ActivatedRoute,private _router: Router){
  }
  saveUser() {
    this.userservice.saveUser(this.user).subscribe(
      (      data: any) => {
        console.log('response', data);
        this._router.navigateByUrl("/AdminDashboard/OverviewAdmin");
      }
    )
  }

 
}
