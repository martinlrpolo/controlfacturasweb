import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnvioDianService } from 'src/services/enviodian.service';
import { DocumentoService } from 'src/services/documento.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-ver-enviodian',
  templateUrl: './ver-enviodian.component.html',
  styleUrls: ['./ver-enviodian.component.scss']
})
export class VerEnviodianComponent implements OnInit {

  constructor(
    private envioDianService: EnvioDianService,
    private route : ActivatedRoute,
    private documentoService : DocumentoService
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
    this.envioDianService.consultar(id).subscribe(
      response => { 
        this.envio = response;
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  estado(id)
  {
    this.documentoService.actualizardoc(id).subscribe(
      response => { 
        this.envio = response;
        GeneralService.MENSAJE(response, "success");
        this.consultar(this.id);
      },
      error => {
        GeneralService.MENSAJE(error, "error");
        console.log(<any>error);
      }
    );
  }

  verDocumento(doc, tipo)
  {
    window.location.href = GeneralService.DOC_URL + "/" + tipo + "/" + doc;
  }


}
