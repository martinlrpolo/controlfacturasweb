import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { EnvioClienteService } from 'src/services/enviocliente.service';
import { EnvioDianService } from 'src/services/enviodian.service';

@Component({
  selector: 'app-enviodian',
  templateUrl: './enviodian.component.html',
  styleUrls: ['./enviodian.component.scss']
})
export class EnviodianComponent implements OnInit {

  constructor(
    private envioDianService : EnvioDianService
  ) { }
  public envios : any = [];
  public p : any;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.envioDianService.listar().subscribe(
  		response => {
        this.envios = response;
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
        this.envioDianService.eliminar(id).subscribe(
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
