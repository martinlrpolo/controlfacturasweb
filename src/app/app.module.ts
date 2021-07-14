import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './inicio/login/login.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { HeaderComponent } from './complements/header/header.component';
import { MenuComponent } from './complements/menu/menu.component';
import { FooterComponent } from './complements/footer/footer.component';
import { NotfoundComponent } from './complements/notfound/notfound.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvioclienteComponent } from './enviocliente/enviocliente/enviocliente.component';
import { EnviodianComponent } from './enviodian/enviodian/enviodian.component';
import { VerEnvioclienteComponent } from './enviocliente/ver-enviocliente/ver-enviocliente.component';
import { VerEnviodianComponent } from './enviodian/ver-enviodian/ver-enviodian.component';
import { DocumentoclienteComponent } from './documentocliente/documentocliente/documentocliente.component';
import { VerDocumentoclienteComponent } from './documentocliente/ver-documentocliente/ver-documentocliente.component';
import { AgregarDocumentoComponent } from './documento/agregar-documento/agregar-documento.component';
import { ConfiguracionComponent } from './configuracion/configuracion/configuracion.component';
import { UnauthorizedComponent } from './complements/unauthorized/unauthorized.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import {NgxPaginationModule} from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    UsuarioComponent,
    EditarUsuarioComponent,
    AgregarUsuarioComponent,
    EnvioclienteComponent,
    EnviodianComponent,
    VerEnvioclienteComponent,
    VerEnviodianComponent,
    DocumentoclienteComponent,
    VerDocumentoclienteComponent,
    AgregarDocumentoComponent,
    ConfiguracionComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
