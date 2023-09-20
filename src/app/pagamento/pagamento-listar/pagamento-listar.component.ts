import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../pagamento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-listar',
  templateUrl: './pagamento-listar.component.html',
  styleUrls: ['./pagamento-listar.component.scss']
})
export class PagamentoListarComponent implements OnInit{
  public dados:Array<any> = [];
  public count:any = 0;
  constructor(
    public pagamento_service:PagamentoService,
    public toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.pagamento_service.listar()
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
            tipoPagamento: e.tipoPagamento,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.pagamento_service.excluir(key);
    this.showSuccess();
  }

  editar(key:string){
    this.router.navigate(['/pagamento/form/' + key]);
  }

  showSuccess() {
    this.toastr.success('Operação bem-sucedida!', 'Sucesso');
  }
}
