import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';

import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';



import {DemandeDocumentAdministratifUtilisateurService} from 'src/app/shared/service/utilisateur/DemandeDocumentAdministratif/DemandeDocumentAdministratifUtilisateur.service';
import {DemandeDocumentAdministratifDto} from 'src/app/shared/model/DemandeDocumentAdministratif/DemandeDocumentAdministratif.model';
import {DemandeDocumentAdministratifCriteria} from 'src/app/shared/criteria/DemandeDocumentAdministratif/DemandeDocumentAdministratifCriteria.model';
@Component({
  selector: 'app-demande-document-administratif-create-utilisateur',
  templateUrl: './demande-document-administratif-create-utilisateur.component.html'
})
export class DemandeDocumentAdministratifCreateUtilisateurComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



   private _validDemandeDocumentAdministratifRef = true;
   private _validDemandeDocumentAdministratifLibelle = true;

	constructor(private service: DemandeDocumentAdministratifUtilisateurService , @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }


    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new DemandeDocumentAdministratifDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
        this.validDemandeDocumentAdministratifRef = value;
        this.validDemandeDocumentAdministratifLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeDocumentAdministratifRef();
        this.validateDemandeDocumentAdministratifLibelle();
    }

    public validateDemandeDocumentAdministratifRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validDemandeDocumentAdministratifRef = false;
        } else {
            this.validDemandeDocumentAdministratifRef = true;
        }
    }
    public validateDemandeDocumentAdministratifLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validDemandeDocumentAdministratifLibelle = false;
        } else {
            this.validDemandeDocumentAdministratifLibelle = true;
        }
    }






    get validDemandeDocumentAdministratifRef(): boolean {
        return this._validDemandeDocumentAdministratifRef;
    }

    set validDemandeDocumentAdministratifRef(value: boolean) {
         this._validDemandeDocumentAdministratifRef = value;
    }
    get validDemandeDocumentAdministratifLibelle(): boolean {
        return this._validDemandeDocumentAdministratifLibelle;
    }

    set validDemandeDocumentAdministratifLibelle(value: boolean) {
         this._validDemandeDocumentAdministratifLibelle = value;
    }



    get items(): Array<DemandeDocumentAdministratifDto> {
        return this.service.items;
    }

    set items(value: Array<DemandeDocumentAdministratifDto>) {
        this.service.items = value;
    }

    get item(): DemandeDocumentAdministratifDto {
        return this.service.item;
    }

    set item(value: DemandeDocumentAdministratifDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): DemandeDocumentAdministratifCriteria {
        return this.service.criteria;
    }

    set criteria(value: DemandeDocumentAdministratifCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
