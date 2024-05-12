import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './Blogs/blogs/blogs.component';
import { AddBlogsComponent } from './Blogs/add-blogs/add-blogs.component';

@NgModule({
  declarations: [AppComponent, BlogsComponent, AddBlogsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
