import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("10 Digital Colors flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Colors flashcards help to learn about different colors around us. " +
      "Colors flashcards may help for early speech development, speech improvement " +
      "and speech therapy used by professionals and parents at home. It's basically a " +
      "Language development flashcard for kids. Digital Colors flashcards have been " +
      "created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Colors flashcard, Random order Colors flashcard, recognize Colors, " +
      "digital flashcard, speech therapy flashcards, language development, flashcards for age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/colors-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3color.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Colors flashcards help to learn about different colors around us. " +
      "Colors flashcards may help for early speech development, speech improvement " +
      "and speech therapy used by professionals and parents at home. It's basically a " +
      "Language development flashcard for kids. Digital Colors flashcards have been " +
      "created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "10 Digital Colors flashcards for kids age 1 to 4 years"
    });
  }

}
