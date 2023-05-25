/*import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Faculte } from '../model/faculte.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class DepartementService {
  listeFacultes(): Faculte[] {
    throw new Error('Method not implemented.');
  }
  consulterDepartement(arg0: any): Departement {
    throw new Error('Method not implemented.');
  }
  consulterFaculte(updatedId: number): Faculte {
    throw new Error('Method not implemented.');
  }
  updateDepartement(currentDepartement: Departement) {
    throw new Error('Method not implemented.');
  }
  apiURL: string = 'http://localhost:8082/departements/api';

 departements : Departement[]; //un tableau de Departement
  departement = new Departement();

 facultes : Faculte[];

  constructor(private http : HttpClient) {
    this.facultes=[
      { id : 1, nom : "Faculte des Sciences DE MONASTIR" },
      { id : 2, nom : "ISETN" },
      { id : 3, nom : "ISETK" },
      { id : 4, nom : "ISIMM" },
      { id : 5, nom : "ISIMA" },
      { id : 6, nom : "Faculte des Sciences DE GAFSA" }

    ];

    this.departements = [
      { idDepartement : 1,  nomDepartement : " Sv", description : "Siences de la Vie" , 
      faculte :  { id : 1, nom : "Faculte des Sciences DE MONASTIR" }},
      { idDepartement : 2,  nomDepartement : "TI", description :"Technologie de l'Informatique" ,
      faculte :  { id : 2, nom : "ISET" } },
      { idDepartement : 3,  nomDepartement :"ST", description : "Sciences de la Terre " , 
      faculte :  { id : 1, nom : "Faculte des Sciences DE GAFSA" }}
    ];
   }

   listeDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.apiURL);

    ajouterDepartement(dep: Departement) : Observable <Departement>{
    return this.http.post<Departement>(this.apiURL, dep, httpOptions);
    }
      

    supprimerDepartement( dep: Departement){
     //supprimer le Departement prod du tableau Departements 
      const index = this.departements.indexOf(dep, 0);
      if (index > -1) {
        this.departements.splice(index, 1);
      }









      commenteee:
      ou Bien
        this.departements.forEach((cur, index) => {
         if(dep.idDepartement === cur.idDepartement) {
               this.departements.splice(index, 1);  
            }
      }); 











    }

    this.consulterDepartement(id:number): Departement{    
     this.departement =  this.departements.find(d => d.idDepartement == id)!;
       return this.departement;
    }

    trierDepartements(){
      this.departements = this.departements.sort((n1,n2) => {
        if (n1.idDepartement! > n2.idDepartement!) {
            return 1;
        }
    
        if (n1.idDepartement! < n2.idDepartement!) {
            return -1;
        }
    
        return 0;
    });
    }
    
    this.updateDepartement(d:Departement)
    {
     // console.log(d);
      this.supprimerDepartement(d);
      this.ajouterDepartement(d);
      this.trierDepartements();
    }

    this.listeFacultes():Faculte[] {
      return this.facultes;
      }

      this.consulterFaculte(id:number): Faculte{ 
        return this.facultes.find(fac => fac.id == id)!;
        } 
}
  
}*/


import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Faculte } from '../model/faculte.model';
import { FaculteWrapper } from '../model/FaculteWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  apiURL: string = 'http://localhost:8081/departements/api';
  apiURLFac: string = 'http://localhost:8081/departements/fac';


  departements! : Departement[];
  facultes! : Faculte[];
 // departement : Departement;
 

  constructor(private http : HttpClient) {
    /*this.facultes=[
      { id : 1, nom : "Faculte des Sciences DE MONASTIR" },
      { id : 2, nom : "ISETN" },
      { id : 3, nom : "ISETK" },
      { id : 4, nom : "ISIMM" },
      { id : 5, nom : "ISIMA" },
      { id : 6, nom : "Faculte des Sciences DE GAFSA" }
    ];
    this.departements = [
      { idDepartement : 1,  nomDepartement : " Sv", description : "Siences de la Vie" , 
      faculte :  { id : 1, nom : "Faculte des Sciences DE MONASTIR" }},
      { idDepartement : 2,  nomDepartement : "TI", description :"Technologie de l'Informatique" ,
      faculte :  { id : 2, nom : "ISET" } },
      { idDepartement : 3,  nomDepartement :"ST", description : "Sciences de la Terre " , 
      faculte :  { id : 1, nom : "Faculte des Sciences DE GAFSA" }}
    ];*/
    
   
   }

   listeDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.apiURL);
    }

   
   ajouterDepartement( dep: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.apiURL, dep, httpOptions);
    }

   
    supprimerDepartement(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    /*supprimerDepartement( dep: Departement){
        //supprimer le Departement dep du tableau Departements 
         const index = this.departements.indexOf(dep, 0);
         if (index > -1) {
           this.departements.splice(index, 1);
         }
        }*/

    
     consulterDepartement(id: number): Observable<Departement> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Departement>(url);
        }


updateDepartement(dep :Departement) : Observable<Departement>{
return this.http.put<Departement>(this.apiURL, dep, httpOptions);
}



consulterFaculte(id:number): Faculte{ 
  return this.facultes.find(fac => fac.id == id)!;
  } 

/*listeFacultes():Faculte[] {
    return this.facultes;
    }*/


      listeFacultes():Observable<FaculteWrapper>{
        return this.http.get<FaculteWrapper>(this.apiURLFac);
        }

        rechercherParFaculte(id: number):Observable<Faculte[]> {
          const url = `${this.apiURL}/depscat/${id}`;
          return this.http.get<Faculte[]>(url);
          }

          rechercherParNom(nom: string):Observable< Departement[]> {
            const url = `${this.apiURL}/depsByName/${nom}`;
            return this.http.get<Departement[]>(url);
            }
            
          

}





