// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicBooleanModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
import { DashboardSectionModel } from '../../models/dashboard.model'

@Component({
	selector: 'dynamic-value-boolean',
	templateUrl: './boolean-value.component.html',
	styleUrls: ['./boolean-value.component.scss']
	//directives: [ CommonModule  ],
})
export class DynamicBooleanComponent implements OnInit {
	@Input() value: DynamicBooleanModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	private size:number = 0;
	private unitSize:number=150;
	
	displayType:string="switch";
	
	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		var self = this;
		console.log("ngi ni",this);
		if (!this.parameters)
      		this.parameters = this.value.ui;

		if (this.parameters){
			if (this.parameters.type){
				this.displayType = this.parameters.type
            }
			if (this.parameters.size)
				this.size=this.parameters.size;
        }

		if (this.dashboardSection){
			this.unitSize=this.dashboardSection.dashboard.unitSize;

		}

		if (self.value.isInput){
			var sliderSize=self.unitSize*self.size;
			if (self.size==0)
				sliderSize=self.unitSize;
		}

		
	}

}
