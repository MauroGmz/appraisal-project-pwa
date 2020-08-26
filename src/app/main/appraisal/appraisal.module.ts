import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalComponent } from './appraisal.component';

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
        RouterModule.forChild(routes)
    ],
    exports     : [
        AppraisalComponent
    ]
})
export class AppraisalModule
{
}