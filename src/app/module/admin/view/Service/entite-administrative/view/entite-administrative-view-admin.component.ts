import {Component, OnInit} from '@angular/core';


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
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {EntiteAdministrativeAdminService} from 'src/app/shared/service/admin/Service/EntiteAdministrativeAdmin.service';
import {EntiteAdministrativeDto} from 'src/app/shared/model/Service/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/shared/criteria/Service/EntiteAdministrativeCriteria.model';

import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/Agent/AgentAdmin.service';
@Component({
  selector: 'app-entite-administrative-view-admin',
  templateUrl: './entite-administrative-view-admin.component.html'
})
export class EntiteAdministrativeViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: EntiteAdministrativeAdminService, private agentService: AgentAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EntiteAdministrativeCriteria {
        return this.service.criteria;
    }

    set criteria(value: EntiteAdministrativeCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}