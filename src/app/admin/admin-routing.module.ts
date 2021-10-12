import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEventEditComponent } from './admin-event-edit/admin-event-edit.component';
import { AdminEventCreateComponent } from './admin-event-create/admin-event-create.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'events', component: AdminEventsComponent },
          { path: 'event/edit/:id', component: AdminEventEditComponent },
          { path: 'event/create', component: AdminEventCreateComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }