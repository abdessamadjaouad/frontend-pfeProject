import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RaisonDemandeCongeDto} from '../Poste/RaisonDemandeConge.model';

export class DemandeCongeDto extends BaseDto{

    public ref: string;

   public dateDebut: Date;

   public dateFin: Date;

    public raisonDemandeConge: RaisonDemandeCongeDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.dateDebut = null;
        this.dateFin = null;

        }

}
