import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { SysModules }           from '@sys/modules.js';

import { AdminUsersComponent }  from './admin-users.component.js';


@NgModule({
	imports: [ 
		RouterModule.forChild([{ path:'', component: AdminUsersComponent }]),
		SysModules
	],
	declarations: [ AdminUsersComponent ],
	exports: [ AdminUsersComponent ]
})
export class AdminUsersModule {}