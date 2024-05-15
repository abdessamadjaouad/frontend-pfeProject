import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class DemandeDocumentAdministratifCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public type: string;
    public typeLike: string;
    public libelle: string;
    public libelleLike: string;

}
