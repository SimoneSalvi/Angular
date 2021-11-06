import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

@Input() title = "Faça seu cadastro de usuário:"
@Input() adm = false;

  public mostrarCadastro_ = true;
  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    email :new FormControl('', Validators.compose([Validators.required, Validators.email])),
    data : new FormControl(''),
    senha: new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(8)])),
  })

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  nome: any
  email: any
  data: any
  senha: any

cadastratar(){

  console.log(this.formCadastro, "meu formulario");
  window.location.href = 'http://localhost:4200/login';

}


voltarLogin(){
  window.location.href = 'http://localhost:4200/login';
}

}