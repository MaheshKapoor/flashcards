import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Emotions flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Emotions flashcards help to learn different Emotions." +
      "Emotions flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. " +
      "Digital Emotions flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Emotions  flashcard, Random order Emotions flashcard, recognize Emotions, " +
      "digital flashcard, speech therapy flashcards, language development, flashcards for ages 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/emotions-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/emotions.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Emotions flashcards help to learn different Emotions." +
      "Emotions flashcards may help for early speech development, speech " +
      "improvement and speech therapy used by professionals and parents at home. " +
      "It's basically a Language development flashcard for kids. " +
      "Digital Emotions flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Emotions flashcards for kids age 1 to 4 years"});
  }

}
