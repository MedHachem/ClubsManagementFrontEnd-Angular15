import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService, LoginModel } from 'src/app/Services/JWTTOKEN/BasicAuthenticationService';
import { TokenStorageService } from 'src/app/Services/JWTTOKEN/token-storage.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

