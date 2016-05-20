import { Injectable } from '@angular/core';
import * as moment from "moment"
import {ITodoItem} from "./todo-item.interface"

@Injectable()
export class TodoService {
    private items:ITodoItem[] = [
        {time: moment("2016-05-21 10:00"), done: false, title: 'Warm up video - The ng-show (20min)'},
        {time: moment("2016-05-21 10:20"), done: false, title: 'Keynote - Brad Green (25min)'},
        {time: moment("2016-05-21 10:50"), done: false, title: 'Coding session - Hello World App, Angular-CLI (10min)'},
        {time: moment("2016-05-21 11:00"), done: false, title: 'Typescript: Angular 2\'s Secret Weapon - Dan Wahlin (20min)'},
        {time: moment("2016-05-21 11:20"), done: false, title: 'Questions and discussion (10min)'},
        {time: moment("2016-05-21 11:30"), done: false, title: 'Routing - Misko Hevery (20min)'},
        {time: moment("2016-05-21 11:50"), done: false, title: 'Coding session - Routing Deprecated (10min)'},
        {time: moment("2016-05-21 12:00"), done: false, title: 'Reactive Angular2 with ngRx - Rob Womald (20min)'},
        {time: moment("2016-05-21 12:20"), done: false, title: 'Questions, discussion and some coding (10min)'},
        {time: moment("2016-05-21 12:30"), done: false, title: 'Lunch (30min)'},
        {time: moment("2016-05-21 13:00"), done: false, title: 'Components, Components, Components!...and Angular 1.5 - Pete Bacon Darwin (20min)'},
        {time: moment("2016-05-21 13:20"), done: false, title: 'Questions and discussion (10min)'},
        {time: moment("2016-05-21 13:30"), done: false, title: 'Angular 2\'s Fresh Approach to Style - Justin Schwartzenberger (20min)'},
        {time: moment("2016-05-21 13:50"), done: false, title: 'Testing all your Tasks - Julie Ralph (20min)'},
        {time: moment("2016-05-21 14:10"), done: false, title: 'Questions and discussion (10min)'},
        {time: moment("2016-05-21 14:20"), done: false, title: 'Sharing Code Between Web and Native Apps - Jen Looper, TJ VanToll (20min)'},
        {time: moment("2016-05-21 14:40"), done: false, title: 'Coding session - Native Android App with Angular and NativeScript (20min)'},
        {time: moment("2016-05-21 15:00"), done: false, title: 'After-party'},
    ];
    
    public getItems () {
        return this.items;
    }
    
}
