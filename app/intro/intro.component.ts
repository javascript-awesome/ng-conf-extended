import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core"
import {ITodoItem} from "../todo-item.interface"
import {TodoService} from "../todo.service"


@Component({
    selector: 'intro',
    template: `
        <div>
            <h1>ng-conf extended in DataArt Lublin</h1>
            <h2>Agenda:</h2>
            <ul class="items">
                <li *ngFor="let item of items" [ngClass]="{done: item.done}" (click)="item.done = !item.done">
                    <b>{{item.time.format('hh:mm a')}}</b> {{item.title}}
                </li>
            </ul>
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class IntroComponent implements OnInit{
    public items:ITodoItem[]

    constructor (private todoService:TodoService) {}

    ngOnInit () {
        this.items = this.todoService.getItems();
    }
}