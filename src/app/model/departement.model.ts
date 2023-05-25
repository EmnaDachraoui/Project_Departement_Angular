import { Faculte } from "./faculte.model";

export class Departement {
    idDepartement? : number;
    nomDepartement? : string;
    description? : string;
    faculte! : Faculte ;
    }

