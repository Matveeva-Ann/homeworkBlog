import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SingInComponent } from './components/header/sing-in/sing-in.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';
import { AddPostComponent } from './components/header/add-post/add-post.component';
import { SerchPipePipe } from './shared/pipes/serch-pipe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SingInComponent,
    FooterComponent,
    HeaderComponent,
    AddPostComponent,
    SerchPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
