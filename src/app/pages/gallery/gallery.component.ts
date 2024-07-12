import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
})
export class GalleryComponent {}
