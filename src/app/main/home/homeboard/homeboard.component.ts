import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';

@Component({
    selector     : 'homeboard',
    templateUrl  : './homeboard.component.html',
    styleUrls    : ['./homeboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class HomeboardComponent implements OnInit {

    constructor(private router: Router) { }
  
    ngOnInit() {
    }
  
    addNewAppraisal() {
      this.router.navigate(['/new-appraisal']);
    }

    viewAllAppraisals() {
      this.router.navigate(['/appraisal-list']);
    }
  
  }