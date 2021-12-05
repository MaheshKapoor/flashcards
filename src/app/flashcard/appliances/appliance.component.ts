import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("15+ Digital Appliances flashcards for kids age 1 to 4 years");
    this.meta.updateTag({
      name: "description",
      content: "Appliances flashcards help to learn about " +
      "different Appliances of the objects.  Appliances flashcards may " +
      "help for early speech development, speech improvement and speech therapy " +
      "used by professionals and parents at home. It's basically a Language development " +
      "flashcard for kids. Digital Appliances flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Home Appliances  flashcard, Random order Appliances flashcard, recognize Appliances, " +
      "digital flashcard, speech therapy flashcards, language development, flashcards for ages 1 to 4"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/appliance-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3homeappliance.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Appliances flashcards help to learn about " +
      "different Appliances of the objects.  Appliances flashcards may " +
      "help for early speech development, speech improvement and speech therapy " +
      "used by professionals and parents at home. It's basically a Language development " +
      "flashcard for kids. Digital Appliances flashcards have been created specially for kids age 1 to 4 years."
    });
    this.meta.updateTag({property: "og:title", content: "15+ Digital Appliances flashcards for kids age 1 to 4 years"});
  }

}
