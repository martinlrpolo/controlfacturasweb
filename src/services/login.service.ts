import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "acceso/login";

  login(data): any 
  {
    const headers = {'Content-Type': 'application/json'}
    let params = data;
  	return this.http.post(this.url, params, {headers : headers}); 
  }

}
