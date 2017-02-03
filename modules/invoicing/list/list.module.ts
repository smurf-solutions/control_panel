import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { MaterialModule }          from '@angular/material';
import { RouterModule }            from '@angular/router';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';

import { PipeModules }             from '@sys/pipes';
import { AppMaterialModules }      from '@sys/material';

import { ListComponent }           from './list.component.js';
import { InvoicesTableComponent }  from './table/invoices-table.component.js';

import { ViewModule }              from './../view/view.module.js';
import { EditModule }              from './../edit/edit.module.js';


@NgModule({
	imports: [
		CommonModule, MaterialModule, FlexLayoutModule, FormsModule,
		RouterModule.forChild([{path:'List',component:ListComponent}]),
		PipeModules, AppMaterialModules,
		
		ViewModule,
		EditModule
	],
	declarations: [
		ListComponent, InvoicesTableComponent,
	],
	exports: [ ListComponent ]
})
export class ListModule {}
