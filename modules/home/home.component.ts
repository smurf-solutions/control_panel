import { Component }          from '@angular/core';

import { SysService }         from '@sys/services';
import { CollectionsService } from '@sys/services';
import { ToastyService }      from 'ng2-toasty';


@Component({
	moduleId: module.id,
	styleUrls: [ 'home.component.css' ],
	templateUrl: 'home.component.html'
})
export class HomeComponent {
	servers = [
		{ title: 'Local', link: 'http://localhost:3000/collections/'},
		{ title: 'Demo',  link: 'https://smurf-solutions.github.io/control_panel/collections/' }
	];
	
	constructor(
		public app: SysService,
		public collections: CollectionsService,
		public toasty: ToastyService
	) {}
	
	
}