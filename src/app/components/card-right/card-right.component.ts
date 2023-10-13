import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.css']
})
export class CardRightComponent implements OnInit {
@Input()
foto:string="";
@Input()
titulo:string="";
@Input()
Id=""
  constructor() { }

  ngOnInit(): void {
  }

}
