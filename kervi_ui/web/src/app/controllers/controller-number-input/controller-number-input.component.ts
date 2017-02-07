// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerInputModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
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
	private size:number = 0;
	private unitSize:number=150;

	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	 private color(style,selector){
    	return this.templateService.getColor(style,selector);
  	}

	ngOnInit() {
		var self = this;
		console.log("ngi ni",this);
		if (!this.parameters)
      		this.parameters = this.input.ui;

		if (this.parameters){
			if (this.parameters.type)
				this.type=this.parameters.type;
			if (this.parameters.size)
				this.size=this.parameters.size;
		}

		if (this.dashboardSection){
			this.unitSize=this.dashboardSection.dashboard.unitSize;

		}

		var sliderSize=self.unitSize*self.size;
		if (self.size==0)
			sliderSize=self.unitSize;
		

		var	color = this.color("color",".number-gauge-template");
		setTimeout(function() {
			
		
			var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
				displayPrevious: false
				, min: self.input.minValue
				, max: self.input.maxValue
				, width: self.type == "vertical_slider" ? 30 : sliderSize
				, height: self.type == "vertical_slider" ? sliderSize : 30
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
				.css({ 'border': self.color("border", ".number-gauge-template"), "border-radius": '0.25rem'  });

			

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
		}, 0);

		self.input.value$.subscribe(function (v) {
			if (self.type == "vertical_slider")
				jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
			else
				jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
		});
	}

}
