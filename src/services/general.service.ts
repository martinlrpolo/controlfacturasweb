import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  public static WS_URL: string = "http://190.249.158.184:8091/api/";
  public static DOC_URL : any = "http://190.249.158.184:8091/api/documento/consultarpdf/";


  public static LOGIN_STATUS : any = localStorage.getItem('loginstatus');
  public static USER_INFO : any = JSON.parse( localStorage.getItem('userinfo') );

  public static HEADERS(contenttype: any): any {
    let json;
    if (contenttype == null) {
      json = {
        'Authorization': GeneralService.USER_INFO['token'],
      };
    } else {
      json = {
        'Authorization': GeneralService.USER_INFO['token'],
        'Content-Type': contenttype
      };
    }
    return json;
  }

  public static CONFORMACION(): any 
  {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  public static MENSAJE(msg, type) 
  {
    let title = "Mensaje";
    if (type == "success")
      title = "!Buen trabajo!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static EMAIL_VAL(mail) 
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true);
    }else{
      return (false);
    }
  }

}
