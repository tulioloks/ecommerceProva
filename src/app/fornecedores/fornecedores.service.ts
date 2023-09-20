import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(
    public firebase_service:FirebaseService
  ) { }

  ref(){
    return this.firebase_service.ref().child('/fornecedores');
  }

  salvarForn(dados:any){
    this.ref().push(dados).then();
  }

  listar(){
    return this.ref();
  }

  excluir(indice:string){
    this.ref()
    .child('/' + indice)
    .remove()
    .then();
  }

  editarForn(indice:string,dados:any){
    this.ref().child('/' + indice)
    .update(dados)
    .then();
  }

  async get(indice: string) {
		let dado: any;
		await this.ref().orderByKey()
			.equalTo(indice)
			.once('value')
			.then(function (snapshot) {
				if (snapshot.exists()) {
					dado = Object.values(snapshot.val())[0];
				}
			});
		return dado;
	}
}