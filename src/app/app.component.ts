import { Component } from '@angular/core';
import { News, User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homeworkBlog';
  public newsArrHome: News[] = [];
  usersHome: User[] = [];
  buttonsShow = false;
  loggedUserEmail = '';
  userExit = false;
  changesNews?: News = undefined;
  searchRequest = '';

  cardEdit(news: News) {
    this.changesNews = news;
  }

  onAddModalClose() {
    this.changesNews = undefined;
  }

  loginedUserName(user: User): void {
    this.loggedUserEmail = user.email;
  }
  resetRequest(){
    this.searchRequest = '';
  }
  constructor(public newsArr: ServiceService) {}

  ngOnInit(): void {
    this.newsArrHome = this.newsArr.getNewsArr();
  }
  cardDelete(news: News) {
    this.newsArr.deleteNews(news.id);
  }
  userSignOut(event: boolean) {
    this.userExit = event;
  }

  ngDoCheck(): void {
    this.newsArrHome.map((el) => {
      if (this.userExit) {
        el.status = false;
      } else if (
        el.email === this.loggedUserEmail ||
        this.loggedUserEmail === 'admin@ukr.net'
      ) {
        el.status = true;
      }
    });
    this.userExit = false;
  }
}
