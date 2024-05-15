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


import {RaisonDemandeAbsenceAdminService} from 'src/app/shared/service/admin/Poste/RaisonDemandeAbsenceAdmin.service';
import {RaisonDemandeAbsenceDto} from 'src/app/shared/model/Poste/RaisonDemandeAbsence.model';
import {RaisonDemandeAbsenceCriteria} from 'src/app/shared/criteria/Poste/RaisonDemandeAbsenceCriteria.model';

@Component({
  selector: 'app-raison-demande-absence-view-admin',
  templateUrl: './raison-demande-absence-view-admin.component.html'
})
export class RaisonDemandeAbsenceViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: RaisonDemandeAbsenceAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }



    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<RaisonDemandeAbsenceDto> {
        return this.service.items;
    }

    set items(value: Array<RaisonDemandeAbsenceDto>) {
        this.service.items = value;
    }

    get item(): RaisonDemandeAbsenceDto {
        return this.service.item;
    }

    set item(value: RaisonDemandeAbsenceDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): RaisonDemandeAbsenceCriteria {
        return this.service.criteria;
    }

    set criteria(value: RaisonDemandeAbsenceCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
