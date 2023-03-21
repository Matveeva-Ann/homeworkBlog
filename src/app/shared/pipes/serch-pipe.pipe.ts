import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/interface';

@Pipe({
  name: 'serchPipe'
})
export class SerchPipePipe implements PipeTransform {

  transform(newsArrHome:News[], searchRequest:string ): News[] {
    if (!newsArrHome) return [];
    if(!searchRequest) return newsArrHome;
    return newsArrHome.filter(news => news.title.toLowerCase().includes(searchRequest.toLowerCase()))
  }

}
