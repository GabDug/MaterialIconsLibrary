import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FilterCategoryPipe } from './filter-category.pipe';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { IconContainerComponent } from './icon-container/icon-container.component';
import { IconItemComponent } from './icon-item/icon-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}
