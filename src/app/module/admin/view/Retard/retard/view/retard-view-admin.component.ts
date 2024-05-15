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


import {RetardAdminService} from 'src/app/shared/service/admin/Retard/RetardAdmin.service';
import {RetardDto} from 'src/app/shared/model/Retard/Retard.model';
import {RetardCriteria} from 'src/app/shared/criteria/Retard/RetardCriteria.model';

import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/Agent/AgentAdmin.service';
@Component({
  selector: 'app-retard-view-admin',
  templateUrl: './retard-view-admin.component.html'
})
export class RetardViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: RetardAdminService, private agentService: AgentAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): RetardCriteria {
        return this.service.criteria;
    }

    set criteria(value: RetardCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
