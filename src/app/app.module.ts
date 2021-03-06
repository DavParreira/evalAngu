import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeActuComponent } from './liste-actu/liste-actu.component';
import { ActuComponent } from './actu/actu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ActuService } from './services/actu.service';
import { EditionComponent } from './edition/edition.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedComponent,
    AccueilComponent,
    ListeActuComponent,
    ActuComponent,
    ConnexionComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ActuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
