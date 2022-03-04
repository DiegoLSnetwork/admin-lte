import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

//components
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", redirectTo:"/dashboard",pathMatch:"full"}, 
  {path:"dashboard",component:DashboardComponent},
  {path: "client_list", component: ClientsListComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
