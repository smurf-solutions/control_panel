import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { RouterModule }          from '@angular/router';
import { MdIconRegistry }        from '@angular/material';
import { HttpModule }            from '@angular/http';
import { ToastyModule }          from 'ng2-toasty';
import { ModalsModule }          from '@sys/modals';

import { MaterialModule }        from '@angular/material';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { PipeModules }           from '@sys/pipes';

import { NotFoundComponent, NotFoundModule } from '@sys/not-found';
import { SysServicesModule }     from '@sys/services';

//import * as AppConfig            from './app.config';
import { AppComponent }          from 'app/app.component';

@NgModule({
  imports:      [
	BrowserModule,
	MaterialModule.forRoot(),
	FlexLayoutModule.forRoot(),
	HttpModule,
	ToastyModule.forRoot(),
	RouterModule.forRoot( AppConfig.Routing.concat([
            { path:'**', component:NotFoundComponent}
        ]), { useHash: true } ),
	NotFoundModule,
	SysServicesModule,
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
