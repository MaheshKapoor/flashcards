import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Clothes flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Clothes flashcards help to learn to identify different Clothes. " +
      "Clothes flashcards may help for early speech development, speech improvement " +
      "and speech therapy used by professionals and parents at home. It's basically a " +
      "Language development flashcard for kids. Digital Clothes flashcards have been created " +
      "specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Clothes  flashcard, Random order Clothes flashcard, " +
      "recognize Clothes, digital flashcard, speech therapy flashcards, " +
      "language development, flashcards for age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/clothes-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/clothes.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Clothes flashcards help to learn to identify different Clothes. " +
      "Clothes flashcards may help for early speech development, speech improvement " +
      "and speech therapy used by professionals and parents at home. It's basically a " +
      "Language development flashcard for kids. Digital Clothes flashcards have been created " +
      "specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Clothes flashcards for kids age 1 to 4 years"});
  }

}
