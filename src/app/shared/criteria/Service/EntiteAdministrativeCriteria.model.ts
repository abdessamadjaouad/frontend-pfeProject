import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {AgentCriteria} from '../Agent/AgentCriteria.model';

export class EntiteAdministrativeCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
  public chefService: AgentCriteria ;
  public chefServices: Array<AgentCriteria> ;

}
