import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  displayMobileMenu: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleMobileMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }
}
