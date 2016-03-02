import {Articles} from './mock-article';
import {Article} from '../interface/article';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArticleService {
   getArticles() {
    return Promise.resolve(Articles);
  } 
  getArticleDetail(id: number) {
    //   var element = Articles.map(function(x) {return x.id; }).indexOf(id);
    //   return Articles[element];
     return Promise.resolve(Articles).then(Article => Articles.filter(Article => Article.id === id)[0]);      
  } 
}