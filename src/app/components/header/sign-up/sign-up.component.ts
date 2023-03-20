import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Output() closeSignUp = new EventEmitter<boolean>();

  usernameValue = '';
  emailValue = '';
  passwordValue = '';
  showMassage = false;
  showMassage2 = false;

  userArrSignUp: User[] = []
  constructor(private registeredUsers:  ServiceService){
  }
  ngOnInit(): void {
    this.userArrSignUp = this.registeredUsers.setUsers();
  }

  close():void{
    this.closeSignUp.emit(true);
  }
  submit():void{
    if (this.userArrSignUp.some(elem => elem.email === this.emailValue)){
      this.showMassage = true;
      this.showMassage2 = false;
    } else if (this.usernameValue.trim() === '' || this.emailValue.trim() === '' || this.passwordValue.trim() === ''){
      this.showMassage2 = true;
      this.showMassage = false;
    }else{
      this.createNewUser();
    }
  }

  createNewUser(){
    const newUser: User = {
      name: this.usernameValue,
      email: this.emailValue,
      password: this.passwordValue,
    }
    this.registeredUsers.getUser(newUser);
    this.closeSignUp.emit(true);
  }
}
