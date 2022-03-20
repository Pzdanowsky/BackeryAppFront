import { WorkersComponent } from './workers-domain/workers/workers.component';
import { ContractorsComponent } from './contractors-domain/contractors/contractors.component';
import { OrdersComponent } from './order-domain/orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [

//{path: '', redirectTo: '/login',pathMatch: 'prefix'},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent,
children: [
{path: 'orders', component: OrdersComponent},
{path: 'contractors', component: ContractorsComponent},
{path: 'workers', component: WorkersComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
[LoginComponent,
   DashboardComponent,
    OrdersComponent,
  ContractorsComponent,
WorkersComponent]
