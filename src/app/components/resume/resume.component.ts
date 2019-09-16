import { Component, OnInit, OnDestroy } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Subscription } from "rxjs";

const NUM_COLUMNS = 3;

interface WorkExperience {
  company: string;
  description: Array<string>;
  isCurrentJob: boolean;
  endDate: string;
  location: string;
  startDate: string;
  title: string;
}

interface Education {
  name: string;
  description: Array<string>;
  endDate: string;
  startDate: string;
  location: string;
  degree: string;
  gpa: number;
}

interface Skills {
  primarySkills: Array<string>;
  secondarySkills: Array<string>;
}

interface Resume {
  workExperience: Array<WorkExperience>;
  education: Array<Education>;
  skills: Skills;
}

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit, OnDestroy {
  private resumeSubscription: Subscription;
  private resume: Resume = null;
  private primarySkills: Array<Array<string>> = null;
  private secondarySkills: Array<Array<string>> = null;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.resumeSubscription = this.firebaseService
      .getResume()
      .subscribe((data: Resume) => {
        this.resume = data;
        this.setupPrimarySkills(this.resume.skills.primarySkills);
        this.setupSecondarySkills(this.resume.skills.secondarySkills);
      });
  }
  ngOnDestroy() {
    this.resumeSubscription.unsubscribe();
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
      secondarySkills[i % NUM_COLUMNS].push(
        this.resume.skills.secondarySkills[i]
      );
    }
    this.secondarySkills = secondarySkills;
  }
}
