import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/product-list/product-list.module').then(module => module.ProductListModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(module => module.ProductDetailModule)
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
