import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContent } from "./shared/components/main-content/main-content";
import { CardContent } from "./shared/components/card-content/card-content";
import { SectionDescriptionCards } from "./shared/components/section-description-cards/section-description-cards";

@Component({
  selector: 'app-root',
  imports: [MainContent, CardContent, SectionDescriptionCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge-riu');
}
