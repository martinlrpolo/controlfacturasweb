import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogoService } from 'src/services/catalogo.service';
import { GeneralService } from 'src/services/general.service';
import { Router } from '@angular/router';
import { DocumentoService } from 'src/services/documento.service';
declare var $: any;

@Component({
  selector: 'app-agregar-documento',
  templateUrl: './agregar-documento.component.html',
  styleUrls: ['./agregar-documento.component.scss']
})
export class AgregarDocumentoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private documentoService : DocumentoService,
    private catalogoService : CatalogoService,
    private router: Router,
  ) { }

  public formulario : FormGroup;
  public tipos : any = [];
  public file : File;
  public xml : any;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      _id: ['', Validators.required],
      tipo: ['', Validators.required],
      usuario: ['', Validators.required],
      numero : ['', Validators.required]
    });
    this.listarTipos("TIPO_DOC");
  }


  agregar()
  {

    if(this.xml == null)
    {
      GeneralService.MENSAJE("Es necesario cargar un archivo", "error");
      return;
    }
    let data = {
      "_id" : this.formulario.value._id,
      "tipo" : {_id: this.formulario.value.tipo},
      "usuario" : {_id : this.formulario.value.usuario},
      "numero" : this.formulario.value.numero,
      "xml" : this.xml
    };
    this.documentoService.agregar(data).subscribe(
  		response => {
        GeneralService.MENSAJE("Documento agregado correctamente", "success");
        this.router.navigate(['/enviodian']);
  		},
  		error => {
        GeneralService.MENSAJE("Verificar información", "error");
  			console.log(<any>error);
  		}
    );
  }

  fileChanged(e) {
    if(e.target.files.length > 0)
    {
      if(e.type != "text/xml")
      {
        this.file = e.target.files[0];
        this.fileToString(this.file);
      }else{
        GeneralService.MENSAJE("El archivo debe ser XML", "error");
        this.file = null;
        this.xml = null;
      }
    }else{
      this.xml = null;
      this.file = null;
    }
  }

  fileToString(file)
  {
    var c = file.text();
    let line = this;
    c.then(function(result) {
      line.xml = result;
    });
  }


  listarTipos(tipo)
  {
    this.catalogoService.listar(tipo).subscribe(
  		response => {
        this.tipos = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }

}
