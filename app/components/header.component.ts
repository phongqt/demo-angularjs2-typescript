import {Component} from 'angular2/core';
import {HomeComponent} from "./home.component";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
@Component({
   selector: "header-block",
   templateUrl: 'app/layout/header.html',
   directives: [RouterOutlet, ROUTER_DIRECTIVES],
})

export class Header{
    
}