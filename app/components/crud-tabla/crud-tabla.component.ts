import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/usuario.model';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-tabla',
  templateUrl: './crud-tabla.component.html',
  styleUrls: ['./crud-tabla.component.css']
})

export class CrudTablaComponent implements OnInit {
  usuarios : Usuario[] = [];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'opciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataServicio : DataService,private router:Router){}

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
      console.log(res);
    })
  }

  eliminarPersona(usuario : Usuario){
    let decision = confirm('Are you sure?');
    if(decision === true){
      console.log("eliminando");
      this.dataServicio.deleteUsuario(usuario);
    }
  }

  editarPersona(usuario : Usuario){
    this.router.navigate(['formulario',usuario.id,usuario.id_doc]);
  }


}

