import { Component, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations   : fuseAnimations
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
