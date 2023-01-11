import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  { path: 'sweatshirts', component: ProductListComponent },
  { path: '', redirectTo: 'sweatshirts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductListRoutingModule { }
