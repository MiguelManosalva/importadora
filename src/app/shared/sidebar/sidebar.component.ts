import { Component, OnInit } from '@angular/core';

import data from './data-sidebar.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public data: any;

  constructor(){
    this.data = data;    
  }

  ngOnInit() {
  }

  cerrarSesion() {
  }

}
