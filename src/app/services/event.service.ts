import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import Event from '../models/event.model';
@Injectable()
export class EventService {
  eventUrl = `${environment.apiUrl}/events`;
  constructor(
    private http: HttpClient
  ) { }
  public getEvents(): Observable<Event[]> {
    return this.http
      .get(this.eventUrl)
      .map(response => response['data'] as Event[]);
  }

  public getEventById(id: string): Observable<Event> {
    return this.http
      .get(`${this.eventUrl}/${id}`)
      .map(response => response['data'] as Event);
  }

  public deleteEvent(id: string): Observable<Event> {
    return this.http
      .delete(`${this.eventUrl}/${id}`)
      .map(response => response['data'] as Event);
  }

  public addEvent(event: Event): Observable<Event> {
    return this.http
      .post<Event>(this.eventUrl, { data: event });
  }

  public editEvent(id: string, event: Event): Observable<Event> {
    return this.http
      .put<Event>(`${this.eventUrl}/${id}`, { data: event });
  }

}