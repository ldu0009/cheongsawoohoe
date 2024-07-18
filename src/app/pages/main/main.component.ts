import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-main",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild("mainContainer") mainContainer:
    | ElementRef<HTMLDivElement>
    | undefined;
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("청사우회");
  }

  ngAfterViewInit(): void {
    console.log(this.mainContainer?.nativeElement.scrollHeight);
    console.log(ScrollTrigger.maxScroll(window));
    gsap.to(["data-speed"], {
      y: (i, el) => {
        console.log(el);
        const scrollHeight =
          this.mainContainer?.nativeElement.scrollHeight ?? 0;
        return (1 - parseFloat(el.getAttribute("data-speed"))) * scrollHeight;
      },
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }

  public videoPlay(e: Event) {
    const video = e.target as HTMLVideoElement;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play();
  }
}
