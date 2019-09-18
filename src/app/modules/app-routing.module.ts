import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "../components/resume/resume.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ContactMeComponent } from "../components/contact-me/contact-me.component";
import { WorkExperienceComponent } from "../components/resume/work-experience/work-experience.component";
import { SkillsComponent } from "../components/resume/skills/skills.component";
import { EducationComponent } from "../components/resume/education/education.component";

const routes: Routes = [
  { path: "", redirectTo: "resume", pathMatch: "full" },
  {
    path: "resume",
    component: ResumeComponent,
    children: [
      { path: "", redirectTo: "work-experience", pathMatch: "full" },
      { path: "work-experience", component: WorkExperienceComponent },
      { path: "education", component: EducationComponent },
      { path: "skills", component: SkillsComponent }
    ]
  },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
