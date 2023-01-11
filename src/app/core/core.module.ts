import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { ProductService } from "./services/product/product.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
  providers: [ProductService]
})

export class CoreModule { }
