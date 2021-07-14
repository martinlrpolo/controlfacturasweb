import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public userinfo : any;

  ngOnInit() {
    this.userinfo = GeneralService.USER_INFO;
  }

  logout()
  {
    localStorage.clear();
    GeneralService.USER_INFO = null;
    GeneralService.LOGIN_STATUS = null;
    window.location.href = "";
  }

}
