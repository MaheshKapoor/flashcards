import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
import { QuizService } from './shared/quiz.service';
import { AuthGuard } from './auth/auth.guard';
import { DktComponent } from './dkt/dkt.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ResultcardComponent } from './resultcard/resultcard.component';
import {DKTService} from "./service/dkt/dkt.service";
import {MainComponent} from "./main/main.component";
import {MathComponent} from "./math/math.component";
import {IndianIndependenceComponent} from "./independence/India/india.independence.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    DktComponent,
    FooterComponent,
    ErrorComponent,
    ProgressbarComponent,
    ResultcardComponent,
    MainComponent,
    MathComponent,
    IndianIndependenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService,AuthGuard,DKTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
