import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/product-list/product-list.module').then(module => module.ProductListModule)
  },
  {
    path: environment.pathSweatshirts + '/product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(module => module.ProductDetailModule)
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
