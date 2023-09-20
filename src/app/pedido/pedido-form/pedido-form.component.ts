import { Component } from '@angular/core';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { PagamentoService } from 'src/app/pagamento/pagamento.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pedido-form',
	templateUrl: './pedido-form.component.html',
	styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
	public clientes: Array<any> = [];
	public produtos: Array<any> = [];
	public pagamentos: Array<any> = [];
	public indice:string = '';
	public descricao: string = '';
	public cliente: string = '';
	public produto: string = '';
	public quantidade: string = '';
	public valor: string = '';
	public pagamento: string = '';

	constructor(
		public cliente_service: ClienteService,
		public produto_service: ProdutoService,
		public pagamento_service: PagamentoService,
		public pedido_service: PedidoService,
		public activated_route: ActivatedRoute
	) {

		this.cliente_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.clientes.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.produto_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.produtos.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.pagamento_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.pagamentos.push({
								descricao: e.tipoPagamento,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.activated_route.params
			.subscribe(
				(params: any) => {

					if (params.indice == undefined) return;
					this.pedido_service.ref()
						.child('/' + params.indice)
						.on('value', (snapshot: any) => {
							let dado: any = snapshot.val();
							this.indice = params.indice;
							this.descricao = dado.descricao;
							this.cliente = dado.cliente;
							this.produto = dado.produto;
							//this.quantidade = dado.quantidade;
							//this.valor = dado.valor;
							this.pagamento = dado.pagamento;
						});
				}
			);
	}

	salvar() {
		let dados = {
			descricao: this.descricao,
			cliente: this.cliente,
			produto: this.produto,
			//quantidade: this.quantidade,
			//valor: this.valor,
			pagamento: this.pagamento
		};
		if (dados.descricao == '') {
			document.querySelector('#descricao')
				?.classList.add('has-error');
			return;
		}
		if (this.indice == '') {
			this.pedido_service.salvar(dados);
		} else {
			this.pedido_service.editar(this.indice, dados);
		}
	}
}