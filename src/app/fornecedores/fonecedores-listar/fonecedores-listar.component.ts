import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FornecedoresService } from '../fornecedores.service';
import { EstadoService } from 'src/app/estado/estado.service';

@Component({
  selector: 'app-fonecedores-listar',
  templateUrl: './fonecedores-listar.component.html',
  styleUrls: ['./fonecedores-listar.component.scss']
})
export class FonecedoresListarComponent {
  public dados:Array<any> = [];
  constructor(
    public fornecedores_service:FornecedoresService,
    public estado_service:EstadoService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.fornecedores_service.listar()
    .on('value',(snapshot:any) => {

      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      // Percorre a coleção de dados
      Object.values( response )
      .forEach(
        async (e:any,i:number) => {

          let fornecedor_nomeFantasia:any = await this.fornecedores_service.get(e.nome);

          this.dados.push({
            nome: e.nome,
            cnpj:e.cnpj,

            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  excluirForn(key:string){
    this.fornecedores_service.excluir(key);
  }

  editarForn(key:string){
    this
    .router
    .navigate(['/fornecedores/form/' + key]);
  }
}