import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PagamentoService } from 'src/app/pagamento/pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.scss']
})
export class PedidoListarComponent {
    public dados:Array<any> = [];
	constructor(
		public pedido_service: PedidoService,
		public cliente_service: ClienteService,
		public produto_service: ProdutoService,
		public pagamento_sevice: PagamentoService,
		public router:Router
	){

	}

	ngOnInit(): void {
		this.pedido_service.listar()
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
	
			  let cliente_nome:any = await this.cliente_service.get(e.cliente);
			  let produto_nome:any = await this.produto_service.get(e.produto);
			  let pagamento_tipoPagamento:any = await this.pagamento_sevice.get(e.pagamento);
			  // Adiciona os elementos no vetor
			  // de dados
			  this.dados.push({
				descricao: e.descricao,
				cliente: cliente_nome.nome,
				produto: produto_nome.nome,
				//quantidade: e.quantidade,
				//valor: e.valor,
				pagamento: pagamento_tipoPagamento.tipoPagamento,
				indice: Object.keys(snapshot.val())[i]
			  });
			}
		  );
		});
	  }
	
	  excluir(key:string){
		this.pedido_service.excluir(key);
	  }
	
	  editar(key:string){
		this
		.router
		.navigate(['/pedido/form/' + key]);
	  }
}
