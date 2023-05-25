import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html'
})
export class DepartementsComponent implements OnInit {
 
  departements! : Departement[]; //un tableau de Departement

  constructor(private departementService: DepartementService ) {
    //this.departements = departementService.listeDepartements();
   }

   /*supprimerDepartement(d : Departement)
   {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.departementService.supprimerDepartement(d);
      }*/

      chargerDepartements(){
        this.departementService.listeDepartements().subscribe(deps => {
        console.log(deps);
        this.departements = deps;
        }); 
        }

      supprimerDepartement(d: Departement)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.departementService.supprimerDepartement(d.idDepartement!).subscribe(() => {
console.log("departement supprimé");
this.chargerDepartements();
});
} 



   ngOnInit(): void {
    this.departementService.listeDepartements().subscribe(deps => {
    console.log(deps);
    this.departements = deps;
    });
    }
  
    
  }