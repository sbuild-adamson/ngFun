import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { 
  EventsListComponent, 
  EventThumbnailComponent, 
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponenet,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver,
} from './events';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { 
  DurationPipe, 
  EventService 
} from './events/shared';
import { 
  JQ_TOKEN, 
  CollapsibleWellComponent, 
  TOASTR_TOKEN, 
  Toastr, 
  SimpleModalComponent, 
  ModalTriggerDirective 
} from './common';


let toastr:Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    NavBarComponent,
    CollapsibleWellComponent,
    SessionListComponenet,
    DurationPipe,
    ModalTriggerDirective,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really wan to cancel?');
  return true;
}
