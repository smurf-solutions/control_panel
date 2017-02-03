import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MaterialModule }    from '@angular/material';
import { RouterModule }      from '@angular/router';
import { FlexLayoutModule }  from '@angular/flex-layout';

import { SettingsComponent } from './settings.component.js';


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule,
		RouterModule.forChild([{path:'Settings',component:SettingsComponent}])
	],
	declarations: [ SettingsComponent ],
	exports: [ SettingsComponent ]
})
export class SettingsModule {}