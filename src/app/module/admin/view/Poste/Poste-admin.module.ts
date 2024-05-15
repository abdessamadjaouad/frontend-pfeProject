import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { RaisonDemandeCongeCreateAdminComponent } from './raison-demande-conge/create/raison-demande-conge-create-admin.component';
import { RaisonDemandeCongeEditAdminComponent } from './raison-demande-conge/edit/raison-demande-conge-edit-admin.component';
import { RaisonDemandeCongeViewAdminComponent } from './raison-demande-conge/view/raison-demande-conge-view-admin.component';
import { RaisonDemandeCongeListAdminComponent } from './raison-demande-conge/list/raison-demande-conge-list-admin.component';
import { PosteCreateAdminComponent } from './poste/create/poste-create-admin.component';
import { PosteEditAdminComponent } from './poste/edit/poste-edit-admin.component';
import { PosteViewAdminComponent } from './poste/view/poste-view-admin.component';
import { PosteListAdminComponent } from './poste/list/poste-list-admin.component';
import { RaisonDemandeAbsenceCreateAdminComponent } from './raison-demande-absence/create/raison-demande-absence-create-admin.component';
import { RaisonDemandeAbsenceEditAdminComponent } from './raison-demande-absence/edit/raison-demande-absence-edit-admin.component';
import { RaisonDemandeAbsenceViewAdminComponent } from './raison-demande-absence/view/raison-demande-absence-view-admin.component';
import { RaisonDemandeAbsenceListAdminComponent } from './raison-demande-absence/list/raison-demande-absence-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    RaisonDemandeCongeCreateAdminComponent,
    RaisonDemandeCongeListAdminComponent,
    RaisonDemandeCongeViewAdminComponent,
    RaisonDemandeCongeEditAdminComponent,
    PosteCreateAdminComponent,
    PosteListAdminComponent,
    PosteViewAdminComponent,
    PosteEditAdminComponent,
    RaisonDemandeAbsenceCreateAdminComponent,
    RaisonDemandeAbsenceListAdminComponent,
    RaisonDemandeAbsenceViewAdminComponent,
    RaisonDemandeAbsenceEditAdminComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,
    EditorModule,


  ],
  exports: [
  RaisonDemandeCongeCreateAdminComponent,
  RaisonDemandeCongeListAdminComponent,
  RaisonDemandeCongeViewAdminComponent,
  RaisonDemandeCongeEditAdminComponent,
  PosteCreateAdminComponent,
  PosteListAdminComponent,
  PosteViewAdminComponent,
  PosteEditAdminComponent,
  RaisonDemandeAbsenceCreateAdminComponent,
  RaisonDemandeAbsenceListAdminComponent,
  RaisonDemandeAbsenceViewAdminComponent,
  RaisonDemandeAbsenceEditAdminComponent,
  ],
})
export class PosteAdminModule { }
