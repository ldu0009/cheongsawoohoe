import { Component, OnInit } from "@angular/core";
import { Layouts } from "./layouts";
import { LayooutService } from "./layoout.service";
import { ActivatedRoute, Data } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [Layouts],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent implements OnInit {
  protected layoutType: "empty" | "normal" | undefined;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private layoutService: LayooutService
  ) {}

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: Data) => {
        this.layoutType = data["layout"];
      });
  }
}
