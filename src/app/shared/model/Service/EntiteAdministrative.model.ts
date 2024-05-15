import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AgentDto} from '../Agent/Agent.model';

export class EntiteAdministrativeDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public chefService: AgentDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.chefService = new AgentDto() ;

        }

}
