import {VoterService } from './voter.service';
import {ISession} from '../shared/event.module';
import {Observable, of} from 'rxjs';
import { Session } from 'protractor';

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;
        beforeEach(() => {
            mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
            voterService = new VoterService(mockHttp)
        });
        describe('deleteVoter', () => {
            it('should remove voter form list of voters', () => {
                let session = {id: 6, voters: ['joe', 'john']}
                mockHttp.delete.and.returnValue(of(false))
                voterService.deleteVoter(3, <ISession>session, 'joe')

                expect(session.voters.length).toBe(1);
                expect(session.voters[0]).toBe('john');
            })
        })
        describe('should call http.delete with the right URL', () => {
            it('should remove voter form list of voters', () => {
                let session = {id: 6, voters: ['joe', 'john']}
                mockHttp.delete.and.returnValue(of(false))
                voterService.deleteVoter(3, <ISession>session, 'joe')

                expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');

            })
        })
        describe('It should call post when the data is sent', () => {
            it('should remove voter form list of voters', () => {
                let session = {id: 6, voters: ['joe']}
                mockHttp.post.and.returnValue(of(false))
                voterService.addVoter(3, <ISession>session, 'joe')

                expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));

            })
        })
})