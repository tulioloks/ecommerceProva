import { Component } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';

@Component({
  selector: 'app-fonecedores-form',
  templateUrl: './fonecedores-form.component.html',
  styleUrls: ['./fonecedores-form.component.scss']
})
export class FonecedoresFormComponent {
  public estados:Array<any>   = [];
  public indice:string        = '';
  public nome:string  = '';
  public logradouro:string     = '';
  public razaoSocial:string   = '';
  public complemento:string   = '';
  public cnpj:string          = '';
  public bairro:string        = '';
  public contato:string       = '';
  public cidade:string        = '';
  public email:string         = '';
  public estado:string        = '';
  constructor(
    public estado_service:EstadoService,
    public fornecedores_service:FornecedoresService,
    public router:Router,
    public activated_route:ActivatedRoute
  ){
    this.estado_service.listar()
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.fornecedores_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any  = snapshot.val();
          this.estado   = dado.estado;
          this.indice  = params.indice;
          this.nome  = dado.nome;
          this.logradouro = dado.logadouro;
          this.razaoSocial = dado.razaoSocial;
          this.complemento = dado.complemento;
          this.cnpj = dado.cnpj;
          this.bairro = dado.bairro;
          this.contato = dado.contato;
          this.cidade = dado.cidade;
          this.email = dado.email;

        })
      }
    )
    this.estado_service.listar()
    .once('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.estados.push({
            nomeEstado: e.nomeEstado,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }


  salvarForn(){
    let dados = {
      nome:this.nome,
      estado:this.estado,
      logadouro:this.logradouro,
      razaoSocial:this.razaoSocial,
      complemento:this.complemento,
      cnpj:this.cnpj,
      bairro:this.bairro,
      contato:this.contato,
      cidade:this.cidade,
      email:this.email

    };
    if (this.indice == ''){
    let isValid = true;
    if (dados.nome == '' ){
      document.querySelector('#nomeFantasia')
      ?.classList.add('has-error');
      return;
    }
    if (dados.bairro === '') {
      document.querySelector('#bairro')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.cnpj === '') {
      document.querySelector('#cnpj')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.cidade === '') {
      document.querySelector('#cidade')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.email === '') {
      document.querySelector('#email')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.email === '' || dados.cidade === '' || dados.cnpj === '' || dados.bairro === '' || dados.nome == '') {
      isValid = false;
      return;
    }
      this.fornecedores_service.salvarForn(dados);
    }else{
      this.fornecedores_service.editarForn(this.indice,dados);
    }
    alert("Salvo com sucesso!");
    this.router.navigate(['/fornecedores/listar/']);
  }
}