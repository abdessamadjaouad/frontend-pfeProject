import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DemandeDocumentAdministratifDto extends BaseDto{

    public ref: string;

    public type: string;

    public libelle: string;

    

    constructor() {
        super();

        this.ref = '';
        this.type = '';
        this.libelle = '';

        }

}
