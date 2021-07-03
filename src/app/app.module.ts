import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { Namereducer } from './name/store/name.reducer';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    HeroHeaderComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({NamereducerL:Namereducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
