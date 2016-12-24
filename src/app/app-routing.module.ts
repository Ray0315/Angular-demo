import { InformationComponent } from './home/information/information.component';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: InformationComponent },
      { path: 'info', component: InformationComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
