import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import {DKTService} from "../../service/dkt/dkt.service";
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-displayFlashCard',
  templateUrl: './displayFlashCard.component.html',
  styleUrls: ['./displayFlashCard.component.css']

})
export class DisplayFlashCardomponent implements OnInit {
  @Input()
    id          : string;
  @Input()
    order     :string;

  quizTitle   : string;
  keywords    : string;
  description : string;
  url         : string;
  imageUrl    : string;
  constructor(public router: Router, public quizService: QuizService, public activeRoute: ActivatedRoute,
              public dktService: DKTService, public meta: Meta, public title: Title) {
    //this.activeRoute.queryParams.subscribe(params => {
    //  this.order = params['order'];;
    //this.id = this.activeRoute.snapshot.paramMap.get("id");
    //});
}

  ngOnInit() {
      //this.updateMetaTags();
      this.showLoadingSpinner();
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.dktService.getDktData(this.id).subscribe(
        (data: any) => {
          this.quizTitle = data.data.extraDetails.quizTitle;
          this.description = data.data.extraDetails.description;
          this.keywords = data.data.extraDetails.keywords;
          this.url = data.data.extraDetails.url;
          this.imageUrl = data.data.extraDetails.imageUrl;
          this.quizService.numberOfQuestions=data.data.extraDetails.numberOfQuestion;
          if(this.order && this.order === "true"){
            this.quizService.qns = data.data.questions;
          }else{
            this.quizService.qns = this.shuffleArray(data.data.questions);
          }
          this.hideLoadingSpinner();
         // this.startTimer();
        }
      );
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  showLoadingSpinner() {
    this.quizService.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.quizService.showSpinner = false;
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }




  updateMetaTags(){
    this.title.setTitle(this.quizTitle? this.quizTitle:"Flashcard for speech improvement, development and therapy.");
    this.meta.updateTag(  {name: "description", content: this.description? this.description : "Achieve speech milestones of the kid in speech development process. Flashcard for speech improvement, development and therapy for toddler kids age 1, 2, 3, 4, 5. Digital flash cards to improve english vocabulary."});
    this.meta.updateTag(  {name : "keywords", content: this.keywords? this.keywords :"speech milestones, Speech development, speech improvement, speech therapy, toddlers, age 1, age 2, age 3, age 4, age 5, Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard, activities flashcard"});
    this.meta.updateTag(  {property : "og:url", content: this.url? this.url:"https://omishaan.com/speechdevelopment"});
    this.meta.updateTag(  {property : "og:image", content: this.imageUrl? this.imageUrl:"https://omishaan.com/assets/img/speechdevelopmentbanner.jpg"});
    this.meta.updateTag(  {property : "og:description", content: this.description? this.description:"Achieve speech milestones of the kid in speech development process.. Flashcard for speech improvement, development and therapy for toddler kids age 1, 2, 3, 4, 5. Digital flash cards to improve english vocabulary."});
    this.meta.updateTag(  {property : "og:title", content: this.quizTitle? this.quizTitle:"Flashcard for speech improvement, development and therapy."});
  }

}
