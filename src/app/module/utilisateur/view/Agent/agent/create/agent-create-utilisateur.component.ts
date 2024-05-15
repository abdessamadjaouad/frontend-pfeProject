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
  selector: 'app-agent-create-utilisateur',
  templateUrl: './agent-create-utilisateur.component.html'
})
export class AgentCreateUtilisateurComponent  implements OnInit {

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



   private _validAgentRef = true;
    private _validEntiteAdministrativeRef = true;
    private _validEntiteAdministrativeLibelle = true;
    private _validPosteRef = true;
    private _validPosteLibelle = true;
    private _validPlageHoraireRef = true;

	constructor(private service: AgentUtilisateurService , private plageHoraireService: PlageHoraireUtilisateurService, private entiteAdministrativeService: EntiteAdministrativeUtilisateurService, private posteService: PosteUtilisateurService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.entiteAdministrativeService.findAll().subscribe((data) => this.entiteAdministratives = data);
        this.posteService.findAll().subscribe((data) => this.postes = data);
        this.plageHoraireService.findAll().subscribe((data) => this.plageHoraires = data);
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
                this.item = new AgentDto();
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
        this.validAgentRef = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAgentRef();
    }

    public validateAgentRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validAgentRef = false;
        } else {
            this.validAgentRef = true;
        }
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
    get createEntiteAdministrativeDialog(): boolean {
        return this.entiteAdministrativeService.createDialog;
    }
    set createEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.createDialog= value;
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
    get createPlageHoraireDialog(): boolean {
        return this.plageHoraireService.createDialog;
    }
    set createPlageHoraireDialog(value: boolean) {
        this.plageHoraireService.createDialog= value;
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
    get createPosteDialog(): boolean {
        return this.posteService.createDialog;
    }
    set createPosteDialog(value: boolean) {
        this.posteService.createDialog= value;
    }



    get validAgentRef(): boolean {
        return this._validAgentRef;
    }

    set validAgentRef(value: boolean) {
         this._validAgentRef = value;
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
    get validPosteRef(): boolean {
        return this._validPosteRef;
    }
    set validPosteRef(value: boolean) {
        this._validPosteRef = value;
    }
    get validPosteLibelle(): boolean {
        return this._validPosteLibelle;
    }
    set validPosteLibelle(value: boolean) {
        this._validPosteLibelle = value;
    }
    get validPlageHoraireRef(): boolean {
        return this._validPlageHoraireRef;
    }
    set validPlageHoraireRef(value: boolean) {
        this._validPlageHoraireRef = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): AgentCriteria {
        return this.service.criteria;
    }

    set criteria(value: AgentCriteria) {
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
