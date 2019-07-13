import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'show',
    templateUrl:'app.show.html'
})
export class ShowComponent{

    constructor(private _active:ActivatedRoute){}
}