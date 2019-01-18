import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithHubService } from '../gith-hub.service';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})
export class UserResultsComponent implements OnInit {
  searchedUser: any;
  constructor(private route: ActivatedRoute, private gHttp: GithHubService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      // NOTE: param.user
      const user = param.user;
      this.gHttp.getUsers(user)
      .subscribe(user => {
        this.searchedUser = user.items;
        console.log(this.searchedUser);
      });
    });
  }

  goToUser(user: string) {
    this.router.navigate(['user-repos/', user]);
  }

}
