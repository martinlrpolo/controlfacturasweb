import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "catalogo/";

  listar(tipo): any 
  {
    const headers = GeneralService.HEADERS('application/json');
  	return this.http.get(this.url + "listar/" + tipo, {headers : headers}); 
  }

}
