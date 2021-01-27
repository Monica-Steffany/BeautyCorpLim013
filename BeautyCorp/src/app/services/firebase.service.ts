import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
    //Obtiene todos los productos
    // public getProducts() {
    //   return this.firestore.collection('esika').snapshotChanges();
    // }
    public getProducts(typeProduct){
    return this.firestore.collection('esika', ref => ref.where('type', '==', typeProduct)).snapshotChanges();      
    }

    //return this.firestore.collection('esika', ref => ref.where('type', '==', 'fragancias')).snapshotChanges();


}
