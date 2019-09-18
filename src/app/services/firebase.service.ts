import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ContactFormMessage } from "../components/contact-me/contact-me.component";

@Injectable()
export class FirebaseService {
  constructor(public db: AngularFireDatabase) {}

  getResume() {
    return this.db.object("resume").valueChanges();
  }

  async submitContactForm(contactForm: ContactFormMessage) {
    try {
      await this.db.list("contactFormMessages").push(contactForm);
      return true;
    } catch (err) {
      return false;
    }
  }
}
