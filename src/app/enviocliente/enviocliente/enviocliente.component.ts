import { Component, OnInit } from '@angular/core';
import { UsuarionService } from 'src/services/usuario.service';
import { GeneralService } from 'src/services/general.service';
import { EnvioClienteService } from 'src/services/enviocliente.service';

@Component({
  selector: 'app-enviocliente',
  templateUrl: './enviocliente.component.html',
  styleUrls: ['./enviocliente.component.scss']
})
export class EnvioclienteComponent implements OnInit {

  constructor(
    private envioClienteService : EnvioClienteService
  ) { }
  public envios : any = [];
  public p : any;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.envioClienteService.listar().subscribe(
  		response => {
        this.envios = response;
        console.log(response)
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }

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

}
