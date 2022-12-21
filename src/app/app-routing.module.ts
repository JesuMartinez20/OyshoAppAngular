import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'oysho',
    loadChildren: () => import('./pages/product-list/product-list.module').then(module => module.ProductListModule)
  },
  { path: '', redirectTo: 'oysho/sudaderas', pathMatch: 'full' },
  { path: '**', redirectTo: 'oysho/sudaderas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
