import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../../service/room.service";

@Component({
  selector: 'app-single-bed-room',
  templateUrl: './single-bed-room.component.html',
  styleUrls: ['./single-bed-room.component.scss']
})
export class SingleBedRoomComponent implements OnInit {
  singleRooms: { roomNumber: number, isAvailable: boolean,floor:number,roomType:string,customer:object }[] =[];
    // [{"roomNumber":201,"isAvailable":true,"floor":2,"roomType":"singleRooms"},{"roomNumber":202,"isAvailable":true,"floor":2,"roomType":"singleRooms"},{"roomNumber":203,"isAvailable":false,"floor":2,"roomType":"singleRooms"},{"roomNumber":204,"isAvailable":false,"floor":2,"roomType":"singleRooms"}];
  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
    this._roomService.roomInfor("singleRooms").subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.status) {
        // @ts-ignore
        this.singleRooms=response.inform;
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }



}
