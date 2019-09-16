import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./components/resume/resume.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: ResumeComponent },
      { path: "projects", component: ProjectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
