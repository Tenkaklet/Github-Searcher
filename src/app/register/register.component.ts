import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService, public router: Router) {


  }

  ngOnInit() {
  }

  register () {
    this.auth.signUp(this.email, this.password);
    this.email = '';
    this.password = '';
    this.router.navigate(['/']);
  }

}
