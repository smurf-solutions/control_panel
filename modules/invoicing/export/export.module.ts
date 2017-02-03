import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MaterialModule }    from '@angular/material';
import { RouterModule }      from '@angular/router';
import { FlexLayoutModule }  from '@angular/flex-layout';

import { ExportComponent }       from './export.component.js';
import { InvoiceSheetComponent } from './invoice-sheet/invoice-sheet.component.js';


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule,
		RouterModule.forChild([{path:'Print',component:ExportComponent}])
	],
	declarations: [ ExportComponent, InvoiceSheetComponent ],
	exports: [ ExportComponent, InvoiceSheetComponent ]
})
export class ExportModule {}