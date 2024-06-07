import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// CUSTOM IUMPORTS
import { AppComponent } from './app.component';
import { HomeindexComponent } from './views/homeindex/homeindex.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModuleModule } from './Modules/shared-module/shared-module.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeindexComponent,
    SideBarComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
