import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
isValid=true;
  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    accountType:new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),

  });
  chosenItem:String="not-admin";

  constructor(private _router: Router, private _userService: UserService,private _localStorage: LocalStorageService) {
  }

  ngOnInit(): void {

  }
//userName: string,nic:string, address:string,contact: string,accountType:string, email: string, password:string
  public signUp() {
    this._userService.signUp(this.signUpForm.get('userName')?.value,
      this.signUpForm.get('nic')?.value,
      this.signUpForm.get('address')?.value,
      this.signUpForm.get('contact')?.value,
      this.signUpForm.get('accountType')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value
    ).subscribe(response => {
      console.log(response);

      if (response.status) {
        this.isValid=true;
        this._router.navigateByUrl('/dashboard');
      } else {
        this.isValid=false;
        console.log("try again");
      }

    }, error => {
      console.log(error);
    })
  }

}
