import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { MaterialModule }    from '@angular/material';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';

import { HomeComponent }     from './home.component.js';


@NgModule({
	declarations: [ HomeComponent ],
	imports: [
		RouterModule.forChild([{ path: '', component: HomeComponent }]),
		MaterialModule,
		FlexLayoutModule,
		CommonModule,
		FormsModule
	]
})
export class HomeModule {}