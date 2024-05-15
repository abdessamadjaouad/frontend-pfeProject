import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { BioManagerAdminModule } from './view/BioManager/BioManager-admin.module';
import { BioManagerAdminRoutingModule } from './view/BioManager/BioManager-admin-routing.module';
import { AgentAdminModule } from './view/Agent/Agent-admin.module';
import { AgentAdminRoutingModule } from './view/Agent/Agent-admin-routing.module';
import { RetardAdminModule } from './view/Retard/Retard-admin.module';
import { RetardAdminRoutingModule } from './view/Retard/Retard-admin-routing.module';
import { PlageHoraireAdminModule } from './view/plageHoraire/plageHoraire-admin.module';
import { PlageHoraireAdminRoutingModule } from './view/plageHoraire/plageHoraire-admin-routing.module';
import { AbsenceAdminModule } from './view/Absence/Absence-admin.module';
import { AbsenceAdminRoutingModule } from './view/Absence/Absence-admin-routing.module';
import { ServiceAdminModule } from './view/Service/Service-admin.module';
import { ServiceAdminRoutingModule } from './view/Service/Service-admin-routing.module';
import { HeureSupplementaireAdminModule } from './view/heureSupplementaire/heureSupplementaire-admin.module';
import { HeureSupplementaireAdminRoutingModule } from './view/heureSupplementaire/heureSupplementaire-admin-routing.module';
import { PointageAdminModule } from './view/Pointage/Pointage-admin.module';
import { PointageAdminRoutingModule } from './view/Pointage/Pointage-admin-routing.module';
import { DemandeCongeAdminModule } from './view/DemandeConge/DemandeConge-admin.module';
import { DemandeCongeAdminRoutingModule } from './view/DemandeConge/DemandeConge-admin-routing.module';
import { DemandeAbsenceAdminModule } from './view/DemandeAbsence/DemandeAbsence-admin.module';
import { DemandeAbsenceAdminRoutingModule } from './view/DemandeAbsence/DemandeAbsence-admin-routing.module';
import { DemandeDocumentAdministratifAdminModule } from './view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-admin.module';
import { DemandeDocumentAdministratifAdminRoutingModule } from './view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-admin-routing.module';
import { CongeAdminModule } from './view/Conge/Conge-admin.module';
import { CongeAdminRoutingModule } from './view/Conge/Conge-admin-routing.module';
import { PosteAdminModule } from './view/Poste/Poste-admin.module';
import { PosteAdminRoutingModule } from './view/Poste/Poste-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  BioManagerAdminModule,
  BioManagerAdminRoutingModule,
  AgentAdminModule,
  AgentAdminRoutingModule,
  RetardAdminModule,
  RetardAdminRoutingModule,
  PlageHoraireAdminModule,
  PlageHoraireAdminRoutingModule,
  AbsenceAdminModule,
  AbsenceAdminRoutingModule,
  ServiceAdminModule,
  ServiceAdminRoutingModule,
  HeureSupplementaireAdminModule,
  HeureSupplementaireAdminRoutingModule,
  PointageAdminModule,
  PointageAdminRoutingModule,
  DemandeCongeAdminModule,
  DemandeCongeAdminRoutingModule,
  DemandeAbsenceAdminModule,
  DemandeAbsenceAdminRoutingModule,
  DemandeDocumentAdministratifAdminModule,
  DemandeDocumentAdministratifAdminRoutingModule,
  CongeAdminModule,
  CongeAdminRoutingModule,
  PosteAdminModule,
  PosteAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    BioManagerAdminModule,
    AgentAdminModule,
    RetardAdminModule,
    PlageHoraireAdminModule,
    AbsenceAdminModule,
    ServiceAdminModule,
    HeureSupplementaireAdminModule,
    PointageAdminModule,
    DemandeCongeAdminModule,
    DemandeAbsenceAdminModule,
    DemandeDocumentAdministratifAdminModule,
    CongeAdminModule,
    PosteAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
