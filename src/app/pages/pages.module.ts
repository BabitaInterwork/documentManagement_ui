import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
//import {FileSelectDirective} from 'ng2-file-upload' ;
import {FileUploadComponent} from './file-upload/file-upload.component'
import { FileSelectDirective } from 'ng2-file-upload';
import { from } from 'rxjs';
import {AuthGuard}   from '../guards/auth.guard';
import { DownloadDocComponent } from './download-doc/download-doc.component' ;
import {FileServiceService} from '../services/file-service.service'
import {DocRequestService }  from '../services/doc-request.service'
import {NgxPaginationModule} from 'ngx-pagination';
import { LogoutComponent } from './logout/logout.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
     MiscellaneousModule,
     FormsModule ,
     ReactiveFormsModule,
     NgxPaginationModule

  ],
  declarations: [
    ...PAGES_COMPONENTS,

    LoginComponent,
    IndexComponent,
    HomeComponent,
    FileSelectDirective,
    FileUploadComponent,
    DownloadDocComponent,
    LogoutComponent

  ],
  providers:[
    AuthGuard ,
    DocRequestService,
    FileServiceService
  ]
})
export class PagesModule {
}
