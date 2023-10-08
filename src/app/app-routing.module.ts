import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { AuthGuard } from './services/auth.guard';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserDetailComponentComponent } from './user-detail-component/user-detail-component.component';

const routes: Routes = [
  {path:"login",
    title:"E-Buy",
    component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"", component:HomeComponent  ,canActivate: [AuthGuard]},
  { path:"cart", component:CartComponent },
  { path:"cart/address", component:AddressComponent},
  { path:"cart/address/payment", component:PaymentComponent },
  { path:"products", component:ProductComponent},
  { path:"productdetail/:id", component:ProductDetailComponent },
  { path:"profile/:id", component:UserDetailComponentComponent },
  { path: "*", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
