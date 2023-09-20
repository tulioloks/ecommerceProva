import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(
    public firebase_service:FirebaseService
  ) { }

  ref(){
    return this.firebase_service
    .ref()
    .child('/subcategoria');
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
}