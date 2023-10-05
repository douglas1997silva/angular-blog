import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  constructor(private menu:ActivatedRoute) {
    this.menu.params.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {

  }

}
