import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  { path: 'sudaderas', component: ProductListComponent },
  { path: '', redirectTo: 'sudaderas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductListRoutingModule { }
