import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent implements OnInit{
  public dados:Array<any> = [];
  public count:any = 0;
  constructor(
    public categoria_service:CategoriaService,
    private toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.categoria_service.listar()
    .on('value', (snapshot:any) => {

      // limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      //dados retornados do firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      // Percorre a coleção de dados 
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.categoria_service.excluir(key);
    this.showSuccess();
  }
  
  editar(key:string){
    this
    .router
    .navigate(['/categoria/form/' + key]);
  }

  showSuccess() {
    this.toastr.success('Operação bem-sucedida!', 'Sucesso');
  }
}
