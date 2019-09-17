import { Component, OnInit, OnDestroy } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit, OnDestroy {
  private resumeSubscription: Subscription;
  private resume: Resume = null;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.resumeSubscription = this.firebaseService
      .getResume()
      .subscribe((data: Resume) => {
        this.resume = data;
      });
  }
  ngOnDestroy() {
    this.resumeSubscription.unsubscribe();
  }
}

export interface WorkExperience {
  company: string;
  description: Array<string>;
  isCurrentJob: boolean;
  endDate: string;
  location: string;
  startDate: string;
  title: string;
}

export interface Education {
  name: string;
  description: Array<string>;
  endDate: string;
  startDate: string;
  location: string;
  degree: string;
  gpa: number;
}

export interface Skills {
  primarySkills: Array<string>;
  secondarySkills: Array<string>;
}

export interface AboutMe {
  description: string;
}

export interface Resume {
  workExperience: Array<WorkExperience>;
  education: Array<Education>;
  skills: Skills;
  aboutMe: AboutMe;
}
