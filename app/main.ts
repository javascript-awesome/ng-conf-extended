import {bootstrap} from "@angular/platform-browser-dynamic"
import {NgConfComponent} from "./app.component"
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import {TodoService} from "./todo.service"

bootstrap(NgConfComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, TodoService]);