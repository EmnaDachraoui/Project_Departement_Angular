import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementsComponent } from "./departements/departements.component";
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParFaculteComponent } from './recherche-par-faculte/recherche-par-faculte.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DepartementsComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    RechercheParFaculteComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }