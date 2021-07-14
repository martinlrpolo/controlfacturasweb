import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { UsuarionService } from 'src/services/usuario.service';
import { DocumentoService } from 'src/services/documento.service';
import { EnvioClienteService } from 'src/services/enviocliente.service';
import { EnvioDianService } from 'src/services/enviodian.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    private usuarioService : UsuarionService,
    private documentoService : DocumentoService,
    private enviosCliente : EnvioClienteService,
    private enviosDian : EnvioDianService
  ) { }

  public usuarios : any = 0;
  public documentos : any = 0;
  public documentosDian : any = 0;
  public documentosCliente : any = 0;
  public userinfo : any = GeneralService.USER_INFO;

  ngOnInit()
  {
    this.listarUsuarios();
    this.listarDocumentos();
    this.listarDian();
    this.listarCliente();
    console.log(GeneralService.USER_INFO);
  }

  listarUsuarios()
  {
    this.usuarioService.listar().subscribe( response => {
        this.usuarios = response.length;
  		}
    );
  }

  listarDocumentos()
  {
    this.documentoService.listar().subscribe( response => {
        this.documentos = response.length;
      }
    );
  }

  listarDian()
  {
    this.enviosDian.listar().subscribe( response => {
        this.documentosDian = response.length;
      }
    );
  }

  listarCliente()
  {
      this.enviosCliente.listar().subscribe( response => {
        this.documentosCliente = response.length;
      }
    );
  }


}
