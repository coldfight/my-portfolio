import { AngularFireModule } from "@angular/fire";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ResumeComponent } from "./components/pages/resume/resume.component";
import { ProjectsComponent } from "./components/pages/projects/projects.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
