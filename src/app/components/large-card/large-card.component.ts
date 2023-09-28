import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css','large-card.responsive.component copy.css']
})
export class LargeCardComponent implements OnInit {
  //o input pode chamar essa variavel no components home e passando outro valor.no caso imagem
  @Input()
  photoCover:string = "https://images7.alphacoders.com/132/thumbbig-1325984.webp";
  @Input()
  cardTitles:string = "Luffy";
  @Input()
  cardDescription:string = "Luffy é o capitão dos Piratas do Chapéu de Palha. Quando criança, ele comeu uma Gomu Gomu no Mi, uma fruta que lhe deu o poder do homem-borracha em troca de sua habilidade de nadar. Filho de Monkey D. Dragon, o jovem sonha em se tornar o Rei dos Piratas, título que ninguém ocupa desde a execução de Gol D."
  @Input()
  id:string ="0"
  constructor() { }

  ngOnInit(): void {
  }

}
