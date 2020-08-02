import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { CookieService } from "angular2-cookie/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://http://35.242.214.136:3000';
  token;

  init() {
    window['onTelegramAuth'] = user => this.onTelegramAuth(user);
  }
  constructor(private http: HttpClient, private router: Router, private _cookieService: CookieService) { }

  private onTelegramAuth(user) {  
 this.http.post(this.uri + '/login', user)
      .subscribe((resp: any) => {
        this.router.navigate(['/']);
      });
  }

  logout() {
    localStorage.removeItem('stel_token');
  }

  public get login(): boolean {
    return (this._cookieService.get('stel_token') !== null && this._cookieService.get('stel_token') !== undefined);
  }

}
