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




import {DemandeCongeUtilisateurService} from 'src/app/shared/service/utilisateur/DemandeConge/DemandeCongeUtilisateur.service';
import {DemandeCongeDto} from 'src/app/shared/model/DemandeConge/DemandeConge.model';
import {DemandeCongeCriteria} from 'src/app/shared/criteria/DemandeConge/DemandeCongeCriteria.model';


import {RaisonDemandeCongeDto} from 'src/app/shared/model/Poste/RaisonDemandeConge.model';
import {RaisonDemandeCongeUtilisateurService} from 'src/app/shared/service/utilisateur/Poste/RaisonDemandeCongeUtilisateur.service';

@Component({
  selector: 'app-demande-conge-edit-utilisateur',
  templateUrl: './demande-conge-edit-utilisateur.component.html'
})
export class DemandeCongeEditUtilisateurComponent implements OnInit {

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



    private _validDemandeCongeRef = true;

    private _validRaisonDemandeCongeRef = true;
    private _validRaisonDemandeCongeLibelle = true;



    constructor(private service: DemandeCongeUtilisateurService , private raisonDemandeCongeService: RaisonDemandeCongeUtilisateurService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.raisonDemandeCongeService.findAll().subscribe((data) => this.raisonDemandeConges = data);
    }

    public prepareEdit() {
        this.item.dateDebut = this.service.format(this.item.dateDebut);
        this.item.dateFin = this.service.format(this.item.dateFin);
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new DemandeCongeDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validDemandeCongeRef = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeCongeRef();
    }

    public validateDemandeCongeRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validDemandeCongeRef = false;
        } else {
            this.validDemandeCongeRef = true;
        }
    }





    get raisonDemandeConge(): RaisonDemandeCongeDto {
        return this.raisonDemandeCongeService.item;
    }
    set raisonDemandeConge(value: RaisonDemandeCongeDto) {
        this.raisonDemandeCongeService.item = value;
    }
    get raisonDemandeConges(): Array<RaisonDemandeCongeDto> {
        return this.raisonDemandeCongeService.items;
    }
    set raisonDemandeConges(value: Array<RaisonDemandeCongeDto>) {
        this.raisonDemandeCongeService.items = value;
    }
    get createRaisonDemandeCongeDialog(): boolean {
        return this.raisonDemandeCongeService.createDialog;
    }
    set createRaisonDemandeCongeDialog(value: boolean) {
        this.raisonDemandeCongeService.createDialog= value;
    }


    get validDemandeCongeRef(): boolean {
        return this._validDemandeCongeRef;
    }
    set validDemandeCongeRef(value: boolean) {
        this._validDemandeCongeRef = value;
    }

    get validRaisonDemandeCongeRef(): boolean {
        return this._validRaisonDemandeCongeRef;
    }
    set validRaisonDemandeCongeRef(value: boolean) {
        this._validRaisonDemandeCongeRef = value;
    }
    get validRaisonDemandeCongeLibelle(): boolean {
        return this._validRaisonDemandeCongeLibelle;
    }
    set validRaisonDemandeCongeLibelle(value: boolean) {
        this._validRaisonDemandeCongeLibelle = value;
    }

	get items(): Array<DemandeCongeDto> {
        return this.service.items;
    }

    set items(value: Array<DemandeCongeDto>) {
        this.service.items = value;
    }

    get item(): DemandeCongeDto {
        return this.service.item;
    }

    set item(value: DemandeCongeDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): DemandeCongeCriteria {
        return this.service.criteria;
    }

    set criteria(value: DemandeCongeCriteria) {
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
