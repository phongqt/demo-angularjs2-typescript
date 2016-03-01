import {Component, OnInit} from 'angular2/core';
import {ArticleService} from "./service/article.service";
import {Header} from './header.component';
import {Footer} from './footer.component';
import {Article} from "./article";

@Component({
    selector: 'my-app',
    templateUrl: 'app/layout/main.html',
    providers: [ArticleService]
})

export class AppComponent{
    
    articles: Article[];
    
    constructor(private _articleService: ArticleService){};
    
    getNews() {
        this._articleService.getArticles().then(articles => this.articles = articles);
    }
    ngOnInit() {
        this.getNews();
    }
} 