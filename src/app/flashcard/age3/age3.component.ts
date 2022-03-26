import { Component, OnInit } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-age3',
  templateUrl: './age3.component.html',
  styleUrls: ['./age3.component.css']
})
export class Age3Component implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags(){
    this.title.setTitle("Age 3 | All you need to know about Speech Development & flashcards");
    this.meta.updateTag(  {name: "description", content: "Boost speech development process in your toddler " +
    "with pictorial flashcards. " +
    "Best flashcards for age 2 and 3. It covers variety of words which improves speech development "});
    this.meta.updateTag(  {name : "keywords", content: "Digital Flashcards,  alphabets flashcard, numbers " +
    "flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, " +
    "transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, " +
    "birds flashcard, plants flashcard"});
    this.meta.updateTag(  {property : "og:url", content: "https://omishaan.com/age3speechdevelopment"});
    this.meta.updateTag(  {property : "og:image", content: "https://omishaan.com/assets/img/age3speechbanner.png"});
    this.meta.updateTag(  {property : "og:description", content: "Boost speech development process in your toddler with pictorial flashcards. " +
    "Best flashcards for age 2 and 3. It covers variety of words which improves speech development "});
    this.meta.updateTag(  {property : "og:title", content: "Age 3 | All you need to know about Speech Development & flashcards"});
  }

}

