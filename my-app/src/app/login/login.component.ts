import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 email: any;
 senha: any;

 public mostrarCadastro = false;

  constructor(public au: AuthService) { }

  ngOnInit(): void {
    this.mostrarCadastro = false;
  }

  liberarCadastro(){
    //this.mostrarCadastro = true
    window.location.href = 'http://localhost:4200/cadastro';
  }

  esconderCadastro(){
    this.mostrarCadastro = false
  }

  fazerLogin(){
    if (this.email != null && this.senha != null){
        console.log(this.email, "email login");
        console.log(this.senha, "senha senha");
        this.au.loginWithEmail(this.email,this.senha)
        console.log("Finalizado");
        window.location.href = 'http://localhost:4200/home';
    }else{
        alert("Preencher campos obrigatorios");
        return;
    }
    
    }

  






}