import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Contact Us - Omishaan Flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Contact Us with your suggestions and feedback of our Kido Flashcards"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/contactus"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Contact Us with your suggestions and feedback of our Kido Flashcards"
    });
    this.meta.updateTag({property: "og:title", content: "Contact Us - Omishaan Flashcards"});
  }

}
