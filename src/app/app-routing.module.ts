import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeActuComponent } from './liste-actu/liste-actu.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'actualites', component:ListeActuComponent},
  {path:'actualite', component:ActuComponent},
  {path:'actualite/:francois', component:ActuComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'edition',component:EditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
