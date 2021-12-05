import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Flowers flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Flowers flashcards help to learn to identify different Flowers around us.  " +
      "Flowers flashcards may help for early speech development, speech improvement and " +
      "speech therapy used by professionals and parents at home. It's basically a Language development flashcard for kids. " +
      "Digital Flowers flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Flowers  flashcard, Random order Flowers flashcard, " +
      "recognize Flowers , digital flashcard, speech therapy flashcards, " +
      "language development, flashcards for age 1 to 4"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/flowers-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age4flowers.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Flowers flashcards help to learn to identify different Flowers around us.  " +
      "Flowers flashcards may help for early speech development, speech improvement and " +
      "speech therapy used by professionals and parents at home. It's basically a Language development flashcard for kids. " +
      "Digital Flowers flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Flowers flashcards for kids age 1 to 4 years"});
  }

}
