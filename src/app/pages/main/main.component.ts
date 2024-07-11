import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("청사우회");
  }

  public videoPlay(e: Event) {
    const video = e.target as HTMLVideoElement;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play();
  }
}
