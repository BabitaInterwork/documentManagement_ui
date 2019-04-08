import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

import { ValueTransformer } from '@angular/compiler/src/util';

const URL = 'http://localhost:4000/doc/upload';


@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  progress:number=0.9;
  constructor() { }


  public uploader:FileUploader = new FileUploader({url: URL ,authToken: 'Bearer '+JSON.parse(localStorage.getItem('currentUser')).token,

  additionalParameter: {user:JSON.stringify(localStorage.getItem('currentUser'))},
   itemAlias: 'photo'});



  ngOnInit() {

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; }

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {

         console.log("ImageUpload:uploaded:", item, status, response);
      alert('file uploaded successfully !')


     };

     this.uploader.onProgressItem = (progress: any) => {
      console.log(progress['progress']);
      this.progress=progress['progress']
     };

  }




}
