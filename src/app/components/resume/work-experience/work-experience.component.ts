import { Component, OnInit, Input } from "@angular/core";
import { WorkExperience } from "../resume.component";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: WorkExperience;

  constructor() {}

  ngOnInit() {}
}
