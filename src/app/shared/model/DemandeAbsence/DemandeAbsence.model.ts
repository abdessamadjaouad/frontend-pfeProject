import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RaisonDemandeAbsenceDto} from '../Poste/RaisonDemandeAbsence.model';

export class DemandeAbsenceDto extends BaseDto{

    public ref: string;

    public contenu: string;

    public raisonDemandeAbsence: RaisonDemandeAbsenceDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.contenu = '';

        }

}
