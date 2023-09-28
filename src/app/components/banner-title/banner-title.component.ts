import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.css','banner-title.responsive.component copy.css'],
 styles: ['div{background: url(https://c4.wallpaperflare.com/wallpaper/332/915/762/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg) no-repeat right top fixed ;}']

})
export class BannerTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
