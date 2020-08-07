import {Component, OnInit} from '@angular/core';
import {officialIconList} from "./official_icon_list";
import {allIconsList} from "./all_icon_list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgMatIcons';
  officialIconList = officialIconList;
  allIconList = allIconsList;
  term: string;
  undocumentedIcons: string[] = [];

  ngOnInit(){
    let officialIconNames = officialIconList.icons.map(x => x.name);
    console.log(officialIconNames);
     this.undocumentedIcons =  officialIconNames
       .filter(x => !allIconsList.includes(x))
      .concat(allIconsList.filter(x => !officialIconNames.includes(x)));
    console.log(this.undocumentedIcons);
  }
}
