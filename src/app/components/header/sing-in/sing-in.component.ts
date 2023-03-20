import { Component, EventEmitter, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent {
  @Output() closeSingIn = new EventEmitter<boolean>();
  @Output() loginedUser = new EventEmitter<User>();
  @Output() userName = new EventEmitter<string>();

  emailValue = '';
  passwordValue = '';
  role = '';
  router!: any;
  singInUsersArr: User[] = [];
  wrongData = false;

  constructor(private usersArr: ServiceService) {}

  ngOnInit(): void {
    this.singInUsersArr = this.usersArr.setUsers();
  }

  close(): void {
    this.closeSingIn.emit(true);
  }
  submit(): void {
    const userIndex = this.singInUsersArr.findIndex(
      (elem) =>
        elem.email === this.emailValue && elem.password === this.passwordValue
    );
    if (this.singInUsersArr[userIndex].password === this.passwordValue) {
      this.loginedUser.emit(this.singInUsersArr[userIndex]);
      this.closeSingIn.emit(true);
    } else {
      this.wrongData = true;
    }
  }
}
