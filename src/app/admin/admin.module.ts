import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminEventCreateComponent } from './admin-event-create/admin-event-create.component';
import { AdminEventEditComponent } from './admin-event-edit/admin-event-edit.component';
import { AdminEventFormComponent } from './admin-event-form/admin-event-form.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminEventsListComponent } from './admin-events-list/admin-events-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminEventCreateComponent,
    AdminEventEditComponent,
    AdminEventFormComponent,
    AdminEventsComponent,
    AdminEventsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
