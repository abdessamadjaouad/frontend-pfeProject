import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class BadgeNfcCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public matricule: string;
    public matriculeLike: string;
    public location: string;
    public locationLike: string;
    public status: string;
    public statusLike: string;

}
