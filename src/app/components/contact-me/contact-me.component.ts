import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FirebaseService } from "src/app/services/firebase.service";
import { ReCaptcha2Component } from "ngx-captcha";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent implements OnInit {
  @ViewChild("captchaElem", { static: false }) captchaElem: ReCaptcha2Component;

  captchaKey = "6LdLOLkUAAAAALtlrsVnYqr65qD-lSbHN4KY4_UW";
  captchaSize = "regular";
  captchaLanguage = "en";
  captchaTheme = "light";

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
      message: ["", Validators.required],
      recaptcha: ["", Validators.required]
    });
  }

  async submitForm() {
    if (this.contactForm.valid) {
      const response = await this.firebaseService.submitContactForm(
        this.contactForm.value
      );
      if (response) {
        this.contactForm.reset();
        this.captchaElem.resetCaptcha();
        this.toastr.success("Your message has been submitted");
      } else {
        this.toastr.error(
          "There was an issue submitting your message. Try again later."
        );
      }
    }
  }

  handleReset() {}
  handleExpire() {}
  handleLoad() {}
  handleSuccess(event) {}
}

export interface ContactFormMessage {
  fullName: string;
  email: string;
  message: string;
}
