import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithHubService } from '../gith-hub.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  username: any;
  user: any;
  fireUser: any;
  userImage: string;
  website: string;
  numberOfRepos: number;
  followers: number;
  repos: any;

  constructor(private route: ActivatedRoute, private gHttp: GithHubService, private db: AngularFireDatabase, public auth: AuthService) {
    this.auth.user.subscribe(user => {
      if (user === null) {
        this.fireUser = null;
      } else {
        this.fireUser = user.uid;
        console.log(this.fireUser);

      }
    });
  }



  ngOnInit() {
    this.route.params.subscribe(param => {
      this.user = param.user;
      this.gHttp.getUserRepos(this.user)
      .subscribe(repos => {
        console.log(repos);
        this.repos = repos;
        this.numberOfRepos = Object.keys(repos).length;
      });
    });
    this.gHttp.getUsers(this.user)
    .subscribe(user => {
      console.log(user.items);
      this.username = user.items[0].login;
      this.userImage = user.items[0].avatar_url;
      this.website = user.items[0].html_url;
    });

    this.gHttp.getUserFollowers(this.user)
    .subscribe(followers => {
      this.followers = Object.keys(followers).length;
    });
  } // end ngOnInit

  followUser(user: string) {
    const pushToDb = this.db.list('/users/' + this.fireUser + '/following');
    pushToDb.push({users: user});
  }

}
