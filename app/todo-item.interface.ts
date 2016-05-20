import {Moment} from "moment"

export interface ITodoItem {
    time: Moment
    title: string
    done: boolean
}