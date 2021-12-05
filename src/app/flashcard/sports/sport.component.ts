import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Sports flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Sports flashcards help to learn to identify different sports and " +
      "motivate them to practice those Sports.  Sports flashcards may help for early " +
      "speech development, speech improvement and speech therapy used by professionals and " +
      "parents at home. It's basically a Language development flashcard for kids. Digital Sports " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Sports  flashcard, Random order Sports flashcard, " +
      "recognize Sports, digital flashcard, speech therapy flashcards, " +
      "language development, flashcards for age 1 to 4"

    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/sports-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/sports.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Sports flashcards help to learn to identify different sports and " +
      "motivate them to practice those Sports.  Sports flashcards may help for early " +
      "speech development, speech improvement and speech therapy used by professionals and " +
      "parents at home. It's basically a Language development flashcard for kids. Digital Sports " +
      "flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Sports flashcards for kids age 1 to 4 years"});
  }

}
