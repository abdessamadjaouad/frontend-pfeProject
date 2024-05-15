import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class BadgeNfcDto extends BaseDto{

    public ref: string;

    public matricule: string;

    public location: string;

    public status: string;

    

    constructor() {
        super();

        this.ref = '';
        this.matricule = '';
        this.location = '';
        this.status = '';

        }

}
