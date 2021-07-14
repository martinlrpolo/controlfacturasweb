import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoService } from 'src/services/catalogo.service';
import {  ActivatedRoute } from '@angular/router';
import { EnvioClienteService } from 'src/services/enviocliente.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-ver-documentocliente',
  templateUrl: './ver-documentocliente.component.html',
  styleUrls: ['./ver-documentocliente.component.scss']
})
export class VerDocumentoclienteComponent implements OnInit {

  constructor(
    private envioClienteService: EnvioClienteService,
    private route : ActivatedRoute,
    private catalogoService : CatalogoService
  ) { }

  public formulario: FormGroup;
  public factura : any = null;
  public id : any = null;
  public estados : any = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultar(this.id);
    this.listarEstados("ESTADO_ENVIO_CLIENTE");
  }

  listarEstados(tipo)
  {
    this.catalogoService.listar(tipo).subscribe(
      response => { 
        this.estados = response;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  consultar(id)
  {
    this.envioClienteService.consultar(id).subscribe(
      response => { 
        this.factura = response;
        console.log(this.factura)
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  verDocumento(doc, tipo)
  {
    window.location.href = GeneralService.DOC_URL + "/" + tipo + "/" + doc;
  }

  actualizar(estado)
  {
    let data = this.factura;
    data['estado'] = estado;
    data['comentario'] = data['comentario'];
    this.envioClienteService.editar(data).subscribe(
      response => { 
        GeneralService.MENSAJE("Documento editado correctamente", "success");
        this.consultar(this.id);
      },
      error => {
        GeneralService.MENSAJE("Ha ocurrido un error", "error");
        console.log(<any>error);
      }
    );
  }

}
