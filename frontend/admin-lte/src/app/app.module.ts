import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
//Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";

//Angular Bootstrap Modules
import { NgbDatepickerModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
//NGX-Charts
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardChartComponent } from './components/dashboard/dashboard-chart/dashboard-chart.component';
import { DashboardToDoListComponent } from './components/dashboard/dashboard-to-do-list/dashboard-to-do-list.component';
import { DatepickerComponent } from './components/dashboard/datepicker/datepicker.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientTableComponent } from './components/clients-list/client-table/client-table.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardChartComponent,
    DashboardToDoListComponent,
    DatepickerComponent,
    ClientsListComponent,
    ClientTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
