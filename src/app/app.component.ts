import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Control facturas | Matrix SQL';
  loginstatus = GeneralService.LOGIN_STATUS;

  constructor(private permissionsService: NgxPermissionsService){}

  ngOnInit(): void {
    if(GeneralService.USER_INFO != null)
    {
      const perm = [];
      perm.push(GeneralService.USER_INFO['rol'])
      this.permissionsService.loadPermissions(perm);
    }
  }
  
}
