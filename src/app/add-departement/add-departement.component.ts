/*import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html'
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement();

  facultes! : Faculte[];
  newId! : number;
  newFaculte! : Faculte;

  // message :string | undefined;

  constructor(private departementService : DepartementService,
              private router :Router) { }

  ngOnInit(): void {
    this.facultes = this.departementService.listeFacultes();
  }
  
  addDepartement(){
    // this.departementService.ajouterDepartement(this.newDepartement).subscribe((dep: any) =>{
    // console.log(dep);

     console.log(this.newId);
     this.newFaculte = this.departementService.consulterFaculte(this.newId);
     this.newDepartement.faculte = this.newFaculte;
     this.departementService.ajouterDepartement(this.newDepartement);
     this.router.navigate(['departements']);
    };

    // this.router.navigate(['departements']).then(() => {
    //   window.location.reload();
    //   });   // +++++retour ^page

}*/



import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { DepartementService } from '../services/departement.service';
import { Router } from '@angular/router';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html'
})
export class AddDepartementComponent implements OnInit {
  newDepartement = new Departement();

  facultes! : Faculte[];
  newId! : number;
  newFaculte! : Faculte;
 
  // message :string | undefined;

  constructor(private departementService : DepartementService,
              private router :Router) { 
                
              }

  ngOnInit(): void {
    this.departementService.listeFacultes().
subscribe(facs => {this.facultes = facs._embedded.facultes;
console.log(facs);
});

  }

  
  /*addDepartement(){
    this.departementService.ajouterDepartement(this.newDepartement).subscribe(dep => {
    console.log(dep);
  
    });*/

    addDepartement(){
      this.newDepartement.faculte = this.facultes.find(fac => fac.id == this.newId)!;
this.departementService.ajouterDepartement(this.newDepartement)
.subscribe(dep => {
console.log(dep);
this.router.navigate(['departements']).then(() => {
  window.location.reload();
  });;
});   
}

}

