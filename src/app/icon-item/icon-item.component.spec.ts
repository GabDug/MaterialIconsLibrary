import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconItemComponent } from './icon-item.component';

describe('IconItemComponent', () => {
    let component: IconItemComponent;
    let fixture: ComponentFixture<IconItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
