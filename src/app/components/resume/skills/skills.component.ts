import { Component, OnInit, Input } from "@angular/core";
import { Skills } from "../resume.component";
import { FirebaseService } from 'src/app/services/firebase.service';

const NUM_COLUMNS = 3;

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  private skills: Skills;
  private primarySkills: Array<Array<string>> = null;
  private secondarySkills: Array<Array<string>> = null;

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    const resume = await this.firebaseService.getResume();
    this.skills = resume.skills;
    this.setupPrimarySkills(this.skills.primarySkills);
    this.setupSecondarySkills(this.skills.secondarySkills);
  }

  setupPrimarySkills(originalSubSkills: Array<string>): void {
    const primarySkills: Array<Array<string>> = [];

    for (let i = 0; i < NUM_COLUMNS; i++) {
      primarySkills.push([]);
    }

    for (let i = 0; i < originalSubSkills.length; i++) {
      primarySkills[i % NUM_COLUMNS].push(originalSubSkills[i]);
    }
    this.primarySkills = primarySkills;
  }

  setupSecondarySkills(originalSubSkills: Array<string>): void {
    const secondarySkills: Array<Array<string>> = [];

    for (let i = 0; i < NUM_COLUMNS; i++) {
      secondarySkills.push([]);
    }

    for (let i = 0; i < originalSubSkills.length; i++) {
      secondarySkills[i % NUM_COLUMNS].push(originalSubSkills[i]);
    }
    this.secondarySkills = secondarySkills;
  }
}
