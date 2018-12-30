import { Component } from '@angular/core';
import { NgxAutocompletePipe } from './ngx-autocomplete/ngx-autocomplete.pipe';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private ngxAutocompletePipe: NgxAutocompletePipe) { }

    statusFilter: string;
    userTestStatus: { id: number, name: string }[] = [
        { 'id': 0, 'name': 'Available' },
        { 'id': 1, 'name': 'Ready' },
        { 'id': 2, 'name': 'Started' }
    ];
}
