import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appPointer]"
})
export class PointerDirective implements OnInit {
  cursor: string = "pointer";

  constructor(private elRef: ElementRef) {}
  ngOnInit() {
    this.elRef.nativeElement.style.cursor = this.cursor;
  }
}
