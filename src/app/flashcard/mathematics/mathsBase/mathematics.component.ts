import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-mathematics',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.css']
})
export class MathematicsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Multiplication table flashcard for preschool kids");
    this.meta.updateTag({
      name: "description",
      content: "Quick way to learn multiplication tables in no time. Practice mode helps to memorize tables quickly"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "multiplication flashcard, Table flashcard, maths flashcard, mathematics flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/age3speechdevelopment"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Quick way to learn multiplication tables in no time. Practice mode helps to memorize tables quickly"
    });
    this.meta.updateTag({property: "og:title", content: "Multiplication table flashcard for preschool kids"});
  }

}
