import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {AgentCriteria} from '../Agent/AgentCriteria.model';

export class RetardCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public dateRetart: Date;
    public dateRetartFrom: Date;
    public dateRetartTo: Date;
     public duree: number;
     public dureeMin: number;
     public dureeMax: number;
  public agent: AgentCriteria ;
  public agents: Array<AgentCriteria> ;

}
