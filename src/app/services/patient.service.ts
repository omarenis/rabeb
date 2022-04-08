import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Patient {
  firstname: string;
  lastname: string;
  age: number;
  situation: string;
  email: string;
  telephone: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  path = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  list(): Promise<Patient[]>{
    return this.httpClient.get<Patient[]>(this.path + '/patients').toPromise();
  }
  create(patient: Patient): Promise<Patient>{
    return this.httpClient.post<Patient>(this.path + '/patients', patient).toPromise();
  }
  put(id: number, patient: Patient): Promise<Patient>{
    return this.httpClient.put<Patient>(this.path + `/patients/${id}`, patient).toPromise();
  }
  delete(id: number): Promise<void>{
    return this.httpClient.delete<void>(this.path + `/patients/${id}`).toPromise();
  }
}
