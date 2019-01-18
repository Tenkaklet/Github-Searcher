import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserResultsComponent } from './user-results/user-results.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-results/:user', component: UserResultsComponent },
  { path: 'user-repos/:user', component: UserReposComponent },
  { path: 'dashboard', component: SavedUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
