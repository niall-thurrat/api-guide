import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApisComponent } from './pages/apis/apis.component';
import { ApiComponent } from './pages/api/api.component';
import { AddApiComponent } from './pages/add-api/add-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'apis',
    component: ApisComponent
  },
  {
    path: 'api/:API',
    component: ApiComponent
  },
  {
    path: 'apis/add',
    component: AddApiComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
