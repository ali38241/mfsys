import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EventComponent } from './components/event/event.component';
import { ChargesComponent } from './components/charges/charges.component';
import { TransactionComponent } from './components/transaction/transaction.component';
const routes: Routes = [
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'home', component: HomeComponent},
  {path:'nav-bar', component: NavBarComponent},
  {path:'event', component: EventComponent},
  {path:'transaction', component: TransactionComponent},
  {path:'charges', component: ChargesComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
