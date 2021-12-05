import {Component, OnInit, Inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }


  updateMetaTags() {
    this.title.setTitle("Digital vegetable flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Play with vegetable in sequence or random order. vegetable flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital vegetable flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "vegetables flashcard, random vegetable flashcard, recognize vegetable, digital flashcard, speech therapy flashcards, language development, flashcards age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/vegetable-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/vegetablebanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Play with vegetable in sequence or random order. vegetable flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital vegetable flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "Digital vegetable flashcards for kids age 1 to 4 years"});
  }
}
