import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalComponent } from './appraisal.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

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
        MatButtonModule
    ],
    exports     : [
        AppraisalComponent
    ]
})
export class AppraisalModule
{
}