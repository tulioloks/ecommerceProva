import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    public firebase_service:FirebaseService
  ) { }

  ref(){
    return this.firebase_service
    .ref()
    .child('/produto');
  }

  salvar(dados:any){
    this.ref().push(dados).then();
  }

  listar(){
    return this.ref();
  }

  excluir(indice:string){
    this
    .ref()
    .child('/' + indice)
    .remove()
    .then();
  }

  editar(indice:string,dados:any){
    this.ref().child('/' + indice)
    .update(dados)
    .then();
  }

  async get(indice:string){
    let dado:any;
    await this.ref().orderByKey()
    .equalTo(indice)
    .once('value')
    .then( function(snapshot) {
      if (snapshot.exists()) {
          dado = Object.values(snapshot.val())[0];
      }
    });
    return dado;
  }
}