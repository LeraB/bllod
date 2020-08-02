import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: 'app-recipient-main',
  templateUrl: './recipient-main.component.html',
  styleUrls: ['./recipient-main.component.scss']
})

export class RecipientMainComponent implements OnInit {

  public profileForm: FormGroup;
  public recipient;

  public filteredRecipient;

  public favoriteProducts = [];


  constructor(private http: HttpClient, private _cookieService: CookieService) {
    this.profileForm = new FormGroup({
      searchInput: new FormControl('', Validators.required),
      searchRhesusFactor: new FormControl('default', Validators.required),
      searchType: new FormControl('default', Validators.required),
    });
  }

  ngOnInit() {
    this.http
      .get('http://35.242.214.136:3000/demand?bloodType=1&rhesus=false', { headers: new HttpHeaders({'authorization':  this._cookieService.get('stel_token') })})
      .subscribe(data => {
        this.filteredRecipient = data;
        this.recipient = data;
      });
  }

  search() {
    console.warn(this.profileForm.value);
    this.filteredRecipient = this.recipient;
    if (this.profileForm.value.searchInput !== '' && this.profileForm.value.searchInput !== 'default') {
      // tslint:disable-next-line:max-line-length
      this.filteredRecipient = this.filteredRecipient.filter(product => product.name.toLowerCase().match(this.profileForm.value.searchInput.toLowerCase()));
    }
    if (this.profileForm.value.searchRhesusFactor !== '' && this.profileForm.value.searchRhesusFactor !== 'default') {
      // tslint:disable-next-line:max-line-length
      this.filteredRecipient = this.filteredRecipient.filter(product => product.RhesusFactor.match(this.profileForm.value.searchRhesusFactor));
    }
    if (this.profileForm.value.searchType !== '' && this.profileForm.value.searchType !== 'default') {
      this.filteredRecipient = this.filteredRecipient.filter(product => product.BloodType.match(this.profileForm.value.searchType));
    }
  }
  sortASC(field) {
    this.recipient.sort((a, b) => {return (a[field] > b[field]) ? 1 : -1; });
  }

  sortDESC(field) {
    this.recipient.sort((a, b) => {return (a[field] > b[field]) ? -1 : 1; });
  }

}
