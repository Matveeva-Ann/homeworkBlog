import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News, User } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';


interface CategoryToImageMap {
  [category: string]: string;
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @Output() closeAddPost = new EventEmitter<boolean>();
  @Input() userName!: string;
  @Input() changesNews?: News;
  @Input() loginedPerson!: User;

  titleValue = '';
  categoryValue = '';
  textValue = '';
  img!: any;
  incorrectlyFormMessage = false;
  changesButton = true;
  previousID = -1;
  previousImg!: string;

  categoryToImage: CategoryToImageMap = {
    culture: '../assets/img/Culture.jpg',
    economy: '../assets/img/Economy.jpg',
    history: '../assets/img/History.jpg',
    policy: '../assets/img/Policy.jpg',
    science: '../assets/img/Science.jpg',
    sport: '../assets/img/sport.jpg',
    world: '../assets/img/World.jpg',
    other: '../assets/img/Other2.jpg',
  };
  
  createImg() {
    return  this.categoryToImage[this.categoryValue] || this.categoryToImage['other'];
  }

  constructor(private newsAarr: ServiceService) {}

  closeClick() {
    this.closeAddPost.emit(true);
  }
  ngOnChanges(): void {
    if (this.changesNews){
      this.previousID = this.changesNews.id;
      this.previousImg = this.changesNews.img;
      this.changesButton = false;
      this.titleValue = this.changesNews.title;
      this.textValue = this.changesNews.text;
      this.categoryValue = this.changesNews.category;
    }
  }

  createDate(){
    const postData = new Date().toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return postData
  }

  resetForm(){
    this.titleValue = '';
    this.categoryValue = '';
    this.textValue = '';
  }
  submitClick() {
    if (this.textValue.trim() !== '' && this.titleValue.trim() !== '' && this.categoryValue !== ''){
      const id = this.newsAarr.getNewsArr().length > 0 ? this.newsAarr.getNewsArr().slice(-1)[0].id +1 : 1;
      
      const newPostObj: News = {
        id: id,
        title: this.titleValue,
        category: this.categoryValue,
        autor: this.userName,
        text: this.textValue,
        status: true,
        time: this.createDate(),
        img: this.createImg(),
        email: this.loginedPerson.email
      };
      this.newsAarr.addNewsArr(newPostObj);
      this.closeAddPost.emit(true);
      this.resetForm();
    }else{
      this.incorrectlyFormMessage = true;
    }
  }

  saveChanges():void{
    const changesPostObj: News = {
      id:  this.previousID,
      title: this.titleValue,
      category: this.categoryValue,
      autor: this.userName,
      text: this.textValue,
      status: true,
      time: this.createDate(),
      img: this.previousImg,
      email: this.loginedPerson.email
    };
     this.newsAarr.editNews(changesPostObj,  this.previousID);
     this.resetForm();
     this.changesButton = true;
     this.closeAddPost.emit(true);
  } 

}
