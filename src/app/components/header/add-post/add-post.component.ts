import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News } from 'src/app/shared/interfaces/interface';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @Output() closeAddPost = new EventEmitter<boolean>();
  @Input() userName!: string;
  @Input() changesNews!: News;

  titleValue = '';
  categoryValue = '';
  textValue = '';
  img!: any;
  incorrectlyFormMessage = false;
  changesButton = true;
  previousID = -1;
  previousImg!: string;

  universalPictures = [
    {
      category: 'culture',
      img: '../assets/img/Culture.jpg',
    },
    {
      category: 'economy',
      img: '../assets/img/Economy.jpg',
    },
    {
      category: 'history',
      img: '../assets/img/History.jpg',
    },
    {
      category: 'policy',
      img: '../assets/img/Policy.jpg',
    },
    {
      category: 'science',
      img: '../assets/img/Science.jpg',
    },
    {
      category: 'sport',
      img: '../assets/img/sport.jpg',
    },
    {
      category: 'world',
      img: '../assets/img/World.jpg',
    },
    {
      category: 'other',
      img: '../assets/img/Other2.jpg',
    },
    {
      category: '',
      img: '../assets/img/Other2.jpg',
    },
  ];

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
  createImg(){
    this.img = this.universalPictures.find(
      (elem) => elem.category === this.categoryValue
    );
    return this.img.img;
  }
  resetForm(){
    this.titleValue = '';
    this.categoryValue = '';
    this.textValue = '';
  }
  submitClick() {
    if (this.textValue.trim() !== '' && this.titleValue.trim() !== '' && this.categoryValue !== ''){
      const id = this.newsAarr.getNewsArr().slice(-1)[0].id +1;
      const newPostObj: News = {
        id: id,
        title: this.titleValue,
        category: this.categoryValue,
        autor: this.userName,
        text: this.textValue,
        status: true,
        time: this.createDate(),
        img: this.createImg(),
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
    };
     this.newsAarr.addNewsArr(changesPostObj,  this.previousID);
     this.resetForm();
     this.changesButton = true;
     this.changesButton = false;
     this.closeAddPost.emit(true);
  } 

}
