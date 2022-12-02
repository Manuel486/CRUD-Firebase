import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

import {
  Firestore,
  addDoc,
  getDocs,
  query,
  collection,
  orderBy,
  collectionData,
  doc,
  deleteDoc,
  getDoc,
  getFirestore,
  where,
  setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getAllUsuarios():Observable<Usuario[]>{
    let usuarioRef = query(collection(this.firestore,'usuarios'),orderBy("apellido","asc"));
    return collectionData(usuarioRef, {idField: 'id_doc'}) as Observable<Usuario[]>
  }

  deleteUsuario(usuario : Usuario){
    let docRef = doc(this.firestore, "usuarios" , usuario.id_doc);
    return deleteDoc(docRef);
  }

  addUsuarios(usuario: Usuario){
    usuario.id = doc(collection(this.firestore,'usuarios')).id;
    return addDoc(collection(this.firestore,'usuarios'),usuario)
  }

  getUsuario(id : string): Observable<Usuario[]>{
    const usuarioRef = query(collection(this.firestore,'usuarios'),where('id','==',id));
    return collectionData(usuarioRef) as Observable<Usuario[]>
  }

  updateUsuario(usuario : Usuario,id_doc : string){
    const docRef = doc(this.firestore, "usuarios", id_doc);
    return setDoc(docRef,usuario, {merge : true});
  }
}
