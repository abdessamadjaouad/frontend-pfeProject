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



import {RetardAdminService} from 'src/app/shared/service/admin/Retard/RetardAdmin.service';
import {RetardDto} from 'src/app/shared/model/Retard/Retard.model';
import {RetardCriteria} from 'src/app/shared/criteria/Retard/RetardCriteria.model';
import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/Agent/AgentAdmin.service';
@Component({
  selector: 'app-retard-create-admin',
  templateUrl: './retard-create-admin.component.html'
})
export class RetardCreateAdminComponent  implements OnInit {

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



   private _validRetardRef = true;
    private _validAgentRef = true;

	constructor(private service: RetardAdminService , private agentService: AgentAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.agentService.findAll().subscribe((data) => this.agents = data);
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
                this.item = new RetardDto();
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
        this.validRetardRef = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRetardRef();
    }

    public validateRetardRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validRetardRef = false;
        } else {
            this.validRetardRef = true;
        }
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



    get validRetardRef(): boolean {
        return this._validRetardRef;
    }

    set validRetardRef(value: boolean) {
         this._validRetardRef = value;
    }

    get validAgentRef(): boolean {
        return this._validAgentRef;
    }
    set validAgentRef(value: boolean) {
        this._validAgentRef = value;
    }


    get items(): Array<RetardDto> {
        return this.service.items;
    }

    set items(value: Array<RetardDto>) {
        this.service.items = value;
    }

    get item(): RetardDto {
        return this.service.item;
    }

    set item(value: RetardDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): RetardCriteria {
        return this.service.criteria;
    }

    set criteria(value: RetardCriteria) {
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
