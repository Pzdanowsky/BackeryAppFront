import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';

const routes: Routes = [

//{path: '', redirectTo: '/login',pathMatch: 'prefix'},
{path: 'operator-dashboard', component: OperatorDashboardComponent},
{path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OperatorDashboardComponent, LoginComponent]
