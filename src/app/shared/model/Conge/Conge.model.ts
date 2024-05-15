import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CongeDto extends BaseDto{

    public ref: string;

   public dateDebut: Date;

   public dateFin: Date;

    public typeConge: string;

    

    constructor() {
        super();

        this.ref = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.typeConge = '';

        }

}
