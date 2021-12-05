import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Public Places flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Public Places flashcards help to learn various Public Places. " +
      "Public Places flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. Digital Public Places " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Public Places  flashcard, Random order Public Places flashcard, recognize Public Places, digital flashcard, speech therapy flashcards, language development, flashcards for age 1 to 4"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/places-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/places.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Public Places flashcards help to learn various Public Places. " +
      "Public Places flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. Digital Public Places " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Public Places flashcards for kids age 1 to 4 years"});
  }

}
