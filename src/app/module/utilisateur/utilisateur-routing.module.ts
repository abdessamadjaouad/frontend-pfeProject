
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { RegisterUtilisateurComponent } from './register-utilisateur/register-utilisateur.component';

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
                                    component: LoginUtilisateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterUtilisateurComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'BioManager',
                            loadChildren: () => import('./view/BioManager/BioManager-utilisateur-routing.module').then(x => x.BioManagerUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Agent',
                            loadChildren: () => import('./view/Agent/Agent-utilisateur-routing.module').then(x => x.AgentUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Retard',
                            loadChildren: () => import('./view/Retard/Retard-utilisateur-routing.module').then(x => x.RetardUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'plageHoraire',
                            loadChildren: () => import('./view/plageHoraire/plageHoraire-utilisateur-routing.module').then(x => x.PlageHoraireUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Absence',
                            loadChildren: () => import('./view/Absence/Absence-utilisateur-routing.module').then(x => x.AbsenceUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Service',
                            loadChildren: () => import('./view/Service/Service-utilisateur-routing.module').then(x => x.ServiceUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'heureSupplementaire',
                            loadChildren: () => import('./view/heureSupplementaire/heureSupplementaire-utilisateur-routing.module').then(x => x.HeureSupplementaireUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Pointage',
                            loadChildren: () => import('./view/Pointage/Pointage-utilisateur-routing.module').then(x => x.PointageUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeConge',
                            loadChildren: () => import('./view/DemandeConge/DemandeConge-utilisateur-routing.module').then(x => x.DemandeCongeUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeAbsence',
                            loadChildren: () => import('./view/DemandeAbsence/DemandeAbsence-utilisateur-routing.module').then(x => x.DemandeAbsenceUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'DemandeDocumentAdministratif',
                            loadChildren: () => import('./view/DemandeDocumentAdministratif/DemandeDocumentAdministratif-utilisateur-routing.module').then(x => x.DemandeDocumentAdministratifUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Conge',
                            loadChildren: () => import('./view/Conge/Conge-utilisateur-routing.module').then(x => x.CongeUtilisateurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Poste',
                            loadChildren: () => import('./view/Poste/Poste-utilisateur-routing.module').then(x => x.PosteUtilisateurRoutingModule),
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
export class UtilisateurRoutingModule { }
