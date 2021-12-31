import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { ServerHandlerService } from './../../services/http/server-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private _router: Router, private handler: ServerHandlerService) { }
  public user_name: string;
  public score: number;
  public problems: any;
  ngOnInit(): void {
    const user_email = localStorage.getItem('user_email')!;
    if(!user_email){
      this._router.navigateByUrl('/authenticate');
    }
    this.user_name = user_email.substring(0,user_email.indexOf('@'));
    console.log(this.user_name);
    this.getProblemsData();
  }

  logout(){
    localStorage.removeItem('user_email');
    this._router.navigateByUrl('/authenticate');
  }

  getProblemsData(){
    const user_email = localStorage.getItem('user_email')!;
    this.handler.getProblems(user_email).subscribe(
      (result: any) => {
        console.log(result);
        this.score = result.score;
        this.problems = result.problems;
      },
      error => {
        console.log(error);
      }
    );
  }

  solve(event){
    const url = '/question/'+event.target.id;
    console.log(url);
    this._router.navigateByUrl(url);
  }

}
