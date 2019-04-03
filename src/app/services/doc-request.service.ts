import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { getToken } from '@angular/router/src/utils/preactivation';


@Injectable({
  providedIn: 'root'
})
export class DocRequestService {
  authToken;

  configUrl = 'http://localhost:4000/doc/getDocs';

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }


getToken(){
  var user=   localStorage.getItem('currentUser')

  var ObUser=JSON.parse(user);

  this.authToken= ObUser.token;



}

  getDocs() {

this.getToken()
  const headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+this.authToken
  });

    return this.http.get(this.configUrl,{headers:headers});

  }




}

