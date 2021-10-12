import { Component, Input, OnInit } from '@angular/core';
import Event from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-admin-events-list',
  templateUrl: './admin-events-list.component.html'
})
export class AdminEventsListComponent implements OnInit {
  @Input() limit = 0;
  eventsList: Event[];
  constructor(
    private eventService: EventService
  ) {}
  ngOnInit() {
    this.eventService.getEvents()
      .subscribe((events: Event[]) => {
        this.eventsList = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        if (this.limit > 0) {
          this.eventsList = this.eventsList.slice(0, this.limit);
        }
      });
  }
  onDeleteClick(id) {
    this.eventService.deleteEvent(id)
      .subscribe(() => {
        this.eventsList = this.eventsList.filter((event) => event._id !== id);
      });
  }
}