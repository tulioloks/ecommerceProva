import { Component } from '@angular/core';
import { PagamentoService } from '../pagamento.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.scss']
})
export class PagamentoFormComponent {
  public indice:string    = '';
  public tipoPagamento:string = '';

  constructor(
    public pagamento_service:PagamentoService,
    public activated_route:ActivatedRoute,
    public router: Router
  ){
    this.activated_route.params
    .subscribe(
      (params:any) => {
  
        if(params.indice == undefined) return;
        this.pagamento_service.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.tipoPagamento = dado.tipoPagamento;
        });
      }
    );
  }

  salvar(){
    let dados = {
      tipoPagamento : this.tipoPagamento,
    };

    if (dados.tipoPagamento.trim() == '' ){
      document.querySelector('#tipoPagamento')
      ?.classList.add('has-error');

      return;
    }

    if (this.indice == ''){  
      this.pagamento_service.salvar(dados);
    }else{
      this.pagamento_service.editar(this.indice,dados);
    }

    this.router.navigate(['/pagamento/listar/']);
  }
}
