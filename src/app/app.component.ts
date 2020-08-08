import { Component, OnInit } from '@angular/core';
import { officialIconList } from './official_icon_list';
import { allIconsList } from './all_icon_list';
import { from } from 'rxjs';
import { groupBy, map, mergeMap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'NgMatIcons';
    officialIconList = officialIconList;
    allIconList = allIconsList;
    allIconDetails;
    term: string;
    undocumentedIcons: string[] = [];
    iconStyle: string;
    groupedByCategory: any[];

    ngOnInit() {
        let officialIconNames = officialIconList.icons.map(x => x.name);
        console.log(officialIconNames);
        this.undocumentedIcons = officialIconNames
            .filter(x => !allIconsList.includes(x))
            .concat(allIconsList.filter(x => !officialIconNames.includes(x)));
        console.log(this.undocumentedIcons);

        this.undocumentedIcons.forEach(x => {
            this.officialIconList.icons.push({ name: x, categories: ['Undocumented'] } as any);
        });
        let iconsSource = from(this.officialIconList.icons);
        let groupedByCategory$ = iconsSource.pipe(
            groupBy(icon => icon.categories[0]),
            mergeMap(category => category.pipe(toArray())),
            toArray(),
            map(iconGroup => iconGroup.sort(sortIconGroupAlphabetically))
        );

        groupedByCategory$.subscribe(x => {
            this.groupedByCategory = x;
            console.log(x);
        });
    }
}

const sortIconGroupAlphabetically = (a, b) => {
    if (a[0].categories[0] < b[0].categories[0]) return -1;
    if (a[0].categories[0] > b[0].categories[0]) return 1;
    return 0;
};
