import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from 'src/app/Services/membre.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent {
  mem!:any;
  constructor(private membreservice :MembreService,private route: ActivatedRoute,private _router: Router){}
  
  ngOnInit(): void {
    this.membreservice.getUsers().subscribe(data => {
      this.mem = data;
    }
    )
  
}

}
