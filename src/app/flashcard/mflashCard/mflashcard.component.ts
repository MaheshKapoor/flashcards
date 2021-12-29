import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../shared/quiz.service';
//import {isEmpty} from "rxjs/operator/isEmpty";
import { ActivatedRoute } from '@angular/router';
import {DKTService} from "../../service/dkt/dkt.service";
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-mflashcard',
  templateUrl: './mflashcard.component.html',
  styleUrls: ['./mflashcard.component.css']

})
export class MFlashCardComponent implements OnInit {
  practiceMode      : string;
  isPracticeMode    : boolean = false;
  carry       : string;
  isCarry     : boolean = false;
  operand1    : number;
  operand2    : number;
  operator    : string;
  toggle      : boolean = false;
  baseNumber  : string;
  multiple    : string;
  multipleNum : number;
  id          : string;
  quizTitle   : string;
  keywords    : string;
  description : string;
  url         : string;
  imageUrl    : string;
  multipleArr : any =[];
  constructor(public router: Router, public quizService: QuizService, public activeRoute: ActivatedRoute,
              public dktService: DKTService, public meta: Meta, public title: Title) {
    this.activeRoute.queryParams.subscribe(params => {
      this.practiceMode = params['practicemode'];
      this.carry = params['carry'];
      //this.random = this.random? this.random: "false"
      this.multiple = params['multiple'];
      this.id = this.activeRoute.snapshot.paramMap.get("id");
      this.baseNumber = this.activeRoute.snapshot.paramMap.get("number");

    });}

  ngOnInit() {
      this.updateMetaTags();
      this.showLoadingSpinner();
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      if(this.id === "table"){
        this.multipleNum = this.multiple? parseInt(this.multiple) : 10;
        this.quizService.numberOfQuestions = this.multipleNum;

        if (this.practiceMode && this.practiceMode === "true") {
          this.isPracticeMode = true;
          while (this.multipleArr.length < this.multipleNum) {
            let r: number = Math.floor(Math.random() * this.multipleNum) + 1;
            if (this.multipleArr.indexOf(r) === -1) {
              this.multipleArr.push(r);
            }
          }
        }
        this.hideLoadingSpinner();
        this.startTimer();
      } if (this.id === "addition"){
          this.quizService.numberOfQuestions = 10;
          this.operator = "+";

          if (this.practiceMode && this.practiceMode === "true") {
            this.isPracticeMode = true;
          }

          if (this.carry && this.carry === "true") {
            this.isCarry = true;
          }

          this.generateOperands(this.baseNumber, this.isCarry, "addition");
          this.hideLoadingSpinner();
          this.startTimer();
    }
      else {
        this.dktService.getDktData(this.id).subscribe(
          (data: any) => {
            this.quizTitle = data.data.extraDetails.quizTitle;
            this.description = data.data.extraDetails.description;
            this.keywords = data.data.extraDetails.keywords;
            this.url = data.data.extraDetails.url;
            this.imageUrl = data.data.extraDetails.imageUrl;
            this.quizService.numberOfQuestions = data.data.extraDetails.numberOfQuestion;
            if (this.practiceMode && this.practiceMode === "true") {
              this.quizService.qns = this.shuffleArray(data.data.questions);
            } else {
              this.quizService.qns = data.data.questions;
            }
            this.hideLoadingSpinner();
            this.startTimer();
          }
        );
      }
  }


