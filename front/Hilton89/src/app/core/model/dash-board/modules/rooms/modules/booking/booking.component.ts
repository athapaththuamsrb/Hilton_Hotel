import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomService} from "../../../../../../service/room.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  roomNumber: string | null|undefined;
  isValid:boolean=true;
  constructor(private router: Router,private route: ActivatedRoute, private _roomService: RoomService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
          this.roomNumber = params.get('number');
          console.log(this.roomNumber);
        }
      );
  }
  bookingForm = new FormGroup({
    roomNumber: new FormControl({
      disabled: true
    }),
    userName: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),

  });


  send() {
    this._roomService.bookingRoom(
      this.bookingForm.get('userName')?.value,
      this.bookingForm.get('nic')?.value,
      this.bookingForm.get('address')?.value,
      this.bookingForm.get('contact')?.value,
      this.bookingForm.get('roomNumber')?.value,
      this.bookingForm.get('email')?.value
    ).subscribe(response => {
      console.log(response);

      if (response.state) {
        this.isValid=true;
        this.router.navigateByUrl('/dashboard/rooms');
      } else {
        this.isValid=false;
        console.log("try again");
      }

    }, error => {
      console.log(error);
    })
  }
}
