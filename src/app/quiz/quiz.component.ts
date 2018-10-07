import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public router: Router, public quizService: QuizService) { }

  ngOnInit() {
    debugger;
    if (parseInt(localStorage.getItem('seconds')) > 0) {
       this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
       this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
       this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      debugger
      if (this.quizService.qnProgress == this.quizService.numberOfQuestions)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.quizService.getQuestions().subscribe(
        (data: any) => {
          localStorage.setItem('nextSet',data.data.extraDetails.nextSet);
          localStorage.setItem('previousNext',data.data.extraDetails.previousSet);
          this.quizService.numberOfQuestions=data.data.extraDetails.numberOfQuestion;
          this.quizService.qns = data.data.questions;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    debugger;
    this.quizService.isNextDisable = false;

    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));

    if(qID==this.quizService.numberOfQuestions){
      this.quizService.isSubmitDisable=false;
    }

  }

  NextQuestion(qID){
    if( typeof this.quizService.qns[this.quizService.qnProgress].answer !== 'undefined' &&
      this.quizService.qns[this.quizService.qnProgress].answer){
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      this.quizService.isNextDisable = true;
    }
  }

  submitQuiz(qId){
    if (qId == this.quizService.numberOfQuestions) {
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
      this.quizService.isSubmitDisable=true;
    }
  }

  SkipQuestion(){
    this.quizService.qns[this.quizService.qnProgress].answer = 6;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
