import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClerkService} from "../../../../../../service/clerk.service";

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.scss']
})
export class AddOfficerComponent implements OnInit {
  isValid=true;
  addUpOfficerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    position :new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),

  });
  chosenItem:String="Bell-boy";

  constructor(private _router: Router, private _clerkService: ClerkService) { }

  ngOnInit(): void {
  }

   addUp() :void{
     this._clerkService.saveClerk(
       this.addUpOfficerForm.get('name')?.value,
       this.addUpOfficerForm.get('nic')?.value,
       this.addUpOfficerForm.get('address')?.value,
       this.addUpOfficerForm.get('contact')?.value,
       this.addUpOfficerForm.get('position')?.value,
       this.addUpOfficerForm.get('email')?.value
     ).subscribe(response => {
       console.log(response);

       if (response.status) {
         this.isValid=true;
         this._router.navigateByUrl('/dashboard/attendance-management');
       } else {
         this.isValid=false;
         console.log("try again");
       }

     }, error => {
       console.log(error);
     })
  }
}
