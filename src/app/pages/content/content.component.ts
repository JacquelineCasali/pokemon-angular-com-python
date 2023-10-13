import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFakes} from "../../data/dataFakes"
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
foto:string="" 
titulo:string=""

descricao:string="" 
private id :string | null = "0"

constructor(
private route :ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
     this.id=value.get("id"))
     this.setValuesTOComponent(this.id)
  }
setValuesTOComponent(id:string | null){
const result=dataFakes.filter(article=>article.id === id)[0]

this.titulo=result.titulo
this.descricao=result.descricao
this.foto=result.foto

}
}
