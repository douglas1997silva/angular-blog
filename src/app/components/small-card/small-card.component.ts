import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.responsivo.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCard:string="https://images8.alphacoders.com/128/thumbbig-1280159.webp";
  @Input()
  cardsmallD:string = "Roronoa Zoro, Caçador de Piratas, mestre espadachim, um dos 11 piratas que integram a chamada Pior Geração, grande amigo de Luffy, responsável por algumas das melhores cenas de ação de One Piece e, com certeza, por algumas dos melhores momentos cômicos. Ao longo das 20 temporadas do anime, Zoro ganhou o coração dos fãs dos Piratas do Chapéu de Palha.";
  @Input()
  cardSmallT:string = "Zoro";
  @Input()
  id:string ="0"
  constructor() { }

  ngOnInit(): void {
  }

}
