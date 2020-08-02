import {ViewEncapsulation, Component, Inject, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';
import { CookieService } from "angular2-cookie/core";
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements AfterViewInit {

  @ViewChild('script', {static: true}) script: ElementRef;

  public form: FormGroup;
  private result: object;
  private isSubmit: boolean;

  @ViewChild('loginForm', {static: false}) el: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private _renderer2: Renderer2,
    private _cookieService: CookieService,
    @Inject(DOCUMENT) private _document: Document) {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  onSubmit(formData: FormData) {
    this.result = formData;
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = this._renderer2.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?8';
    script.setAttribute('data-telegram-login', 'MABloodProjectBot');
    script.setAttribute('data-size', 'large'); // Size of the button
    script.setAttribute('data-radius', '20'); // Corners of the button
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-userpic', 'true');

    script.setAttribute('data-onauth', 'onTelegramAuth(user)');

    element.parentElement.replaceChild(script, element);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }

  ngOnInit() {
    window['onTelegramAuth'] = user => this.onTelegramAuth(user);
  }

  private onTelegramAuth(user) {

    this.result = {
      first_name: user.first_name,
      last_name: user.last_name,
      photo_url: user.photo_url,
      auth_date: user.auth_date,
      hash: user.hash,
      id: user.id,
    };


    this.http.post('http://35.242.214.136:3000/login', this.result).subscribe((data) => {
      
console.log('data => ', data);

	if (!!data['token'] && data['token']!= 'undefined') {
	this._cookieService.put('stel_token', data['token']);
        this._cookieService.put('id', data['user']['id']);
        window.location.reload();
	} else {
console.log('login!!!');
          this._cookieService.put('id', data['user']);
          this.router.navigateByUrl('/register');
       }

});


  }
}
