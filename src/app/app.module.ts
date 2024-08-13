import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsEditComponent } from './pages/contacts-edit/contacts-edit.component';
import { ContactsDetailsComponent } from './pages/contacts-details/contacts-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    UserPreviewComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AboutComponent,
    ContactsPageComponent,
    ContactsEditComponent,
    ContactsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
