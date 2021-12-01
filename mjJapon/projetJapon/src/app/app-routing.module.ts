import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './carte/carte.component';

const routes: Routes = [
  {path : 'projetjapon', component : CarteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
