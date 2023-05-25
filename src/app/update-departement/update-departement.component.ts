import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Departement } from '../model/departement.model';
import { Faculte } from '../model/faculte.model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styles: []
})
export class UpdateDepartementComponent implements OnInit {
  currentDepartement  = new Departement();
  facultes! : Faculte[];
  updatedId! : number;

 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private departementService: DepartementService) { 
               
              }

  /*ngOnInit() {
 
  // console.log(this.route.snapshot.params.id);
  this.facultes = this.departementService.listeFacultes()
   this.currentDepartement = this.departementService.consulterDepartement(this.activatedRoute.snapshot.params['id']);
   this.updatedId=this.currentDepartement.faculte.id;
  //  console.log(this.currentDepartement);     
  }*/

  /*ngOnInit() {
    this.departementService.consulterDepartement(this.activatedRoute.snapshot.params['id']).
     subscribe( dep =>{ this.currentDepartement = dep; } ) ;
    }*/

    ngOnInit(): void {
      this.departementService.listeFacultes().
      subscribe(facs => {this.facultes = facs._embedded.facultes;
      console.log(facs);
      });
      this.departementService.consulterDepartement(this.activatedRoute.snapshot.params['id']).
      subscribe( dep =>{ this.currentDepartement = dep; 
      this.updatedId = this.currentDepartement.faculte.id;
      } ) ;
      }
      

  /*updateDepartement(){
    this.currentDepartement.faculte=this.departementService.consulterFaculte(this.updatedId);
    this.departementService.updateDepartement(this.currentDepartement);
    this.router.navigate(['departements']);
   }*/

   /*updateDepartement() {
    this.departementService.updateDepartement(this.currentDepartement).subscribe(dep => {
    this.router.navigate(['departements']); }
    );
    }*/

    updateDepartement() {
      this.currentDepartement.faculte = this.facultes.
       find(fac => fac.id == this.updatedId)!;
      this.departementService.updateDepartement(this.currentDepartement).subscribe(dep => {
      this.router.navigate(['departements']); }
      );
      }
      

}