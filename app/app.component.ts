import { Component, ViewEncapsulation } from '@angular/core'
import { ViewChild, MdSidenav }         from '@angular/core'

import { SysService }                   from '@sys/services'
import { AuthService }                  from '@sys/services'
import { LanguageService }              from '@sys/services'
import { EventsService }                from '@sys/services'
import { ProgressService }              from '@sys/services'

//import * as AppConfig                   from  'app.config.js'
//import { CompanyConfig }                from '../company.config.js'

@Component({
  selector: 'app',
  styleUrls: AppConfig.Styles,
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html'
})
export class AppComponent  {
	@ViewChild('leftbar') leftbar : MdSidenav
	@ViewChild('rightbar') rightbar : MdSidenav
	title = 'Admin panel'
	Config = AppConfig
	leftbarMenuController // = 'base'
	private state = {}

	//heroService: HeroService = this.injector.get(HeroService)
	
	constructor(
		public auth : AuthService,
		public app  : SysService,
		public lang : LanguageService,
		public on   : EventsService,
		public progress : ProgressService
	){
		this.app.layout = this
		this.app.company = CompanyConfig
	}

	getDbName() {
		let parser = document.createElement('a')
		parser.href = this.auth.dbUrl
		
		return parser.hostname +'  '+ parser.pathname.replace('/collections/','').replace('/',' ')
	}
	
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
			this.leftbar.open()
		else
			this.leftbar.close()
	}

	/**
	Left and Right bars
	*/
	toggleLeftbar() {
		if( this.leftbar.opened ) {
			this.leftbar.close()
		} else {
			this.leftbar.open()
			if( !this.rightbarLocked ) this.rightbar.close()
		}
	}
	openrightbar() {
		this.rightbar.open()
		this.leftbar.close()
	}
	togglerightbar() {
		if( this.rightbar.opened ) {
			if( !this.rightbarLocked ) {
				this.rightbar.close()
			}
		} else {
			this.openrightbar()
		}
	}
}
