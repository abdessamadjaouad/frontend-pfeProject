import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AgentDto} from '../Agent/Agent.model';

export class RetardDto extends BaseDto{

    public ref: string;

   public dateRetart: Date;

    public duree: null | number;

    public agent: AgentDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.dateRetart = null;
        this.duree = null;
        this.agent = new AgentDto() ;

        }

}
