import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        SharedModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {

}
