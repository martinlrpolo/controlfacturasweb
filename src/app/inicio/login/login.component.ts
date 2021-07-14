import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/services/login.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService,
  ) { }

  public formulario : FormGroup;

  ngOnInit()
  {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login()
  {
    let data = {
      "_id" : this.formulario.value.id,
      "password" : this.formulario.value.password,
    };
    this.loginService.login(data).subscribe(
  		response => {
        GeneralService.MENSAJE("Ingreso correcto", "success");
        localStorage.setItem('loginstatus', 'true');
        localStorage.setItem('userinfo', JSON.stringify(response));
        window.location.href = "";
  		},
  		error => {
        GeneralService.MENSAJE("Verificar información", "error");
  			console.log(<any>error);
  		}
    );
  }

}
