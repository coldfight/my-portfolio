import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class FirebaseService {
  constructor(public db: AngularFireDatabase) {}

  getResume() {
    return this.db.object("resume").valueChanges();
  }
}
