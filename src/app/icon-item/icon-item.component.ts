import { Component, Input, OnInit } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import IconItem from '../icon';

@Component({
    selector: 'app-icon-item',
    templateUrl: './icon-item.component.html',
    styleUrls: ['./icon-item.component.scss'],
})
export class IconItemComponent implements OnInit {
    @Input() name: string;
    @Input() icon: IconItem;
    @Input() i: number;

    constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

    ngOnInit(): void {}

    copyToClipboard(text: string): void {
        // console.log('Copied!');
        // console.log(text);

        this.clipboard.copy(text);
        this.snackBar.open(`Icon name '${text}' copied to clipboard!`, undefined, { duration: 5000 });
    }
}
