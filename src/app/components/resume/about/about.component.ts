import { Component, OnInit, Input } from "@angular/core";
import { AboutMe } from "../resume.component";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  @Input() aboutMe: AboutMe;

  displayFullText: boolean = false;
  descriptionToDisplay: string = "";
  SHORT_DESCRIPTION_LENGTH: number = 500;

  constructor() {}

  ngOnInit() {
    this.shortenDescription();
  }

  toggleReadMore() {
    this.displayFullText = !this.displayFullText;
    if (this.displayFullText) {
      this.descriptionToDisplay = this.aboutMe.description;
    } else {
      this.shortenDescription();
    }
  }

  shortenDescription() {
    this.descriptionToDisplay = this.aboutMe.description.slice(
      0,
      this.SHORT_DESCRIPTION_LENGTH
    );
    if (this.descriptionToDisplay.length < this.aboutMe.description.length) {
      this.descriptionToDisplay += "...";
    }
  }
}
