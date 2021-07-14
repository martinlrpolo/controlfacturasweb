import { Component, OnInit } from '@angular/core';
import { EnvioClienteService } from 'src/services/enviocliente.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-documentocliente',
  templateUrl: './documentocliente.component.html',
  styleUrls: ['./documentocliente.component.scss']
})
export class DocumentoclienteComponent implements OnInit {

  constructor(
    private envioClienteService : EnvioClienteService
  ) { }

  public facturas : any = [];
  public p : any;

  ngOnInit()
  {
    let id = GeneralService.USER_INFO['id'];
    this.listar(id);
  }

  listar(id)
  {
    this.envioClienteService.listarPorUsuario(id).subscribe(
  		response => {
        this.facturas = response;
        console.log(this.facturas)
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
  

  /*
  eliminar(id)
  {
    GeneralService.CONFORMACION().subscribe(
  		response => {
        this.envioClienteService.eliminar(id).subscribe(
          response => {
            GeneralService.MENSAJE("Eliminado correctamente", "success");
            this.listar();
          },
          error => {
            GeneralService.MENSAJE("Ha ocurrido un error", "error");
            console.log(<any>error);
          }
        );
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }
  */

}
