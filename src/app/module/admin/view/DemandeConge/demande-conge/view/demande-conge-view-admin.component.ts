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


import {DemandeCongeAdminService} from 'src/app/shared/service/admin/DemandeConge/DemandeCongeAdmin.service';
import {DemandeCongeDto} from 'src/app/shared/model/DemandeConge/DemandeConge.model';
import {DemandeCongeCriteria} from 'src/app/shared/criteria/DemandeConge/DemandeCongeCriteria.model';

import {RaisonDemandeCongeDto} from 'src/app/shared/model/Poste/RaisonDemandeConge.model';
import {RaisonDemandeCongeAdminService} from 'src/app/shared/service/admin/Poste/RaisonDemandeCongeAdmin.service';
@Component({
  selector: 'app-demande-conge-view-admin',
  templateUrl: './demande-conge-view-admin.component.html'
})
export class DemandeCongeViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: DemandeCongeAdminService, private raisonDemandeCongeService: RaisonDemandeCongeAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): DemandeCongeCriteria {
        return this.service.criteria;
    }

    set criteria(value: DemandeCongeCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
