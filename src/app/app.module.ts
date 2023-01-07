import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { RouterModule,Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes:Routes = [
  {path:'',component:HomepageComponent},
  {path:'register',component:RegisterpageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'profilepage',component:ProfilepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomepageComponent,
    RegisterpageComponent,
    LoginpageComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
