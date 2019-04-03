import { Component, OnInit } from '@angular/core';
import {DocRequestService} from '../../services/doc-request.service'
import { Router } from '@angular/router';
import { FileServiceService } from '../../services/file-service.service';
import { saveAs } from 'file-saver';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'ngx-download-doc',
  templateUrl: './download-doc.component.html',
  styleUrls: ['./download-doc.component.scss']
})
export class DownloadDocComponent implements OnInit {

  current: number = 0;
  currentbtn:number=0;
  p: number = 1;
  data: any = [];
  versionfiles :any = [];
  panelExpanded = true;
  loading ;
  _loading;
  loadingbtn;



  constructor(private DocsService :DocRequestService,
    private router :Router,
    private _fileService:FileServiceService) { }

  ngOnInit() {

      this._loading=true;
      this.DocsService.getDocs().subscribe(data => {
      this._loading=false;

      this.data=data;
      });




  }


  downloadFile(event,filepath:String,filename:String){
    this.loadingbtn=true;
    console.log('---in download----------')

    var body = {filepath:filepath}
    this._fileService.downloadFile(filepath, filename).subscribe(
      result => saveAs(result,filename),
      error => console.error(error)
    )
}

  showversion(event,filename:String){
    this.loading=true;
    console.log('====in showversion=====')

    var body = {filename:filename};
    this._fileService.showversion(event,filename).subscribe(data => {
    this.loading =false;
    this.versionfiles=data;

    });
}


}
