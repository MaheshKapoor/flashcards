import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'multiplication-age1',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

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

      this.title.setTitle(this.quizTitle? this.quizTitle:"Learn Multiplication tables quickly with practice flashcards");
      this.meta.updateTag(  {name: "description",
        content: this.description? this.description : "Simple way to learn and memorize multiplication table with practice flashcard. 10x10 and 20x10 tables at one place."});
      this.meta.updateTag(  {name : "keywords",
        content: this.keywords? this.keywords :"tables, multiplication, flashcard, math, maths, 10X10, 20x10, mathematics, school, homework, education"});
      this.meta.updateTag(  {property : "og:url",
        content: this.url? this.url:"https://omishaan.com/multiplication-flashcard"});
      this.meta.updateTag(  {property : "og:image",
        content: this.imageUrl? this.imageUrl:"https://omishaan.com/assets/img/multiplicationBanner.png"});
      this.meta.updateTag(  {property : "og:description",
        content: this.description? this.description:"Simple way to learn and memorize multiplication table with practice flashcards. 10x10 and 20x10 tables at one place."});
      this.meta.updateTag(  {property : "og:title",
        content: this.quizTitle? this.quizTitle:"Learn Multiplication tables quickly with practice flashcards"});
    }

  }
