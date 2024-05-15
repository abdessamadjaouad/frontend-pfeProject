import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PlageHoraireDto} from '../plageHoraire/PlageHoraire.model';
import {EntiteAdministrativeDto} from '../Service/EntiteAdministrative.model';
import {PosteDto} from '../Poste/Poste.model';

export class AgentDto extends BaseDto{

    public ref: string;

    public nomUtilisateur: string;

    public motDePasse: string;

    public nom: string;

    public prenom: string;

    public adresse: string;

    public entiteAdministrative: EntiteAdministrativeDto ;
    public poste: PosteDto ;
    public plageHoraire: PlageHoraireDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.nomUtilisateur = '';
        this.motDePasse = '';
        this.nom = '';
        this.prenom = '';
        this.adresse = '';

        }

}
