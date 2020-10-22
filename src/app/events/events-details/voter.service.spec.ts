import {VoterService } from './voter.service';
import {ISession} from '../shared/event.module';
import {Observable} from 'rxjs';

describe('VoterService',()=>{
    let voterService : VoterService,
        mockHttp;
        beforeEach(()=>{
            mockHttp = jasmine.createSpyObj('mockHttp',[])
            voterService = new VoterService(mockHttp)
        })
})