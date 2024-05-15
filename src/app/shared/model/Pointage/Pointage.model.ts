import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AgentDto} from '../Agent/Agent.model';
import {BadgeNfcDto} from '../BioManager/BadgeNfc.model';

export class PointageDto extends BaseDto{

    public ref: string;

   public heureEntree: Date;

   public heureSortie: Date;

   public presence: null | boolean;

    public pointageSens: null | number;

    public agent: AgentDto ;
    public badgeNfc: BadgeNfcDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.heureEntree = null;
        this.heureSortie = null;
        this.presence = null;
        this.pointageSens = null;
        this.agent = new AgentDto() ;

        }

}
