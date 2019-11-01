import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponenet {
  @Input() sessions:ISession[];

}