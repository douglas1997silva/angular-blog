import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.css','banner-title.responsive.component copy.css'],
 styles: ['div{background: url(https://wallpapers.com/images/high/one-piece-luffy-brothers-fan-art-cs6rchq06tvkehb7.webp) no-repeat right top fixed ;}']

})
export class BannerTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
