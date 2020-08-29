import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalComponent } from './appraisal.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';   

const routes: Routes = [
    {
        path     : 'new-appraisal',
        component: AppraisalComponent
    }
];

@NgModule({
    declarations   : [
        AppraisalComponent
    ],
    imports        : [
        RouterModule.forChild(routes),
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule
    ],
    exports     : [
        AppraisalComponent
    ]
})
export class AppraisalModule
{
}