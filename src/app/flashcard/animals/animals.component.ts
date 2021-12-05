import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("20+ Digital Animals flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Animal flashcards help to learn about animals " +
      "around us and in the Jungle.  Animal flashcards may help for " +
      "early speech development, speech improvement and speech therapy " +
      "used by professionals and parents at home. Language development " +
      "flashcards for kids. Digital animal flashcards have been created " +
      "specially for kids age 1 to 4 years"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Animal flashcard, Random order animal flashcard, recognize animals, " +
      "digital flashcard, speech therapy flashcards, language development, flashcards for age 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/animal-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3animal.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Animal flashcards help to learn about animals " +
      "around us and in the Jungle.  Animal flashcards may help for " +
      "early speech development, speech improvement and speech therapy " +
      "used by professionals and parents at home. Language development " +
      "flashcards for kids. Digital animal flashcards have been created " +
      "specially for kids age 1 to 4 years"
    });
    this.meta.updateTag({property: "og:title", content: "20+ Digital Animals flashcards for kids age 1 to 4 years"});
  }

}
