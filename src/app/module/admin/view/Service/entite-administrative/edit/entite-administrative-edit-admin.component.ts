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




import {EntiteAdministrativeAdminService} from 'src/app/shared/service/admin/Service/EntiteAdministrativeAdmin.service';
import {EntiteAdministrativeDto} from 'src/app/shared/model/Service/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/shared/criteria/Service/EntiteAdministrativeCriteria.model';


import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/Agent/AgentAdmin.service';

@Component({
  selector: 'app-entite-administrative-edit-admin',
  templateUrl: './entite-administrative-edit-admin.component.html'
})
export class EntiteAdministrativeEditAdminComponent implements OnInit {

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



    private _validEntiteAdministrativeRef = true;
    private _validEntiteAdministrativeLibelle = true;

    private _validChefServiceRef = true;



    constructor(private service: EntiteAdministrativeAdminService , private agentService: AgentAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.agentService.findAll().subscribe((data) => this.chefServices = data);
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
            this.item = new EntiteAdministrativeDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validEntiteAdministrativeRef = value;
        this.validEntiteAdministrativeLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEntiteAdministrativeRef();
        this.validateEntiteAdministrativeLibelle();
    }

    public validateEntiteAdministrativeRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEntiteAdministrativeRef = false;
        } else {
            this.validEntiteAdministrativeRef = true;
        }
    }

    public validateEntiteAdministrativeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEntiteAdministrativeLibelle = false;
        } else {
            this.validEntiteAdministrativeLibelle = true;
        }
    }





    get chefService(): AgentDto {
        return this.agentService.item;
    }
    set chefService(value: AgentDto) {
        this.agentService.item = value;
    }
    get chefServices(): Array<AgentDto> {
        return this.agentService.items;
    }
    set chefServices(value: Array<AgentDto>) {
        this.agentService.items = value;
    }
    get createChefServiceDialog(): boolean {
        return this.agentService.createDialog;
    }
    set createChefServiceDialog(value: boolean) {
        this.agentService.createDialog= value;
    }


    get validEntiteAdministrativeRef(): boolean {
        return this._validEntiteAdministrativeRef;
    }
    set validEntiteAdministrativeRef(value: boolean) {
        this._validEntiteAdministrativeRef = value;
    }
    get validEntiteAdministrativeLibelle(): boolean {
        return this._validEntiteAdministrativeLibelle;
    }
    set validEntiteAdministrativeLibelle(value: boolean) {
        this._validEntiteAdministrativeLibelle = value;
    }

    get validChefServiceRef(): boolean {
        return this._validChefServiceRef;
    }
    set validChefServiceRef(value: boolean) {
        this._validChefServiceRef = value;
    }

	get items(): Array<EntiteAdministrativeDto> {
        return this.service.items;
    }

    set items(value: Array<EntiteAdministrativeDto>) {
        this.service.items = value;
    }

    get item(): EntiteAdministrativeDto {
        return this.service.item;
    }

    set item(value: EntiteAdministrativeDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): EntiteAdministrativeCriteria {
        return this.service.criteria;
    }

    set criteria(value: EntiteAdministrativeCriteria) {
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
