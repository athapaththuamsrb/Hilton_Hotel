import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { JwtHelperService } from "@auth0/angular-jwt";
import {UserService} from "../../../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [
    trigger('slider', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.3s')
      ]),
      transition('* => void', [
        animate('0.3s', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class TopBarComponent implements OnInit {
  helper = new JwtHelperService();
  sliderState = false;
  isAdmin=false;
  userName:string="";
  email:string="";



  constructor(private _userService: UserService,private _localStorage: LocalStorageService,private _router: Router) {
  }

  ngOnInit(): void {
    this.getData();
  }
  public getData(){
      if (this._localStorage.get('cmjdToken')!=undefined) {
        const token=this.helper.decodeToken(this._localStorage.get('cmjdToken'));
        console.log(token);
        this.userName=token.userName;
        this.email=token.email;
        this.isAdmin=token.accountType == "admin";
        console.log(this.email+" "+this.userName+" "+token.accountType);
      } else {
        this._router.navigateByUrl('/auth');
        console.log("try again");
      }

  }
    // const token=this.helper.decodeToken(data.token)
  }

