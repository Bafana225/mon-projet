import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ClientsComponent } from './clients/clients.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [

    ClientsComponent,
    CommandesComponent,
    FournisseursComponent,

    LoginComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: []
})
export class AppModule { }
