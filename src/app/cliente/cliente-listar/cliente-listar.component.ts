import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cliente-listar',
	templateUrl: './cliente-listar.component.html',
	styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent {
	public dados: Array<any> = [];
	constructor(
		public cliente_service: ClienteService,
		public router: Router
	) { }

	ngOnInit(): void {
		this.cliente_service.listar()
			.on('value', (snapshot: any) => {

				// Limpa variavel local com os dados
				this.dados.splice(0, this.dados.length);

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				// Percorre a coleção de dados 
				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.dados.push({
								nome: e.nome,
								email: e.email,
								indice: Object.keys(snapshot.val())[i]
							});
							console.log(this.dados);

						}
					);
			});
	}

	excluir(key: string) {
		this.cliente_service.excluir(key);
	}

	editar(key: string) {
		this
			.router
			.navigate(['/cliente/form/' + key]);
	}
}
