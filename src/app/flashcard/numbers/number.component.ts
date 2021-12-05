import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }


  updateMetaTags() {
    this.title.setTitle("Digital number flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Play with number in sequence or random order. number flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital number flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "numbers flashcard, random number flashcard, recognize number, digital flashcard, speech therapy flashcards, language development, flashcards age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/number-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3numbers.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Play with number in sequence or random order. number flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital number flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "Digital number flashcards for kids age 1 to 4 years"});
  }

}
