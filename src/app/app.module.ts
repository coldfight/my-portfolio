import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FirebaseService } from "./services/firebase.service";

import { environment } from "../environments/environment";
import { WorkExperienceComponent } from './components/resume/work-experience/work-experience.component';
import { EducationComponent } from './components/resume/education/education.component';
import { SkillsComponent } from './components/resume/skills/skills.component';
import { AboutComponent } from './components/resume/about/about.component';
import { ProfileComponent } from './components/resume/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
