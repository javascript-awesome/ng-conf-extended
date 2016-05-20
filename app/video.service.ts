import { Injectable }     from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { IVideoItem }     from './video-item.interface';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class VideoService {
    constructor (private jsonp: Jsonp) {}

    private videosUrl = 'http://artemplatonov.com/ng-conf/video.php?callback=JSONP_CALLBACK';

    getVideos (): Observable<IVideoItem[]> {
        return this.jsonp.get(this.videosUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || [];
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}