import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
//  {  path: '', component: HomeComponent, pathMatch: 'full' },
 // {  path: 'poke-card', component: PokeCardComponent,  pathMatch: 'prefix'},
 // {  path: '**', redirectTo: '' }  //Not Found, 404.. Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
