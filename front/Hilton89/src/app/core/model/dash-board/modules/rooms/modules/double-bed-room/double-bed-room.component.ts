import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../../service/room.service";

@Component({
  selector: 'app-double-bed-room',
  templateUrl: './double-bed-room.component.html',
  styleUrls: ['./double-bed-room.component.scss']
})
export class DoubleBedRoomComponent implements OnInit {
  doubleRooms: { roomNumber: number, isAvailable: boolean,floor:number,roomType:string,customer:object }[] =[];
    // [{"roomNumber":301,"isAvailable":true,"floor":3,"type":"doubleRooms"},{"roomNumber":302,"isAvailable":true,"floor":3,"type":"doubleRooms"},{"roomNumber":303,"isAvailable":false,"floor":3,"type":"doubleRooms"},{"roomNumber":304,"isAvailable":false,"floor":3,"type":"doubleRooms"}];
  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
    this._roomService.roomInfor("doubleRooms").subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.status) {
        // @ts-ignore
        this.doubleRooms=response.inform;
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }

}
