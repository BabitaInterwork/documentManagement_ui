import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileServiceService {
  authToken;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getToken() {
    var user = localStorage.getItem('currentUser');

    var ObUser = JSON.parse(user);

    this.authToken = ObUser.token;
  }

  downloadFile(filepath: String, fileOriginalname: String, filename: String, hash: String) {
    this.getToken();
    var body = { filename: filename, filepath: filepath, fileOriginalname: fileOriginalname, hash: hash };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authToken,
    });

    return this.http.post('http://localhost:4000/doc/download', body, {
      responseType: 'blob',
      headers: headers,
    });
  }

  showversion(event, filename: String) {
    this.getToken();
    console.log('====in showversion=====');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authToken,
    });

    var body = { filename: filename };
    return this.http.post('http://localhost:4000/doc/getVersion', JSON.stringify(body), {
      headers: headers,
    });
  }
}
