import { ViewEncapsulation, Component, OnInit, Inject } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public form: FormGroup;
  private result: object;
  private isSubmit: boolean;
  private telegramId: string;
  public  isName: boolean = true;

  constructor( private router: Router, private authService: AuthService, private http: HttpClient, private route: ActivatedRoute, private _cookieService: CookieService) {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), Validators.maxLength(13), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      bloodType: new FormControl(1, Validators.required), 
      rhesus:  new FormControl('-', Validators.required),
      locality: new FormControl('', Validators.required),
      lastBeingDonor: new FormControl('', Validators.required),
      telegramId: new FormControl(this._cookieService.get('id'), Validators.required),
    });
  }

  ngOnInit() {}

  onSubmit() {
      this.isName = true;
      if (this.form.value.fullName === '') {
        this.isName = false;
      }

	this.result = {
       telegramId: this.form.value.telegramId,
	fullName: this.form.value.fullName,
	dateOfBirth: new Date(this.form.value.dateOfBirth).toISOString(),
	phoneNumber: this.form.value.phoneNumber,
	email:  this.form.value.email,
        bloodType: this.form.value.bloodType.toString(),
	rhesus: this.form.value.rhesus,
	locality: this.form.value.locality,
	lastBeingDonor: new Date(this.form.value.lastBeingDonor).toISOString()
      }
    
    this.http.post('http://35.242.214.136:3000/registration', this.result).subscribe((data) => {
       this._cookieService.put('stel_token', data['token']);
   });
  }
}

