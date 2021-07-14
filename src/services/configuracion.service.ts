import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "configuracion/";

  consultar(): any 
  {
    const headers = GeneralService.HEADERS('application/json');
  	return this.http.get(this.url + "consultar/", {headers : headers}); 
  }

  editar(data) : any
  {
    const headers = GeneralService.HEADERS('application/json');
  	return this.http.put(this.url + "editar/", data, {headers : headers}); 
  }

}
