import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Shape flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Shape flashcards help to learn about different shapes of the objects. " +
      "Shape flashcards may help for early speech development, speech improvement and " +
      "speech therapy used by professionals and parents at home. It's basically a Language " +
      "development flashcard for kids. Digital Shape flashcards have been created " +
      "specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Shape flashcard, Random order Shape flashcard, recognize Shape , " +
      "digital flashcard, speech therapy flashcards, language development, flashcards for ages 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/shapes-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3shapes.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Shape flashcards help to learn about different shapes of the objects. " +
      "Shape flashcards may help for early speech development, speech improvement and " +
      "speech therapy used by professionals and parents at home. It's basically a Language " +
      "development flashcard for kids. Digital Shape flashcards have been created " +
      "specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Shape flashcards for kids age 1 to 4 years"});
  }

}
