import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  { path: environment.pathSweatshirts, component: ProductListComponent },
  { path: '', redirectTo: environment.pathSweatshirts, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductListRoutingModule { }
