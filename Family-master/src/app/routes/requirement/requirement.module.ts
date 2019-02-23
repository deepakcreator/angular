import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RequirementComponent} from './requirement.component';

const routes: Routes = [
  { path: '', component: RequirementComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RequirementComponent],
  exports: [RouterModule]
})
export class RequirementModule { }
