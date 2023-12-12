import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membre, MembreService } from 'src/app/Services/membre.service';

@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
  styleUrls: ['./add-membre.component.css']
})
export class AddMembreComponent {
  user: Membre = new Membre();
  constructor(private userservice :MembreService,private route: ActivatedRoute,private _router: Router){}
  saveEvent() {
    this.userservice.saveUser(this.user).subscribe(
      (      data: any) => {
        console.log('response', data);
        this._router.navigateByUrl("/ClubDashboard/membres/list");
      }
    )
  }
}
