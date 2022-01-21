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
    this.title.setTitle("Pictures of alphabet flashcards for kids");
    this.meta.updateTag({
      name: "description",
      content: "Pictures of alphabet (uppercase) in sequence or random order. Learn " +
      "new words with alphabets. Alphabet flashcards for kids"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Images of alphabets flashcard, uppercase alphabet flashcard," +
      " lowercase alphabet flashcard, random alphabet flashcard, " +
      "recognize alphabet"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/alphabet-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3alphabet.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictures of alphabet (uppercase) in sequence or random order. Learn " +
      "new words with alphabets. Alphabet flashcards for kids"
    });
    this.meta.updateTag({property: "og:title",
      content: "Pictures of alphabet flashcards for kids"});
  }

}
