import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../estado.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.scss']
})
export class EstadoListarComponent implements OnInit{

  public dados:Array<any> = [];
  public count:any = 0;
  constructor(
    public estado_service:EstadoService,
    public toastr: ToastrService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.estado_service.listar()
    .on('value', (snapshot:any) => {

      //limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      //dados retornados do firebase 
      let response = snapshot.val();

      //não setar valores caso não venha 
      // nenhum registro
      if (response == null) return;
      
      //percorre a coleção de dados
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          //adiciona os elementos no vetor
          // de dados
          this.dados.push({
            nomeEstado: e.nomeEstado,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }


  excluirEst(key:string){
    this.estado_service.excluirEst(key);
    this.showSuccess();
  }

  editarEst(key:string){
    this.router.navigate(['/estado/form/' + key]);
  }
  showSuccess() {
    this.toastr.success('Operação bem-sucedida!', 'Sucesso');
  }
}
