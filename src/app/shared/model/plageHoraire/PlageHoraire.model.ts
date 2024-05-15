import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PlageHoraireDto extends BaseDto{

    public ref: string;

    public typeHoraire: string;

   public heureDebut: Date;

   public heureFin: Date;

    

    constructor() {
        super();

        this.ref = '';
        this.typeHoraire = '';
        this.heureDebut = null;
        this.heureFin = null;

        }

}
