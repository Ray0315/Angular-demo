import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Angular2DataTableModule } from 'angular2-data-table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { PieChartComponent } from './home/pie-chart/pie-chart.component';
import { InformationComponent } from './home/information/information.component';
import { DataTableComponent } from './home/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserinfoComponent,
    SideNavComponent,
    PieChartComponent,
    InformationComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
