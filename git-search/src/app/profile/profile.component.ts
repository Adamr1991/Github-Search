import { GithubService } from './../Services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  private user:any;
  private repos:any[];
  private username: string;

  constructor(private githubservice: GithubService) { 
    this.user = false;
  }

  searchUser() {
    this.githubservice.updateUser(this.username);
    this.githubservice.getUser().subscribe(user => {
      this.user = user;
    });
    this.githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
