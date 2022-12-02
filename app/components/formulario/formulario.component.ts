import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  usuario : Usuario = {
    id_doc : "",
    id : "",
    usuario : "",
    rol : "",
    email : "",
    nombre : "",
    apellido : "",
    telefono : "",
    ciudad : "",
    clave : ""
  };
  index !: string;


  constructor(private dataServicio : DataService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if(this.index != null){
      this.dataServicio.getUsuario(this.index).subscribe( (dato) => {
        this.usuario = dato[0];
      });
    }
  }

  guardarPersona(){
    let doc = this.route.snapshot.params['id_doc'];
    if(this.index  == null){
      this.dataServicio.addUsuarios(this.usuario);
      this.usuario.nombre = '';
      this.usuario.apellido	 = '';
      this.router.navigate(['']);
    } else {
      this.dataServicio.updateUsuario(this.usuario,doc);
      this.router.navigate(['']);
    }
  }
}
