import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News, User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() loginedUserName = new EventEmitter<User>();
  @Output() userSignOut = new EventEmitter<boolean>();
  @Output() onAddNewsModalClose = new EventEmitter<void>();
  @Input() changesNews?: News;

  loginedPerson!:User;

  changingButtons = true;
  singIn = false;
  signUp = false;
  addPost = false;
  user = '';

  ngOnChanges(): void {
    if (this.changesNews) {
      this.addPost = true;
    }
  }

  singInClik(): void {
    this.singIn = true;
  }
  signUpClik(): void {
    this.signUp = true;
  }
  closeSingIn(event: boolean): void {
    this.singIn = !event;
  }
  closeSignUp(event: boolean): void {
    this.signUp = !event;
  }
  loginedUser(user: User) {
    this.loginedUserName.emit(user);
    this.user = user.name;
    this.changingButtons = false;
    this.loginedPerson = user;
  }
 
  signOut() {
    this.changingButtons = true;
    this.userSignOut.emit(true);
  }
  addPostClik() {
    this.addPost = true;
  }
  closeAddPost(event: boolean): void {
    this.addPost = !event;
    this.onAddNewsModalClose.emit();
  }
}
