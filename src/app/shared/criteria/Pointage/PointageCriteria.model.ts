import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {AgentCriteria} from '../Agent/AgentCriteria.model';
import {BadgeNfcCriteria} from '../BioManager/BadgeNfcCriteria.model';

export class PointageCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public heureEntree: Date;
    public heureEntreeFrom: Date;
    public heureEntreeTo: Date;
    public heureSortie: Date;
    public heureSortieFrom: Date;
    public heureSortieTo: Date;
    public presence: null | boolean;
     public pointageSens: number;
     public pointageSensMin: number;
     public pointageSensMax: number;
  public agent: AgentCriteria ;
  public agents: Array<AgentCriteria> ;

}
