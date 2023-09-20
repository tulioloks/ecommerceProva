import { Component } from '@angular/core';
import { EstadoService } from '../estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent {

  public indice:string     = '';
  public nomeEstado:string = '';

  constructor(
    public estado_service:EstadoService,
    public activated_route:ActivatedRoute,
    public router: Router
){  this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.estado_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any   = snapshot.val();
          this.indice    = params.indice;
          this.nomeEstado = dado.nomeEstado;
        })
      }
    )
  }
  salvarEstado(){
    let dados = {
      nomeEstado:this.nomeEstado
    };

   if (this.indice == ''){
      if(dados.nomeEstado == ''){
        document.querySelector('#descricao')
        ?.classList.add('has-error');
        return;
      }
      this.estado_service.salvarEst(dados);
    }else{
      this.estado_service.editarEst(this.indice,dados);
    }
    this.router.navigate(['/estado/listar/']);
  }

}