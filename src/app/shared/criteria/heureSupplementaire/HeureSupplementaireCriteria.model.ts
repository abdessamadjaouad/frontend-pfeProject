import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class HeureSupplementaireCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
     public nbrHeure: number;
     public nbrHeureMin: number;
     public nbrHeureMax: number;

}
