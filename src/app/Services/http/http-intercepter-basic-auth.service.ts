import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../JWTTOKEN/token-storage.service';
const TOKEN_AUTH_HEADER_KEY='Authorization';
@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private tokenService:TokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.tokenService.getToken();
    if(token!=null) {
      authReq = request.clone({
        headers : request.headers.set(TOKEN_AUTH_HEADER_KEY,'Bearer '+token)
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService , multi: true }
]