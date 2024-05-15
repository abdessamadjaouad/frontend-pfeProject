import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HeureSupplementaireDto extends BaseDto{

    public ref: string;

    public nbrHeure: null | number;

    

    constructor() {
        super();

        this.ref = '';
        this.nbrHeure = null;

        }

}
