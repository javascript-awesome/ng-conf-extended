import {Component} from "@angular/core"
import {RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'video-item',
    template: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/{{id}}" frameborder="0" allowfullscreen></iframe>`
})
export class VideoItemComponent {
    id: string;
    constructor (private params:RouteParams) {
        this.id = params.get('id')
    }
}