import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/usuario.model';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tabla-data',
  templateUrl: './tabla-data.component.html',
  styleUrls: ['./tabla-data.component.css']
})
export class TablaDataComponent implements OnInit {
  usuarios : Usuario[] = [];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataServicio : DataService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.dataServicio.getAllUsuarios().subscribe((res : Usuario[]) => {
      this.dataSource.data = res;
    })
  }



}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
