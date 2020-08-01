import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Center } from '../center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  private dbPath = '/centers';

  centersRef: AngularFireList<Center> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.centersRef = db.list(this.dbPath);
  }

  getCentersList(): AngularFireList<Center> {
    return this.centersRef;
  }
}
