import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApisComponent } from './pages/apis/apis.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
