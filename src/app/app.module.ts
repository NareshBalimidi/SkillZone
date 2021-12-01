import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {ScrollTopModule} from 'primeng/scrolltop';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
import { ScrollPanelModule } from "primeng/scrollpanel";
import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';

import { PostGraduationProgramsComponent } from './post-graduation-programs/post-graduation-programs.component';
import { MastersProgramsComponent } from './masters-programs/masters-programs.component';
import { CerificationProgramsComponent } from './cerification-programs/cerification-programs.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PostGraduationProgramsComponent,
    MastersProgramsComponent,
    CerificationProgramsComponent,
    HomeComponent,
    HeaderComponent,
    EnrollmentComponent,
    ContactUsComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    ScrollTopModule,
    StyleClassModule,
    RippleModule,
    CarouselModule,
    ScrollPanelModule,
    DialogModule,
    ToastModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
