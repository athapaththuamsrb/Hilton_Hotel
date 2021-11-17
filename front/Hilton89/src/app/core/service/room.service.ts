import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  url=environment.baseUrl;
  constructor(private http: HttpClient) { }

  public roomInfor(RoomType: string) {
    return this.http.post(this.url+'room/roomsInformation',{RoomType});
  }
  public bookingRoom(userName: string,nic:string, address:string,contact: string,roomNumber:number, email: string): Observable<any>{
    return this.http.post(this.url+'room/bookingRoom',{userName,nic,address,contact,roomNumber,email});
  }
  public paymentSettlement(roomNumber: number) {
    return this.http.post(this.url+'room/paymentSettlement',{roomNumber});
  }
  public customerData(roomNumber: number) {
    return this.http.post(this.url+'room/customer/information',{roomNumber});
  }
  public addBileList(roomNumber:number,service:string,quantity:number,bile:number){
    return this.http.post(this.url+'room/addingData',{roomNumber,service,quantity,bile});
  }

}
