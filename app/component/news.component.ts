import {Component, OnInit} from "angular2/core";
import {ArticleService} from "../service/article.service";
import {Router} from 'angular2/router';
import {Article} from "../interface/article";

@Component({
    templateUrl: 'app/layout/news.html',
    providers: [ArticleService]
})
export class NewsComponent implements OnInit{
    
    private articles: Article[];
    private page:number = 1;
    private limit:number = 5;
    private isDisabledPrevious:boolean = true;
    private isDisabledNext:boolean = false;
    constructor(private _articleService: ArticleService,
    private _router: Router){};
    
    getNews() {
        this._articleService.getArticles(this.page, this.limit).then(articles => this.articles = articles);
    }
    ngOnInit() {
        this.getNews();
    }
    gotoNext() {        
        this.isDisabledPrevious = false;
        this.page ++;
        this.isDisabledNext = this.page * this.limit >=10;
        this.getNews();
    }
    gotoPrevious() {        
        this.page --;
        this.isDisabledPrevious = this.page == 1;
        this.isDisabledNext = false;
        this.getNews();
    }
    gotoArticleDetail(article: Article) {
        let link = ['ArticleDetail', { id: article.id }];
        this._router.navigate(link);
    }
} 