import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Digital fruit flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Play with fruit in sequence or random order. fruit flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital fruit flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "fruits flashcard, random fruit flashcard, recognize fruit, digital flashcard, speech therapy flashcards, language development, flashcards age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/fruit-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/fruitbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Play with fruit in sequence or random order. fruit flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital fruit flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "Digital fruit flashcards for kids age 1 to 4 years"});
  }

}
