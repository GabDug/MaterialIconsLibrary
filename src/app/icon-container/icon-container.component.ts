import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon-container',
    templateUrl: './icon-container.component.html',
    styleUrls: ['./icon-container.component.scss'],
})
export class IconContainerComponent implements OnInit {
    @Input() items = [];
    @Input() term = '';

    constructor() {}

    ngOnInit(): void {}
}
