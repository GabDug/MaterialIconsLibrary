import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.scss']
})
export class IconItemComponent implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
