import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path: 'shop',component:ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
