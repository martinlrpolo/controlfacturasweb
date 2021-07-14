import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnvioClienteService } from 'src/services/enviocliente.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-ver-enviocliente',
  templateUrl: './ver-enviocliente.component.html',
  styleUrls: ['./ver-enviocliente.component.scss']
})
export class VerEnvioclienteComponent implements OnInit {

  constructor(
    private envioClienteService: EnvioClienteService,
    private route : ActivatedRoute
  ) { }

  public formulario: FormGroup;
  public envio : any = null;
  public id : any = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultar(this.id);
  }


  consultar(id)
  {
    this.envioClienteService.consultar(id).subscribe(
      response => { 
        this.envio = response;
        console.log(this.envio)
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

}
