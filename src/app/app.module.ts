import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrestatarioComponent } from './components/prestatario/prestatario.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { NewComponent } from './components/new/new.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrestatarioComponent,
    SignupComponent,
    PrestamosComponent,
    NewComponent,
    EmptyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'signup',component:SignupComponent},
      {path:'prestatario',component:PrestatarioComponent, children: [
        { path: '', component: EmptyComponent },
        { path: 'prestamos', component: PrestamosComponent },
        { path: 'new', component: NewComponent }
      ]},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
