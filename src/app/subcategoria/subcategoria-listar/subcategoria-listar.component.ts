import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-listar',
  templateUrl: './subcategoria-listar.component.html',
  styleUrls: ['./subcategoria-listar.component.scss']
})
export class SubcategoriaListarComponent {
  public dados:Array<any> = [];
  constructor(
    public subcategoria_service:SubcategoriaService,
    public categoria_service:CategoriaService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.subcategoria_service.listar()
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

          let categoria_descricao:any = await this.categoria_service.get(e.categoria);
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            descricao: e.descricao,
            categoria: categoria_descricao.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.subcategoria_service.excluir(key);
  }

  editar(key:string){
    this
    .router
    .navigate(['/subcategoria/form/' + key]);
  }
}