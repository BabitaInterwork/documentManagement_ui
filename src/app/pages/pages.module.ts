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
import {AuthGuard}   from '../guards/auth.guard'

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

  ],
  declarations: [
    ...PAGES_COMPONENTS,

    LoginComponent,
    IndexComponent,
    HomeComponent,
    FileSelectDirective,
    FileUploadComponent

  ],
  providers:[AuthGuard]
})
export class PagesModule {
}
