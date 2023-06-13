import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maraasim';
  productCollection!: Observable<any>;
  constructor ( private firestore : Firestore){ 
    this.getProductCategory();
   }

  getProductCategory(){
    const CollectionInstance = collection(this.firestore,'ProductCollection');
    this.productCollection = collectionData(CollectionInstance);
  }
}
