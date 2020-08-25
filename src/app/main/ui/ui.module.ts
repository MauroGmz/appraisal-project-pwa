import { NgModule } from '@angular/core';

import { UICardsModule } from 'app/main/ui/cards/cards.module';


@NgModule({
    imports: [
        UICardsModule
    ],
    exports: [
        UICardsModule
    ]
})
export class UIModule
{
}
