//import {Routes, RouterModule, PreloadAllModules} from '@angular/router'
import {Routes} from '@angular/router'
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
import {ErrorComponent} from "./error/error.component";
import {MainComponent} from "./main/main.component";
import {FlashCardComponent} from "./flashcard/flashCard/flashcard.component";
import {Age2Component} from "./flashcard/age2/age2.component";
import {Age3Component} from "./flashcard/age3/age3.component";
import {Age4Component} from "./flashcard/age4/age4.component";
import {Age1Component} from "./flashcard/age1/age1.component";
import {SpeechComponent} from "./flashcard/speechMain/speech.component";
import {AboutUsComponent} from "./sitedetail/aboutus/aboutus.component";
import {ContactUsComponent} from "./sitedetail/contactus/contactus.component";
import {TandCComponent} from "./sitedetail/TermsAndConditions/tandc.component";
import {PrivacyPolicyComponent} from "./sitedetail/privacypolicy/privacypolicy.component";
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
import {GestureComponent} from "./flashcard/gestures/gesture.component";
import {EmotionComponent} from "./flashcard/emotions/emotion.component";
import {FlowerComponent} from "./flashcard/flowers/flower.component";
import {CountingComponent} from "./flashcard/counting/counting.component";
import {ClotheComponent} from "./flashcard/clothes/clothe.component";
import {ColorComponent} from "./flashcard/colors/color.component";
import {ActionComponent} from "./flashcard/actions/action.component";
import {ActivityComponent} from "./flashcard/activities/activity.component";
import {CapitalComponent} from "./flashcard/capital/capital.component";
import {MFlashCardComponent} from "./flashcard/mflashCard/mflashcard.component";
import {MultiplicationComponent} from "./flashcard/mathematics/multiplication/multiplication.component";
import {AdditionComponent} from "./flashcard/mathematics/addition/addition.component";
import {PeppaPigComponent} from "./flashcard/cartoon/peppapig/peppapig.component";
import {MyFirstWordsComponent} from "./flashcard/myfirstwords/myfirstwords.component";
import {WeatherComponent} from "./flashcard/weather/weather/weather.component";


export const appRoutes : Routes =[

    {path:'quiz/:id',component:QuizComponent},
    {path:'flashcard/:id',component:FlashCardComponent},
    {path:'flashcard/:id/:number',component:MFlashCardComponent},
    {path:'alphabet-flashcard',component:AlphabetComponent},


    {path:'animal-flashcard',component:AnimalsComponent},
    {path:'fruit-flashcard',component:FruitsComponent},
    {path:'vegetable-flashcard',component:VegetablesComponent},

    {path:'transportation-flashcard',component:TransportationComponent},
    {path:'shapes-flashcard',component:ShapeComponent},
    {path:'colors-flashcard',component:ColorComponent},
    {path:'flowers-flashcard',component:FlowerComponent},
    {path:'appliance-flashcard',component:Age1Component},
    {path:'places-flashcard',component:PlaceComponent},
    {path:'clothes-flashcard',component:ClotheComponent},
    {path:'sports-flashcard',component:SportComponent},
    {path:'school-flashcard',component:Age1Component},
    {path:'emotions-flashcard',component:EmotionComponent},
    {path:'professions-flashcard',component:ProfessionComponent},


    {path:'action-activities-flashcard',component:Age1Component},
    {path:'action-flashcard',component:ActionComponent},
    {path:'activities-flashcard',component:ActivityComponent},
    {path:'verbs-flashcard',component:VerbComponent},
    {path:'gesture-flashcard',component:GestureComponent},


    {path:'season-flashcard',component:Age1Component},
    {path:'weather-flashcard',component:WeatherComponent},
    {path:'summer-flashcard',component:Age1Component},
    {path:'winter-flashcard',component:Age1Component},
    {path:'spring-flashcard',component:Age1Component},


    {path:'house-flashcard',component:Age1Component},
    {path:'kitchen-flashcard',component:Age1Component},
    {path:'bathroom-flashcard',component:Age1Component},
    {path:'livingroom-flashcard',component:Age1Component},

    {path:'math-flashcard',component:Age1Component},
    {path:'number-flashcard',component:NumberComponent},
    {path:'multiplication-flashcard',component:MultiplicationComponent},
    {path:'addition-flashcard',component:AdditionComponent},
    {path:'counting-flashcard',component:CountingComponent},


    {path:'food-flashcard',component:Age1Component},
    {path:'food/dessert-flashcard',component:Age1Component},
    {path:'food/fast-flashcard',component:Age1Component},


    {path:'festival-flashcard',component:Age1Component},
    {path:'festival/christmas-flashcard',component:Age1Component},
    {path:'festival/diwali-flashcard',component:Age1Component},
    {path:'festival/halloween-flashcard',component:Age1Component},


    {path:'peppapig-flashcard',component:PeppaPigComponent},


    {path:'myfirstwords-flashcard',component:MyFirstWordsComponent},


    {path:'world-flashcard',component:Age1Component},
    {path:'world/capital-flashcard',component:CapitalComponent},
    {path:'world/currency-flashcard',component:Age1Component},
    {path:'world/language-flashcard',component:Age1Component},
    {path:'world/flags-flashcard',component:Age1Component},

    {path:'age1-vocabulary-flashcards',component:Age1Component},
    {path:'age2-vocabulary-flashcards',component:Age2Component},
    {path:'age3-vocabulary-flashcards',component:Age3Component},
    {path:'age4-vocabulary-flashcards',component:Age4Component},

    // {path:'age1-speech-development',component:Age1Component},
    // {path:'age2-speech-development',component:Age2Component},
    // {path:'age3-speech-development',component:Age3Component},
    // {path:'age4-speech-development',component:Age4Component},
    {path:'speech-development',component:SpeechComponent},

    {path:'result',component:ResultComponent},
    {path:'main',component:MainComponent},
    {path:'error', component:ErrorComponent},


    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'termsandconditions',component:TandCComponent},
    {path:'privacypolicy',component:PrivacyPolicyComponent},


    {path:'', component:MainComponent},
    {path:'**',redirectTo:'/error'}

];


