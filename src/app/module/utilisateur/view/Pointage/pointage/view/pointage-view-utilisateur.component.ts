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


import {PointageUtilisateurService} from 'src/app/shared/service/utilisateur/Pointage/PointageUtilisateur.service';
import {PointageDto} from 'src/app/shared/model/Pointage/Pointage.model';
import {PointageCriteria} from 'src/app/shared/criteria/Pointage/PointageCriteria.model';

import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentUtilisateurService} from 'src/app/shared/service/utilisateur/Agent/AgentUtilisateur.service';
import {BadgeNfcDto} from 'src/app/shared/model/BioManager/BadgeNfc.model';
import {BadgeNfcUtilisateurService} from 'src/app/shared/service/utilisateur/BioManager/BadgeNfcUtilisateur.service';
@Component({
  selector: 'app-pointage-view-utilisateur',
  templateUrl: './pointage-view-utilisateur.component.html'
})
export class PointageViewUtilisateurComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PointageUtilisateurService, private agentService: AgentUtilisateurService, private badgeNfcService: BadgeNfcUtilisateurService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PointageCriteria {
        return this.service.criteria;
    }

    set criteria(value: PointageCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
