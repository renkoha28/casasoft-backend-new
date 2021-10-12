import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import Event from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-admin-event-form',
  templateUrl: './admin-event-form.component.html'
})
export class AdminEventFormComponent {
  @Input() event: Event = {
    _id: '',
    name: '',
    location: '',
    date: new Date(),
    weather: ''
  };
  @Input() isEditing = false;

  constructor(
    private eventService: EventService,
    private location: Location
  ) { }
  onSubmit() {

    if (this.isEditing) {
      this.eventService.editEvent(this.event._id, this.event).subscribe(() => {
        this.location.back();
      });
      return;
    }

    this.eventService.addEvent(this.event).subscribe(() => {
      this.location.back();
    });
  }
  onCancelClick() {
    this.location.back();
  }
}