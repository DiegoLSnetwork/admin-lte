import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

//components
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: "", component: DashboardComponent}, 
  {path: "client_list", component: ClientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
