// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerInputModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel } from '../../dashboards/models/dashboard.model'
declare var jQuery: any;

@Component({
	selector: 'kervi-controller-number-input',
	templateUrl: './controller-number-input.component.html',
	styleUrls: ['./controller-number-input.component.css']
})
export class ControllerNumberInputComponent implements OnInit {
	@Input() input: ControllerInputModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	private moveDelayTimer = null;
	private type:string = "horizontal_slider";
	private size:number = 1;
	private unitSize:number=150;

	constructor(private kerviService: KerviService, private elementRef: ElementRef) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		var self = this;
		if (this.parameters){
			if (this.parameters.type)
				this.type=this.parameters.type;
			if (this.parameters.size)
				this.size=this.parameters.size;
			}

			if (this.dashboardSection){
				this.unitSize=this.dashboardSection.dashboard.unitSize;
			}

		//var color = "#ffffff";
		//if (this.dashboardSection.dashboard.type == "dashboard")
		var	color = "#55595c";
		var p = jQuery('fieldset', this.elementRef.nativeElement).xy({
			displayPrevious: false
			, min: this.input.minValue
			, max: this.input.maxValue
			, width: this.type == "vertical_slider" ? 30 : self.unitSize*self.size
			, height: this.type == "vertical_slider" ? self.unitSize*self.size : 30
			, fgColor: color
			, bgColor: color
			, change: function (value) {
				if (self.moveDelayTimer)
					clearTimeout(self.moveDelayTimer);


				self.moveDelayTimer = setTimeout(function () {
					if (self.type == "vertical_slider") {
						self.kerviService.spine.sendCommand(self.input.command, value[1]);
					} else {
						self.kerviService.spine.sendCommand(self.input.command, value[0]);
					}
				}, 200);
			}
		})
			.css({ 'border': '1px solid rgba(0, 0, 0, 0.15)', "border-radius": '0.25rem'  });

		if (self.type == "vertical_slider")
		{
				jQuery("input[name='y']", self.elementRef.nativeElement).show();
				jQuery("input[name='x']", self.elementRef.nativeElement).hide();
		}
		else
		{
				jQuery("input[name='x']", self.elementRef.nativeElement).show();
				jQuery("input[name='y']", self.elementRef.nativeElement).hide();
		}

		self.input.value$.subscribe(function (v) {
			if (self.type == "vertical_slider")
				jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
			else
				jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
		});
	}

}
