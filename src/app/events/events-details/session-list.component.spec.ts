import { SessionListComponenet } from './session-list.component';
import {ISession} from '../shared/event.module';

describe('SessionListComponent', () => {

    let component: SessionListComponenet;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponenet(mockAuthService, mockVoterService)
    })

    describe('ngOnChnages', () => {
        it('Should filter  the sessions correctly', () => {
            component.sessions = <ISession[]>[
            {name: 'session 1', level: 'intermediate'},
            {name: 'session 2', level: 'beginner'},
            {nam: 'session 3', level: 'intermediate'}];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        })
        it('Should sort  the sessions correctly', () => {
            component.sessions = <ISession[]>[
            {name: 'session 3', level: 'intermediate'},
            {name: 'session 1', level: 'beginner'},
            {nam: 'session 2', level: 'intermediate'}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3')
        })
    })
})