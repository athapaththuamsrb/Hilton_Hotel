import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClerkService} from "../../../../../../service/clerk.service";


@Component({
  selector: 'app-remove-officer',
  templateUrl: './remove-officer.component.html',
  styleUrls: ['./remove-officer.component.scss']
})
export class RemoveOfficerComponent implements OnInit {
  isValid =true;
  removeOfficerForm = new FormGroup({
    nic: new FormControl('', Validators.required)
  });
  constructor(private _router: Router, private _clerkService: ClerkService) { }

  ngOnInit(): void {
  }

  public remove():void {
    this._clerkService.removeClerk(this.removeOfficerForm.get('nic')?.value).subscribe(response => {
      // @ts-ignore
      if (response.status) {
        this.isValid = true;
        this._router.navigateByUrl('/dashboard/attendance-management');
      } else {
        this.isValid = false;
        console.log("try again");
      }

    }, error => {
      console.log(error);
    })
  }
}
