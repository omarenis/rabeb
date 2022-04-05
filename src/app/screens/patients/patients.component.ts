import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Patient {
  firstname: string;
  lastname: string;
  age: number;
  situation: string;
  email: string;
  telephone: string;
  id ?: number;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'age', 'situation', 'email', 'telephone', 'actions'];
  ELEMENT_DATA: Patient[] = [
    {id: 1, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'},
    {id: 2, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'},
    {id: 3, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'},
    {id: 4, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'},
    {id: 5, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'},
    {id: 6, firstname: 'omar', lastname: 'triki', age: 12, situation: 'مؤجل', email: 'test@gmail.com', telephone: '24127616'}
  ];
  dataSource = new MatTableDataSource<Patient>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
