import {Articles} from './mock-article';
import {Article} from '../interfaces/article';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArticleService {
  getArticles(page:number, limit:number) {
    
    
      
    return Promise.resolve(Articles).then(function (res:Article[]) {
        var list=[];
        res = res.sort((n1,n2) => {
            if (n1.id < n2.id) {
                return 1;
            }

            if (n1.id > n2.id) {
                return -1;
            }

            return 0;
        });
        for (var i = ((page - 1)* limit); i <res.length; i++) {
            list.push(res[i]);
            if (i == (limit * page -1)) {
                break;
            }
        }
        return list;
    });
    //return Promise.resolve(Articles);
  } 
  getArticleDetail(id: number) {
    //   var element = Articles.map(function(x) {return x.id; }).indexOf(id);
    //   return Articles[element];
     return Promise.resolve(Articles).then(Article => Articles.filter(Article => Article.id === id)[0]);      
  } 
}