﻿import { Component, ViewEncapsulation } from '@angular/core';
import { ViewChild, MdSidenav }         from '@angular/core';
import { MdSnackBar }                   from '@angular/material';
//import { MdDialog }                     from '@angular/material';

import { SysService }                   from '@sys/services';
//import { AuthService }                   from '@sys/services';
import { CollectionsService }           from '@sys/services';
import { LoginModalComponent }          from '@sys/modals';

import * as AppConfig                   from  './app.config.js';
import { CompanyConfig }                from '../company.config.js';

@Component({
  //providers: [ AuthService ],
  selector: 'app',
  styleUrls: AppConfig.Styles,
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
})
export class AppComponent  {
	@ViewChild('leftbar') leftbar: MdSidenav;
	@ViewChild('rightbar') rightbar: MdSidenav;
	title = 'Admin panel ';
	Config = AppConfig;
	leftbarMenuController = 'base';
	private state = {};

	constructor(
		//public auth: AuthService,
		public collections: CollectionsService,
		public app: SysService,
		public snack: MdSnackBar,
		//private dialog: MdDialog
	){
		this.app.layout = this;
		this.app.company = CompanyConfig;
		if(this.Config.DEMO) this.snack.open("Режим Демонстрация","х");
	}

	/*
	login() {
		this.dialog.open( LoginModalComponent );
	}
	*/
	
	/**
	Store and Restore Application state
	*/
	store() {
		this.state.leftbar = {
			opened: this.leftbar.opened
		}
	}
	restore() {
		if( this.state.leftbar.opened )
			this.leftbar.open();
		else
			this.leftbar.close();
	}

	/**
	Left and Right bars
	*/
	toggleLeftbar() {
		if( this.leftbar.opened ) {
			this.leftbar.close();
		} else {
			this.leftbar.open();
			if( !this.rightbarLocked ) this.rightbar.close();
		}
	}
	openrightbar() {
		this.rightbar.open();
		this.leftbar.close();
	}
	togglerightbar() {
		if( this.rightbar.opened ) {
			if( !this.rightbarLocked ) {
				this.rightbar.close();
			}
		} else {
			this.openrightbar();
		}
	}
}
