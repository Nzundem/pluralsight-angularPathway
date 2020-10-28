import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {SessionListComponenet} from './session-list.component';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ISession} from '../shared/event.module';
import {By} from '@angular/platform-browser';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from 'src/app/common';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture <SessionListComponenet>,
    component: SessionListComponenet,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'Joe'}
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponenet,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponenet);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });
    describe('inintial display', () => {
        it('should have correct session title', () => {
            component.sessions = [{id: 3 , name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner',
            abstract: 'abstract', voters: [ 'john', 'bob']
        }];
        component.filterBy = 'all';
        component.sortBy = 'name';
        component.eventId = 4;

        component.ngOnChanges();
        fixture.detectChanges();
        expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        });
    });
});
