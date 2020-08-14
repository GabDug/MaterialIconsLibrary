import { Component, OnInit } from '@angular/core';
import { allIconsListStatic } from '../icon-data-generation/static_lists/all_icon_list';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'NgMatIcons';
    allIconList = allIconsListStatic;
    allIconDetails;
    term: string;

    groupedByCategory: any[];

    // Filters
    iconStyle = '';
    category = '';

    isSmallScreen: boolean;

    constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) {}

    ngOnInit(): void {
        // this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.HandsetPortrait])
            .subscribe((state: BreakpointState) => {
                this.isSmallScreen = state.matches;
            });

        this.http.get<Array<any>>('/assets/all-icons-category.json').subscribe(x => {
            this.groupedByCategory = x;
            // console.log(x);
        });
    }
}
