import { OrdersComponent } from './order-domain/orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

//{path: '', redirectTo: '/login',pathMatch: 'prefix'},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent,
children: [
{path: 'orders', component: OrdersComponent},


]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, OrdersComponent]
