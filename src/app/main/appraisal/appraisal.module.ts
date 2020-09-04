import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalComponent } from './appraisal.component';
import { DialogContentExampleDialog } from './appraisal.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';   
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


const routes: Routes = [
    {
        path     : 'new-appraisal',
        component: AppraisalComponent
    }
];

@NgModule({
    declarations   : [
        AppraisalComponent,
        DialogContentExampleDialog
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
        MatGridListModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports     : [
        AppraisalComponent,
        DialogContentExampleDialog
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ],
    bootstrap: [AppraisalComponent, DialogContentExampleDialog],
    entryComponents: [AppraisalComponent, DialogContentExampleDialog]
})
export class AppraisalModule
{
}