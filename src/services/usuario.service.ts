import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarionService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "usuario/";

  listar(): any 
  {
    const headers = GeneralService.HEADERS('application/json');
  	return this.http.get(this.url + "listar", {headers : headers}); 
  }

  consultar(id) : any
  {
    const headers = GeneralService.HEADERS('application/json');
    return this.http.get(this.url + "consultar/" + id, {headers : headers}); 
  }

  agregar(data) : any
  {
    const headers = GeneralService.HEADERS('application/json');
    return this.http.post(this.url + "agregar/", data, {headers : headers}); 
  }

  editar(data) : any
  {
    const headers = GeneralService.HEADERS('application/json');
    return this.http.put(this.url + "editar", data, {headers : headers}); 
  }

  eliminar(id) : any
  {
    const headers = GeneralService.HEADERS('application/json');
    return this.http.delete(this.url + "eliminar/" + id, {headers : headers}); 
  }

}
