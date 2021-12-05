import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Privacy Policy - Omishaan Flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Privacy Policy - Omishaan Flashcards"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/privacypolicy"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Privacy Policy - Omishaan Flashcards"
    });
    this.meta.updateTag({property: "og:title", content: "Privacy Policy - Omishaan Flashcards"});
  }

}
