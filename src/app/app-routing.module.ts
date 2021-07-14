import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { NotfoundComponent } from './complements/notfound/notfound.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EnvioclienteComponent } from './enviocliente/enviocliente/enviocliente.component';
import { EnviodianComponent } from './enviodian/enviodian/enviodian.component';
import { VerEnvioclienteComponent } from './enviocliente/ver-enviocliente/ver-enviocliente.component';
import { VerEnviodianComponent } from './enviodian/ver-enviodian/ver-enviodian.component';
import { AgregarDocumentoComponent } from './documento/agregar-documento/agregar-documento.component';
import { DocumentoclienteComponent } from './documentocliente/documentocliente/documentocliente.component';
import { VerDocumentoclienteComponent } from './documentocliente/ver-documentocliente/ver-documentocliente.component';
import { ConfiguracionComponent } from './configuracion/configuracion/configuracion.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { UnauthorizedComponent } from './complements/unauthorized/unauthorized.component';


const routes: Routes = [
  { path:  '', component: InicioComponent },

  { 
    path:  'usuario',
    component: UsuarioComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: '/401'
      }
    }
  },
  { path:  'usuario/agregar', component: AgregarUsuarioComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },
  { path:  'usuario/editar/:id', component: EditarUsuarioComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },

  { path:  'enviocliente', component: EnvioclienteComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },
  { path:  'enviocliente/ver/:id', component: VerEnvioclienteComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },

  { path:  'enviodian', component: EnviodianComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },
  { path:  'enviodian/ver/:id', component: VerEnviodianComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },

  { path:  'documentocliente', component: DocumentoclienteComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'CLIENTE',   redirectTo: '/401'} } },
  { path:  'documentocliente/ver/:id', component: VerDocumentoclienteComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'CLIENTE',   redirectTo: '/401'} } },

  { path:  'documento/agregar', component: AgregarDocumentoComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },

  { path:  'configuracion', component: ConfiguracionComponent, canActivate: [NgxPermissionsGuard],  data: { permissions: { only: 'ADMIN',   redirectTo: '/401'} } },

  { path:  '401', component: UnauthorizedComponent },
  
  { path:  '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
