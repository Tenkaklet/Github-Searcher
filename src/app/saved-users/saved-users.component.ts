import { Component, OnInit } from '@angular/core';
import { GithHubService } from '../gith-hub.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss']
})
export class SavedUsersComponent implements OnInit {
  githubList: AngularFireList<any>;
  fireuser: any;
  users: Observable<any>;
  following: any;
  gitHubUsers: any;

  constructor(private gHttp: GithHubService, private db: AngularFireDatabase, private auth: AuthService) {

  }
  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.fireuser = user.uid;
      this.getUsers(this.fireuser);
    });
  }

  getUsers(uid: string) {
    this.githubList = this.db.list('/users/' + uid + '/following');
    this.users = this.githubList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  unFollow(key: string) {
    this.githubList.remove(key);
  }

}
