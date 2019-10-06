import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'home'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //page 404 not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
