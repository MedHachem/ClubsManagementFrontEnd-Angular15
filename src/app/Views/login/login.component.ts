import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/JWTTOKEN/token-storage.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

