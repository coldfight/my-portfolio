import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FaIconsModule {
  constructor(library: FaIconLibrary) {
    // https://golb.hplar.ch/2019/02/fa.html
    library.addIcons(faGithub, faLinkedinIn, faSortDown, faSortUp);
  }
}
