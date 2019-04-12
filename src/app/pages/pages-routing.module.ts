import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IndexComponent} from '../pages/index/index.component'
import { PagesComponent } from './pages.component';
import { FileUploadComponent } from '../pages/file-upload/file-upload.component';
import  {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component'
import {DownloadDocComponent} from './download-doc/download-doc.component'
import {AuthGuard} from '../guards/auth.guard'
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {LogoutComponent} from '../pages/logout/logout.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,

},{
path: 'upload',
 component:FileUploadComponent,
 canActivate: [AuthGuard]
},
{
  path: 'login',
   component:LoginComponent
  },
  {
    path: 'index',
     component:IndexComponent,

    },
    {
      path: 'home',
       component:HomeComponent
      },
      {
        path: 'download',
         component:DownloadDocComponent ,
         canActivate: [AuthGuard]
        },
        {
          path: 'logout',
           component:LogoutComponent
          }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
