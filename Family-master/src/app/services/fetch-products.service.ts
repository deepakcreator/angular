import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product, Application } from '../models/products';
import { firestore } from 'firebase/app';
import Timestamp= firestore.Timestamp;


@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
  productsCollection: AngularFirestoreCollection<product>;
  Product: Observable<product[]>;
  product: product;
  ID: string;
  date: Date;

  requirement: Observable<Application[]>;
  requirements: Application;

  constructor(public afs: AngularFirestore) {
    this.Product = this.afs.collection('products').snapshotChanges().
    pipe(map( changes => {
      return changes.
      map(a => {
        const data = a.payload.doc.data() as product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.requirement = this.afs.collection('buyer_application').snapshotChanges().
    pipe(map( changes => {
      return changes.
      map(a => {
        const data = a.payload.doc.data() as Application;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getProducts() {
     return this.Product;
   }

   deleteProduct(ID) {
        this.afs.doc('products/' + ID).delete();
   }

   addProduct( prod: product) {
        this.afs.collection('products').add(prod);
   }

   updateProduct( prod: product ) {
        this.afs.doc('products/' + prod.id).update(prod);
   }

   // APPLICATIONS CRUD
   getApplication() {
    return this.requirement;
  }

   addApplication( requirement: Application) {
    this.afs.collection('buyer_application').add(requirement);
  }

  deleteApplication(ID) {
    this.afs.doc('buyer_application/' + ID).delete();
  }


}
