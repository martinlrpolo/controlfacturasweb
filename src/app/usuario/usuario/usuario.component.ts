import { Component, OnInit } from '@angular/core';
import { UsuarionService } from 'src/services/usuario.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private usuarioService : UsuarionService
  ) { }
  public usuarios : any = [];
  public p : any;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.usuarioService.listar().subscribe(
  		response => {
        this.usuarios = response;
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
        this.usuarioService.eliminar(id).subscribe(
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
