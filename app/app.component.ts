import {Component} from "@angular/core"
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {IntroComponent} from "./intro/intro.component"
import {VideoComponent} from "./video/video.component"
import {VideoItemComponent} from "./video/video-item.component"

@Component({
    selector: 'ng-conf',
    template: `
        <nav>
            <a [routerLink]="['Intro']">Introduction</a>
            <a [routerLink]="['Video']">Video</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/intro', name: 'Intro', component: IntroComponent, useAsDefault: true},
    {path: '/video', name: 'Video', component: VideoComponent},
    {path: '/video/:id', name: 'VideoItem', component: VideoItemComponent},
])
export class NgConfComponent {}