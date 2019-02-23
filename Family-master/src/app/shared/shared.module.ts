import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        RouterModule,
        NgbModule,
        FormsModule,
        CommonModule
    ],
    declarations: [],
    exports: [
        RouterModule,FormsModule,CommonModule
    ]
})

export class SharedModule
{ }
