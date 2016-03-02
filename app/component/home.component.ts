import {Component, OnInit} from "angular2/core";
import {ArticleService} from "../service/article.service";
import {Router} from 'angular2/router';
import {Article} from "../interface/article";

@Component({
    selector: 'home',
    templateUrl: 'app/layout/home.html',
    providers: [ArticleService]
})
export class HomeComponent implements OnInit{
    
    articles: Article[];
    constructor(private _articleService: ArticleService,
    private _router: Router){};
    
    getNews() {
        this._articleService.getArticles().then(articles => this.articles = articles);
    }
    ngOnInit() {
        this.getNews();
    }
    gotoArticleDetail(article: Article) {
        let link = ['ArticleDetail', { id: article.id }];
        this._router.navigate(link);
    }
} 