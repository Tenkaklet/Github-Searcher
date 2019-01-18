import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithHubService {

  constructor(private http: HttpClient) { }

  getUsers(user: string) {
    return this.http.get('https://api.github.com/search/users\?q\=' + user);
  }

  getUserRepos(user: string) {
    return this.http.get(`https://api.github.com/users/${user}/repos`);
  }

  getUserFollowers(followers: string) {
    return this.http.get(`https://api.github.com/users/${followers}/followers`);
  }
}


