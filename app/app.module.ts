import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { RouterModule }          from '@angular/router';
import { MdIconRegistry }        from '@angular/material';
import { ToastyModule }          from 'ng2-toasty';
import { ModalsModule }          from '@sys/modals';

import { MaterialModule }        from '@angular/material';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { PipeModules }           from '@sys/pipes';

import { NotFoundComponent, NotFoundModule }                             from '@sys/not-found';
import { SysServicesModule_0, SysServicesModule_1, SysServicesModule_2 } from '@sys/services';

import { AppComponent }          from 'app/app.component';
//import * as AppConfig            from './app.config';


@NgModule({
  imports:      [
	BrowserModule,
	MaterialModule.forRoot(),
	FlexLayoutModule,
	ToastyModule.forRoot(),
	RouterModule.forRoot( AppConfig.Routing.concat([
            { path:'**', component:NotFoundComponent}
        ]), { useHash: true } ),
	NotFoundModule,
	SysServicesModule_0, SysServicesModule_1, SysServicesModule_2,
	ModalsModule,
	PipeModules
  ],
  exports:      [ BrowserModule, ToastyModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
	constructor( mdIconRegistry: MdIconRegistry ) {
        mdIconRegistry.addSvgIconSetInNamespace('icons', 'svg/icons.svg');
    }
}
