import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { WealthComponent } from './product-shop/components/wealth/wealth.component';
import { IncomeComponent } from './product-shop/components/income/income.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: "stockhistory",component:StockhistoryComponent},
  {path:"shop",component:ProductShopComponent},
  {path:"wealth",component:WealthComponent},
  {path:"income",component:IncomeComponent},
  {path: "mutualfunds",component:MutualFundsComponent},
  {path:"home",component:HomeComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"change-password",component:ChangePasswordComponent},
  {path:'**',component:NotfoundComponent}



]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
