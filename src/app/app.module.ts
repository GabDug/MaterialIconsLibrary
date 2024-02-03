import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { IconItemComponent } from './icon-item/icon-item.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HeaderComponent } from './header/header.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { FooterComponent } from './footer/footer.component';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FilterCategoryPipe } from './filter-category.pipe';
import { IconContainerComponent } from './icon-container/icon-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        IconItemComponent,
        FilterPipe,
        HeaderComponent,
        FooterComponent,
        FilterCategoryPipe,
        IconContainerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatListModule,
        ClipboardModule,
        MatSnackBarModule,
        MatButtonModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
