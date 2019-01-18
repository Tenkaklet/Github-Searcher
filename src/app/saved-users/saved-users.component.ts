import { Component, OnInit } from '@angular/core';
import { GithHubService } from '../gith-hub.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss']
})
export class SavedUsersComponent implements OnInit {

  constructor(private gHttp: GithHubService, private db: AngularFireDatabase, private auth: AuthService) { }

  ngOnInit() {
  }

}
