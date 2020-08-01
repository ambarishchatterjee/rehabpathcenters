import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterListComponent } from './components/center-list/center-list.component';

const routes: Routes = [
  {
    path: '', component: CenterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
