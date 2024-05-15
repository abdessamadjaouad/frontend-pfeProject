import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {RaisonDemandeAbsenceCriteria} from '../Poste/RaisonDemandeAbsenceCriteria.model';

export class DemandeAbsenceCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public contenu: string;
    public contenuLike: string;

}
