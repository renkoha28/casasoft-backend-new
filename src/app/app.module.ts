import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeDescComponent } from './components/welcome-desc/welcome-desc.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventService } from './services/event.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeDescComponent,
    HeaderComponent,
    EventDetailsComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
