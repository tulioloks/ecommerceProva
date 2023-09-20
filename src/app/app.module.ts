import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PagamentoFormComponent } from './pagamento/pagamento-form/pagamento-form.component';
import { PagamentoListarComponent } from './pagamento/pagamento-listar/pagamento-listar.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FonecedoresListarComponent } from './fornecedores/fonecedores-listar/fonecedores-listar.component';
import { FonecedoresFormComponent } from './fornecedores/fonecedores-form/fonecedores-form.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    PagamentoFormComponent,
    PagamentoListarComponent,
    PagamentoComponent,
    SubcategoriaComponent,
    SubcategoriaFormComponent,
    SubcategoriaListarComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListarComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    FornecedoresComponent,
    FonecedoresListarComponent,
    FonecedoresFormComponent,
    EstadoComponent,
    EstadoListarComponent,
    EstadoFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCksILYxPq2Q9fcWpPBmMCm-tmv7sWD2WM",
      authDomain: "ecommerce-c6e6c.firebaseapp.com",
      projectId: "ecommerce-c6e6c",
      storageBucket: "ecommerce-c6e6c.appspot.com",
      messagingSenderId: "1064783833421",
      appId: "1:1064783833421:web:2eeb7c02be1a85d82e2f04",
      measurementId: "G-G8FQ8LBKDV"
    }),
    AngularFireStorageModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
