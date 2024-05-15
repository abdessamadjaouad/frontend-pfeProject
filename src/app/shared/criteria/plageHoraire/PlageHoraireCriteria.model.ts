import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PlageHoraireCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public typeHoraire: string;
    public typeHoraireLike: string;
    public heureDebut: Date;
    public heureDebutFrom: Date;
    public heureDebutTo: Date;
    public heureFin: Date;
    public heureFinFrom: Date;
    public heureFinTo: Date;

}
