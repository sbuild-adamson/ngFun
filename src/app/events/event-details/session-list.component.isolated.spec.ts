import { SessionListComponent } from "./session-list.component"
import { ISession } from '../shared';


describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  })

  describe('ngOnChanges', () => {
    it ('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'intermediate'}, 
        {name: 'session 2', level: 'advanced'},
        {name: 'session 3', level: 'beginner'}
      ];
      component.filterBy = 'intermediate';
      component.sortBy = "name";
      component.eventId = 1;
      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(1);
    });

    it ('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'intermediate'}, 
        {name: 'session 3', level: 'advanced'},
        {name: 'session 2', level: 'beginner'}
      ];
      component.filterBy = 'all';
      component.sortBy = "name";
      component.eventId = 1;
      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  })
})