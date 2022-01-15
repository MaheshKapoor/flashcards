import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  quizTitle   : string;
  keywords    : string;
  description : string;
  url         : string;
  imageUrl    : string;
  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {

      this.title.setTitle(this.quizTitle? this.quizTitle:"Learn Addition or sum with carry quickly with practice flashcards");
      this.meta.updateTag(  {name: "description",
        content: this.description? this.description : "Simple way to learn addition with practice flashcard. single digit, double digit, 3 digit and 4 digit with and without carry  at one place."});
      this.meta.updateTag(  {name : "keywords",
        content: this.keywords? this.keywords :"addition, sum, single digit sum with carry flashcard, double digit sum with carry flashcard, 3 digit sum with carry flashcard, 4 digit sum with carry flashcard, math, maths, 10X10, 20x10, mathematics, school, homework, education"});
      this.meta.updateTag(  {property : "og:url",
        content: this.url? this.url:"https://omishaan.com/multiplication-flashcard"});
      this.meta.updateTag(  {property : "og:image",
        content: this.imageUrl? this.imageUrl:"https://omishaan.com/assets/img/multiplicationBanner.png"});
      this.meta.updateTag(  {property : "og:description",
        content: this.description? this.description:"Simple way to learn addition with practice flashcard. single digit, double digit, 3 digit and 4 digit with adn without carry  at one place"});
      this.meta.updateTag(  {property : "og:title",
        content: this.quizTitle? this.quizTitle:"Learn Addition or sum with carry quickly with practice flashcards"});
    }

  }
