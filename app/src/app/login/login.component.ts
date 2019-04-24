import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import * as shajs from 'sha.js';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly PWD: string = "51506A18801C51D6A66FE8DFF2B23A357C3D43F66D56E04F23F85B5A19217D2F";

  private passwordFormControl = new FormControl('', [
    Validators.required
    ]);

  private matcher = new MyErrorStateMatcher();
  
  constructor(private router: Router, private cookieService: CookieService) {

    if (this.isAuthenticated()) {
      this.router.navigate(['/bars']);
    }
  }

  ngOnInit() {

  }

  login() {
    const passwordHash = shajs('sha256').update(this.passwordFormControl.value).digest('hex').toUpperCase();
    if (this.PWD === passwordHash) {
      this.router.navigate(['/bars']);
      let expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 10);
      this.cookieService.put("loggedIn", "true", { expires:  expirationDate});
    } else {
      this.passwordFormControl.setErrors({'loginInvalid': true});
    }
  }

  isAuthenticated(): boolean {
    const isLoggedIn = this.cookieService.get("loggedIn");
    return "true" === isLoggedIn;
  }
}
