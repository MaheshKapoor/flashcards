import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("10+ Pictures and Names of Weather flashcard");
    this.meta.updateTag({
      name: "description",
      content: "Pictures and names of different weathers. Learn about weather conditions," +
      " like windy, sunny, rainy, with pictures in your area. Easy way to learn weather."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Weather Flashcards, Pictures of weather in flashcard, climate flashcard, season flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/weather-flashcard"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age3weather.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pictures and names of different weathers. Learn about weather conditions," +
      " like windy, sunny, rainy, with pictures in your area."
    });
    this.meta.updateTag({property: "og:title", content: "10+ Pictures and Names of Weather flashcard"});
  }

}
