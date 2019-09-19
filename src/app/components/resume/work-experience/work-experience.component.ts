import { Component, OnInit, Input } from "@angular/core";
import { WorkExperience, Resume } from "../resume.component";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  private workExperience: Array<WorkExperience>;
  private selectedWorkExperienceIndex: number;

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    const resume = await this.firebaseService.getResume();
    this.workExperience = resume.workExperience.reverse();

    if (this.workExperience.length > 0) {
      this.selectedWorkExperienceIndex = 0;
    }
  }
  updateSelectedWorkExperienceIndex(index: number) {
    this.selectedWorkExperienceIndex = index;
  }
}
