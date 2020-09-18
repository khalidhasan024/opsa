import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductService } from './core/product.service'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { TestPipe } from './shared/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
