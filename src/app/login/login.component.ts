import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  invalidForm: boolean;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      console.log('invalid');
      this.invalidForm = true;
      return;
    }
    this.auth.login(this.email, this.password);
    this.router.navigate(['/']);
  }


}
