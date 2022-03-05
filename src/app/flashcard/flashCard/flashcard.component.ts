import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../shared/quiz.service';
//import {isEmpty} from "rxjs/operator/isEmpty";
import Speech from 'speak-tts';
import { ActivatedRoute } from '@angular/router';
import {DKTService} from "../../service/dkt/dkt.service";
import {Meta, Title} from "@angular/platform-browser";

interface RecommendedVoices {
  [key: string]: boolean;
}

export interface SpeechSynthesisVoice {
  voiceURI: string;
  name: string;
  lang: string;
  localService: boolean;
  default: boolean;
}

export interface SpeechSynthesis {
  paused: boolean;
  pending: boolean;
  speaking: boolean;
}

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']

})
export class FlashCardComponent implements OnInit {
  order       : string;
  id          : string;
  quizTitle   : string;
  keywords    : string;
  description : string;
  url         : string;
  imageUrl    : string;
  isFirstFlashcard : boolean=true;
  public sayCommand: string;
  public recommendedVoices: RecommendedVoices;
  public rates: number[];
  public selectedRate: number;
  public selectedVoice: SpeechSynthesisVoice | null;
  public text: string;
  public voices: SpeechSynthesisVoice[];
  public speechSynthesis: SpeechSynthesis;
  constructor(public router: Router, public quizService: QuizService, public activeRoute: ActivatedRoute,
              public dktService: DKTService, public meta: Meta, public title: Title) {
    this.activeRoute.queryParams.subscribe(params => {
      this.order = params['order'];;
      this.id = this.activeRoute.snapshot.paramMap.get("id");

    });

    this.voices = [];
    this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
    this.selectedVoice = null;
    this.selectedRate = 1;
    // Dirty Dancing for the win!
    this.text = "Me? ... I'm scared of everything. I'm scared of what I saw, of what I did, of who I am. And most of all, I'm scared of walking out of this room and never feeling the rest of my whole life ... the way I feel when I'm with you.";
    this.sayCommand = "";

    // These are "recommended" in so much as that these are the voices that I (Ben)
    // could understand most clearly.
    this.recommendedVoices = Object.create( null );
    this.recommendedVoices[ "Alex" ] = true;
    this.recommendedVoices[ "Alva" ] = true;
    this.recommendedVoices[ "Damayanti" ] = true;
    this.recommendedVoices[ "Daniel" ] = true;
    this.recommendedVoices[ "Fiona" ] = true;
    this.recommendedVoices[ "Fred" ] = true;
    this.recommendedVoices[ "Karen" ] = true;
    this.recommendedVoices[ "Mei-Jia" ] = true;
    this.recommendedVoices[ "Melina" ] = true;
    this.recommendedVoices[ "Moira" ] = true;
    this.recommendedVoices[ "Rishi" ] = true;
    this.recommendedVoices[ "Samantha" ] = true;
    this.recommendedVoices[ "Tessa" ] = true;
    this.recommendedVoices[ "Veena" ] = true;
    this.recommendedVoices[ "Victoria" ] = true;
    this.recommendedVoices[ "Yuri" ] = true;

  }

  ngOnInit() {
    this.voices = speechSynthesis.getVoices();
    this.selectedVoice = ( this.voices[ 5 ] || null );
    this.updateSayCommand();

    // The voices aren't immediately available (or so it seems). As such, if no
    // voices came back, let's assume they haven't loaded yet and we need to wait for
    // the "voiceschanged" event to fire before we can access them.
    if ( ! this.voices.length ) {

      speechSynthesis.addEventListener(
        "voiceschanged",
        () => {

          this.voices = speechSynthesis.getVoices();
          this.selectedVoice = ( this.voices[ 5 ] || null );
          this.updateSayCommand();

        }
      );

    }
      this.updateMetaTags();
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
          this.startTimer();
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

  submitQuiz(qId){
    if (qId == this.quizService.numberOfQuestions) {
      this.quizService.qnProgress++;
   //   localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      clearInterval(this.quizService.timer);
      if(this.id && (this.id.slice(0,4)=== "AGE4")){
        this.router.navigate(['/']);
      } else if(this.id && (this.id.slice(0,4)=== "AGE3")){
        this.router.navigate(['/']);
      } else if(this.id && (this.id.slice(0,4)=== "AGE2")){
        this.router.navigate(['/']);
      } else if(this.id && (this.id.slice(0,4)=== "AGE1")) {
        this.router.navigate(['/']);
      } else{
        this.router.navigate(['/']);
      }

      this.quizService.isSubmitDisable=true;
    }
  }

  nextFlashcard(){
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress == this.quizService.numberOfQuestions-1){
      this.quizService.isSubmitDisable=false;
    }
    if(this.quizService.qnProgress>0){
      this.isFirstFlashcard = false;
    }
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/']);
    }
    this.speak(this.quizService.qns[this.quizService.qnProgress].qn);

  }

  lastFlashcard(){
    this.isFirstFlashcard = true;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress--;
    if(this.quizService.qnProgress == this.quizService.numberOfQuestions-1){
      this.quizService.isSubmitDisable=false;
    }
    if(this.quizService.qnProgress>1){
      this.isFirstFlashcard = false;
    }
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());

    this.speak(this.quizService.qns[this.quizService.qnProgress].qn);

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


  public demoSelectedVoice() : void {

    if ( ! this.selectedVoice ) {

      console.warn( "Expected a voice, but none was selected." );
      return;

    }

    var demoText = "Best wishes and warmest regards.";

    this.stop();
    this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, demoText );

  }



  // I synthesize speech from the current text for the currently-selected voice.
  public speak(message :string) : void {

    if ( ! this.selectedVoice || ! this.text ) {

      return;

    }

    this.stop();
    this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, message );

  }


  // I stop any current speech synthesis.
  public stop() : void {

    if ( speechSynthesis.speaking ) {

      speechSynthesis.cancel();

    }

  }


  // I update the "say" command that can be used to generate the a sound file from the
  // current speech synthesis configuration.
  public updateSayCommand() : void {

    if ( ! this.selectedVoice || ! this.text ) {

      return;

    }

    // With the say command, the rate is the number of words-per-minute. As such, we
    // have to finagle the SpeechSynthesis rate into something roughly equivalent for
    // the terminal-based invocation.
    var sanitizedRate = Math.floor( 200 * this.selectedRate );
    var sanitizedText = this.text
        .replace( /[\r\n]/g, " " )
        .replace( /(["'\\\\/])/g, "\\$1" )
      ;

    this.sayCommand = `say --voice ${ this.selectedVoice.name } --rate ${ sanitizedRate } --output-file=demo.aiff "${ sanitizedText }"`;

  }

  // ---
  // PRIVATE METHODS.
  // ---

  // I perform the low-level speech synthesis for the given voice, rate, and text.
  private synthesizeSpeechFromText(
    voice: SpeechSynthesisVoice,
    rate: number,
    text: string
  ) : void {

    var utterance = new SpeechSynthesisUtterance( text );
    utterance.voice = this.selectedVoice;
    utterance.rate = rate;
console.log(this.selectedVoice.name);
    speechSynthesis.speak( utterance );

  }


}
