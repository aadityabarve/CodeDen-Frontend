import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient,HttpClientModule} from '@angular/common/http';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { servicesArray } from './../services';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { CodeEditorQuestionComponent } from './code-editor-question/code-editor-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    HomeComponent,
    UserComponent,
    AuthenticationComponent,
    DashboardComponent,
    QuestionComponent,
    CodeEditorQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    servicesArray
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
