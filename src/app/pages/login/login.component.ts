import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../../services/authenticate.service';

import { Router, ActivatedRoute } from '@angular/router';

import { appConfig } from '../../app.config';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {AuthenticateService} from '../../services/authenticate.service' ;
import 'rxjs/add/operator/mergeMap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  token;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      }
    );
  }
}
