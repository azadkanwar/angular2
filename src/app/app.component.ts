import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string = 'Kanwar Family Details';
    constructor() { }
    title1() {
        this.title = "azad singh"
    };
}
