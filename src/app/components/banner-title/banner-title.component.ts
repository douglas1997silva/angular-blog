import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.css','banner-title.responsive.component copy.css'],
 styles: ['div{background: url(https://occ-0-7421-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRmJTGXdghq16Pt_il2WwjB1kouQOuaOc81QAuPFALOIn9TP3raceByofTM9hPSd7Agi0eLS1DB9QIPHmsOvjhz2i-8-zD1-9wwu.jpg?r=fc4) no-repeat ;}']

})
export class BannerTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
