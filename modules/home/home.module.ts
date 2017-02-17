import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';

import { SysModules }        from '@sys/modules.js';

import { HomeComponent }     from './home.component.js';


@NgModule({
	declarations: [ HomeComponent ],
	imports: [
		RouterModule.forChild([{ path: '', component: HomeComponent }]),
		SysModules
	]
})
export class HomeModule {}
