import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {NewsComponent} from './news.component'
import {ArticleDetailComponent} from "./article-detail.component";
import {Header} from "./header.component";
import {Footer} from "./footer.component";
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';
@Component({
    templateUrl: 'app/layout/home.html',
    directives: [ Header, Footer,NewsComponent, RouterOutlet, ROUTER_DIRECTIVES],
    
    // styleUrls: ['home.component.css']
})
@RouteConfig([
    {
        path:'/',
        name: 'News',
        component: NewsComponent,
        useAsDefault: true
    },
    {
        path:'/article/detail/:id',
        name: 'ArticleDetail',
        component: ArticleDetailComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    }
    
])
export class HomeComponent {
} 