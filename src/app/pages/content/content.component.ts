import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake}from '../../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string =''
  @Input()
  contentTitles: string = ''
  @Input()
  contentDes:string =''
  @Input()
  contentDes2:string = ""
  @Input()
  funcao:string =""
  private id:string | null='0'

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id =(value.get('id'))
    )
    this.setValueToComponents(this.id)
  }

  setValueToComponents(id:string|null){
   const result = dataFake.filter(article => article.id === id )[0]

   this.contentTitles = result.title
   this.contentDes = result.description
   this.photoCover = result.photo
   this.contentDes2 = result.fruta
   this.funcao = result.função
  }

}
