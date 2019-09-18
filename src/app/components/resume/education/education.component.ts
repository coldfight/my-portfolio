import { Component, OnInit, Input } from "@angular/core";
import { Education } from "../resume.component";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  private education: Array<Education>;

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    const resume = await this.firebaseService.getResume();
    this.education = resume.education;
  }
}
