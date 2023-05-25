import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementsComponent } from "./departements/departements.component";
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RechercheParFaculteComponent } from './recherche-par-faculte/recherche-par-faculte.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';



const routes: Routes = [
  {path : "departements", component : DepartementsComponent},
  {path : "add-departement", component : AddDepartementComponent},
  {path: "updateDepartement/:id", component: UpdateDepartementComponent},
  {path: "rechercheParCategorie", component : RechercheParFaculteComponent },
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "", redirectTo: "departements", pathMatch: "full" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
