import {Component, OnInit} from 'angular2/core';
import {ArticleService} from "./service/article.service";
import {Header} from './header.component'
import {Article} from "./article";
import {Footer} from './footer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/layout/main.html',
    providers: [ArticleService]
})

export class AppComponent{
    
    articles: Article[];
    
    constructor(private _newsService: ArticleService){};
    
    getNews() {
        this._newsService.getArticles().then(articles => this.articles = articles);
    }
    ngOnInit() {
        this.getNews();
    }
} 