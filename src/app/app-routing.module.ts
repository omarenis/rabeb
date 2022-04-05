import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './screens/form/form.component';
import {PatientsComponent} from './screens/patients/patients.component';

const routes: Routes = [
  {path: '', component: PatientsComponent},
  {path: 'patients/create', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
