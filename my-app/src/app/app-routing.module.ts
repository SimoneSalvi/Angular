import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Page401Component } from './page401/page401/page401.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_INITIALIZER } from '@angular/core';


const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'', component:Page401Component},
    {path:'home',component:HomeComponent },
    {path: 'cadastro', component:CadastroComponent},
    {path: 'cadastroAdm', component:CadastroAdmComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
