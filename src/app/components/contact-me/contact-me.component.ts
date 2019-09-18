import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent implements OnInit {
  // https://alligator.io/angular/firebase-crud-operations/
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private toastr: ToastrService
  ) {}

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

  async submitForm() {
    if (this.contactForm.valid) {
      const response = await this.firebaseService.submitContactForm(
        this.contactForm.value
      );
      if (response) {
        this.contactForm.reset();
        this.toastr.success("Your message has been submitted");
      }
    }
  }
}

export interface ContactFormMessage {
  fullName: string;
  email: string;
  message: string;
}
