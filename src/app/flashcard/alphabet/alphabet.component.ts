import {Component, OnInit, Inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Digital alphabet flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Play with alphabet in sequence or random order. Alphabet flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital alphabet flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "alphabets flashcard, uppercase alphabet flashcard, lowercase alphabet flashcard, random alphabet flashcard, recognize alphabet, digital flashcard, speech therapy flashcards, language development, flashcards age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://practisepoint.com/alphabet-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://practisepoint.com/assets/img/age3alphabet.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Play with alphabet in sequence or random order. Alphabet flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. " +
      "Language development flashcards for kids. Digital alphabet flashcards for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "Digital alphabet flashcards for kids age 1 to 4 years"});
  }

}
