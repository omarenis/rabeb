import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Patient} from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private connection = new Subject<Patient>();
  connected$ = this.connection.asObservable();
  constructor() { }
}
