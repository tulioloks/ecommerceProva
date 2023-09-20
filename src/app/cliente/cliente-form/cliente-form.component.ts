import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-cliente-form',
	templateUrl: './cliente-form.component.html',
	styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
	public indice: string = '';
	public nome: string = '';
	public cpf: string = '';
	public dataNascimento: string = '';
	public celular: string = '';
	public email: string = '';

	constructor(
		public cliente_service: ClienteService,
		public activated_route: ActivatedRoute
	) {
		this.activated_route.params
			.subscribe(
				(params: any) => {

					if (params.indice == undefined) return;
					this.cliente_service.ref()
						.child('/' + params.indice)
						.on('value', (snapshot: any) => {
							let dado: any = snapshot.val();
							this.indice = params.indice;
							this.nome = dado.nome;
							this.cpf = dado.cpf;
							this.dataNascimento = dado.dataNascimento;
							this.celular = dado.celular;
							this.email = dado.email;
						});
				}
			);
	}

	salvar() {
		let dados = {
			nome: this.nome,
			cpf: this.cpf,
			dataNascimento: this.dataNascimento,
			celular: this.celular,
			email: this.email
		};
		if (this.indice == '') {
			this.cliente_service.salvar(dados);
		} else {
			this.cliente_service.editar(this.indice, dados);
		}
	}
}
