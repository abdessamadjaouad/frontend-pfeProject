
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'BioManager',
                            loadChildren: () => import('./view/BioManager/BioManager-admin-routing.module').then(x => x.BioManagerAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Agent',
                            loadChildren: () => import('./view/Agent/Agent-admin-routing.module').then(x => x.AgentAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Retard',
                            loadChildren: () => import('./view/Retard/Retard-admin-routing.module').then(x => x.RetardAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'plageHoraire',
                            loadChildren: () => import('./view/plageHoraire/plageHoraire-admin-routing.module').then(x => x.PlageHoraireAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Absence',
                            loadChildren: () => import('./view/Absence/Absence-admin-routing.module').then(x => x.AbsenceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Service',
                            loadChildren: () => import('./view/Service/Service-admin-routing.module').then(x => x.ServiceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'heureSupplementaire',
                            loadChildren: () => import('./view/heureSupplementaire/heureSupplementaire-admin-routing.module').then(x => x.HeureSupplementaireAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Pointage',
                            loadChildren: () => import('./view/Pointage/Pointage-admin-routing.module').then(x => x.PointageAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeConge',
                            loadChildren: () => import('./view/DemandeConge/DemandeConge-admin-routing.module').then(x => x.DemandeCongeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeAbsence',
                            loadChildren: () => import('./view/DemandeAbsence/DemandeAbsence-admin-routing.module').then(x => x.DemandeAbsenceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeDocumentAdministratif',
                            loadChildren: () => import('./view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-admin-routing.module').then(x => x.DemandeDocumentAdministratifAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Conge',
                            loadChildren: () => import('./view/Conge/Conge-admin-routing.module').then(x => x.CongeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Poste',
                            loadChildren: () => import('./view/Poste/Poste-admin-routing.module').then(x => x.PosteAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
