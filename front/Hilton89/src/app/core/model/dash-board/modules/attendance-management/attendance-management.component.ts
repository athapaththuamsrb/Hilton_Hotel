import {Component, OnInit, Input,ViewChild} from '@angular/core';
import {ClerkService} from "../../../../service/clerk.service";

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss']
})


export class AttendanceManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
