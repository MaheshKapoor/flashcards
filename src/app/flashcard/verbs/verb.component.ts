import {Component, OnInit} from '@angular/core';

import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Pictures of commonly used Verbs words for kids");
    this.meta.updateTag({
      name: "description",
      content: "Different verbs with pictures for kids to learn new vocabulary words."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Pictures of verb, verb words, verb vocabulary, verb flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://omishaan.com/age3speechdevelopment"});
    this.meta.updateTag({property: "og:image", content: "https://omishaan.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "improvement and speech therapy used by professionals and "
    });
    this.meta.updateTag({property: "og:title", content: "Pictures of commonly used Verbs words for kids"});
  }

}
