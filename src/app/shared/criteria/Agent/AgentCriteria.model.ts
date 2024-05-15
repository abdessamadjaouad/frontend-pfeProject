import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {PlageHoraireCriteria} from '../plageHoraire/PlageHoraireCriteria.model';
import {EntiteAdministrativeCriteria} from '../Service/EntiteAdministrativeCriteria.model';
import {PosteCriteria} from '../Poste/PosteCriteria.model';

export class AgentCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public nomUtilisateur: string;
    public nomUtilisateurLike: string;
    public motDePasse: string;
    public motDePasseLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public adresse: string;
    public adresseLike: string;

}
