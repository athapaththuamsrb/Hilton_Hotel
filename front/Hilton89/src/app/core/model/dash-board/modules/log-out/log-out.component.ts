import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private _userService: UserService, private _localStorage: LocalStorageService,private _router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this._localStorage.clearAll('cmjdToken');
    // this._router.navigateByUrl('/auth');
  }
}
