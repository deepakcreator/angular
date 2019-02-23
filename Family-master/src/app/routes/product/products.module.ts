import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from './products.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', component: ProductsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ProductsComponent],
  exports: [RouterModule]
})
export class ProductsModule { }
