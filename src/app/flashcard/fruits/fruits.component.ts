import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("20+ Pictures of fruits flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Pictures and name of fruits compiled in flashcard. Learn names of fruits by recognizing the images."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Pictures of fruits, fruit flashcard, Name and images of fruits, language development, speech therapy"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/fruit-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/fruitbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictures and name of fruits compiled in flashcard. Learn names of fruits by recognizing the images."});
    this.meta.updateTag({property: "og:title", content: "20+ Pictures of fruits flashcards"});
  }

}
