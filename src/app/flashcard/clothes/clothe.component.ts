import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Pictures of Clothes flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Pictures of different types of Clothes. " +
      "Business, party, formal, uniform and casual clothes flashcards. " +
      "Images of clothes used in different weathers"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "images of Clothes, clothes flashcard, Party wear clothes," +
      " business wear clothes, uniforms, casual wear clothes, ethnic wear clothes" +
      "language development, speech therapy  "  });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/clothes-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/clothes.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictures of different types of Clothes. " +
      "Business, party, formal, uniform and casual clothes flashcards." +
      "Images of clothes used in different weathers"
    });
    this.meta.updateTag({property: "og:title", content: "15+ Pictures of Clothes flashcards"});
  }

}
