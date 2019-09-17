import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./components/resume/resume.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: ResumeComponent, pathMatch: "full" },
      { path: "projects", component: ProjectsComponent },
      { path: "contact", component: ContactMeComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
