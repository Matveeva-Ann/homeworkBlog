import { Injectable } from '@angular/core';
import { News } from '../interfaces/interface';
import { User } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private usersArr: User[] = [
    {
      name: 'Admin',
      email: 'admin@ukr.net',
      password: 'admin'
    },
    {
      name: 'Anna',
      email: 'qq',
      password: 'qq'
    },
  ];

  private newsArr: News []=[
    {
      id:1,
      title: "Михайлу Федорову розширять повноваження. В уряді анонсували кадрові зміни (UPD)",
      autor: "Anna",
      category: 'Policy',
      time: 'March 19, 2023 at 2:04 PM',
      text: 'Віцепрем’єр-міністр Михайло Федоров буде опікуватися ще низкою напрямів, окрім диджиталізації. Його майбутня посада — віцепрем’єр-міністр з інновацій, розвитку освіти, науки та технологій — міністр цифрової трансформації України, повідомив прем’єр-міністр України Денис Шмигаль.',
      img: 'https://s.dou.ua/img/announces/840_RgDLOTt.jpg',
      status: false
    },
    {
      id:2,
      title: "OpenAI випустила GPT-4 — чим модель відрізняється від попередника та як отримати API",
      autor: "Anna",
      category: 'Technologies',
      time: 'March 09, 2023 at 3:18 PM',
      text: 'Після кількох місяців очікування OpenAI випустила нову потужну модель штучного інтелекту — GPT-4, йдеться в анонсі на сайті компанії. Дослідницька лабораторія вже відкрила список очікування на отримання API GPT-4 для розробників.',
      img: 'https://s.dou.ua/img/announces/gpt4_cover-840.jpg',
      status: false
    },
    {
      id:3,
      title: "some title",
      autor: "Admin",
      category: 'Art',
      time: 'March 29, 2023 at 8:04 PM',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam veniam facere laborum magnam quaerat odit at numquam eos porro nulla itaque dicta minus laboriosam, ad iure nihil nemo iste.',
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
      status: false
    },
  ]
  
  getUser(user: User): void{
    this.usersArr.push(user);
  }

  setUsers():User[]{
    return this.usersArr;
  }

  getNewsArr(): Array<News>{
    return this.newsArr;
  }
  addNewsArr(post: News, id?:number){
    if (id){
      const index = this.newsArr.findIndex(news => news.id === id);
      this.newsArr.splice(index, 1, post)
    } else{
      this.newsArr.push(post);
    }
   
  }
  deleteNews(id: number){
    // this.newsArr = this.newsArr.filter(elem => elem.id !== id);
    const index = this.newsArr.findIndex(news=>news.id ===id);
    this.newsArr.splice(index, 1);
  }
  // editNews( updateNews: News, id: number): void{
  //   const index = this.newsArr.findIndex(news => news.id === id);
  //   this.newsArr.splice(index, 1, updateNews)
  // }
  

}
