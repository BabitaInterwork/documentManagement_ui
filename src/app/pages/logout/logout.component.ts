import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../services/authenticate.service'
@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private authService: AuthenticateService) { }

  ngOnInit() {

    this.authService.logout();
  }

  

}
