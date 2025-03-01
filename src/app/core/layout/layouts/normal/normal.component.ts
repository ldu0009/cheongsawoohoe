import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "normal-layout",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./normal.component.html",
  styleUrl: "./normal.component.scss",
})
export class NormalComponent {}
