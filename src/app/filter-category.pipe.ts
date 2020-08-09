import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
    transform(items: any[], cat: string): any[] {
        function checkInside(item: any, term: string) {
            return item[0].categories[0] === term;
        }

        if (!cat || cat === '') {
            return items;
        }
        return items.filter(function (item) {
            return checkInside(item, cat);
        });
    }
}
