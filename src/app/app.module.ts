import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    // TranslateModule.forRoot({
    //   defaultLanguage: 'en',
    //   loader: {
    //     provide: TranslateModule,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   }
    // })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }
