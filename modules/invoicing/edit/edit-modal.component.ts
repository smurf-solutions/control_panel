import { Component }    from '@angular/core';


@Component({
  //selector: 'edit-modal-component',
  moduleId: module.id,
  templateUrl: 'edit-modal.component.html'
})
export class EditModalComponent {
	//title    = "Фактура";
	_id      = 0
	invoice  = {};
	customer = {};
	payment  = {};
}
