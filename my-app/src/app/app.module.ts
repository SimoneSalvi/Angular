import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page401Component } from './page401/page401/page401.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {​​​ AngularFireModule }​​​ from'@angular/fire';
import {​​​ AngularFireAuthModule }​​​ from'@angular/fire/auth';
import { AuthService } from './auth.service';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page401Component,
    CadastroComponent,
    CadastroAdmComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBPz-LFVLjpBIQw7CPiCUU4V_S5lzv9CR0",
  authDomain: "conversor-6018b.firebaseapp.com",
  projectId: "conversor-6018b",
  storageBucket: "conversor-6018b.appspot.com",
  messagingSenderId: "754459972439",
  appId: "1:754459972439:web:85f042aeec5590549fa412"
    }), AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }