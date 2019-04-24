import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarsOverviewComponent } from './bars-overview/bars-overview.component';
import { BarsDetailsComponent } from './bars-details/bars-details.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'bars', component: BarsOverviewComponent, canActivate: [AuthGuard] },
  { path: 'bars/:id', component: BarsDetailsComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
