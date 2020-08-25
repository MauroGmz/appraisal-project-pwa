import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { HomeComponent } from './home.component';

import { MatIconModule } from '@angular/material/icon';
import { CardModule } from './card/card.module';
import { UICardsModule } from '../ui/cards/cards.module';

const routes = [
    {
        path     : 'home',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        TranslateModule,
        FuseSharedModule,
        CardModule,
        UICardsModule
    ],
    exports     : [
        HomeComponent
    ]
})

export class HomeModule
{
}