import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelUtilisateur: any[];
  modelAdmin: any[];
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelUtilisateur =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: '',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Conge/conge/list']
								  },
								  {
									label: 'Liste demande document administratif',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/DemandeDocumentAdministratif/demande-document-administratif/list']
								  },
						]
					  },
					  {
						label: 'Retard',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste retard',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Retard/retard/list']
								  },
						]
					  },
					  {
						label: 'BadgeNfc',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste badge nfc',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/BioManager/badge-nfc/list']
								  },
						]
					  },
					  {
						label: 'Agent',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste agent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Agent/agent/list']
								  },
						]
					  },
					  {
						label: 'Demande Conge',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste demande conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/DemandeConge/demande-conge/list']
								  },
						]
					  },
					  {
						label: 'Plage Horaire',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste plage horaire',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/plageHoraire/plage-horaire/list']
								  },
						]
					  },
					  {
						label: 'Heure Supplementaire',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste heure supplementaire',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/heureSupplementaire/heure-supplementaire/list']
								  },
						]
					  },
					  {
						label: 'Demande Absence',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste demande absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/DemandeAbsence/demande-absence/list']
								  },
						]
					  },
					  {
						label: 'Absence',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Absence/absence/list']
								  },
						]
					  },
					  {
						label: 'Service',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste entite administrative',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Service/entite-administrative/list']
								  },
						]
					  },
					  {
						label: 'Pointage',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste pointage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Pointage/pointage/list']
								  },
						]
					  },
					  {
						label: 'Poste',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste raison demande conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Poste/raison-demande-conge/list']
								  },
								  {
									label: 'Liste poste',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Poste/poste/list']
								  },
								  {
									label: 'Liste raison demande absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/utilisateur/Poste/raison-demande-absence/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: '',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Conge/conge/list']
								  },
								  {
									label: 'Liste demande document administratif',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/DemandeDocumentAdministratif/demande-document-administratif/list']
								  },
						]
					  },
					  {
						label: 'Retard',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste retard',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Retard/retard/list']
								  },
						]
					  },
					  {
						label: 'BadgeNfc',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste badge nfc',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/BioManager/badge-nfc/list']
								  },
						]
					  },
					  {
						label: 'Agent',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste agent',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Agent/agent/list']
								  },
						]
					  },
					  {
						label: 'Demande Conge',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste demande conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/DemandeConge/demande-conge/list']
								  },
						]
					  },
					  {
						label: 'Plage Horaire',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste plage horaire',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/plageHoraire/plage-horaire/list']
								  },
						]
					  },
					  {
						label: 'Heure Supplementaire',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste heure supplementaire',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/heureSupplementaire/heure-supplementaire/list']
								  },
						]
					  },
					  {
						label: 'Demande Absence',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste demande absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/DemandeAbsence/demande-absence/list']
								  },
						]
					  },
					  {
						label: 'Absence',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Absence/absence/list']
								  },
						]
					  },
					  {
						label: 'Service',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste entite administrative',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Service/entite-administrative/list']
								  },
						]
					  },
					  {
						label: 'Pointage',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste pointage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Pointage/pointage/list']
								  },
						]
					  },
					  {
						label: 'Poste',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste raison demande conge',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Poste/raison-demande-conge/list']
								  },
								  {
									label: 'Liste poste',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Poste/poste/list']
								  },
								  {
									label: 'Liste raison demande absence',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/Poste/raison-demande-absence/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
