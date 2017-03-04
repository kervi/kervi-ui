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
	private inSlide:boolean=false;

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
			
			if (self.parameters.type=="horizontal_slider" || self.parameters.type=="vertical_slider")
			jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
				tooltip: "hide",
				min:self.input.minValue,
				max:self.input.maxValue,
				orientation: self.parameters.type == "horizontal_slider" ? "horizontal" : "vertical"
			});
			if (self.parameters.size==0 && !self.parameters.inline){
				//jQuery('.slider-value', self.elementRef.nativeElement).addClass("pull-right");
				//jQuery('.slider', self.elementRef.nativeElement).addClass("pull-right");
				
			}

			jQuery('.slider', self.elementRef.nativeElement).on("change",function(e){
				self.kerviService.spine.sendCommand(self.input.command,e.value.newValue);
				jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStart",function(e){
				self.inSlide=true;
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStop",function(e){
				self.inSlide=false;

			});

			self.input.value$.subscribe(function (v) {
				
				if (!self.inSlide) {
					jQuery("input", self.elementRef.nativeElement).bootstrapSlider('setValue',v);
					//jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
				}
				
			});
		},0);
	}

}
