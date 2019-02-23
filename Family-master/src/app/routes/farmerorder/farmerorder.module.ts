import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FarmerorderComponent } from './farmerorder.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: FarmerorderComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [FarmerorderComponent],
  exports: [RouterModule]
})
export class FarmerorderModule { }
