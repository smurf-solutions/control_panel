import { Component }           from '@angular/core';

import { SysService }          from '@sys/services';
import { CollectionsService }  from '@sys/services';
import { ToastyService }       from 'ng2-toasty';

@Component({
	moduleId: module.id,
	templateUrl: 'admin-users-list.component.html'
})
export class AdminUsersListComponent {
	constructor(
		public app: SysService,
		public collections: CollectionsService,
		public toasty: ToastyService
	){}
}