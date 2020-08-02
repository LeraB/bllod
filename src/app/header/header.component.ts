	import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from "angular2-cookie/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(    private _cookieService: CookieService, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._cookieService.remove('stel_token');
    this._cookieService.remove('stel_token');
  }

}
