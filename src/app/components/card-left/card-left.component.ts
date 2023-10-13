import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'app-card-left',
  templateUrl: './card-left.component.html',
  styleUrls: ['./card-left.component.css']
})
export class CardLeftComponent implements OnInit {
@Input()
foto:string="" ;
@Input()
titulo="";
@Input()
// Saiu a nova versão do Angular
descricao:string="";
@Input()
Id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
