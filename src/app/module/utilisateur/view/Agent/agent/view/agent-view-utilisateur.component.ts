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


import {AgentUtilisateurService} from 'src/app/shared/service/utilisateur/Agent/AgentUtilisateur.service';
import {AgentDto} from 'src/app/shared/model/Agent/Agent.model';
import {AgentCriteria} from 'src/app/shared/criteria/Agent/AgentCriteria.model';

import {PlageHoraireDto} from 'src/app/shared/model/plageHoraire/PlageHoraire.model';
import {PlageHoraireUtilisateurService} from 'src/app/shared/service/utilisateur/plageHoraire/PlageHoraireUtilisateur.service';
import {EntiteAdministrativeDto} from 'src/app/shared/model/Service/EntiteAdministrative.model';
import {EntiteAdministrativeUtilisateurService} from 'src/app/shared/service/utilisateur/Service/EntiteAdministrativeUtilisateur.service';
import {PosteDto} from 'src/app/shared/model/Poste/Poste.model';
import {PosteUtilisateurService} from 'src/app/shared/service/utilisateur/Poste/PosteUtilisateur.service';
@Component({
  selector: 'app-agent-view-utilisateur',
  templateUrl: './agent-view-utilisateur.component.html'
})
export class AgentViewUtilisateurComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: AgentUtilisateurService, private plageHoraireService: PlageHoraireUtilisateurService, private entiteAdministrativeService: EntiteAdministrativeUtilisateurService, private posteService: PosteUtilisateurService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get entiteAdministrative(): EntiteAdministrativeDto {
        return this.entiteAdministrativeService.item;
    }
    set entiteAdministrative(value: EntiteAdministrativeDto) {
        this.entiteAdministrativeService.item = value;
    }
    get entiteAdministratives(): Array<EntiteAdministrativeDto> {
        return this.entiteAdministrativeService.items;
    }
    set entiteAdministratives(value: Array<EntiteAdministrativeDto>) {
        this.entiteAdministrativeService.items = value;
    }
    get plageHoraire(): PlageHoraireDto {
        return this.plageHoraireService.item;
    }
    set plageHoraire(value: PlageHoraireDto) {
        this.plageHoraireService.item = value;
    }
    get plageHoraires(): Array<PlageHoraireDto> {
        return this.plageHoraireService.items;
    }
    set plageHoraires(value: Array<PlageHoraireDto>) {
        this.plageHoraireService.items = value;
    }
    get poste(): PosteDto {
        return this.posteService.item;
    }
    set poste(value: PosteDto) {
        this.posteService.item = value;
    }
    get postes(): Array<PosteDto> {
        return this.posteService.items;
    }
    set postes(value: Array<PosteDto>) {
        this.posteService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<AgentDto> {
        return this.service.items;
    }

    set items(value: Array<AgentDto>) {
        this.service.items = value;
    }

    get item(): AgentDto {
        return this.service.item;
    }

    set item(value: AgentDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): AgentCriteria {
        return this.service.criteria;
    }

    set criteria(value: AgentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
