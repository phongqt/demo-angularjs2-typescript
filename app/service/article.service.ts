import {Articles} from './mock-article';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArticleService {
   getArticles() {
    return Promise.resolve(Articles);
  } 
}