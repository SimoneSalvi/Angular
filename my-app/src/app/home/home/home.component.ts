import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public listarCompletaMoedas = new Array();
  //public listaDeMoedas1 = new Array();
  //public listaDeMoedas2 = new Array();

  public listaDeMoedas = new Array();
  md1: number = 0;
  md2: number = 0;
  resultado: string = "";
  constructor(public api: ApiService) { }

  //**Converter do real */
  resultadoReais: string = "";
  reais: number =0;

  ngOnInit(): void {
    this.listarTodasMoedas();
  }

  listarTodasMoedas() {
    this.api.buscarMoedas().subscribe(res => {
      console.log(res, "minhas moedas")

      this.listaDeMoedas.push(res.BTC);
      this.listaDeMoedas.push(res.USD);
      this.listaDeMoedas.push(res.EUR);
      this.listaDeMoedas.push(res.DOGE);
      this.listaDeMoedas.push(res.ARS);
      this.listaDeMoedas.push(res.AUD);
      this.listaDeMoedas.push(res.CAD);
      this.listaDeMoedas.push(res.CHF);
      this.listaDeMoedas.push(res.CNY);
      this.listaDeMoedas.push(res.ETH);
      this.listaDeMoedas.push(res.GBP);
      this.listaDeMoedas.push(res.JPY);
      console.log("Lista: ", this.listaDeMoedas);

      /*this.listaDeMoedas1.push(res.BTC);
      this.listaDeMoedas1.push(res.USD);
      this.listaDeMoedas1.push(res.EUR);
      this.listaDeMoedas1.push(res.DOGE);

      this.listaDeMoedas2.push(res.BTC);
      this.listaDeMoedas2.push(res.USD);
      this.listaDeMoedas2.push(res.EUR);
      this.listaDeMoedas2.push(res.DOGE);
      */
      //this.formarLista(res)

      //console.log("Lista 1: ",this.listaDeMoedas1);
      //console.log("Lista 2: ",this.listaDeMoedas2);


    })
  }

  formarLista(lista: any) {

  }
  fazerConversao() {
    this.resultado = (this.md1 * this.md2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
  }
  /*
    formarLista(lista:any){
        lista = []
        let novalista = new Array();
        console.log(novalista, "start")
        for (let i=0; i<3; i++){

          console.log(listaRecebida)
        }
    }
    */

  converterDoReal() {

    this.resultadoReais = (this.md2 * this.reais).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
  }
  
  logout(){
    window.location.href = 'http://localhost:4200/login';
  }
}

//=======================================================================
/*       Primeiro conversor 

   <p>Selecione a moeda:</p>
    <select name="md1" [(ngModel)]="md1" class="form-select" aria-label="Default selact example">
        <option [ngValue]="null" selected>Selecione Moeda</option>
        <option *ngFor="let item of listaDeMoedas" [ngValue]="item.high">{{item.code}}>{{item.name}}>Valor={{item.high}}
        </option>
    </select>

    <p>Selecione a moeda para conversão:</p>
    <select name="md2" [(ngModel)]="md2" class="form-select" aria-label="Default selact example">
        <option [ngValue]="null" selected>Selecione a moeda que você quer converter</option>
        <option *ngFor="let item of listaDeMoedas" [ngValue]="item.high">{{item.code}}>{{item.name}}>Valor={{item.high}}
        </option>
    </select>
    <!--<select *ngFor="let item of listadeMoedas1" class="form-select" aria-label="Default selact example">
        <option selected>Selecione a moeda que você quer converter</option>
        <option value="1">One</option>
    </select>
        <button (click) = "fazerConversao()" class="btn-primary btn-convert">Converta</button>-->
    <br>
    <button (click)="fazerConversao()">Converta</button>

    Valor da conversão:
    <input [(ngModel)]="resultado" name="resultado" class="form-control-plaintext" id="resultado" value="">


*/