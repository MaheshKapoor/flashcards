import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
// import {appRoutes, AppRoutingModule} from './routes';
import { QuizService } from './shared/quiz.service';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ResultcardComponent } from './resultcard/resultcard.component';
import {DKTService} from "./service/dkt/dkt.service";
import {MainComponent} from "./main/main.component";
import {FlashCardComponent} from "./flashcard/flashCard/flashcard.component";
import {Age2Component} from "./flashcard/age2/age2.component";
import {Age3Component} from "./flashcard/age3/age3.component";
import {Age4Component} from "./flashcard/age4/age4.component";
import {SpeechComponent} from "./flashcard/speechMain/speech.component";
import {Age1Component} from "./flashcard/age1/age1.component";
import {PrivacyPolicyComponent} from "./sitedetail/privacypolicy/privacypolicy.component";
import {TandCComponent} from "./sitedetail/TermsAndConditions/tandc.component";
import {ContactUsComponent} from "./sitedetail/contactus/contactus.component";
import {AboutUsComponent} from "./sitedetail/aboutus/aboutus.component";
import {QuicklinkModule} from "ngx-quicklink";
import {AlphabetComponent} from "./flashcard/alphabet/alphabet.component";
import {VegetablesComponent} from "./flashcard/vegetables/vegetables.component";
import {FruitsComponent} from "./flashcard/fruits/fruits.component";
import {AnimalsComponent} from "./flashcard/animals/animals.component";
import {NumberComponent} from "./flashcard/numbers/number.component";
import {VerbComponent} from "./flashcard/verbs/verb.component";
import {TransportationComponent} from "./flashcard/transportation/transportation.component";
import {SportComponent} from "./flashcard/sports/sport.component";
import {ShapeComponent} from "./flashcard/shapes/shape.component";
import {PlaceComponent} from "./flashcard/places/place.component";
import {ProfessionComponent} from "./flashcard/professions/profession.component";
import {EmotionComponent} from "./flashcard/emotions/emotion.component";
import {GestureComponent} from "./flashcard/gestures/gesture.component";
import {FlowerComponent} from "./flashcard/flowers/flower.component";
import {ClotheComponent} from "./flashcard/clothes/clothe.component";
import {ColorComponent} from "./flashcard/colors/color.component";
import {CountingComponent} from "./flashcard/counting/counting.component";
import {CapitalComponent} from "./flashcard/capital/capital.component";
import {ActivityComponent} from "./flashcard/activities/activity.component";
import {ActionComponent} from "./flashcard/actions/action.component";
import {MFlashCardComponent} from "./flashcard/mflashCard/mflashcard.component";
import {MultiplicationComponent} from "./flashcard/mathematics/multiplication/multiplication.component";
import {AdditionComponent} from "./flashcard/mathematics/addition/addition.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    FlashCardComponent,
    MFlashCardComponent,
    Age1Component,
    Age2Component,
    Age2Component,
    Age3Component,
    Age4Component,
    SpeechComponent,
    FooterComponent,
    ErrorComponent,
    ProgressbarComponent,
    ResultcardComponent,
    MainComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TandCComponent,
    AboutUsComponent,
    AlphabetComponent,
    VegetablesComponent,
    FruitsComponent,
    AnimalsComponent,
    NumberComponent,
    VerbComponent,
    TransportationComponent,
    SportComponent,
    ShapeComponent,
    ProfessionComponent,
    PlaceComponent,
    GestureComponent,
    EmotionComponent,
    FlowerComponent,
    ClotheComponent,
    ColorComponent,
    CountingComponent,
    ActionComponent,
    ActivityComponent,
    CapitalComponent,
    MultiplicationComponent,
    AdditionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService,AuthGuard,DKTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
