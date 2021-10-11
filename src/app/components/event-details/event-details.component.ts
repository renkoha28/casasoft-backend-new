import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent {
  event: Event;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    const id = route.snapshot.params['id'];
    eventService.getEventById(id)
      .subscribe((event: Event) => {
        this.event = event;
      });
  }
}