import { Component, Input, OnInit,  } from '@angular/core';
import{ personagem} from '../../api-one-piece.service'


@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  @Input()
  photo:string = ''
  @Input()
  lugar:string =""
  @Input()
  title:string = ''
  @Input()
  recompensa:string = ''
  dados:any=[]
  constructor(private seuServico: personagem) { }

  ngOnInit(): void {
    this.seuServico.getDadosComToken().subscribe((dados)=>{
        this.dados = dados
        console.log(dados)
    }
    )
  }

}
