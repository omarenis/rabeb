import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {FormComponent} from '../form/form.component';
import {Patient, PatientService} from '../../services/patient.service';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-patients', templateUrl: './patients.component.html', styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'age', 'situation', 'email', 'telephone', 'actions'];
  ELEMENT_DATA !: Patient[];
  dataSource !: MatTableDataSource<Patient>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(public dialog: MatDialog, private patientService: PatientService,
              private communicationService: CommunicationService) {
    this.communicationService.connected$.subscribe((patient: Patient) => {
      this.ELEMENT_DATA.push(patient);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.patientService.list().then((response) => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Patient>(this.ELEMENT_DATA);
    });
  }

  openForm(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '80%', width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  delete(id: number, index: number): void{
    this.patientService.delete(id).then((response) => {this.ELEMENT_DATA.splice(index, 1); });
  }
}
