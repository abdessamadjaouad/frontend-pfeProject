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




import {PointageUtilisateurService} from 'src/app/shared/service/utilisateur/Pointage/PointageUtilisateur.service';
import {PointageDto} from 'src/app/shared/model/Pointage/Pointage.model';
import {PointageCriteria} from 'src/app/shared/criteria/Pointage/PointageCriteria.model';


import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentUtilisateurService} from 'src/app/shared/service/utilisateur/Agent/AgentUtilisateur.service';
import {BadgeNfcDto} from 'src/app/shared/model/BioManager/BadgeNfc.model';
import {BadgeNfcUtilisateurService} from 'src/app/shared/service/utilisateur/BioManager/BadgeNfcUtilisateur.service';

@Component({
  selector: 'app-pointage-edit-utilisateur',
  templateUrl: './pointage-edit-utilisateur.component.html'
})
export class PointageEditUtilisateurComponent implements OnInit {

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



    private _validPointageRef = true;

    private _validAgentRef = true;
    private _validBadgeNfcRef = true;



    constructor(private service: PointageUtilisateurService , private agentService: AgentUtilisateurService, private badgeNfcService: BadgeNfcUtilisateurService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.agentService.findAll().subscribe((data) => this.agents = data);
        this.badgeNfcService.findAll().subscribe((data) => this.badgeNfcs = data);
    }

    public prepareEdit() {
        this.item.heureEntree = this.service.format(this.item.heureEntree);
        this.item.heureSortie = this.service.format(this.item.heureSortie);
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
            this.item = new PointageDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validPointageRef = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePointageRef();
    }

    public validatePointageRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validPointageRef = false;
        } else {
            this.validPointageRef = true;
        }
    }





    get badgeNfc(): BadgeNfcDto {
        return this.badgeNfcService.item;
    }
    set badgeNfc(value: BadgeNfcDto) {
        this.badgeNfcService.item = value;
    }
    get badgeNfcs(): Array<BadgeNfcDto> {
        return this.badgeNfcService.items;
    }
    set badgeNfcs(value: Array<BadgeNfcDto>) {
        this.badgeNfcService.items = value;
    }
    get createBadgeNfcDialog(): boolean {
        return this.badgeNfcService.createDialog;
    }
    set createBadgeNfcDialog(value: boolean) {
        this.badgeNfcService.createDialog= value;
    }
    get agent(): AgentDto {
        return this.agentService.item;
    }
    set agent(value: AgentDto) {
        this.agentService.item = value;
    }
    get agents(): Array<AgentDto> {
        return this.agentService.items;
    }
    set agents(value: Array<AgentDto>) {
        this.agentService.items = value;
    }
    get createAgentDialog(): boolean {
        return this.agentService.createDialog;
    }
    set createAgentDialog(value: boolean) {
        this.agentService.createDialog= value;
    }


    get validPointageRef(): boolean {
        return this._validPointageRef;
    }
    set validPointageRef(value: boolean) {
        this._validPointageRef = value;
    }

    get validAgentRef(): boolean {
        return this._validAgentRef;
    }
    set validAgentRef(value: boolean) {
        this._validAgentRef = value;
    }
    get validBadgeNfcRef(): boolean {
        return this._validBadgeNfcRef;
    }
    set validBadgeNfcRef(value: boolean) {
        this._validBadgeNfcRef = value;
    }

	get items(): Array<PointageDto> {
        return this.service.items;
    }

    set items(value: Array<PointageDto>) {
        this.service.items = value;
    }

    get item(): PointageDto {
        return this.service.item;
    }

    set item(value: PointageDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): PointageCriteria {
        return this.service.criteria;
    }

    set criteria(value: PointageCriteria) {
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
