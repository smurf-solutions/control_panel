import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { RouterModule }          from '@angular/router';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { HttpModule }            from '@angular/http';
import { ToastyModule }          from 'ng2-toasty';

import { NotFoundComponent, NotFoundModule } from '@sys/not-found';
import { SysServicesModule }     from '@sys/services';
import { ModalsModule }          from '@sys/modals';

import * as AppConfig            from './app.config';
import { AppComponent }          from './app.component';

@NgModule({
  imports:      [
	BrowserModule,
	MaterialModule.forRoot(),
	FlexLayoutModule.forRoot(),
	HttpModule,
	ToastyModule.forRoot(),
	RouterModule.forRoot( AppConfig.Routing.concat([
            //{path:'Login', loadChildren: 'lib/login/login.ts#LoginModule'},
			//{ path: 'Login', component: LoginComponent },
			//{ path: 'login', component: LoginComponent },
            { path:'**', component:NotFoundComponent}
        ]), { useHash: true } ),
	NotFoundModule,
	SysServicesModule,
	ModalsModule
  ],
  exports:      [ BrowserModule, ToastyModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
	constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIconSetInNamespace('icons', 'svg/icons.svg');
    }
}
