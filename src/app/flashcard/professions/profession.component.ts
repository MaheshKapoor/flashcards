import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+  Digital Professions flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Professions flashcards help to learn various Professions. " +
      "Professions flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. Digital Professions " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Professions  flashcard, Random order Professions flashcard, " +
      "recognize Professions, digital flashcard, speech therapy flashcards, " +
      "language development, flashcards for age 1 to 4"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/professions-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/profession.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Professions flashcards help to learn various Professions. " +
      "Professions flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. Digital Professions " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+  Digital Professions flashcards for kids age 1 to 4 years"});
  }

}
