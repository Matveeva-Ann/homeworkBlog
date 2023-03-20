import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

enum Messege{
  existEmail = '* Користувач з таким email вже існує',
  emptyFields = '* Заповніть всі поля'
}

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
  showMessage!: string;


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
      this.showMessage = Messege.existEmail;
    } else if (this.usernameValue.trim() === '' || this.emailValue.trim() === '' || this.passwordValue.trim() === ''){
      this.showMessage = Messege.emptyFields;
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
