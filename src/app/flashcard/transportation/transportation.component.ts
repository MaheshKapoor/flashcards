import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Transportation flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Transportation flashcards help to learn about vehicles around us. " +
      "Transportation flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. Digital transportation " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Transportation flashcard, Random order transportation flashcard, " +
      "recognize transportation , digital flashcard, speech therapy flashcards, " +
      "language development, flashcards for age 1 to 4"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/transportation-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3transportation.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Transportation flashcards help to learn about vehicles around us. " +
    "Transportation flashcards may help for early speech development, speech " +
    "improvement and speech therapy used by professionals and parents at home. " +
    "It's basically a Language development flashcard for kids. Digital transportation " +
    "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Transportation flashcards for kids age 1 to 4 years"});
  }

}
