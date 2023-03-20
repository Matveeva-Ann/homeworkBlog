import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './shared/pipes/pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SingInComponent } from './components/header/sing-in/sing-in.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';
import { AddPostComponent } from './components/header/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    SignUpComponent,
    SingInComponent,
    FooterComponent,
    HeaderComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
