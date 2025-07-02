import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  host: {
    class: "app-root",
  },
})
export class AppComponent {
  title = environment.appName;
  version = environment.version;
}
