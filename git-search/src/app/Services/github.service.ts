import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '3f13d1cfdff4532bc171';
  private client_secret = '6019b8efa72919262fcb43646c4914bd8c15e3f6';

  constructor(private http: Http) {
    console.log('Red Leader Standing By....');
   }

   getUser(){
     return this.http.get('http://api.github.com/users/'+ this.username+'?client_id='+ this.client_id+'&client_secret='+ this.client_secret)
     .map(res => res.json());
   }

   getRepos(){
     return this.http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+ this.client_id+'&client_secret='+ this.client_secret)
     .map(res => res.json());
   }

   updateUser(username:string) {
     this.username = username;
   }

}
