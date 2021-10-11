import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import Event from '../../models/event.model';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  eventsList: Event[];
  constructor(
    private eventService: EventService
  ) {
    eventService.getEvents()
      .subscribe((events: Event[]) => {
        this.eventsList = events;
      });
  }
}