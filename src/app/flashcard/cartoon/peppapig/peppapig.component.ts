import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-peppapig',
  templateUrl: './peppapig.component.html',
  styleUrls: ['./peppapig.component.css']
})
export class PeppaPigComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Peppa Pig and George pig flashcards");
    this.meta.updateTag({
      name: "description",
      content: "Peppa Pig and friends flashcards for peppa pig and george pig lovers."});
    this.meta.updateTag({
      name: "keywords",
      content: "Peppa pig Flashcards,  " +
      "George pig flashcard, Peppapig and friends flashcard "
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/peppapig-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/peppapigBanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Peppa Pig and friends flashcards for peppa pig and george pig lovers."});

    this.meta.updateTag({property: "og:title", content: "Peppa Pig and George pig flashcards"});
  }

}
