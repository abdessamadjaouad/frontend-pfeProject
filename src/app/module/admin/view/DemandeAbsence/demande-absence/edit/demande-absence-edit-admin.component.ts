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




import {DemandeAbsenceAdminService} from 'src/app/shared/service/admin/DemandeAbsence/DemandeAbsenceAdmin.service';
import {DemandeAbsenceDto} from 'src/app/shared/model/DemandeAbsence/DemandeAbsence.model';
import {DemandeAbsenceCriteria} from 'src/app/shared/criteria/DemandeAbsence/DemandeAbsenceCriteria.model';


import {RaisonDemandeAbsenceDto} from 'src/app/shared/model/Poste/RaisonDemandeAbsence.model';
import {RaisonDemandeAbsenceAdminService} from 'src/app/shared/service/admin/Poste/RaisonDemandeAbsenceAdmin.service';

@Component({
  selector: 'app-demande-absence-edit-admin',
  templateUrl: './demande-absence-edit-admin.component.html'
})
export class DemandeAbsenceEditAdminComponent implements OnInit {

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



    private _validDemandeAbsenceRef = true;

    private _validRaisonDemandeAbsenceRef = true;
    private _validRaisonDemandeAbsenceLibelle = true;



    constructor(private service: DemandeAbsenceAdminService , private raisonDemandeAbsenceService: RaisonDemandeAbsenceAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.raisonDemandeAbsenceService.findAll().subscribe((data) => this.raisonDemandeAbsences = data);
    }

    public prepareEdit() {
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
            this.item = new DemandeAbsenceDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validDemandeAbsenceRef = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeAbsenceRef();
    }

    public validateDemandeAbsenceRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validDemandeAbsenceRef = false;
        } else {
            this.validDemandeAbsenceRef = true;
        }
    }





    get raisonDemandeAbsence(): RaisonDemandeAbsenceDto {
        return this.raisonDemandeAbsenceService.item;
    }
    set raisonDemandeAbsence(value: RaisonDemandeAbsenceDto) {
        this.raisonDemandeAbsenceService.item = value;
    }
    get raisonDemandeAbsences(): Array<RaisonDemandeAbsenceDto> {
        return this.raisonDemandeAbsenceService.items;
    }
    set raisonDemandeAbsences(value: Array<RaisonDemandeAbsenceDto>) {
        this.raisonDemandeAbsenceService.items = value;
    }
    get createRaisonDemandeAbsenceDialog(): boolean {
        return this.raisonDemandeAbsenceService.createDialog;
    }
    set createRaisonDemandeAbsenceDialog(value: boolean) {
        this.raisonDemandeAbsenceService.createDialog= value;
    }


    get validDemandeAbsenceRef(): boolean {
        return this._validDemandeAbsenceRef;
    }
    set validDemandeAbsenceRef(value: boolean) {
        this._validDemandeAbsenceRef = value;
    }

    get validRaisonDemandeAbsenceRef(): boolean {
        return this._validRaisonDemandeAbsenceRef;
    }
    set validRaisonDemandeAbsenceRef(value: boolean) {
        this._validRaisonDemandeAbsenceRef = value;
    }
    get validRaisonDemandeAbsenceLibelle(): boolean {
        return this._validRaisonDemandeAbsenceLibelle;
    }
    set validRaisonDemandeAbsenceLibelle(value: boolean) {
        this._validRaisonDemandeAbsenceLibelle = value;
    }

	get items(): Array<DemandeAbsenceDto> {
        return this.service.items;
    }

    set items(value: Array<DemandeAbsenceDto>) {
        this.service.items = value;
    }

    get item(): DemandeAbsenceDto {
        return this.service.item;
    }

    set item(value: DemandeAbsenceDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): DemandeAbsenceCriteria {
        return this.service.criteria;
    }

    set criteria(value: DemandeAbsenceCriteria) {
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
