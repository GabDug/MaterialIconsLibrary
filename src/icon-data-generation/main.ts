import { officialIconListStatic } from './static_lists/official_icon_list';
import { allIconsListStatic } from './static_lists/all_icon_list';
import { customIconList } from './static_lists/custom_icon_list';

import IconItem from './icon';
import * as fs from 'fs';
import { from, Observable } from 'rxjs';
import { groupBy, map, mergeMap, toArray } from 'rxjs/operators';
import * as path from 'path';

main();

function main(): void {
    console.log('Pre building icon list...');
    const officialIcons = getOfficialList();
    const customIcons = getCustomList();
    const fullList = getFullListNames();

    let outputList: IconItem[];
    outputList = mergeLists(officialIcons, customIcons);
    outputList = mergeMissingIcons(outputList, fullList);
    outputList.sort(sortIconByNameAlphabetically);

    fs.writeFileSync(path.join(__dirname, '..', 'assets', 'all-icons.json'), JSON.stringify(outputList));

    groupByCategory(outputList).subscribe(x => {
        fs.writeFileSync(path.join(__dirname, '..', 'assets', 'all-icons-category.json'), JSON.stringify(x));
    });
    console.log('Done!');
}

function getOfficialList(): IconItem[] {
    // TODO Get the latest list online
    //  If network issue, use the static one
    //  Cron update the static one
    return officialIconListStatic.icons;
}

function getFullListNames(): string[] {
    // TODO Get the latest list from the font files directly
    return allIconsListStatic;
}

function getCustomList(): IconItem[] {
    return customIconList;
}

function mergeLists(a: IconItem[], customList: IconItem[]): IconItem[] {
    // TODO Check for duplicates of name

    /* Adds unsorted category to icons that haven't been categorized by us */
    customList = customList.map(x => {
        if (x.categories.length === 0) {
            x.categories.push('unsorted');
        }
        return x;
    });

    return a.concat(customList);
}

function mergeMissingIcons(IconItemList: IconItem[], fullList: string[]): IconItem[] {
    const currentIconNames = IconItemList.map(x => x.name);
    // console.log(currentIconNames);
    const missingIcons = currentIconNames
        .filter(x => !fullList.includes(x))
        .concat(fullList.filter(x => !currentIconNames.includes(x)));
    // console.log(this.undocumentedIcons);

    missingIcons.forEach(x => {
        IconItemList.push({ name: x, categories: ['latest'] } as any);
    });

    return IconItemList;
}

function groupByCategory(iconList: IconItem[]): Observable<any[]> {
    const iconsSource = from(iconList);
    const groupedByCategory$: Observable<any[]> = iconsSource.pipe(
        groupBy(icon => icon.categories[0]),
        mergeMap(category => category.pipe(toArray())),
        toArray(),
        map(iconGroup => iconGroup.sort(sortIconGroupAlphabetically))
    );

    return groupedByCategory$;
}

function sortIconGroupAlphabetically(a: IconItem[], b: IconItem[]): 0 | 1 | -1 {
    // TODO add latest too!
    if (a[0].categories[0] === 'undocumented') {
        return -1;
    }
    if (b[0].categories[0] === 'undocumented') {
        return 1;
    }
    if (a[0].categories[0] < b[0].categories[0]) {
        return -1;
    }
    if (a[0].categories[0] > b[0].categories[0]) {
        return 1;
    }
    return 0;
}

function sortIconByNameAlphabetically(a: IconItem, b: IconItem): 0 | 1 | -1 {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
