import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
@Component({
    selector     : 'homeboard',
    templateUrl  : './homeboard.component.html',
    styleUrls    : ['./homeboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class HomeboardComponent {}