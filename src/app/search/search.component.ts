import { Component, OnInit } from '@angular/core';
import { GithHubService } from '../gith-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  github_user: '';
  constructor(public gHttp: GithHubService, private router: Router) {


  }

  ngOnInit() {
  }

  searchUser() {
  this.router.navigate(['user-results', this.github_user]);
  }

}
