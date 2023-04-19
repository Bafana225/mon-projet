import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { HomePage } from './home/home.page';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'clients', component: ClientsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produits', component: ProduitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
