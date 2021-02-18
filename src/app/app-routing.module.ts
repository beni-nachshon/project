import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  {path : '', component:  CoinsComponent },
  {path :'home', component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
