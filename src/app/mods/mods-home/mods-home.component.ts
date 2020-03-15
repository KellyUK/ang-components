import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"]
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "string?", content: "it is" },
    { title: "what color?", content: "blue" },
    { title: "what is this?", content: "a frog" }
  ];

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
