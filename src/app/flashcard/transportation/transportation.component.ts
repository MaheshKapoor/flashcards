import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ pictures of Mode of transportation flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Pictures of mode of transportation. Surface, Air and water transportation flashcards." +
      "Images of vehicles used to move human, products and service."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Transportation flashcard, pictures of Mode of transportation, " +
      "Images of vehicles, Surface transportation, Air transportation, water transportation, " +
      "language development, speech therapy"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/transportation-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/transportationBanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictures of mode of transportation. Surface, Air and water transportation flashcards." +
      "Images of vehicles used to move human, products and service."
    });
    this.meta.updateTag({property: "og:title", content: "15+ pictures of Mode of transportation flashcards"});
  }

}
