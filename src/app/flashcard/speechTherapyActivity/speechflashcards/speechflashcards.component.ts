import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-speechflashcards',
  templateUrl: './speechflashcards.component.html',
  styleUrls: ['./speechflashcards.component.css']
})
export class SpeechflashcardsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Speech flashcards for toddlers");
    this.meta.updateTag({
      name: "description",
      content: "Speech flashcards for toddlers helps to accelerate the process of communication in kids. We have created " +
      "Special video and pictorial flashcard for toddlers." +
      "These speech flashcards have shown remarkable progress in kids of all ages." +
      "kids language development"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "video speech Flashcards,  pictorial speech flashcard, online speech flashcard, " +
      "free speech flashcard, speech flashcard, speech flashcards for toddlers, Speech development, language development"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/speech-flashcards-toddlers"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/speech-flashcards-toddlers.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Speech flashcards for toddlers helps to accelerate the process of communication in kids. We have created " +
      "Special video and pictorial flashcard for toddlers." +
      "These speech flashcards have shown remarkable progress in kids of all ages." +
      "kids language development"});
    this.meta.updateTag({property: "og:title", content: "Speech flashcards for toddlers"});
  }

}
