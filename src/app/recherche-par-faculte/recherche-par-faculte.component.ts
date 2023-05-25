import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { Faculte } from '../model/faculte.model';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-recherche-par-faculte',
  templateUrl: './recherche-par-faculte.component.html',
})
export class RechercheParFaculteComponent implements OnInit{
  IdFaculte!:number;
  departements!:any;
  facultes!:Faculte[];

  constructor(private departementService:DepartementService){}

  ngOnInit(): void {
    this.departementService.listeFacultes().subscribe(facs=>{
      this.facultes=facs._embedded.facultes;
      console.log("faculte"+facs);
    });  
  }

  onChange(){
    this.departementService.rechercherParFaculte(this.IdFaculte).subscribe(deps=>{
    this.departements=deps;
    });
    console.log("Departement :"+this.departements);
  }
}
