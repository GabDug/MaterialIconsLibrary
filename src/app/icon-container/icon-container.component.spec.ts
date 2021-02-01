import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconContainerComponent } from './icon-container.component';

describe('IconContainerComponent', () => {
    let component: IconContainerComponent;
    let fixture: ComponentFixture<IconContainerComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IconContainerComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
