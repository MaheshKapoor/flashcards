import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("10+ Picture and Name of Colors flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Pictorial representation of Colors with names. " +
      "Colors flashcards help to learn about different Primary and secondary " +
      "colors around us. " });
    this.meta.updateTag({
      name: "keywords",
      content: "Colors flashcard, Pictures and names of colors, Primary colors, secondary colors," +
      " speech therapy flashcards, language development"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/colors-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3color.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictorial representation of Colors with names. " +
      "Colors flashcards help to learn about different Primary and secondary " +
      "colors around us. "
    });
    this.meta.updateTag({property: "og:title", content: "10+ Picture and Name of Colors flashcards"
    });
  }

}
