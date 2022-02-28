import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-age1',
  templateUrl: './age1.component.html',
  styleUrls: ['./age1.component.css']
})
export class Age1Component implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Age 1 | All you need to know about Speech Development");
    this.meta.updateTag({
      name: "description",
      content: "Speech development process and milestones for age 1. Special video and pictorial flashcard for toddlers." +
      " Keep yourself update to date for upcoming " +
      "kids language development"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "video Flashcards,  pictorial flashcard, online flashcard, " +
      "free flashcard, age 1 flashcard, flashcards for toddlers, Speech development, language development"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/age1-vocabulary-flashcards"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age1speechbanner1.jpg"});
    this.meta.updateTag({
      property: "og:description",
      content: "Speech development process and milestones for age 1. Special video and pictorial flashcard for toddlers." +
      " Keep yourself update to date for upcoming " +
      "kids language development"});
    this.meta.updateTag({property: "og:title", content: "Age 1 | All you need to know about Speech Development"});
  }

}
