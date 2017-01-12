import { Injectable } from '@angular/core';
import { KerviService } from "./kervi.service"
import { DashboardsService } from './dashboards/dashboards.service'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TemplateService {

    constructor() 
  { 
    console.log("kervi service constructor");
        console.log("ctemplate");
    }
    
    private getStyleRuleValue(style, selector, sheet) {
        var sheets = sheet!=null ? [sheet] : document.styleSheets;
        for (var i = 0, l = sheets.length; i < l; i++) {
            
            var sheet = sheets[i];
            if( !sheet.cssRules ) { continue; }
            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                var rule = sheet.cssRules[j];
                if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                    return rule.style[style];
                }
            }
        }
        return null;
    }

    public getColor(colorName:string,cssClass:string){
        var styleValue=this.getStyleRuleValue(colorName,cssClass,null);
        console.log("sv",styleValue);
        return styleValue;
    }
}