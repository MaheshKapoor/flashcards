import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-speechTherapyActivity',
  templateUrl: './speechTherapyActivity.component.html',
  styleUrls: ['./speechTherapyActivity.component.css']
})
export class SpeechTherapyActivityComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Speech Therapy Activities at Home");
    this.meta.updateTag({
      name: "description",
      content: "A collection of Speech therapy activities for parent. These speech therapy activities help to boost the speech development in toddlers." +
      "Special video and pictorial flashcard for toddlers stimulate the process of language development."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "video Flashcards,  pictorial flashcard, online flashcard, " +
      "free flashcard, age 1 flashcard, flashcards for toddlers, Speech development, language development"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/speech-therapy-activities"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age1speechbanner1.jpg"});
    this.meta.updateTag({
      property: "og:description",
      content: "A collection of Speech therapy activities for parent. These speech therapy activities help to boost the speech development in toddlers." +
      "Special video and pictorial speech flashcard for toddlers stimulate the process of language development."});
    this.meta.updateTag({property: "og:title", content: "Speech Therapy Activities at Home"});
  }

}
