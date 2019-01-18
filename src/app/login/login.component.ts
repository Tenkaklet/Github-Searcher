import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.email, this.password);
    this.router.navigate(['/']);
  }


}
