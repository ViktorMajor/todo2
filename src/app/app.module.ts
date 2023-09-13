import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectedTopicsComponent } from './selected-topics/selected-topics.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    FormComponent,
    NavbarComponent,
    SelectedTopicsComponent,
    
  ],
  imports: [
    BrowserModule,

    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
