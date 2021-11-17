import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() roomNumber?:number;
  @Input() floor?:number;
  @Input() isAvailable?:boolean;
  @Input() roomType?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
