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
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { RegisterUtilisateurComponent } from './register-utilisateur/register-utilisateur.component';
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

import { BioManagerUtilisateurModule } from './view/BioManager/BioManager-utilisateur.module';
import { BioManagerUtilisateurRoutingModule } from './view/BioManager/BioManager-utilisateur-routing.module';
import { AgentUtilisateurModule } from './view/Agent/Agent-utilisateur.module';
import { AgentUtilisateurRoutingModule } from './view/Agent/Agent-utilisateur-routing.module';
import { RetardUtilisateurModule } from './view/Retard/Retard-utilisateur.module';
import { RetardUtilisateurRoutingModule } from './view/Retard/Retard-utilisateur-routing.module';
import { PlageHoraireUtilisateurModule } from './view/plageHoraire/plageHoraire-utilisateur.module';
import { PlageHoraireUtilisateurRoutingModule } from './view/plageHoraire/plageHoraire-utilisateur-routing.module';
import { AbsenceUtilisateurModule } from './view/Absence/Absence-utilisateur.module';
import { AbsenceUtilisateurRoutingModule } from './view/Absence/Absence-utilisateur-routing.module';
import { ServiceUtilisateurModule } from './view/Service/Service-utilisateur.module';
import { ServiceUtilisateurRoutingModule } from './view/Service/Service-utilisateur-routing.module';
import { HeureSupplementaireUtilisateurModule } from './view/heureSupplementaire/heureSupplementaire-utilisateur.module';
import { HeureSupplementaireUtilisateurRoutingModule } from './view/heureSupplementaire/heureSupplementaire-utilisateur-routing.module';
import { PointageUtilisateurModule } from './view/Pointage/Pointage-utilisateur.module';
import { PointageUtilisateurRoutingModule } from './view/Pointage/Pointage-utilisateur-routing.module';
import { DemandeCongeUtilisateurModule } from './view/DemandeConge/DemandeConge-utilisateur.module';
import { DemandeCongeUtilisateurRoutingModule } from './view/DemandeConge/DemandeConge-utilisateur-routing.module';
import { DemandeAbsenceUtilisateurModule } from './view/DemandeAbsence/DemandeAbsence-utilisateur.module';
import { DemandeAbsenceUtilisateurRoutingModule } from './view/DemandeAbsence/DemandeAbsence-utilisateur-routing.module';
import { DemandeDocumentAdministratifUtilisateurModule } from './view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-utilisateur.module';
import { DemandeDocumentAdministratifUtilisateurRoutingModule } from './view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-utilisateur-routing.module';
import { CongeUtilisateurModule } from './view/Conge/Conge-utilisateur.module';
import { CongeUtilisateurRoutingModule } from './view/Conge/Conge-utilisateur-routing.module';
import { PosteUtilisateurModule } from './view/Poste/Poste-utilisateur.module';
import { PosteUtilisateurRoutingModule } from './view/Poste/Poste-utilisateur-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginUtilisateurComponent,
   RegisterUtilisateurComponent
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
  BioManagerUtilisateurModule,
  BioManagerUtilisateurRoutingModule,
  AgentUtilisateurModule,
  AgentUtilisateurRoutingModule,
  RetardUtilisateurModule,
  RetardUtilisateurRoutingModule,
  PlageHoraireUtilisateurModule,
  PlageHoraireUtilisateurRoutingModule,
  AbsenceUtilisateurModule,
  AbsenceUtilisateurRoutingModule,
  ServiceUtilisateurModule,
  ServiceUtilisateurRoutingModule,
  HeureSupplementaireUtilisateurModule,
  HeureSupplementaireUtilisateurRoutingModule,
  PointageUtilisateurModule,
  PointageUtilisateurRoutingModule,
  DemandeCongeUtilisateurModule,
  DemandeCongeUtilisateurRoutingModule,
  DemandeAbsenceUtilisateurModule,
  DemandeAbsenceUtilisateurRoutingModule,
  DemandeDocumentAdministratifUtilisateurModule,
  DemandeDocumentAdministratifUtilisateurRoutingModule,
  CongeUtilisateurModule,
  CongeUtilisateurRoutingModule,
  PosteUtilisateurModule,
  PosteUtilisateurRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginUtilisateurComponent,
  RegisterUtilisateurComponent,

    BioManagerUtilisateurModule,
    AgentUtilisateurModule,
    RetardUtilisateurModule,
    PlageHoraireUtilisateurModule,
    AbsenceUtilisateurModule,
    ServiceUtilisateurModule,
    HeureSupplementaireUtilisateurModule,
    PointageUtilisateurModule,
    DemandeCongeUtilisateurModule,
    DemandeAbsenceUtilisateurModule,
    DemandeDocumentAdministratifUtilisateurModule,
    CongeUtilisateurModule,
    PosteUtilisateurModule,
  SecurityModule
  ],

})
export class UtilisateurModule { }
