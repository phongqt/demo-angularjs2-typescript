import {Component, OnInit} from "angular2/core";
import {Article} from "../interface/article"
import {RouteParams} from "angular2/router"
import {ArticleService} from "../service/article.service"
@Component({
    selector:"article-detail",
    templateUrl: "app/layout/article-detail.html",
    providers: [ArticleService]
})
 export class ArticleDetailComponent implements OnInit{
     article: Article;
     constructor(private _articleService:ArticleService,
     private _routeParams: RouteParams) {}
     getArticleDetail(id:number) {
          this._articleService.getArticleDetail(id).then(Article => this.article = Article);
     }
     ngOnInit() {
         // '+' covert string to number because parameter always strings
         let id = +this._routeParams.get('id');                  
         this.getArticleDetail(id);
     }
 }