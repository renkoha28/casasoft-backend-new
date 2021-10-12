import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import Event from '../../models/event.model';
@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
})
export class AdminEventEditComponent implements OnInit {
  event: Event;
  originalTitle = '';
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.eventService.getEventById(id)
      .subscribe((event: Event) => {
        this.event = event;
        this.originalTitle = event.name;
      });
  }
}