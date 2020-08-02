import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from "angular2-cookie/core";
import {Router} from '@angular/router';

@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.scss']
})

export class DonorFormComponent {

  public form: FormGroup;
  private result: object;
  private isSubmit: boolean;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), Validators.maxLength(13), Validators.required]),
      bloodType: new FormControl(1, Validators.required),
      rhesus:  new FormControl('-', Validators.required),
      locality: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      userId: new FormControl(this._cookieService.get('userId'), Validators.required),    
});
  }

  get email() {
    return this.form.get('email') as FormArray;
  }

  addEmailField() {
    this.email.push(new FormControl(null, Validators.email));
  }

  deleteEmailField(item) {
    this.email.removeAt(this.email.controls.indexOf(item));
  }

  onSubmit() {
   this.result = {
        fullName: this.form.value.fullName,
        phoneNumber: this.form.value.phoneNumber,
        bloodType: this.form.value.bloodType.toString(),
        rhesus: this.form.value.rhesus,
        locality: this.form.value.locality,
        reason: this.form.value.reason,    
   //     userId: this.form.value.userId
};

 this.http.post('http://35.242.214.136:3000/demand', this.result, { headers: new HttpHeaders({'authorization':  this._cookieService.get('stel_token') })}).subscribe((data) => {
this.router.navigateByUrl('/recipients-list');
});
  }
}