  generateOperands(digit: string, isCarry: boolean, Operator: string ){

    if(isCarry){
      switch (digit) {

        case "1":
          this.operand1 = Math.floor(Math.random() * 8) + 1;
          this.operand2 = Math.floor(Math.random() * (9-(10-this.operand1) +1)) + (10-this.operand1);
          break;

        case "2":
          this.operand1 = Math.floor(Math.random() * 98) + 1;
          this.operand2 = Math.floor(Math.random() * (99-(100-this.operand1) +1)) + (100-this.operand1);
          break;

        case "3":
          this.operand1 = Math.floor(Math.random() * 998) + 1;
          this.operand2 = Math.floor(Math.random() * (999-(1000-this.operand1) +1)) + (1000-this.operand1);
          break;

        case "4":
          this.operand1 = Math.floor(Math.random() * 9998) + 1;
          this.operand2 = Math.floor(Math.random() * (9999-(10000-this.operand1) +1)) + (10000-this.operand1);
          break;
      }
    }else {
      switch (digit) {

        case "1":
          this.operand1 = Math.floor(Math.random() * 8) + 1;
          this.operand2 = Math.floor(Math.random() * (9 - this.operand1)) + 1;
          break;

        case "2":
          let r2_10: number = Math.floor(Math.random() * 8) + 1;
          let r2_20: number = Math.floor(Math.random() * (9 - r2_10)) + 1;
          let r2_11: number = Math.floor(Math.random() * 8) + 1;
          let r2_21: number = Math.floor(Math.random() * (9 - r2_11)) + 1;
          let r2_1: string = "" + r2_10 + r2_11;
          let r2_2: string = "" + r2_20 + r2_21;
          this.operand1 = parseInt(r2_1);
          this.operand2 = parseInt(r2_2);

          break;
        case "3":
          let r3_10: number = Math.floor(Math.random() * 8) + 1;
          let r3_20: number = Math.floor(Math.random() * (9 - r3_10)) + 1;
          let r3_11: number = Math.floor(Math.random() * 8) + 1;
          let r3_21: number = Math.floor(Math.random() * (9 - r3_11)) + 1;
          let r3_12: number = Math.floor(Math.random() * 8) + 1;
          let r3_22: number = Math.floor(Math.random() * (9 - r3_12)) + 1;
          let r3_1: string = "" + r3_10 + r3_11 + r3_12;
          let r3_2: string = "" + r3_20 + r3_21 + r3_22;

          this.operand1 = parseInt(r3_1);
          this.operand2 = parseInt(r3_2);
          break;
        case "4":
          let r4_10: number = Math.floor(Math.random() * 8) + 1;
          let r4_20: number = Math.floor(Math.random() * (9 - r4_10)) + 1;
          let r4_11: number = Math.floor(Math.random() * 8) + 1;
          let r4_21: number = Math.floor(Math.random() * (9 - r4_11)) + 1;
          let r4_12: number = Math.floor(Math.random() * 8) + 1;
          let r4_22: number = Math.floor(Math.random() * (9 - r4_12)) + 1;
          let r4_13: number = Math.floor(Math.random() * 8) + 1;
          let r4_23: number = Math.floor(Math.random() * (9 - r4_13)) + 1;
          let r4_1: string = "" + r4_10 + r4_11 + r4_12 + r4_13;
          let r4_2: string = "" + r4_20 + r4_21 + r4_22 + r4_23;

          this.operand1 = parseInt(r4_1);
          this.operand2 = parseInt(r4_2);
          break;
      }
    }
  }

  generateOperand(){
    this.operand1 = Math.floor(Math.random() * 9) + 1;
    this.operand2 = Math.floor(Math.random() * (9-this.operand1)) + 1;
    // while (this.operand1 + this.operand2 > 10){
    //   this.operand2 = Math.floor(Math.random() * 9) + 1;
    // }
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

  hideToggle(){
    this.toggle = true;
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
      if(this.id && this.id === "table"){
        this.router.navigate(['/multiplication-flashcard']);
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

  SkipQuestion(){
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    if (this.id === "addition") {
      this.generateOperands(this.baseNumber, this.isCarry, "addition");
    }
    this.toggle = false;
    if(this.quizService.qnProgress == this.quizService.numberOfQuestions-1){
      this.quizService.isSubmitDisable=false;
    }
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/']);
    }
  }

  answer(){
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress == this.quizService.numberOfQuestions-1){
      this.quizService.isSubmitDisable=false;
    }
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/']);
    }
  }

  updateMetaTags(){
    this.title.setTitle(this.quizTitle? this.quizTitle:"Learn Multiplication tables quickly with practice");
    this.meta.updateTag(  {name: "description",
      content: this.description? this.description : "Simple way to learn and memorize multiplication table. 10x10 and 20x10 tables at one place."});
    this.meta.updateTag(  {name : "keywords",
      content: this.keywords? this.keywords :"tables, multiplication, flashcard, math, maths, 10X10, 20x10, mathematics, school, homework, education"});
    this.meta.updateTag(  {property : "og:url",
      content: this.url? this.url:"https://omishaan.com/multiplication-flashcard"});
    this.meta.updateTag(  {property : "og:image",
      content: this.imageUrl? this.imageUrl:"https://omishaan.com/assets/img/multiplicationBanner.png"});
    this.meta.updateTag(  {property : "og:description",
      content: this.description? this.description:"Simple way to learn and memorize multiplication table. 10x10 and 20x10 tables at one place."});
    this.meta.updateTag(  {property : "og:title",
      content: this.quizTitle? this.quizTitle:"Learn Multiplication tables quickly with practice"});
  }

}
