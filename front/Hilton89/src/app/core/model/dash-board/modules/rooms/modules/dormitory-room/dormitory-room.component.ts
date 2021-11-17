import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../../service/room.service";

@Component({
  selector: 'app-dormitory-room',
  templateUrl: './dormitory-room.component.html',
  styleUrls: ['./dormitory-room.component.scss']
})
export class DormitoryRoomComponent implements OnInit {
  dormitoryRooms: { roomNumber: number, isAvailable: boolean,floor:number,roomType:string,customer:object }[] =[];
    // [{"roomNumber":401,"isAvailable":true,"floor":4,"type":"dormitoryRooms"},{"roomNumber":402,"isAvailable":true,"floor":4,"type":"dormitoryRooms"},{"roomNumber":403,"isAvailable":false,"floor":4,"type":"dormitoryRooms"},{"roomNumber":404,"isAvailable":false,"floor":4,"type":"dormitoryRooms"}];
  constructor(private _roomService: RoomService) { }


  ngOnInit(): void {
    this._roomService.roomInfor("dormitoryRooms").subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.status) {
        // @ts-ignore
        this.dormitoryRooms=response.inform;
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }

}
