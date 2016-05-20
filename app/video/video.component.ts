import {Component, OnInit} from "@angular/core"
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {IVideoItem} from "../video-item.interface"
import {JSONP_PROVIDERS}  from '@angular/http';
import {VideoService} from "../video.service"

@Component({
    selector: 'video-container',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>
        <h1>ng-conf best videos</h1>
        <nav>
            <div *ngIf="isLoading" class="load-bar">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div *ngIf="isLoading" class="loader">Loading...</div>

            <a *ngFor="let video of videos" [routerLink]="['VideoItem', {id:video.id}]">  
                <img [src]="'http://img.youtube.com/vi/'+video.id+'/0.jpg'" [title]="video.title" />
            </a>
        </nav>
    </div>`,
    providers: [JSONP_PROVIDERS, VideoService]
})
export class VideoComponent implements OnInit {
    public videos: IVideoItem[] = [];
    public isLoading:boolean

    constructor (private videoService:VideoService) {}

    ngOnInit () {
        this.loadVideos()
    }

    loadVideos () {
        this.isLoading = true;
        this.videoService.getVideos().subscribe((videos) => {
            this.videos = videos;
            this.isLoading = false;
        });
    }
}