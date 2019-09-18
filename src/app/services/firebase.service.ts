import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { ContactFormMessage } from "../components/contact-me/contact-me.component";
import { Resume } from "../components/resume/resume.component";

@Injectable()
export class FirebaseService {
  constructor(public db: AngularFireDatabase) {}

  getResume(): Promise<Resume> {
    return new Promise((resolve, reject) => {
      this.db
        .object("resume")
        .valueChanges()
        .pipe(take(1))
        .subscribe((resume: Resume) => {
          resolve(resume);
        });
    });
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
