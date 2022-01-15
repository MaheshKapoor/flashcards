import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-myfirstwords',
  templateUrl: './myfirstwords.component.html',
  styleUrls: ['./myfirstwords.component.css']
})
export class MyFirstWordsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("My first words | flashcard series");
    this.meta.updateTag({
      name: "description",
      content: "My first words is a series of Digital flashcards for early speech development and speech therapy."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "My first words, Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/myfirstwords-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/myFirstWordsBanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "My first words is a series of Digital flashcards for early speech development and speech therapy."
    });
    this.meta.updateTag({property: "og:title", content: "My first words | flashcard series"});
  }

}
