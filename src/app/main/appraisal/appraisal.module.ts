import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalComponent } from './appraisal.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';  

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
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule
    ],
    exports     : [
        AppraisalComponent
    ]
})
export class AppraisalModule
{
}