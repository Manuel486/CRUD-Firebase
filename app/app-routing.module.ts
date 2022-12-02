import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudTablaComponent } from './components/crud-tabla/crud-tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaDataComponent } from './components/tabla-data/tabla-data.component';

const routes: Routes = [
  { path : '', component: AppComponent},
  { path : 'crud-tabla', component : CrudTablaComponent },
  { path : 'tabla-data', component : TablaDataComponent },
  { path : 'formulario', component : FormularioComponent },
  { path : 'formulario/:id/:id_doc', component : FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
