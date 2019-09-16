import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      email: ["", Validators.email],
      message: ["", Validators.required]
    });
  }

  submitForm() {
    console.log("submit the form to google firebase database....");
  }
}
