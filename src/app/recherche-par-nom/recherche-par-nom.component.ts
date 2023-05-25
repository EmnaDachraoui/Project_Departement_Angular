import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../services/departement.service';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {
  departements! : Departement[];
  nomDepartement! : string;

  allDepartements! : Departement[];
  searchTerm!: string;


  constructor(private departementService : DepartementService) {
   }

  ngOnInit(): void {
    this.departementService.listeDepartements().subscribe(deps => {
      console.log(deps);
      this.allDepartements = deps;
      });
      
  }

  /*rechercherDeps(){
    this.departementService.rechercherParNom(this.nomDepartement).
    subscribe(deps => {
    this.departements = deps; 
    console.log(deps)});
    }

onKeyUp(filterText : string){
this.departements = this.allDepartements.filter(item =>item.nomDepartement.toLowerCase().includes(filterText));
      }*/
      
    

}
