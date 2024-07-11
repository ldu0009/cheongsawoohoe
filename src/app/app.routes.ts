import { Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { LayoutComponent } from "./core/layout/layout.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";

export const routes: Routes = [
  {
    path: "",
    data: {
      layout: "empty",
    },
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MainComponent,
      },
    ],
  },
  {
    path: "",
    data: {
      layout: "normal",
    },
    component: LayoutComponent,
    children: [
      {
        path: "gallery",
        component: GalleryComponent,
      },
    ],
  },
];
