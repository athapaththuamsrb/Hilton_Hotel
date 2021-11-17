import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../../service/room.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-adding-data',
  templateUrl: './adding-data.component.html',
  styleUrls: ['./adding-data.component.scss']
})
export class AddingDataComponent implements OnInit {
  roomNumber: string | null|undefined;
  listData:{service:string,quantity:number}[]=[];
  serviceList:any;
  name:string="";
  email:string="";
  contact:string="";
  address:string="";
  payment:number=0;
  nic:string="";
  constructor(private router: Router,private route: ActivatedRoute, private _roomService: RoomService) { }
  ngOnInit(): void {
    this.serviceList={"service-1":1000,"service-2":2000,"service-3":3000};

    this.route.paramMap.subscribe(params => {
        this.roomNumber = params.get('number');
        console.log(this.roomNumber);
      }
    );
    this._roomService.customerData(Number(this.roomNumber)).subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.state) {
        // @ts-ignore
        this.listData=response.inform.payment;
        // @ts-ignore
        this.name=response.inform.name;
        // @ts-ignore
        this.email=response.inform.email;
        // @ts-ignore
        this.contact=response.inform.contact;
        // @ts-ignore
        this.address=response.inform.address;
        // @ts-ignore
        this.nic=response.inform.nic;
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }

addingDataForm = new FormGroup({
    roomNumber: new FormControl({
      disabled: true
    }),
    service: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
      });



  public addList() :void{
    this._roomService.addBileList(
      Number(this.addingDataForm.get("roomNumber")?.value),
      this.addingDataForm.get("service")?.value,
      Number(this.addingDataForm.get("quantity")?.value),
      Number(this.addingDataForm.get("quantity")?.value)*this.serviceList[this.addingDataForm.get("serviceType")?.value]
    ).subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.state) {
        this.listData.push({service:this.addingDataForm.get("service")?.value,quantity:Number(this.addingDataForm.get("quantity")?.value)});
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }


  price(quantity: number, serviceType: string):number {
    this.payment=+quantity*this.serviceList[serviceType];
    return quantity*this.serviceList[serviceType];

  }

  paymentSettlement():void {
    this._roomService.paymentSettlement(Number(this.roomNumber)).subscribe(response => {
      console.log(response);

      // @ts-ignore
      if (response.state) {
        this.router.navigateByUrl('/dashboard/rooms');
      } else {
        console.log("try again");
      }

    }, error => {
      console.log(error);
    });
  }
}
