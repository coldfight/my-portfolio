import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./components/pages/resume/resume.component";
import { ProjectsComponent } from "./components/pages/projects/projects.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "/resume", pathMatch: "full" },
      { path: "resume", component: ResumeComponent },
      { path: "projects", component: ProjectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
