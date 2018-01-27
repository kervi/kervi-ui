webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamViewerComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ControllersService } from '../controllers.service';

var CamViewerComponent = (function () {
    function CamViewerComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.cameraId = null;
        this.isBackground = false;
        this.parameters = null;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["b" /* DashboardSizes */]();
        this.camera$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](null);
        this.cameraSource$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]("");
        this.padSize = 180;
        this.panSubscription = null;
        this.tiltSubscription = null;
        this.moveDelayTimer = null;
        this.pointOfInterests = [];
        //private img = new Image();
        this.firstLoad = true;
        var self = this;
        this.camera$.subscribe(function (v) {
            //console.log("cse",v);
            if (self.panSubscription)
                self.panSubscription.unsubscribe();
            if (self.tiltSubscription)
                self.tiltSubscription.unsubscribe();
            if (v) {
                var pan = null;
                var tilt = null;
                for (var _i = 0, _a = v.inputs; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.id.endsWith(".pan"))
                        pan = i;
                    else if (i.id.endsWith(".tilt"))
                        tilt = i;
                }
                if (pan) {
                    self.panSubscription = pan.value$.subscribe(function (v) {
                        jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                if (tilt) {
                    self.tiltSubscription = tilt.value$.subscribe(function (v) {
                        jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                if (v.ui && v.ui.type == "frame") {
                    if (v.ui.source)
                        self.cameraSource$.next(v.ui.source.server + v.ui.source.path);
                }
            }
            else {
                self.cameraSource$.next("");
            }
        });
    }
    CamViewerComponent.prototype.imageReady = function () {
        var h = jQuery(".video", this.elementRef.nativeElement).height();
        var w = jQuery(".video", this.elementRef.nativeElement).width();
        jQuery(".cam-pad-area", this.elementRef.nativeElement).css({ top: h / 2 - this.padSize / 2, left: w / 2 - this.padSize / 2 });
    };
    CamViewerComponent.prototype.timedRefresh = function () {
        //console.log("trx", this);
    };
    CamViewerComponent.prototype.ngOnInit = function () {
        var self = this;
        if (this.cameraId) {
            this.camera$.next(this.kerviService.getComponent(this.cameraId));
        }
        var viewPortHeight = jQuery(window).height();
        var viewPortWidth = jQuery(window).width();
        this.camHeight = viewPortHeight - 65;
        this.camWidth = viewPortWidth;
        setTimeout(function () {
            self.timedRefresh();
            var h = jQuery(".video", self.elementRef.nativeElement).height();
            var w = jQuery(".video", self.elementRef.nativeElement).width();
            if (w < self.padSize) {
                self.padSize = w - 10;
                //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });
            }
            //console.log("cwp",h,w,self.padSize);
            var pan = null;
            var tilt = null;
            if (self.camera$.value) {
                for (var _i = 0, _a = self.camera$.value.inputs; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.id.endsWith(".pan"))
                        pan = i;
                    else if (i.id.endsWith(".tilt"))
                        tilt = i;
                }
            }
            if (pan)
                jQuery("input[name='x']", self.elementRef.nativeElement).val(pan.value$.value).change();
            if (tilt)
                jQuery("input[name='y']", self.elementRef.nativeElement).val(tilt.value$.value).change();
            var color = "rgba(255,255,255,.5)";
            var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
                displayPrevious: false,
                min: -100,
                max: 100,
                width: self.padSize,
                height: self.padSize,
                fgColor: color,
                bgColor: color,
                change: function (value) {
                    if (self.moveDelayTimer) {
                        clearTimeout(self.moveDelayTimer);
                    }
                    self.moveDelayTimer = setTimeout(function () {
                        if (pan)
                            self.kerviService.spine.sendCommand(pan.command, value[0]);
                        if (tilt)
                            self.kerviService.spine.sendCommand(tilt.command, value[1]);
                    }, 200);
                }
            })
                .css({ 'border': '2px solid ' + color });
            jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize / 2), left: w / 2 - (self.padSize / 2) });
            jQuery(".cam-pad-area", self.elementRef.nativeElement).show();
            jQuery(window).bind('resize', function () {
                //jQuery('#video-viewer').height(jQuery(window).height());
                var h = jQuery(".video", self.elementRef.nativeElement).height();
                var w = jQuery(".video", self.elementRef.nativeElement).width();
                jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize / 2, left: w / 2 - self.padSize / 2 });
            });
        }, 500);
        self.kerviService.IPCReady$.subscribe(function (ready) {
            if (ready) {
                self.kerviService.spine.addEventHandler("pointOfInterestChange", "", function () {
                    console.log("poi change", this);
                    if (this.action == "add") {
                        self.pointOfInterests.push(this.pointOfInterest);
                    }
                    else if (this.action == "update") {
                        for (var i = 0; (self.pointOfInterests.length); i++) {
                            var poi = self.pointOfInterests[i];
                            if (poi.id == this.pointOfInterest.id) {
                                self.pointOfInterests[i] = this.pointOfInterest;
                                break;
                            }
                        }
                    }
                    else if (this.action == "delete") {
                        for (var i = 0; (self.pointOfInterests.length); i++) {
                            var poi = self.pointOfInterests[i];
                            if (poi.id == this.pointOfInterest.id) {
                                self.pointOfInterests.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (this.action == "clear") {
                        for (var i = 0; (self.pointOfInterests.length); i++) {
                            var poi = self.pointOfInterests[i];
                            if (poi.cameraId == this.cameraId && poi.visionId == this.visionId) {
                                self.pointOfInterests.splice(i, 1);
                            }
                        }
                    }
                    self.updatePOI();
                });
            }
        });
        self.kerviService.connected$.subscribe(function (connected) {
            if (connected) {
            }
        });
    };
    CamViewerComponent.prototype.updatePOI = function () {
        if (this.camera$.value) {
            var canvas = document.getElementById('poiCanvas');
            var context = canvas.getContext('2d');
            var cam = this.camera$.value;
            canvas.height = cam.ui.height;
            canvas.width = cam.ui.width;
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i in this.pointOfInterests) {
                var poi = this.pointOfInterests[i];
                context.beginPath();
                context.rect(poi.position[0], poi.position[1], poi.size[0], poi.size[1]);
                context.fillStyle = 'rgba(255, 255, 255, 0.5)';
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = 'green';
                context.stroke();
            }
        }
    };
    return CamViewerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], CamViewerComponent.prototype, "cameraId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CamViewerComponent.prototype, "isBackground", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], CamViewerComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _a || Object)
], CamViewerComponent.prototype, "defaultSizes", void 0);
CamViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-cam-viewer',
        template: __webpack_require__(297),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object])
], CamViewerComponent);

var _a, _b, _c;
//# sourceMappingURL=cam-viewer.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(197);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_action_model__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_models_dynamicValues_model__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionComponent = (function () {
    function ActionComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.action = null;
        this.parameters = null;
        this.dashboardSection = null;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]();
        this.size = 0;
        this.unitSize = 150;
        this.state = new __WEBPACK_IMPORTED_MODULE_5_app_models_dynamicValues_model__["a" /* DynamicBooleanModel */](false);
        this.displayType = "switch";
    }
    ActionComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.action.ui;
        if (this.parameters) {
            if (this.parameters.type) {
                this.displayType = this.parameters.type;
            }
            if (this.parameters.size)
                this.size = this.parameters.size;
            if (!this.inline && this.parameters.inline) {
                this.inline = true;
            }
            else if (!this.inline && this.parameters.size > 0) {
                this.inline = true;
            }
        }
        this.state.command = this.parameters.runCommand;
    };
    ActionComponent.prototype.press = function () {
        if (!this.action.running$.value)
            (_a = this.kerviService.spine).sendCommand.apply(_a, [this.action.ui.runCommand].concat(this.parameters.actionParameters));
        var _a;
    };
    ActionComponent.prototype.release = function () {
        if (this.action.running$.value)
            (_a = this.kerviService.spine).sendCommand.apply(_a, [this.action.ui.interuptCommand].concat(this.parameters.interuptParameters));
        var _a;
    };
    return ActionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_action_model__["a" /* ActionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_action_model__["a" /* ActionModel */]) === "function" && _a || Object)
], ActionComponent.prototype, "action", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ActionComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], ActionComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], ActionComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _c || Object)
], ActionComponent.prototype, "defaultSizes", void 0);
ActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-action',
        template: __webpack_require__(288),
        styles: [__webpack_require__(255)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */]) === "function" && _e || Object])
], ActionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=action.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_action_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values_values_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_components_ui_components_module__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsModule; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ActionsModule = (function () {
    function ActionsModule() {
    }
    return ActionsModule;
}());
ActionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__values_values_module__["a" /* ValuesModule */],
            __WEBPACK_IMPORTED_MODULE_5__ui_components_ui_components_module__["a" /* UIComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__action_action_component__["a" /* ActionComponent */]
        ],
        providers: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__action_action_component__["a" /* ActionComponent */]
        ]
    })
], ActionsModule);

//# sourceMappingURL=actions.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(289),
        styles: [__webpack_require__(256)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboards_dashboards_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values_values_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connect_connect_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboards_dashboard_dashboard_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__connected_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboards_dashboards_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ROUTES = [
    {
        path: '',
        redirectTo: '/connect',
        pathMatch: 'full'
    },
    { path: 'connect', component: __WEBPACK_IMPORTED_MODULE_9__connect_connect_component__["a" /* ConnectComponent */] },
    { path: 'dashboard/:name', component: __WEBPACK_IMPORTED_MODULE_10__dashboards_dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
var AppModule = (function () {
    function AppModule(connectedService) {
        this.connectedService = connectedService;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__connect_connect_component__["a" /* ConnectComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboards_dashboards_module__["a" /* DashboardsModule */],
            __WEBPACK_IMPORTED_MODULE_7__values_values_module__["a" /* ValuesModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__kervi_service__["a" /* KerviService */], __WEBPACK_IMPORTED_MODULE_13__dashboards_dashboards_service__["a" /* DashboardsService */], __WEBPACK_IMPORTED_MODULE_12__connected_service__["a" /* ConnectedService */], __WEBPACK_IMPORTED_MODULE_14__template_service__["a" /* TemplateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__connected_service__["a" /* ConnectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__connected_service__["a" /* ConnectedService */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connected_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectComponent = (function () {
    function ConnectComponent(fb, kerviService, connectedService, router, route) {
        this.kerviService = kerviService;
        this.connectedService = connectedService;
        this.router = router;
        this.route = route;
        this.isConnected = false;
        this.currentPage = null;
        this.invalidUser = false;
        this.ts = new Date();
        this.isAuthenticated = false;
        this.doAuthenticate = false;
        this.inAuthentication = false;
        var self = this;
        this.loginForm = fb.group({
            'userName': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        });
        this.userName = this.loginForm.controls['userName'];
        this.password = this.loginForm.controls['password'];
    }
    ConnectComponent.prototype.onConnectedChange = function (v) {
    };
    ConnectComponent.prototype.ngOnInit = function () {
        var self = this;
        this.isAuthenticated = this.connectedService.isAuthenticated;
        this.doAuthenticate = this.kerviService.doAuthenticate;
        this.inAuthentication = this.kerviService.inAuthentication$.value;
        this.kerviService.authenticationFailed$.subscribe(function (v) {
            self.invalidUser = v;
        });
        this.kerviService.IPCReady$.subscribe(function (v) {
            self.isConnected = v;
            self.isAuthenticated = self.connectedService.isAuthenticated;
            self.doAuthenticate = self.kerviService.doAuthenticate;
        });
        this.kerviService.inAuthentication$.subscribe(function (v) {
            self.inAuthentication = v;
            //self.isAuthenticated = self.connectedService.isAuthenticated;
            //self.doAuthenticate = self.kerviService.doAuthenticate;
        });
    };
    ConnectComponent.prototype.ngOnDestroy = function () {
        //this.kerviService.Connected.unsubscribe()    
    };
    ConnectComponent.prototype.onSubmit = function (value) {
        this.kerviService.authenticate(value.userName, value.password);
    };
    return ConnectComponent;
}());
ConnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-connect',
        //providers: [ KerviService ],
        template: __webpack_require__(290),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__connected_service__["a" /* ConnectedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connected_service__["a" /* ConnectedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], ConnectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=connect.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllersService; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControllersService = (function () {
    function ControllersService(kerviService) {
        this.kerviService = kerviService;
        var self = this;
        var s = this.kerviService.getComponents$().subscribe(function (v) {
            self.refreshControllers();
        });
    }
    ControllersService.prototype.refreshControllers = function () {
        var self = this;
        var controllers = this.kerviService.getComponentsByType("controller");
        for (var _i = 0, controllers_1 = controllers; _i < controllers_1.length; _i++) {
            var controller = controllers_1[_i];
            if (controller.inputs.length == 0) {
                for (var _a = 0, _b = controller.inputReferences; _a < _b.length; _a++) {
                    var ref = _b[_a];
                    controller.inputs.push(this.kerviService.getComponent(ref.id));
                }
            }
            if (controller.outputs.length == 0) {
                for (var _c = 0, _d = controller.outputReferences; _c < _d.length; _c++) {
                    var ref = _d[_c];
                    controller.outputs.push(this.kerviService.getComponent(ref.id));
                }
            }
        }
        //console.log("rc", controllers);    
    };
    return ControllersService;
}());
ControllersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _a || Object])
], ControllersService);

var _a;
//# sourceMappingURL=controller.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_controller_model__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControllerComponent = (function () {
    function ControllerComponent() {
        this.section = "left";
    }
    ControllerComponent.prototype.ngOnInit = function () {
        console.log("ctrli", this);
    };
    return ControllerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_controller_model__["a" /* ControllerModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_controller_model__["a" /* ControllerModel */]) === "function" && _a || Object)
], ControllerComponent.prototype, "controller", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ControllerComponent.prototype, "section", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], ControllerComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ControllerComponent.prototype, "parameters", void 0);
ControllerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-controller',
        template: __webpack_require__(291),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [])
], ControllerComponent);

var _a, _b;
//# sourceMappingURL=controller.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_controller_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__values_values_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_components_ui_components_module__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllersModule; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ControllersModule = (function () {
    function ControllersModule(controllerService) {
        this.controllerService = controllerService;
    }
    return ControllersModule;
}());
ControllersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__values_values_module__["a" /* ValuesModule */],
            __WEBPACK_IMPORTED_MODULE_6__ui_components_ui_components_module__["a" /* UIComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__controller_controller_component__["a" /* ControllerComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__controller_service__["a" /* ControllersService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__controller_controller_component__["a" /* ControllerComponent */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__controller_service__["a" /* ControllersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__controller_service__["a" /* ControllersService */]) === "function" && _a || Object])
], ControllersModule);

var _a;
//# sourceMappingURL=controllers.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardSectionComponent = (function () {
    //sectionComponents:IComponent[] = []
    function DashboardSectionComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]();
        this.inGroup = false;
        this.bodyOnly = false;
        this.width = "";
        this.showHeader = false;
        this.expanded = false;
        this.components = [];
        this.headerComponents = [];
        //messages: DashboardMessageModel[] = [];
        this.messages$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["BehaviorSubject"]([]);
    }
    DashboardSectionComponent.prototype.calcWidth = function (section, inGroup) {
        if (section.type == "group") {
            if (section.parameters.width == null || section.parameters.width == "0")
                return "100%";
            else
                return this.templateService.getSizeValue(section.parameters.width);
        }
        else
            return inGroup ? "" : this.templateService.getSizeValue(section.parameters.width);
    };
    DashboardSectionComponent.prototype.showSectionHeader = function (section) {
        var hasHeaderComponents = false;
        for (var _i = 0, _a = this.section.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.parameters.linkToHeader)
                hasHeaderComponents = true;
        }
        return (section.parameters.title != null && section.parameters.title.length > 0) || hasHeaderComponents;
    };
    DashboardSectionComponent.prototype.ngOnInit = function () {
        var self = this;
        this.title = this.section.parameters.title;
        for (var _i = 0, _a = this.section.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.parameters.linkToHeader)
                this.headerComponents.push(component);
            else
                this.components.push(component);
        }
        this.showHeader = (this.section.parameters.title != null && this.section.parameters.title.length > 0) || (this.headerComponents.length > 0);
        if (this.section.parameters.userLog) {
            this.kerviService.spine.sendQuery("getLogItems", 0, this.section.parameters.logLength, function (v) {
                //console.log('lm', v);
                //var messages = DashboardFactory.createLogMessages(v)
                //self.messages$.next(messages);
            });
            this.kerviService.spine.addEventHandler("userLogMessage", null, function (v) {
                var messages = self.messages$.value;
                messages.unshift(new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["d" /* DashboardMessageModel */](this));
                if (messages.length > self.section.parameters.logLength)
                    messages.pop();
                self.messages$.next(messages);
            });
        }
        this.width = this.inGroup ? "" : this.templateService.getSizeValue(self.section.parameters.width);
    };
    DashboardSectionComponent.prototype.ngOnDestroy = function () {
    };
    return DashboardSectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _a || Object)
], DashboardSectionComponent.prototype, "section", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DashboardSectionComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], DashboardSectionComponent.prototype, "defaultSizes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DashboardSectionComponent.prototype, "inGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DashboardSectionComponent.prototype, "bodyOnly", void 0);
DashboardSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-dashboard-section',
        //providers: [ KerviService ],
        template: __webpack_require__(292),
        styles: [__webpack_require__(252)],
        //encapsulation: ViewEncapsulation.None
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */]) === "function" && _d || Object])
], DashboardSectionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard-section.component.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DynamicRangeType; });
/* unused harmony export DynamicRange */
/* unused harmony export DynamicEnumOptionModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DynamicEnumModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DynamicNumberModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DynamicStringModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicBooleanModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DynamicDateTimeModel; });

//import { ControllersFactory } from './factory' 
var DynamicRangeType;
(function (DynamicRangeType) {
    DynamicRangeType[DynamicRangeType["normal"] = 0] = "normal";
    DynamicRangeType[DynamicRangeType["warning"] = 1] = "warning";
    DynamicRangeType[DynamicRangeType["error"] = 2] = "error";
})(DynamicRangeType || (DynamicRangeType = {}));
;
var DynamicRange = (function () {
    function DynamicRange(range) {
        this.start = null;
        this.end = null;
        this.type = null;
        this.start = range["start"];
        this.end = range["end"];
        if (range["type"] == "warning")
            this.type = DynamicRangeType.warning;
        else if (range["type"] == "error")
            this.type = DynamicRangeType.error;
        else
            this.type = DynamicRangeType.normal;
    }
    return DynamicRange;
}());

var DynamicEnumOptionModel = (function () {
    function DynamicEnumOptionModel(messageOption) {
        this.selected$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](false);
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
    DynamicEnumOptionModel.prototype.updateReferences = function () { };
    ;
    DynamicEnumOptionModel.prototype.reload = function (component) { };
    ;
    return DynamicEnumOptionModel;
}());

var DynamicEnumModel = (function () {
    function DynamicEnumModel(message) {
        this.componentType = "dynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.options = [];
        this.name = message.name;
        this.id = message.id;
        this.visible = message.visible;
        this.ui = message.ui;
        this.type = message.componentType;
        this.command = message.command;
        this.options = [];
        for (var _i = 0, _a = message.options; _i < _a.length; _i++) {
            var option = _a[_i];
            this.options.push(new DynamicEnumOptionModel(option));
        }
    }
    DynamicEnumModel.prototype.updateReferences = function () { };
    ;
    DynamicEnumModel.prototype.reload = function (component) { };
    ;
    DynamicEnumModel.prototype.selectOptions = function (selectedOptions) {
        console.log("soc");
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected$.next(false);
        }
        for (var _b = 0, selectedOptions_1 = selectedOptions; _b < selectedOptions_1.length; _b++) {
            var selectedOption = selectedOptions_1[_b];
            if (selectedOption.selected) {
                for (var _c = 0, _d = this.options; _c < _d.length; _c++) {
                    var option = _d[_c];
                    if (option.value == selectedOption.value) {
                        option.selected$.next(true);
                        console.log("os", option.selected$.value);
                    }
                }
            }
        }
    };
    return DynamicEnumModel;
}());

var DynamicNumberModel = (function () {
    function DynamicNumberModel(message) {
        this.componentType = "DynamicValue";
        this.dashboards = [];
        this.value$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](0);
        this.sparkline$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]([]);
        this.ranges = [];
        this.ui = {
            type: "",
            orientation: ""
        };
        this.name = message.name;
        this.type = message.componentType;
        this.isInput = message.isInput;
        this.ui = message.ui;
        this.orientation = message.orientation;
        this.visible = message.visible;
        this.unit = message.unit;
        this.value$.next(message.value);
        this.maxValue = message.maxValue;
        this.minValue = message.minValue;
        this.command = message.command;
        this.id = message.id;
        this.sparkline$.next(message.sparkline);
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
        for (var _i = 0, _a = message.ranges; _i < _a.length; _i++) {
            var range = _a[_i];
            this.ranges.push(new DynamicRange(range));
        }
    }
    DynamicNumberModel.prototype.updateReferences = function () { };
    ;
    DynamicNumberModel.prototype.reload = function (component) { };
    ;
    return DynamicNumberModel;
}());

var DynamicStringModel = (function () {
    function DynamicStringModel(message) {
        this.componentType = "DynamicValue";
        this.dashboards = [];
        this.value$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](0);
        this.ui = {
            type: "",
            orientation: ""
        };
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.orientation = message.orientation;
        this.visible = message.visible;
        this.unit = message.unit;
        this.value$.next(message.value);
        this.maxValue = message.maxValue;
        this.minValue = message.minValue;
        this.command = message.command;
        this.id = message.id;
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
    }
    DynamicStringModel.prototype.updateReferences = function () { };
    ;
    DynamicStringModel.prototype.reload = function (component) { };
    ;
    return DynamicStringModel;
}());

var DynamicBooleanModel = (function () {
    function DynamicBooleanModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.value$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](false);
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.command = message.command;
        this.value$.next(message.value);
    }
    DynamicBooleanModel.prototype.updateReferences = function () { };
    ;
    DynamicBooleanModel.prototype.reload = function (component) { };
    ;
    return DynamicBooleanModel;
}());

/*export class ControllerButtonModel implements IComponent {
    public id: string;
    public name: string;
    public componentType = "DynamicValue"
    public ui:any = {}
    public dashboards: string[] = [];
    public type: string;
    public visible: boolean;
    public pressCommand: string;
    public releaseCommand: string;
    public clickCommand: string;
    public state$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(message) {
        this.id = message.id;
        this.name = message.name;
        this.visible = message.visible;
        this.type = message.componentType;
        this.ui = message.ui;
        this.clickCommand = message.onClick;
        this.pressCommand = message.onPress;
        this.releaseCommand = message.onRelease;
        this.state$.next(message.state);

    }

    updateReferences(){};
    reload(component:IComponent){};
}*/
var DynamicDateTimeModel = (function () {
    function DynamicDateTimeModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.value$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](null);
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.changeCommand = message.command;
    }
    DynamicDateTimeModel.prototype.updateReferences = function () { };
    ;
    DynamicDateTimeModel.prototype.reload = function (component) { };
    ;
    return DynamicDateTimeModel;
}());

//# sourceMappingURL=dynamicValues.model.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboards_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensors_sensors_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_actions_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_controllers_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__values_values_module__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_header_page_header_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_section_dashboard_section_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_components_ui_components_module__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardsModule; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardsModule = (function () {
    function DashboardsModule() {
    }
    return DashboardsModule;
}());
DashboardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__sensors_sensors_module__["a" /* SensorsModule */],
            __WEBPACK_IMPORTED_MODULE_5__controllers_controllers_module__["a" /* ControllersModule */],
            __WEBPACK_IMPORTED_MODULE_6__values_values_module__["a" /* ValuesModule */],
            __WEBPACK_IMPORTED_MODULE_11__ui_components_ui_components_module__["a" /* UIComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__actions_actions_module__["a" /* ActionsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_header_page_header_component__["a" /* PageHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_section_dashboard_section_component__["a" /* DashboardSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__values_values_module__["a" /* ValuesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__dashboards_service__["a" /* DashboardsService */],],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_header_page_header_component__["a" /* PageHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_section_dashboard_section_component__["a" /* DashboardSectionComponent */],
        ]
    })
], DashboardsModule);

//# sourceMappingURL=dashboards.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboards_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageHeaderComponent = (function () {
    function PageHeaderComponent(dashboardsService) {
        this.dashboardsService = dashboardsService;
        this.dashboard = null;
        this.dashboards$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]([]);
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
        var self = this;
        this.appSubscription = this.dashboardsService.getDashboards$().subscribe(function (v) {
            self.dashboards$.next(v);
        });
    };
    PageHeaderComponent.prototype.toggleControllers = function () {
        console.log("tgc");
        var panelLeft = jQuery('.controllers-left-section');
        var panelRight = jQuery('.controllers-right-section');
        if (panelLeft.hasClass("visible")) {
            panelLeft.removeClass('visible').animate({ 'margin-left': '-350px' });
            panelRight.removeClass('visible').animate({ 'margin-right': '-350px' });
        }
        else {
            panelLeft.addClass('visible').animate({ 'margin-left': '0px' });
            panelRight.addClass('visible').animate({ 'margin-right': '0px' });
        }
    };
    PageHeaderComponent.prototype.ngOnDestroy = function () {
        this.appSubscription.unsubscribe();
    };
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["a" /* DashboardModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["a" /* DashboardModel */]) === "function" && _a || Object)
], PageHeaderComponent.prototype, "dashboard", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-header',
        template: __webpack_require__(294),
        styles: [__webpack_require__(259)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__dashboards_service__["a" /* DashboardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboards_service__["a" /* DashboardsService */]) === "function" && _b || Object])
], PageHeaderComponent);

var _a, _b;
//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentRef; });
var ComponentRef = (function () {
    function ComponentRef(message) {
        this.id = message.id;
    }
    return ComponentRef;
}());

//# sourceMappingURL=ComponentRef.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_model__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensor_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__action_model__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFactory; });





var ComponentFactory = (function () {
    function ComponentFactory() {
    }
    ComponentFactory.createComponents = function (message) {
        var result = [];
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                result = result.concat(this.createComponents(message[i]));
            }
        }
        else {
            var component = null;
            if (message.componentType == "KerviAction")
                component = new __WEBPACK_IMPORTED_MODULE_4__action_model__["a" /* ActionModel */](message);
            else if (message.componentType == "dashboard")
                component = new __WEBPACK_IMPORTED_MODULE_3__dashboard_model__["a" /* DashboardModel */](message);
            else if (message.componentType == "sensor")
                component = new __WEBPACK_IMPORTED_MODULE_2__sensor_model__["a" /* SensorModel */](message);
            else if (message.componentType == "controller")
                component = new __WEBPACK_IMPORTED_MODULE_1__controller_model__["a" /* ControllerModel */](message);
            else if (message.componentType == "dynamic-boolean")
                component = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["a" /* DynamicBooleanModel */](message);
            else if (message.componentType == "dynamic-number")
                component = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["b" /* DynamicNumberModel */](message);
            else if (message.componentType == "dynamic-string")
                component = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["c" /* DynamicStringModel */](message);
            else if (message.componentType == "dynamic-enum")
                component = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["d" /* DynamicEnumModel */](message);
            else if (message.componentType == "dynamic-datetime")
                component = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["e" /* DynamicDateTimeModel */](message);
            if (component)
                result.push(component);
        }
        return result;
    };
    return ComponentFactory;
}());

//# sourceMappingURL=factory.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sensor_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SensorComponent = (function () {
    function SensorComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.sensor = null;
        this.parameters = null;
        this.dashboardSection = null;
        this.inline = false;
    }
    SensorComponent.prototype.ngOnInit = function () {
    };
    return SensorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_sensor_model__["a" /* SensorModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_sensor_model__["a" /* SensorModel */]) === "function" && _a || Object)
], SensorComponent.prototype, "sensor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], SensorComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], SensorComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SensorComponent.prototype, "inline", void 0);
SensorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-sensor',
        template: __webpack_require__(295),
        styles: [__webpack_require__(260)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */]) === "function" && _d || Object])
], SensorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sensor.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensor_sensor_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values_values_module__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorsModule; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SensorsModule = (function () {
    function SensorsModule() {
    }
    return SensorsModule;
}());
SensorsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__values_values_module__["a" /* ValuesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sensor_sensor_component__["a" /* SensorComponent */]
        ],
        providers: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sensor_sensor_component__["a" /* SensorComponent */]
        ]
    })
], SensorsModule);

//# sourceMappingURL=sensors.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var Chart:any;
var ButtonComponent = (function () {
    //private  unitSize:number = 150;
    //state:boolean = false;
    //canvasId:string="";
    //private chart:any=null;
    //private chartData = [];
    function ButtonComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.parameters = null;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]();
    }
    ButtonComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    ButtonComponent.prototype.ngOnInit = function () {
        var self = this;
        if (self.parameters) {
            if (!self.inline && self.parameters.inline)
                self.inline = true;
            if (!self.parameters.buttonWidth)
                this.width = this.defaultSizes.buttonWidth;
            else
                this.width = self.parameters.buttonWidth;
            if (!self.parameters.buttonHeight)
                this.height = this.defaultSizes.buttonHeight;
            else
                this.height = self.parameters.buttonHeight;
        }
        else {
            this.width = this.defaultSizes.buttonWidth;
            this.height = this.defaultSizes.buttonHeight;
        }
    };
    ButtonComponent.prototype.press = function () {
        this.kerviService.spine.sendCommand(this.value.command, true);
    };
    ButtonComponent.prototype.release = function () {
        this.kerviService.spine.sendCommand(this.value.command, false);
    };
    return ButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */]) === "function" && _a || Object)
], ButtonComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], ButtonComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], ButtonComponent.prototype, "defaultSizes", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-button',
        template: __webpack_require__(296),
        styles: [__webpack_require__(261)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */]) === "function" && _d || Object])
], ButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = (function () {
    function ChartComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.parameters = null;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]();
        this.unitSize = 150;
        this.canvasId = "";
        this.chart = null;
        this.chartData = [];
        this.selectedPeriodText = "Hourx";
        this.selectedPeriod = "hour";
        this.periodStart = null;
        this.periodEnd = null;
        this.updateChart = true;
    }
    ChartComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    ChartComponent.prototype.ngOnInit = function () {
        var self = this;
        this.setSelectedPeriodText(self.parameters.chartInterval);
        this.canvasId = this.templateService.makeId();
        this.value.value$.subscribe(function (v) {
            if (self.chart) {
                try {
                    if (self.updateChart) {
                        var ds = self.chart.data.datasets[0].data;
                        self.periodEnd = self.value.valueTS;
                        ds.push({ x: self.value.valueTS, y: v });
                        self.cleanData();
                        self.chart.render();
                        self.chart.update();
                    }
                }
                catch (ex) {
                    console.log("cdx", ex);
                }
            }
        });
        setTimeout(function () {
            console.log("cd", self.chartData);
            var ctx = jQuery("#" + self.canvasId);
            self.chart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                maintainAspectRatio: false,
                data: {
                    datasets: [
                        {
                            data: self.chartData,
                            fill: true,
                            lineTension: 0.1,
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    pan: {
                        enabled: true,
                        mode: 'xy'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'xy'
                    },
                    title: {
                        display: self.parameters.label != null,
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [{
                                gridLines: {
                                    color: "rgba(255,255,255,0.5)",
                                    zeroLineColor: "rgba(255,255,255,0.5)"
                                },
                                type: "time",
                                unit: 'second',
                                unitStepSize: 120,
                                time: {
                                    displayFormats: {
                                        'millisecond': 'MMM DD',
                                        'second': 'HH:mm:ss',
                                        'minute': 'HH:mm:ss',
                                        'hour': 'HH:mm:ss',
                                        'day': 'MMM DD',
                                        'week': 'MMM DD',
                                        'month': 'MMM DD',
                                        'quarter': 'MMM DD',
                                        'year': 'MMM DD',
                                    }
                                },
                                ticks: {
                                    display: true,
                                    stepSize: 120,
                                },
                                display: self.parameters.chartGrid,
                                scaleLabel: {
                                    display: true,
                                }
                            }],
                        yAxes: [{
                                ticks: {
                                    fontColor: "white",
                                    max: self.value.maxValue,
                                    min: self.value.minValue,
                                },
                                gridLines: {
                                    color: "rgba(255,255,255,0.5)",
                                    zeroLineColor: "rgba(255,255,255,0.5)"
                                },
                                display: self.parameters.chartGrid,
                                scaleLabel: {
                                    display: true,
                                }
                            }]
                    }
                }
            });
            setTimeout(function () {
                self.selectPeriod(self.parameters.chartInterval);
            }, 0);
        }, 0);
    };
    ChartComponent.prototype.goLive = function () {
        this.selectPeriod(this.selectedPeriod);
    };
    ChartComponent.prototype.movePeriod = function (movement) {
        this.updateChart = false;
        var periodStart = this.periodStart;
        var periodEnd = this.periodEnd;
        if (this.selectedPeriod == "5min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 5 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 5);
        }
        if (this.selectedPeriod == "15min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 15 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 15);
        }
        if (this.selectedPeriod == "30min") {
            periodEnd.setMinutes(periodEnd.getMinutes() + 30 * movement);
            periodStart.setMinutes(periodEnd.getMinutes() - 30);
        }
        if (this.selectedPeriod == "hour") {
            periodEnd.setHours(periodEnd.getHours() + movement);
            periodStart.setHours(periodEnd.getHours() - 1);
        }
        if (this.selectedPeriod == "day") {
            periodEnd.setHours(this.periodEnd.getDay() + 24 * movement);
            periodStart.setHours(this.periodEnd.getDay() - 24);
        }
        if (this.selectedPeriod == "week") {
            periodEnd.setHours(this.periodEnd.getDay() + 7 * 24 * movement);
            periodStart.setHours(this.periodEnd.getDay() + 14 * 24 * movement);
        }
        if (this.selectedPeriod == "month") {
        }
        if (this.selectedPeriod == "year") {
        }
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
        this.loadPeriod();
    };
    ChartComponent.prototype.selectPeriod = function (period) {
        this.updateChart = true;
        this.selectedPeriod = period;
        var periodEnd = new Date();
        var periodStart = new Date();
        if (period == "5min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 5);
        }
        if (period == "15min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 15);
        }
        if (period == "30min") {
            periodStart.setMinutes(periodEnd.getMinutes() - 30);
        }
        if (period == "hour") {
            periodStart.setHours(periodEnd.getHours() - 1);
        }
        if (period == "day") {
            periodStart.setHours(periodEnd.getHours() - 24);
        }
        if (period == "week") {
            periodStart.setHours(periodEnd.getHours() - 7 * 24);
        }
        if (period == "month") {
        }
        if (period == "year") {
        }
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
        this.setSelectedPeriodText(period);
        //console.log("sp", this.periodStart, this.periodEnd);
        this.loadPeriod();
    };
    ChartComponent.prototype.setSelectedPeriodText = function (period) {
        if (period == "5min") {
            this.selectedPeriodText = "5 min";
        }
        if (period == "15min") {
            this.selectedPeriodText = "15 min";
        }
        if (period == "30min") {
            this.selectedPeriodText = "30 min";
        }
        if (period == "hour") {
            this.selectedPeriodText = "Hour";
        }
        if (period == "day") {
            this.selectedPeriodText = "Day";
        }
        if (period == "week") {
            this.selectedPeriodText = "Week";
        }
        if (period == "month") {
            this.selectedPeriodText = "Month";
        }
        if (period == "year") {
            this.selectedPeriodText = "Year";
        }
    };
    ChartComponent.prototype.getPeriodLimit = function () {
        var periodStart = new Date();
        if (this.selectedPeriod == "5min") {
            periodStart.setMinutes(periodStart.getMinutes() - 5);
        }
        if (this.selectedPeriod == "15min") {
            periodStart.setMinutes(periodStart.getMinutes() - 15);
        }
        if (this.selectedPeriod == "30min") {
            periodStart.setMinutes(periodStart.getMinutes() - 30);
        }
        if (this.selectedPeriod == "hour") {
            periodStart.setHours(periodStart.getHours() - 1);
        }
        if (this.selectedPeriod == "day") {
            periodStart.setHours(periodStart.getHours() - 24);
        }
        if (this.selectedPeriod == "week") {
            periodStart.setHours(periodStart.getHours() - 7 * 24);
        }
        if (this.selectedPeriod == "month") {
            periodStart.setHours(periodStart.getHours() - 7 * 24 * 31);
        }
        if (this.selectedPeriod == "year") {
            periodStart.setHours(periodStart.getHours() - 7 * 24 * 365);
        }
        return periodStart;
    };
    ChartComponent.prototype.loadPeriod = function () {
        var self = this;
        //console.log("lp", this.periodStart, this.periodEnd);
        this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
            console.log("gsd", results);
            var sensorData = results;
            self.chartData.length = 0;
            for (var i = 0; (i < sensorData.length); i++) {
                var dataItem = sensorData[i];
                self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
            }
            self.chart.render();
            self.chart.update();
        });
    };
    ChartComponent.prototype.cleanData = function () {
        if (this.updateChart) {
            var doClean = true;
            var limitTS = this.getPeriodLimit();
            var ds = this.chart.data.datasets[0].data;
            while (ds.length > 0 && doClean) {
                if (ds[0].x < limitTS)
                    ds.shift();
                else
                    doClean = false;
            }
        }
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */]) === "function" && _a || Object)
], ChartComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], ChartComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], ChartComponent.prototype, "defaultSizes", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-chart',
        template: __webpack_require__(298),
        styles: [__webpack_require__(263)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */]) === "function" && _d || Object])
], ChartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GaugeComponent = (function () {
    function GaugeComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.value = null;
        this.parameters = null;
        this.type = "radial_gauge";
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]();
        this.unitSize = 110;
        this.canvasId = "";
        this.gauge = null;
        this.gaugeTypes = ['radial_gauge', 'vertical_linear_gauge', 'horizontal_linear_gauge', 'compass'];
    }
    GaugeComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    GaugeComponent.prototype.ngOnInit = function () {
        var self = this;
        this.canvasId = this.templateService.makeId();
        if (this.gaugeTypes.indexOf(this.type) > -1) {
            this.value.value$.subscribe(function (v) {
                if (self.gauge)
                    self.gauge.update({ value: v });
            });
            var warningColor = this.color("color", ".sensor-template .sensor-warning");
            var fatalColor = this.color("color", ".sensor-template .sensor-fatal");
            var dataHighlights = [];
            var fromLimit = self.value.minValue;
            for (var _i = 0, _a = self.value.ranges; _i < _a.length; _i++) {
                var range = _a[_i];
                if (range.type == __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["f" /* DynamicRangeType */].error)
                    dataHighlights.push({ "from": range.start, "to": range.end, "color": fatalColor });
                if (range.type == __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["f" /* DynamicRangeType */].warning)
                    dataHighlights.push({ "from": range.start, "to": range.end, "color": warningColor });
            }
            var nspan = (self.value.maxValue - self.value.minValue);
            var tickSpan = nspan / 10;
            var ticks = [];
            for (var n = self.value.minValue; (n <= self.value.maxValue); n += tickSpan)
                ticks.push(n);
            var settings = {
                renderTo: self.canvasId,
                value: self.value.value$.value,
                units: self.value.unit,
                title: self.parameters.label,
                minValue: self.value.minValue,
                maxValue: self.value.maxValue,
                highlights: dataHighlights,
                majorTicks: ticks,
                colorPlate: this.color("background-color", ".sensor-template"),
                borders: false,
                //colorBorderOuter:"",
                //colorBorderMiddle:"",
                //colorBorderInner:"",
                colorMajorTicks: this.color("color", ".sensor-template .sensor-major-ticks"),
                colorMinorTicks: this.color("color", ".sensor-template .sensor-minor-ticks"),
                colorTitle: this.color("color", ".sensor-template .sensor-title"),
                colorUnits: this.color("color", ".sensor-template .sensor-units"),
                colorNumbers: this.color("color", ".sensor-template .sensor-numbers"),
                colorNeedleStart: this.color("color", ".sensor-template .sensor-needle-start"),
                colorNeedleEnd: this.color("color", ".sensor-template .sensor-needle-end"),
                valueBox: false,
                animationRule: "bounce",
                animationDuration: "500",
                fontValue: "Led",
                animatedValue: "true"
            };
            setTimeout(function () {
                var container = jQuery(self.elementRef.nativeElement).closest(".card-body");
                var containerWidth = jQuery(container).width();
                var containerHeight = jQuery(container).height();
                var width = self.parameters.width;
                if (width === 0) {
                    width = self.defaultSizes.gaugeWidth;
                }
                width = self.templateService.getPixels(width, containerWidth);
                var height = self.parameters.height;
                if (height === 0) {
                    if (self.type == "radial_gauge")
                        height = self.defaultSizes.gaugeWidth;
                    else
                        height = self.defaultSizes.gaugeHeight;
                }
                height = self.templateService.getPixels(height, containerHeight);
                if (self.type == "radial_gauge") {
                    settings["width"] = width;
                    settings["height"] = height;
                    self.gauge = new RadialGauge(settings).draw();
                }
                if (self.type == "vertical_linear_gauge") {
                    settings["colorBarProgress"] = self.color("color", ".sensor-template .sensor-bar-progress"),
                        settings["colorBar"] = self.color("color", ".sensor-template .sensor-bar"),
                        settings["borders"] = false;
                    settings["needleType"] = "arrow";
                    settings["needleWidth"] = "2";
                    settings["needleCircleSize"] = "7";
                    settings["needleCircleOuter"] = "true";
                    settings["needleCircleInner"] = "false";
                    settings["animationDuration"] = "1500";
                    settings["animationRule"] = "linear";
                    settings["barWidth"] = "10";
                    settings["barBeginCircle"] = false;
                    //settings["numberSide"]="left";
                    settings["width"] = width;
                    settings["height"] = height;
                    self.gauge = new LinearGauge(settings).draw();
                }
                if (self.type == "horizontal_linear_gauge") {
                    settings["colorBarProgress"] = self.color("color", ".sensor-template .sensor-bar-progress"),
                        settings["colorBar"] = self.color("color", ".sensor-template .sensor-bar"),
                        settings["borders"] = false;
                    settings["needleType"] = "arrow";
                    settings["needleWidth"] = "2";
                    settings["needleCircleSize"] = "7";
                    settings["needleCircleOuter"] = "true";
                    settings["needleCircleInner"] = "false";
                    settings["animationDuration"] = "1500";
                    settings["animationRule"] = "linear";
                    settings["barWidth"] = "10";
                    settings["barBeginCircle"] = false;
                    settings["width"] = height;
                    settings["height"] = width;
                    self.gauge = new LinearGauge(settings).draw();
                }
            }, 0);
        }
    };
    return GaugeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */]) === "function" && _a || Object)
], GaugeComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], GaugeComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], GaugeComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], GaugeComponent.prototype, "defaultSizes", void 0);
GaugeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-gauge',
        template: __webpack_require__(299),
        styles: [__webpack_require__(264)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__template_service__["a" /* TemplateService */]) === "function" && _e || Object])
], GaugeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=gauge.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cam_viewer_cam_viewer_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MPEGViewerComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MPEGViewerComponent = (function () {
    function MPEGViewerComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.camComponent = null;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]();
        this.width = null;
        this.height = null;
        this.firstLoad = true;
        var self = this;
    }
    MPEGViewerComponent.prototype.imageReady = function () {
        if (this.firstLoad) {
            this.firstLoad = false;
            if (this.camComponent)
                this.camComponent.imageReady();
        }
    };
    MPEGViewerComponent.prototype.ngOnInit = function () {
    };
    return MPEGViewerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cam_viewer_cam_viewer_component__["a" /* CamViewerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cam_viewer_cam_viewer_component__["a" /* CamViewerComponent */]) === "function" && _a || Object)
], MPEGViewerComponent.prototype, "camComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], MPEGViewerComponent.prototype, "cameraSource", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], MPEGViewerComponent.prototype, "defaultSizes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], MPEGViewerComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], MPEGViewerComponent.prototype, "height", void 0);
MPEGViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-mpeg-viewer',
        template: __webpack_require__(300),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object])
], MPEGViewerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mpeg-viewer.component.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateService = (function () {
    function TemplateService() {
        this.remUnit = 20;
        console.log("kervi service constructor");
        //console.log("ctemplate");
        this.remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    TemplateService.prototype.convertRemToPixels = function (rem) {
        return rem * this.remUnit;
    };
    TemplateService.prototype.getSizeValue = function (value) {
        if (value == null)
            return "100%";
        else if (isNaN(value)) {
            return value;
        }
        else if (value > 0)
            return value + "%";
        else
            return "";
    };
    TemplateService.prototype.getPixels = function (value, containerSize) {
        //console.log("gps", value, isNaN(value));
        if (isNaN(value)) {
            if (value.lastIndexOf("px") > -1) {
                var px = parseFloat(value);
                return px;
            }
            else if (value.lastIndexOf("rem") > -1) {
                var rem = parseFloat(value);
                var px = this.convertRemToPixels(rem);
                console.log("remx", rem, px);
                return px;
            }
            else if (value.lastIndexOf("%") > -1) {
                var percentage = parseFloat(value) / 100.0;
                return containerSize * percentage;
            }
        }
        else
            return value;
    };
    TemplateService.prototype.getStyleRuleValue = function (style, selector, sheet) {
        var sheets = sheet != null ? [sheet] : document.styleSheets;
        for (var i = 0, l = sheets.length; i < l; i++) {
            var sheet = sheets[i];
            if (!sheet.cssRules) {
                continue;
            }
            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                var rule = sheet.cssRules[j];
                if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                    return rule.style[style];
                }
            }
        }
        return null;
    };
    TemplateService.prototype.makeId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    TemplateService.prototype.getColor = function (colorName, cssClass) {
        var styleValue = this.getStyleRuleValue(colorName, cssClass, null);
        //console.log("sv", cssClass,styleValue);
        return styleValue;
    };
    return TemplateService;
}());
TemplateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TemplateService);

//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SliderComponent = (function () {
    function SliderComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.type = "horizontal_slider";
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]();
        this.moveDelayTimer = null;
        this.size = 0;
        this.unitSize = 110;
        this.inSlide = false;
        //console.log("cnio",this);
    }
    SliderComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    SliderComponent.prototype.ngOnInit = function () {
        var self = this;
        var sliderSize = self.unitSize * self.size;
        if (self.size == 0)
            sliderSize = self.unitSize;
        var color = this.color("color", ".number-gauge-template");
        setTimeout(function () {
            jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
                tooltip: "hide",
                min: self.value.minValue,
                max: self.value.maxValue,
                step: self.tick,
                orientation: self.type == "horizontal_slider" ? "horizontal" : "vertical"
            });
            jQuery('.slider', self.elementRef.nativeElement).on("change", function (e) {
                self.kerviService.spine.sendCommand(self.value.command, e.value.newValue);
                jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
            });
            jQuery('.slider', self.elementRef.nativeElement).on("slideStart", function (e) {
                self.inSlide = true;
            });
            jQuery('.slider', self.elementRef.nativeElement).on("slideStop", function (e) {
                self.inSlide = false;
            });
            self.value.value$.subscribe(function (v) {
                if (!self.inSlide) {
                    jQuery("input", self.elementRef.nativeElement).bootstrapSlider('setValue', v);
                    //jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
                }
            });
        }, 0);
    };
    return SliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */]) === "function" && _a || Object)
], SliderComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], SliderComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], SliderComponent.prototype, "tick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], SliderComponent.prototype, "defaultSizes", void 0);
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ui-slider',
        template: __webpack_require__(301),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */]) === "function" && _e || Object])
], SliderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SparklineComponent = (function () {
    function SparklineComponent(elementRef, templateService) {
        this.elementRef = elementRef;
        this.templateService = templateService;
    }
    SparklineComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    SparklineComponent.prototype.ngOnInit = function () {
        var self = this;
        var lineColor = self.color("color", ".sparkline-template");
        var spotColor = self.color("color", ".sparkline-template .spot");
        var fillColor = self.color("background-color", ".sparkline-template");
        var height = self.color("height", ".sparkline-template");
        var width = self.color("width", ".sparkline-template");
        //console.log("sl", width, height);
        this.value.sparkline$.subscribe(function (v) {
            jQuery(self.elementRef.nativeElement).sparkline(v, {
                type: 'line',
                lineColor: lineColor,
                spotColor: spotColor,
                fillColor: fillColor,
                height: height,
                width: width
            });
        });
    };
    return SparklineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */]) === "function" && _a || Object)
], SparklineComponent.prototype, "value", void 0);
SparklineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'value-sparkline',
        template: __webpack_require__(302),
        styles: [__webpack_require__(254)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */]) === "function" && _c || Object])
], SparklineComponent);

var _a, _b, _c;
//# sourceMappingURL=sparkline.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchButtonComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchButtonComponent = (function () {
    function SwitchButtonComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]();
        this.state = false;
    }
    SwitchButtonComponent.prototype.press = function () {
        this.kerviService.spine.sendCommand(this.value.command, true);
    };
    SwitchButtonComponent.prototype.release = function () {
        this.kerviService.spine.sendCommand(this.value.command, false);
    };
    SwitchButtonComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters) {
            this.parameters = this.value.ui;
            if (!self.parameters.buttonWidth)
                this.width = this.defaultSizes.switchWidth;
            else
                this.width = self.parameters.buttonWidth;
            if (!self.parameters.buttonHeight)
                this.height = this.defaultSizes.switchHeight;
            else
                this.height = self.parameters.buttonHeight;
        }
        else {
            this.width = this.defaultSizes.switchWidth;
            this.height = this.defaultSizes.switchHeight;
        }
        var onText = this.parameters && this.parameters.onIcon ? "<i class='fa fa-" + this.parameters.onIcon + "'></i> " : "";
        var offText = this.parameters && this.parameters.offIcon ? "<i class='fa fa-" + this.parameters.offIcon + "'></i> " : "";
        onText += this.parameters && this.parameters.onText ? this.parameters.onText : "";
        offText += this.parameters && this.parameters.offText ? this.parameters.offText : "";
        self.valueSubscription = self.value.value$.subscribe(function (v) {
            self.state = v;
            if (v)
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on');
            else
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off');
        });
        setTimeout(function () {
            jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
                'on': onText,
                'off': offText,
                'onstyle': "on",
                'offstyle': "off",
                "width": self.width,
                "height": self.height
            });
            if (self.value.value$.value)
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on');
            else
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off');
            jQuery('input', self.elementRef.nativeElement).change(function () {
                var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
                if (state && !self.value.value$.value)
                    self.kerviService.spine.sendCommand(self.value.command, true);
                else if (!state && self.value.value$.value)
                    self.kerviService.spine.sendCommand(self.value.command, false);
            });
        }, 0);
    };
    return SwitchButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */]) === "function" && _a || Object)
], SwitchButtonComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], SwitchButtonComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], SwitchButtonComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SwitchButtonComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _c || Object)
], SwitchButtonComponent.prototype, "defaultSizes", void 0);
SwitchButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'kervi-switchbutton',
        template: __webpack_require__(303),
        styles: [__webpack_require__(267)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object])
], SwitchButtonComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=switch-button.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicBooleanComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicBooleanComponent = (function () {
    function DynamicBooleanComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]();
        this.size = 0;
        this.unitSize = 150;
        this.displayType = "switch";
        //console.log("cnio",this);
    }
    DynamicBooleanComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.value.ui;
        if (this.parameters) {
            if (this.parameters.type) {
                this.displayType = this.parameters.type;
            }
            if (this.parameters.size)
                this.size = this.parameters.size;
            if (!this.inline && this.parameters.inline) {
                this.inline = true;
            }
            else if (!this.inline && this.parameters.size > 0) {
                this.inline = true;
            }
        }
        if (this.dashboardSection) {
            this.unitSize = this.dashboardSection.dashboard.unitSize;
        }
        if (self.value.isInput) {
            var sliderSize = self.unitSize * self.size;
            if (self.size == 0)
                sliderSize = self.unitSize;
        }
    };
    return DynamicBooleanComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["a" /* DynamicBooleanModel */]) === "function" && _a || Object)
], DynamicBooleanComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], DynamicBooleanComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DynamicBooleanComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DynamicBooleanComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _c || Object)
], DynamicBooleanComponent.prototype, "defaultSizes", void 0);
DynamicBooleanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dynamic-value-boolean',
        template: __webpack_require__(304),
        styles: [__webpack_require__(268)]
        //directives: [ CommonModule  ],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */]) === "function" && _f || Object])
], DynamicBooleanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=boolean-value.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicValueComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicValueComponent = (function () {
    function DynamicValueComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]();
        this.size = 0;
        this.unitSize = 150;
        //console.log("cnio",this);
    }
    DynamicValueComponent.prototype.ngOnInit = function () {
    };
    return DynamicValueComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DynamicValueComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _a || Object)
], DynamicValueComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DynamicValueComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DynamicValueComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _b || Object)
], DynamicValueComponent.prototype, "defaultSizes", void 0);
DynamicValueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dynamic-value',
        template: __webpack_require__(305),
        styles: [__webpack_require__(269)]
        //directives: [ CommonModule  ],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__template_service__["a" /* TemplateService */]) === "function" && _e || Object])
], DynamicValueComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dynamic-value.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicNumberComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicNumberComponent = (function () {
    function DynamicNumberComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.moveDelayTimer = null;
        this.size = 0;
        this.unitSize = 150;
        this.inSlide = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]();
        this.displayType = "";
        this.currentIcon = null;
        this.gaugeTypes = ['radial_gauge', 'vertical_linear_gauge', 'horizontal_linear_gauge', 'compass'];
        this.slideTypes = ['horizontal_slider', 'vertical_slider'];
        //console.log("cnio",this);
    }
    DynamicNumberComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    DynamicNumberComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.input.ui;
        if (this.parameters) {
            if (this.parameters.type) {
                if (this.gaugeTypes.indexOf(this.parameters.type) > -1) {
                    this.displayType = "gauge";
                    this.gaugeType = this.parameters.type;
                }
                else if (this.parameters.type == "chart") {
                    this.displayType = "chart";
                }
            }
            if (!this.inline && this.parameters.inline) {
                this.inline = true;
            }
            else if (!this.inline && this.parameters.size > 0) {
                this.inline = true;
            }
            if (this.parameters.size)
                this.size = this.parameters.size;
        }
        if (!this.displayType) {
            if (this.input.isInput)
                this.displayType = "slider";
            else
                this.displayType = "value";
        }
        if (this.dashboardSection) {
            this.unitSize = this.dashboardSection.dashboard.unitSize;
        }
        if (self.input.isInput) {
            var sliderSize = self.unitSize * self.size;
            if (self.size == 0)
                sliderSize = self.unitSize;
        }
    };
    return DynamicNumberComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["b" /* DynamicNumberModel */]) === "function" && _a || Object)
], DynamicNumberComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], DynamicNumberComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DynamicNumberComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DynamicNumberComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _c || Object)
], DynamicNumberComponent.prototype, "defaultSizes", void 0);
DynamicNumberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dynamic-value-number',
        template: __webpack_require__(306),
        styles: [__webpack_require__(270)]
        //directives: [ CommonModule  ],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__template_service__["a" /* TemplateService */]) === "function" && _f || Object])
], DynamicNumberComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=number-value.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicStringComponent; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicStringComponent = (function () {
    function DynamicStringComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.inline = false;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]();
    }
    DynamicStringComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.input.ui;
        this.input.value$.subscribe(function (v) {
            jQuery("input", self.elementRef.nativeElement).val(v).change();
        });
    };
    DynamicStringComponent.prototype.onChange = function (event) {
        console.log("evv", event);
        this.kerviService.spine.sendCommand(this.input.command, event.target.value);
    };
    return DynamicStringComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["c" /* DynamicStringModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dynamicValues_model__["c" /* DynamicStringModel */]) === "function" && _a || Object)
], DynamicStringComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["c" /* DashboardSectionModel */]) === "function" && _b || Object)
], DynamicStringComponent.prototype, "dashboardSection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DynamicStringComponent.prototype, "parameters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], DynamicStringComponent.prototype, "inline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_dashboard_model__["b" /* DashboardSizes */]) === "function" && _c || Object)
], DynamicStringComponent.prototype, "defaultSizes", void 0);
DynamicStringComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dynamic-value-string',
        template: __webpack_require__(307),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kervi_service__["a" /* KerviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object])
], DynamicStringComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=string-value.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KerviSpine; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var KerviSpine = (function () {
    function KerviSpine(constructorOptions) {
        this.constructorOptions = constructorOptions;
        this.isConnected = false;
        this.doAuthenticate = false;
        this.sessionId = null;
        this.queryHandlers = [];
        this.commandHandlers = [];
        this.eventHandlers = [];
        this.rpcQueue = {};
        this.ready = false;
        this.messageId = 0;
        this.sensors = {};
        this.controllers = {};
        this.sensorTypes = [];
        this.controllerTypes = [];
        this.pointOfInterests = [];
        this.application = null;
        this.allowAnonymous = true;
        this.firstOnOpen = true;
        this.websocket = null;
        this.options = {
            userName: "anonymous",
            password: null,
            address: null,
            onOpen: null,
            onClose: null,
            onAuthenticate: null,
            onAuthenticateFailed: null,
            onAuthenticateStart: null,
            onLogOff: null,
            autoConnect: true,
            targetScope: null,
            protocol: "ws"
        };
        this.addEventHandler = function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            console.log("add event handler", cmd);
            this.websocket.send(JSON.stringify(cmd));
        };
        console.log("Kervi spine init", this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        this.connect();
    }
    KerviSpine.prototype.extend = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        for (var i = 1; i < p.length; i++)
            for (var key in p[i])
                if (p[i].hasOwnProperty(key))
                    p[0][key] = p[i][key];
        return p[0];
    };
    KerviSpine.prototype.addRPCCallback = function (id, callback) {
        if (callback)
            this.rpcQueue[id] = callback;
    };
    KerviSpine.prototype.handleRPCResponse = function (message) {
        var callback = this.rpcQueue[message.id];
        if (callback) {
            delete this.rpcQueue[message.id];
            callback.call(this.options.targetScope, message.response, message.response);
        }
    };
    KerviSpine.prototype.handleEvent = function (message) {
        var eventName = message.event;
        var id = message.id;
        var eventPath = eventName;
        if (id) {
            eventPath += "/" + id;
        }
        var value = null;
        if (message.args && message.args.length) {
            value = message.args[0];
        }
        for (var n = 0; (n < this.eventHandlers.length); n++) {
            var h = this.eventHandlers[n];
            if (h.eventName == eventPath)
                h.callback.call(value, id, value);
            else if (h.eventName == eventName)
                h.callback.call(value, id, value);
        }
    };
    KerviSpine.prototype.handleCommand = function (message) {
        console.log("cmd", this, message);
        var command = message.command;
        var args = null;
        if (message.args && message.args.length) {
            args = message.args[0];
        }
        for (var n = 0; (n < this.commandHandlers.length); n++) {
            var c = this.commandHandlers[n];
            if (c.command == command)
                c.callback.call(this, args);
        }
    };
    KerviSpine.prototype.connect = function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        var self = this;
        this.websocket = new WebSocket(this.options.protocol + "://" + this.options.address);
        this.websocket.onopen = function (evt) {
            self.onOpen(evt);
        };
        this.websocket.onclose = function (evt) {
            self.onClose(evt);
        };
        this.websocket.onmessage = function (evt) {
            self.onMessage(evt);
        };
        this.websocket.onerror = function (evt) {
            self.onError(evt);
        };
    };
    KerviSpine.prototype.onOpen = function (evt) {
        console.log("Kervi spine on open", this, evt);
        var self = this;
        this.isConnected = true;
        console.log("Kervi spine ready");
    };
    KerviSpine.prototype.onClose = function (evt) {
        console.log("Kervi spine on close", evt);
        this.isConnected = false;
        if (this.options.onClose)
            this.options.onClose.call(this.options.targetScope, evt);
        this.firstOnOpen = true;
        if (this.options.autoConnect) {
            setTimeout(1000, this.connect());
        }
    };
    KerviSpine.prototype.authenticate = function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        if (this.options.onAuthenticateStart)
            this.options.onAuthenticateStart.call(this.options.targetScope);
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": this.options.userName, "password": this.options.password };
        this.websocket.send(JSON.stringify(cmd));
    };
    KerviSpine.prototype.logoff = function () {
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    KerviSpine.prototype.onMessage = function (evt) {
        //console.log("on m",evt.data);
        var message = JSON.parse(evt.data);
        var self = this;
        if (message.messageType == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "authentication_failed") {
            console.log("authentication failed", this.options.userName);
            if (this.options.userName == "anonymous") {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                console.log("x", self.options);
                if (self.options.onLogOff) {
                    console.log("x1");
                    self.options.onLogOff.call(self.options.targetScope, evt);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "session_authenticated") {
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout(function () {
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
                self.firstOnOpen = false;
            }, 100);
        }
        else if (message.messageType == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, evt);
            if (this.allowAnonymous && this.options.userName != "anonymous") {
                this.authenticate("anonymous", null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (message.messageType == "response")
            this.handleRPCResponse(message);
        else if (message.messageType == "event")
            this.handleEvent(message);
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    KerviSpine.prototype.onError = function (evt) {
        console.log("Kervi on error", evt);
    };
    KerviSpine.prototype.addCommandHandler = function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        this.websocket.send(JSON.stringify(cmd));
    };
    ;
    KerviSpine.prototype.addQueryHandler = function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(JSON.stringify(cmd));
    };
    ;
    KerviSpine.prototype.sendCommand = function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        console.log("sec", arguments);
        var args = [];
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        /*if (p.length>1){
            var argOffset=1;
            if ( callback && callback instanceof Function )
                argOffset+=1;
            for (var i=argOffset;(i<arguments.length);i++){
                args.push(arguments[i]);
            }
        }*/
        var cmd = { id: this.messageId++, "messageType": "command", "command": command, "args": args };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback);
        console.log("sendCommand", this, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    ;
    KerviSpine.prototype.sendQuery = function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        var args = [];
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args };
        this.addRPCCallback(cmd.id.toString(), callback);
        console.log("sendQuery", p, this, callback, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    ;
    KerviSpine.prototype.triggerEvent = function (eventName, id) {
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    ;
    return KerviSpine;
}());

//# sourceMappingURL=kervi-spine.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".page-header{\r\n    position:relative;\r\n    z-index:2000;\r\n    \r\n}\r\n\r\ndashboard-sections{\r\n    \r\n}\r\n\r\n.dashboard-sections-hidden{\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "nav {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".video-background#video-viewer {\n  margin-top: -20px; }\n\n.cam-pad-area {\n  vertical-align: middle;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  left: 389px;\n  top: 132px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#video-viewer {\n  margin-top: -20px; }\n\n.cam-pad-area {\n  z-index: 1200;\n  vertical-align: middle;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  left: 389px;\n  top: 132px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"value-value\">\r\n            <a *ngIf=\"!inline\" class=\"btn btn-primary pull-right\" [style.width]=\"width\" [style.height]=\"height\" [ngClass]=\"{'btn-primary-hover': (action.running$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"action.name\">\r\n                <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n                <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <a *ngIf=\"inline\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary-hover': (action.running$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"action.name\">\r\n        <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n        <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n    </a>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<!--{{isConnected}} {{doAuthenticate}} {{isAuthenticated}} {{inAuthentication}}-->\r\n<div *ngIf=\"isConnected && doAuthenticate && !isAuthenticated && !inAuthentication\" style=\"line-height: 1;width:266px;height:200px;background:rgba(255,255,255,0);border-radius: 4px;position: absolute; top:40%;left:50%;margin: -133px 0 0 -128px;padding:10px\">\r\n  <form class=\"form\" [formGroup]=\"loginForm\"  \r\n        (ngSubmit)=\"onSubmit(loginForm.value)\"  \r\n        class=\"form\"  \r\n        [class.error]=\"!loginForm.valid && loginForm.touched\">\r\n \r\n    <div class=\"form-group\"  \r\n        [class.error]=\"!userName.valid && userName.touched\">  \r\n      <!--<label class=\"control-label\" for=\"userNameInput\">User name</label>  -->\r\n      <input type=\"text\"  \r\n             id=\"userNameInput\"  \r\n             placeholder=\"User name\"  \r\n             [formControl]=\"userName\"\r\n             class=\"form-control\"\r\n             autofocus>  \r\n         \r\n    </div>\r\n\r\n    <div class=\"form-group\"  [class.error]=\"!password.valid && password.touched\">  \r\n      <!--<label class=\"control-label\" for=\"passwordInput\">Password</label>  -->\r\n      <input type=\"password\"  \r\n             id=\"passwordInput\"  \r\n             placeholder=\"Password\"  \r\n             [formControl]=\"password\"\r\n             class=\"form-control\">  \r\n    </div>\r\n    <div *ngIf=\"invalidUser\" class=\"ui error message\"><p>Invalid user name or password</p></div>\r\n \r\n    <button type=\"submit\" class=\"btn btn-primary\">Log on</button>  \r\n  </form>  \r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!isConnected\" style=\"line-height: 1;width:266px;height:256px;background:rgba(255,255,255,1);border-radius: 4px;position: absolute; top:40%;left:50%;margin: -133px 0 0 -128px\">\r\n  \r\n  <img \r\n  src=\"data:image/png;base64,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\"\r\n  />\r\n  \r\n  <span style=\"font-size:800%\" >Kervi</span><br>\r\n  Connecting, please wait \r\n  <div class='uil-facebook-css' style='-webkit-transform:scale(0.08);display: inline-block; top:-12px;width:0;height:0'><div></div><div></div><div></div></div>\r\n</div>\r\n"

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"controller.type!='camera'\">\r\n  <ng-container  *ngFor=\"let component of controller.inputs\">\r\n    <ng-container *ngIf=\"component.visible\">\r\n      <ng-container [ngSwitch]=\"component.type\">\r\n        <ng-template ngSwitchCase=\"dynamic-number\">\r\n          <dynamic-value [dashboardSection]=\"dashboardSection\" [value]=\"component\"></dynamic-value>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n<ng-container *ngIf=\"controller.type=='camera'\">\r\n    <kervi-cam-viewer [isBackground]=\"false\" [cameraId]=\"controller.id\" [parameters]=\"parameters\"></kervi-cam-viewer>\r\n</ng-container>\r\n"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!bodyOnly && section.type=='group'\">\r\n    <div class=\"card-deck\">\r\n        <ng-container *ngFor=\"let subSection of section.subSections\">\r\n            <ng-container *ngIf=\"subSection.type!='group'\">\r\n                <div class=\"card-section\" [style.width]=\"calcWidth(subSection, false)\">\r\n                    <div class=\"card\" [ngClass]=\"{'has-card-header': showSectionHeader(subSection)}\">\r\n                        <kervi-dashboard-section [bodyOnly]=\"true\" [inGroup]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"subSection\"></kervi-dashboard-section>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"subSection.type=='group'\">\r\n                <div class=\"card-deck-section\" [style.width]=\"calcWidth(subSection, inGroup)\">\r\n                    <kervi-dashboard-section  [inGroup]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"subSection\"></kervi-dashboard-section>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n \r\n<ng-container *ngIf=\"!bodyOnly && !inline && section.type!='group'\">\r\n    <div class=\"card-section card-non-group\" [style.width]=\"calcWidth(section, false)\">\r\n        <div class=\"card\" [ngClass]=\"{'has-card-header': showSectionHeader(section)}\">\r\n            <kervi-dashboard-section [bodyOnly]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"section\"></kervi-dashboard-section>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"bodyOnly\">\r\n    <div class=\"card-header\" *ngIf=\"showHeader\" >\r\n        <h4 class=\"text-left\">\r\n            {{title}}\r\n            <!-- <a data-toggle=\"collapse\" role=\"tab\" href=\"#section-{{section.id}}\" [attr.aria-expanded]=\"expanded\" aria-control=\"\" style=\"float:left\"> <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> </a> -->\r\n            <div class=\"card-body\" *ngIf=\"headerComponents.length>0\" style=\"padding:0\">\r\n                <ng-container *ngFor=\"let sectionComponent of headerComponents\">\r\n                    <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n                    <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n                    <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n                    <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n                </ng-container>\r\n            </div>\r\n        </h4>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"components.length>0\" >\r\n        <ng-container *ngFor=\"let sectionComponent of components\">\r\n            <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n            <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n        </ng-container>\r\n    </div>\r\n    \r\n    <div class=\"card-body\" *ngIf=\"section.parameters.userLog\"  >\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>Time</th>\r\n                <th>component</th>\r\n                <th style=\"width:100%\">topic</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let message of messages$ | async\">\r\n                    <td>\r\n                        <span *ngIf=\"message.level<3\" class=\"alert\" [ngClass]=\"{'text-danger': message.level==1, 'text-warning': message.level==2}\" >&#11044;</span>\r\n                    </td>\r\n                    <td>{{message.timestamp | date: 'HH:mm:ss'}}</td>\r\n                    <td>{{message.sourceName}}</td>\r\n                    <td style=\"white-space:nowrap; overflow:hidden;text-overflow:ellipsis; max-width: 0;\" title=\"{{message.topic}}\">{{message.topic}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        \r\n    </div>    \r\n    \r\n    \r\n    <!-- <div class=\"card-body {{sectionClassHeight}} \" *ngIf=\"!showHeader\" style=\"overflow:auto\">\r\n        <ng-container *ngFor=\"let sectionComponent of components\">\r\n            <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\" *ngIf=\"sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\"  *ngIf=\"sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\" *ngIf=\"sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n        </ng-container>\r\n    </div> -->\r\n</ng-container>\r\n<ng-template [ngIf]=\"!bodyOnly && inline && section.components.length>0\" style=\"display:inline-block\">\r\n        <ng-container *ngFor=\"let sectionComponent of section.components\" style=\"display:inline-block\">\r\n            <kervi-controller  [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value  [dashboardSection]=\"section\" [inline]=\"inline\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor  [dashboardSection]=\"section\" [inline]=\"inline\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n            <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n        </ng-container>\r\n</ng-template>"

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar row navbar-toggleable-md navbar-fixed-top navbar-light bg-faded page-header\">\r\n\t<div class=\"row\" style=\"width:100%\">\r\n\t\t<div class=\" col-sm-4\">\r\n\t\t\t<ul class=\"navbar-nav flex-nowrap flex-row\" >\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t<a *ngIf=\"showMenu\" class=\"dropdown btn nav-link\" title=\"Dashboards\" style=\"padding-top:0;cursor: pointer\" data-toggle=\"dropdown\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t\t<div  class=\"dropdown-menu  multi-leve ul.nav.navbar-nav.no-collapse\">\r\n\t\t\t\t\t\t<!--<span class=\"dropdown-divider\">&nbsp; Dashboards</span>-->\r\n\t\t\t\t\t\t<div class=\"dropdown-submenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"dashboardCount > 1\">\r\n\t\t\t\t\t\t\t<a  *ngFor=\"let dashboard of (dashboards$ | async)\" class=\"dropdown-item\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<div *ngIf=\"authenticated && dashboardCount > 1\" class=\"dropdown-divider\"></div>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >Log in</a>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && !anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >Log out</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"showSectionController\">\r\n\t\t\t\t\t<a  class=\"nav-link btn\" (click)=\"dashboardSectionsHidden = !dashboardSectionsHidden;\"><i class=\"fa fa-sliders fa-lg\" aria-hidden=\"true\"></i>{{dashboardSectionsVisible}}</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"dashboard\" style=\"display:inline-block;white-space:nowrap\">&nbsp;&nbsp;&nbsp;{{dashboard.name}}</li>\r\n\t\t\t</ul>\r\n\t\t</div>\t\r\n\t\t<div *ngIf=\"dashboard && dashboard.sysSection\" class=\"col-sm-8 core-sensors text-xs-center text-sm-right\" style=\"display:inline-block\">\r\n\t\t\t\t&nbsp;<kervi-dashboard-section [defaultSizes]=\"defaultSizes\" [inline]=\"true\" [section]=\"dashboard.sysSection\" ></kervi-dashboard-section>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<ng-container *ngIf=\"dashboard && dashboard.template\">\r\n\t<!--<dashboard-layout [dashboard]=\"dashboard\"></dashboard-layout>-->\r\n</ng-container>\r\n<div *ngIf=\"dashboard && !dashboard.template\" style=\"position:relative;margin-top:35px;\">\r\n\t<kervi-cam-viewer *ngIf=\"cameraId\" [isBackground]=\"true\" [cameraId]=\"cameraId\" [parameters]=\"cameraParameters\"></kervi-cam-viewer>\r\n\t<div id=\"controller-pads\">\r\n\t\t<div *ngIf=\"showLeftPad\" class=\"left-pad-area\" style=\"position:fixed;\" (mousedown)=\"padPress('left')\" (mouseup)=\"padRelease('left')\">\r\n\t\t\t<fieldset id=\"leftPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\t<input type=\"hidden\" id=\"left-pad-x\" name=\"left-x\" value=\"0\"><input type=\"hidden\" id=\"left-pad-y\" name=\"left-y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"showRightPad\" class=\"right-pad-area\" style=\"position:fixed\" (mousedown)=\"padPress('right')\" (mouseup)=\"padRelease('right')\">\r\n\t\t\t<fieldset id=\"rightPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\t<input id=\"right-pad-x\" type=\"hidden\" name=\"right-x\" value=\"0\"> <input type=\"hidden\" id=\"right-pad-y\" name=\"right-y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid\" style=\"top:0;padding-top:10px;z-index:1999;position:absolute;padding-bottom:30px;\" >\r\n\t\t<div  [ngClass]=\"{'dashboard-sections-hidden' : dashboardSectionsHidden }\">\r\n\t\t\t<kervi-dashboard-section  *ngFor=\"let section of dashboard.sections\" [defaultSizes]=\"defaultSizes\" [section]=\"section\" class=\"w-{{section.width}}\"></kervi-dashboard-section>\r\n\t\t</div>  \r\n\t</div>\r\n</div>\r\n<footer class=\"footer\" *ngIf=\"dashboard\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-4 text-left\" style=\"text-align: left\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerLefSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerLeftSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 text-center\" style=\"text-align:center\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerCenterSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerCenterSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 text-right\" style=\"text-align: right\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerRightSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerRightSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-item dropdown\">\r\n\t<a class=\"nav-link\" title=\"Dashboards\" style=\"padding-top:0;cursor: pointer\" data-toggle=\"dropdown\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></a>\r\n\t<div class=\"dropdown-menu  multi-leve ul.nav.navbar-nav.no-collapse\">\r\n\t\t\t<!--<span class=\"dropdown-divider\">&nbsp; Dashboards</span>-->\r\n\t\t\t<div class=\"dropdown-submenu\">\r\n\t\t\t\t\t<a *ngFor=\"let dashboard of (dashboards$ | async)\" class=\"dropdown-item\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</a>\r\n\t\t\t</div>\r\n\t\t<!--<div class=\"dropdown-divider\"></div>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/charts\">Charts</a>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/about\">About</a>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/settings\">Settings</a>-->\r\n\t</div>\r\n</li>\r\n\t\t"

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"sensor.subSensors.length == 0\">\r\n    <dynamic-value-number [inline]=\"inline\" [input]=\"sensor.value\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\"></dynamic-value-number>\t\r\n</ng-container>\r\n<ng-container *ngIf=\"sensor.subSensors.length > 0\">\r\n\t<div >\r\n\t\t<div>\r\n\t\t\t<i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t\t<span *ngIf=\"parameters.label\">{{parameters.label}}:</span>\r\n\t\t</div>\r\n\t\t<ng-container *ngFor=\"let subSensor of sensor.subSensors\">\r\n\t\t\t<div style=\"padding-left:15px;clear:both\">\r\n\t\t\t\t<kervi-sensor [inline]=\"lnline\" [sensor]=\"subSensor\" ></kervi-sensor>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!inline\" class=\"btn btn-primary pull-right\" [style.width]=\"width\" [style.height]=\"height\" [ngClass]=\"{'btn-primary-hover': (value.value$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"value.name\">\r\n    <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n    <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n</a>\r\n\r\n<a *ngIf=\"inline\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary-hover': (value.value$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"value.name\">\r\n    <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n    <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n</a>\r\n"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isBackground\">\r\n\t<div id=\"video-viewer\" class=\"video video-background\" style=\"text-align:center;position:fixed;top:60px;left:0px;height:100%;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\">\r\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;\">\r\n\t\t\t<kervi-mpeg-viewer [height]=100   [cameraSource]=\"(cameraSource$ | async)\" > </kervi-mpeg-viewer>\r\n\t\t</span>\r\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\"></canvas>\r\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<div class=\"cam-pad-area\" style=\"display:none\">\r\n\t\t\t<fieldset id=\"camPad\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\tpan : <input id=\"cam-servo-pan\" name=\"x\" value=\"0\"> tilt : <input id=\"cam-servo-tilt\" name=\"y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isBackground\">\r\n\t<div id=\"video-viewer\" class=\"video\" style=\"overflow:hidden;position:relative;width:100%\">\r\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;height:100%;width:100%\">\r\n\t\t\t<kervi-mpeg-viewer [width]=100  [cameraSource]=\"(cameraSource$ | async)\" > </kervi-mpeg-viewer>\r\n\t\t</span>\r\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<div class=\"cam-pad-area\" style=\"position:absolute\">\r\n\t\t\t<fieldset id=\"camPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\tpan : <input id=\"cam-servo-pan\" name=\"x\" value=\"0\"> tilt : <input id=\"cam-servo-tilt\" name=\"y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%\">\r\n    <div class=\"row\" *ngIf=\"parameters.chartButtons || parameters.label\">\r\n        <div class=\"col-sm-6\" *ngIf=\"parameters.label\">\r\n            {{parameters.label}}\r\n        </div>\r\n        <div class=\"col-sm-6 text-right\" *ngIf=\"parameters.chartButtons=='top'\">\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        {{selectedPeriodText}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"wrapper\" style=\"\">\r\n        <canvas id=\"{{canvasId}}\" class=\"sensor-canvas\"></canvas>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 text-right\" *ngIf=\"parameters.chartButtons && parameters.chartButtons!='top'\">\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        {{selectedPeriodText}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <canvas id=\"{{canvasId}}\" class=\"sensor-canvas\" ></canvas>\r\n</div>"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<img (load)=\"imageReady()\" class=\"camImage\" src=\"{{cameraSource}}\" [style.height.%]=\"height\" [style.width.%]=\"width\">\r\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<input style=\"display:table-cell\" class=\"form-control\" />"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\" \" >\r\n    <input type=\"checkbox\" checked=\"\">\r\n</div>    \r\n\r\n\r\n<!--<div *ngIf=\"!inline\" class=\"can-toggle pull-right\" [style.width.%]=\"parameters.inputSize\">\r\n    <input id=\"a\" class=\"\"  type=\"checkbox\" [attr.checked]=\"state ? '' : null\" >\r\n    <label for=\"a\">\r\n        <div class=\"can-toggle__switch\" data-checked=\"<b>On</b>\" data-unchecked=\"Off\"></div>\r\n    </label>\r\n</div>-->\r\n\r\n<div *ngIf=\"inline\" class=\"\" style=\"display:inline-flex\">\r\n    <input type=\"checkbox\" checked=\"\">\r\n</div>"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"value-value\">\r\n            <kervi-switchbutton [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n            <kervi-button [defaultSizes]=\"defaultSizes\" [value]=\"value\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <kervi-switchbutton [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n    <kervi-button [defaultSizes]=\"defaultSizes\" [value]=\"value\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container [ngSwitch]=\"value.type\">\r\n    <ng-template ngSwitchCase=\"dynamic-number\">\r\n        <dynamic-value-number [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [input]=\"value\"></dynamic-value-number>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"dynamic-boolean\">\r\n        <dynamic-value-boolean [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [value]=\"value\"></dynamic-value-boolean>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"dynamic-string\">\r\n        <dynamic-value-string [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [input]=\"value\"></dynamic-value-string>\r\n    </ng-template>\r\n    <!--<template ngSwitchCase=\"dynamic-input\">\r\n        <kervi-controller-text-input [dashboardSection]=\"dashboardSection\" [input]=\"component\"></kervi-controller-text-input>\r\n    </template>\r\n    <template ngSwitchCase=\"button\">\r\n        <kervi-controller-button [dashboardSection]=\"dashboardSection\" [button]=\"component\"></kervi-controller-button>\r\n    </template>\r\n    <template ngSwitchCase=\"dynamic-boolean\">\r\n        <kervi-controller-switchbutton [dashboardSection]=\"dashboardSection\" [button]=\"component\"></kervi-controller-switchbutton>\r\n    </template>\r\n    <template ngSwitchCase=\"dynamic-enum\">\r\n        <kervi-controller-select [dashboardSection]=\"dashboardSection\" [select]=\"component\"></kervi-controller-select>\r\n    </template>\r\n    <template ngSwitchCase=\"dynamic-datetime\">\r\n        <kervi-controller-datetime [dashboardSection]=\"dashboardSection\" [datetime]=\"component\"></kervi-controller-datetime>\r\n    </template>-->\r\n</ng-container>\r\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayType=='slider' && !inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span   *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span   *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"value-value\" [style.min-width.rem]=\"parameters.valueSize\">\r\n            {{(input.value$ | async)}}\r\n        </div>\r\n\t</div>\r\n    <div class=\"value-section\">\r\n        <div class=\"value-input\" >\r\n            <ui-slider [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\"></ui-slider>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"displayType=='slider' && inline\" class=\"inline-component\"> \r\n    <div style=\"display:inline-block\">\r\n        <span style=\"display:inline\"  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n        <span style=\"display:inline\"  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n\t</div>\r\n    <div style=\"display:inline-block\" class=\"slider-inline\"  [style.max-width.%]=\"parameters.inputSize\">\r\n        <ui-slider [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\"></ui-slider>\r\n\t</div>\r\n    <span style=\"display:inline\"  [style.max-width.%]=\"parameters.valueSize\"    class=\"slider-value\">{{(input.value$ | async)}}</span>\r\n</div>\r\n\r\n<span *ngIf=\"displayType=='value' && inline\" class=\"input-inline input-type-value\">\r\n\t\t<i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<ng-container *ngIf=\"parameters.label\">{{parameters.label}}:</ng-container>\r\n\t\t<i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<value-sparkline *ngIf=\"parameters.showSparkline\" [value]=\"input\"></value-sparkline>\r\n\t\t<span style=\"display:inline-block\" [style.min-width.rem]=\"parameters.valueSize\" class=\"input-value\">{{(input.value$ | async)}}{{input.unit}}</span>\r\n</span>\r\n\r\n<div *ngIf=\"displayType=='value' && !inline\" class=\"block-component\">\r\n    <div class=\"value-label\" style=\"float: left\">\r\n        <i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<ng-container *ngIf=\"parameters.label\">{{parameters.label}}</ng-container>\r\n\t\t\r\n    </div>\r\n    <div style=\"display:inline-block; float: right\">\r\n        <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n        <value-sparkline *ngIf=\"parameters.showSparkline\" [value]=\"input\"></value-sparkline>\r\n        <span style=\"display: inline-block;text-align:right\" [style.min-width.rem]=\"parameters.valueSize\" class=\"input-value\">{{(input.value$ | async)}}{{input.unit}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"displayType=='gauge'\" class=\"block-component\" >\r\n    <kervi-gauge [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\" [type]=\"gaugeType\" [size]=\"size\"></kervi-gauge>\r\n</div>\r\n\r\n<ng-container *ngIf=\"displayType=='chart'\" class=\"\" >\r\n    <kervi-chart [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\" [size]=\"size\" ></kervi-chart>\r\n</ng-container>"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"parameters.size==0 && !parameters.inline\"   class=\"block-component\">\r\n\t<span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n    <input class=\"form-control pull-right\" [style.width.%]=\"parameters.inputSize\" (keyup)=\"onChange($event)\" name=\"{{input.id}}\" value=\"{{(input.value$ | async)}}\"/>\r\n</div>\r\n<div *ngIf=\"parameters.size > 0 || parameters.inline\" style=\"white-space:nowrap\"  >\r\n\t<span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n    <input class=\"form-control\" (keyup)=\"onChange($event)\" style=\"display: inline-block\" name=\"{{input.id}}\" [style.width.%]=\"parameters.inputSize\" value=\"{{(input.value$ | async)}}\"/>\r\n</div>"

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardsService; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ControllersService } from "../controllers/controllers.service";
//import { SensorsService } from "../sensors/sensors.service";

var DashboardsService = (function () {
    function DashboardsService(kerviService) {
        this.kerviService = kerviService;
        this.dashboards = [];
        this._dashboards$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]([]);
        var self = this;
        var s = this.kerviService.getComponents$().subscribe(function (v) {
            self.dashboards = self.kerviService.getComponentsByType("dashboard");
            console.log("load dashboards", self.dashboards);
            for (var _i = 0, _a = self.dashboards; _i < _a.length; _i++) {
                var dashboard = _a[_i];
                //var dashboard = dashboardComponent as DashboardModel;
                for (var _b = 0, _c = dashboard.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    self.resolveSubSections(section);
                    for (var _d = 0, _e = section.components; _d < _e.length; _d++) {
                        var sectionComponent = _e[_d];
                        if (!sectionComponent.component)
                            sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                    }
                }
                for (var _f = 0, _g = dashboard.sysSection.components; _f < _g.length; _f++) {
                    var sectionComponent = _g[_f];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _h = 0, _j = dashboard.headerSection.components; _h < _j.length; _h++) {
                    var sectionComponent = _j[_h];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _k = 0, _l = dashboard.footerLeftSection.components; _k < _l.length; _k++) {
                    var sectionComponent = _l[_k];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _m = 0, _o = dashboard.footerCenterSection.components; _m < _o.length; _m++) {
                    var sectionComponent = _o[_m];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _p = 0, _q = dashboard.footerRightSection.components; _p < _q.length; _p++) {
                    var sectionComponent = _q[_p];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _r = 0, _s = dashboard.LeftPadXSection.components; _r < _s.length; _r++) {
                    var sectionComponent = _s[_r];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _t = 0, _u = dashboard.LeftPadYSection.components; _t < _u.length; _t++) {
                    var sectionComponent = _u[_t];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _v = 0, _w = dashboard.RightPadXSection.components; _v < _w.length; _v++) {
                    var sectionComponent = _w[_v];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
                for (var _x = 0, _y = dashboard.RightPadYSection.components; _x < _y.length; _x++) {
                    var sectionComponent = _y[_x];
                    if (!sectionComponent.component)
                        sectionComponent.component = self.kerviService.getComponent(sectionComponent.componentId);
                }
            }
            console.log("load dashboards updated", self.dashboards);
            self._dashboards$.next(self.dashboards);
        });
        this.kerviService.connected$.subscribe(function (v) {
            if (v) {
                self.kerviService.spine.addEventHandler("dashboardLinkChanged", null, function (v) {
                    for (var _i = 0, _a = self.dashboards; _i < _a.length; _i++) {
                        var dashboard = _a[_i];
                        for (var _b = 0, _c = dashboard.sections; _b < _c.length; _b++) {
                            var section = _c[_b];
                            if (section.components) {
                                for (var _d = 0, _e = section.components; _d < _e.length; _d++) {
                                    var component = _e[_d];
                                    if (component.linkId == this.linkId) {
                                        component.parameters[this.name] = this.value;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            ;
        });
    }
    DashboardsService.prototype.resolveSubSections = function (section) {
        if (section.subSections) {
            for (var _i = 0, _a = section.subSections; _i < _a.length; _i++) {
                var subSection = _a[_i];
                this.resolveSubSections(subSection);
                for (var _b = 0, _c = subSection.components; _b < _c.length; _b++) {
                    var sectionComponent = _c[_b];
                    if (!sectionComponent.component)
                        sectionComponent.component = this.kerviService.getComponent(sectionComponent.componentId);
                }
            }
        }
    };
    DashboardsService.prototype.refreshDashboards = function () {
        var self = this;
        self._dashboards$.next(this.dashboards);
    };
    /*
        private updateDashboards=function(message){
            if (Array.isArray(message)){
                for (var i=0;(i<message.length);i++){
                    this.updateDashboards(message[i]);
                }
            } else {
                var dashboard=new DashboardModel();
                dashboard.id=message.id;
                dashboard.name=message.name;
                dashboard.type=message.type;
                dashboard.isDefault=message.isDefault;
                dashboard.template=message.template;
                dashboard.sections=[];
                if (!dashboard.template){
                    var template=""
                    for (let messageSection of message.sections){
                        var section=new DashboardSectionModel();
                        section.id=messageSection.id;
                        section.name=messageSection.name;
    
                    }
                }
                this.dashboards.push(dashboard);
            }
        }*/
    DashboardsService.prototype.getDashboards$ = function () {
        return this._dashboards$.asObservable();
    };
    DashboardsService.prototype.getDashboardById = function (id) {
        for (var _i = 0, _a = this.dashboards; _i < _a.length; _i++) {
            var dashboard = _a[_i];
            if (dashboard.id == id)
                return dashboard;
        }
        return null;
    };
    DashboardsService.prototype.getDashboardComponents = function (dashboardId) {
        var result = [];
    };
    return DashboardsService;
}());
DashboardsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _a || Object])
], DashboardsService);

var _a;
//# sourceMappingURL=dashboards.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_value_number_value_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean_value_boolean_value_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__string_value_string_value_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dynamic_value_dynamic_value_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_components_ui_components_module__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValuesModule = (function () {
    function ValuesModule() {
    }
    return ValuesModule;
}());
ValuesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__number_value_number_value_component__["a" /* DynamicNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dynamic_value_dynamic_value_component__["a" /* DynamicValueComponent */],
            __WEBPACK_IMPORTED_MODULE_3__boolean_value_boolean_value_component__["a" /* DynamicBooleanComponent */],
            __WEBPACK_IMPORTED_MODULE_4__string_value_string_value_component__["a" /* DynamicStringComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__number_value_number_value_component__["a" /* DynamicNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dynamic_value_dynamic_value_component__["a" /* DynamicValueComponent */],
            __WEBPACK_IMPORTED_MODULE_3__boolean_value_boolean_value_component__["a" /* DynamicBooleanComponent */],
            __WEBPACK_IMPORTED_MODULE_4__string_value_string_value_component__["a" /* DynamicStringComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__ui_components_ui_components_module__["a" /* UIComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        providers: [],
        bootstrap: []
    }),
    __metadata("design:paramtypes", [])
], ValuesModule);

//# sourceMappingURL=values.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sparkline_sparkline_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__switch_button_switch_button_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_button_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cam_viewer_cam_viewer_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mpeg_viewer_mpeg_viewer_component__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UIComponentsModule = (function () {
    function UIComponentsModule() {
    }
    return UIComponentsModule;
}());
UIComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__sparkline_sparkline_component__["a" /* SparklineComponent */],
            __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_component__["a" /* GaugeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__switch_button_switch_button_component__["a" /* SwitchButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__cam_viewer_cam_viewer_component__["a" /* CamViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mpeg_viewer_mpeg_viewer_component__["a" /* MPEGViewerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__sparkline_sparkline_component__["a" /* SparklineComponent */],
            __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__gauge_gauge_component__["a" /* GaugeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__switch_button_switch_button_component__["a" /* SwitchButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__cam_viewer_cam_viewer_component__["a" /* CamViewerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        providers: [],
        bootstrap: []
    }),
    __metadata("design:paramtypes", [])
], UIComponentsModule);

//# sourceMappingURL=ui-components.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_spine__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_factory__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KerviService; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KerviService = (function () {
    function KerviService() {
        this.spine = null;
        this.appInfo = null;
        this.components = [];
        this.components$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]([]);
        this.doAuthenticate = false;
        this.inAuthentication$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.connected$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.IPCReady$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.authenticationFailed$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        console.log("kervi service constructor");
        var self = this;
        this.connected$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.application$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](null);
        setInterval(function () {
            if (self.connected$.value) {
                //self.refreshComponents()  
            }
        }, 10000);
        var s1 = this.IPCReady$.subscribe(function (connected) {
            if (connected) {
                self.spine.addEventHandler("dynamicValueChanged", "", function (id, value) {
                    for (var _i = 0, _a = self.components; _i < _a.length; _i++) {
                        var component = _a[_i];
                        if (component.id == value.id) {
                            if (component.componentType == "sensor") {
                                var dynamicValue = component;
                                dynamicValue.value.valueTS = new Date(this.timestamp + " utc");
                                dynamicValue.value.value$.next(value.value);
                                var spl = dynamicValue.value.sparkline$.value;
                                spl.push(value.value);
                                if (spl.length > 10)
                                    spl.shift();
                                dynamicValue.value.sparkline$.next(spl);
                            }
                            else {
                                var dynamicValue = component;
                                dynamicValue.valueTS = new Date(this.timestamp + " utc");
                                dynamicValue.value$.next(value.value);
                            }
                        }
                    }
                });
                self.spine.addEventHandler("actionStarted", "", function (id) {
                    for (var _i = 0, _a = self.components; _i < _a.length; _i++) {
                        var component = _a[_i];
                        if (component.id == id) {
                            var action = component;
                            action.running$.next(true);
                        }
                    }
                });
                self.spine.addEventHandler("actionDone", "", function (id) {
                    for (var _i = 0, _a = self.components; _i < _a.length; _i++) {
                        var component = _a[_i];
                        if (component.id == id) {
                            var action = component;
                            action.running$.next(false);
                        }
                    }
                });
            }
        });
    }
    KerviService.prototype.refreshComponents = function () {
        var self = this;
        self.spine.sendQuery("getComponentInfo", function (message) {
            console.log("refresh component info", message);
            var components = __WEBPACK_IMPORTED_MODULE_3__models_factory__["a" /* ComponentFactory */].createComponents(message);
            console.log("refresh components", components);
            for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
                var c = components_1[_i];
                var found = false;
                for (var _a = 0, _b = self.components; _a < _b.length; _a++) {
                    var component = _b[_a];
                    if (component.id == c.id) {
                        found = true;
                        component.reload(c);
                        break;
                    }
                }
                if (!found) {
                    self.components.push(c);
                    console.log("add c", c);
                }
            }
            console.log("delete hanging components");
            var deleteComponents = [];
            for (var _c = 0, _d = self.components; _c < _d.length; _c++) {
                var component = _d[_c];
                var found = false;
                for (var _e = 0, components_2 = components; _e < components_2.length; _e++) {
                    var c = components_2[_e];
                    if (component.id == c.id) {
                        found = true;
                        break;
                    }
                }
                if (!found)
                    deleteComponents.push(component);
            }
            console.log("dc", deleteComponents);
            for (var _f = 0, deleteComponents_1 = deleteComponents; _f < deleteComponents_1.length; _f++) {
                var component = deleteComponents_1[_f];
                self.components.splice(self.components.indexOf(component), 1);
            }
            console.log("refresh done");
            self.components$.next(self.components);
        });
    };
    KerviService.prototype.getComponents$ = function () {
        return this.components$.asObservable();
    };
    KerviService.prototype.getComponent = function (id) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.id == id)
                return component;
        }
        return null;
    };
    KerviService.prototype.getComponentsByType = function (type) {
        var result = [];
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.componentType == type)
                result.push(component);
        }
        return result;
    };
    KerviService.prototype.connect = function () {
        var address = null;
        var protocol = "ws";
        try {
            if (kerviSocketAddress) {
                address = kerviSocketAddress;
            }
            if (socketProtocol) {
                protocol = socketProtocol;
            }
        }
        catch (e) {
            //for testing with ng serve
            var httpProtocol = location.protocol;
            if (httpProtocol == "https")
                protocol = "wss";
            var httpHost = window.location.hostname;
            address = httpHost + ":9000";
        }
        console.log("ks", address);
        this.spine = new __WEBPACK_IMPORTED_MODULE_1__kervi_spine__["a" /* KerviSpine */]({
            address: address,
            onOpen: this.onOpen,
            onClose: this.onClose,
            onAuthenticate: this.onAuthenticate,
            onAuthenticateFailed: this.onAuthenticateFailed,
            onLogOff: this.onLogoff,
            onAuthenticateStart: this.onAuthenticateStart,
            targetScope: this,
        });
    };
    KerviService.prototype.isAnonymous = function () {
        return this.spine.options.userName == "anonymous";
    };
    KerviService.prototype.authenticate = function (userName, password) {
        this.authenticationFailed$.next(false);
        this.spine.authenticate(userName, password);
    };
    KerviService.prototype.logoff = function () {
        this.inAuthentication$.next(false);
        this.spine.logoff();
    };
    KerviService.prototype.onAuthenticateStart = function () {
        this.inAuthentication$.next(true);
    };
    KerviService.prototype.onAuthenticate = function () {
        this.doAuthenticate = true;
        this.reset();
    };
    KerviService.prototype.onAuthenticateFailed = function () {
        this.authenticationFailed$.next(true);
        this.inAuthentication$.next(false);
    };
    KerviService.prototype.onLogoff = function () {
        console.log("ol");
        this.doAuthenticate = true;
        this.inAuthentication$.next(false);
        //this.spine.logoff()
        if (this.spine.firstOnOpen)
            this.IPCReady$.next(true);
        this.authenticationFailed$.next(false);
        this.reset();
    };
    KerviService.prototype.reset = function () {
        //this.inAuthentication$.next(false);
        this.components = [];
        this.components$.next(this.components);
        this.connected$.next(false);
    };
    KerviService.prototype.onOpen = function (first) {
        console.log("kervice service on open", this.spine.firstOnOpen, first, this);
        var self = this;
        this.doAuthenticate = this.spine.doAuthenticate;
        this.spine.sendQuery("GetApplicationInfo", function (message) {
            console.log("appinfo", message);
            this.spine.sendQuery("getComponentInfo", function (message) {
                console.log("component info", message);
                self.components = __WEBPACK_IMPORTED_MODULE_3__models_factory__["a" /* ComponentFactory */].createComponents(message);
                self.components$.next(self.components);
                self.application$.next(message);
                self.connected$.next(true);
                //self.inAuthentication$.next(false);
                console.log("components", self.components);
            });
        });
        if (self.spine.firstOnOpen) {
            this.IPCReady$.next(true);
            this.spine.addEventHandler("moduleStarted", "", function () {
                console.log("module loaded", self.components);
                setTimeout(self.refreshComponents(), 2000);
            });
            this.spine.addEventHandler("moduleStopped", "", function () {
                console.log("module unloaded");
                setTimeout(function () {
                    console.log("module unloaded, refresh");
                    self.refreshComponents();
                }, 5000);
            });
        }
    };
    KerviService.prototype.onClose = function () {
        this.reset();
        console.log("ks on close");
        this.IPCReady$.next(false);
    };
    KerviService.prototype.onHeartbeat = function () {
    };
    KerviService.prototype.onConnect = function () {
    };
    return KerviService;
}());
KerviService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], KerviService);

//# sourceMappingURL=kervi.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DashboardSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DashboardMessageModel; });
/* unused harmony export DashboardSectionComponentModel */
/* unused harmony export DashboardSectionParametersModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DashboardSectionModel; });
/* unused harmony export DashboardBackgroundModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModel; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var DashboardSizes = (function () {
    function DashboardSizes() {
        this.valueWidth = "3rem";
        this.buttonWidth = "";
        this.buttonHeight = "";
        this.switchWidth = "";
        this.switchHeight = "20px";
        this.gaugeWidth = "100px";
        this.gaugeHeight = "200px";
    }
    return DashboardSizes;
}());

var DashboardMessageModel = (function () {
    function DashboardMessageModel(message) {
        this.timestamp = new Date(message.timestamp * 1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
        this.sourceId = message.source_id;
        this.sourceName = message.source_name;
        this.area = message.area;
        this.level = message.level;
    }
    return DashboardMessageModel;
}());

var DashboardSectionComponentModel = (function () {
    function DashboardSectionComponentModel(message) {
        this.message = message;
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.parameters = message.parameters;
    }
    return DashboardSectionComponentModel;
}());

var DashboardSectionParametersModel = (function () {
    function DashboardSectionParametersModel(messageParameters) {
        this.title = null;
        this.width = null;
        this.height = null;
        this.type = null;
        this.userLog = null;
        this.logLength = 5;
        this.title = messageParameters.title;
        this.height = messageParameters.height;
        this.width = messageParameters.width;
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        if (messageParameters.type)
            this.type = messageParameters.type;
    }
    return DashboardSectionParametersModel;
}());

var DashboardSectionModel = (function () {
    function DashboardSectionModel(dashboard, messageSection) {
        this.components = [];
        this.subSections = [];
        this.dashboard = dashboard;
        this.id = messageSection.id;
        this.name = messageSection.name;
        this.type = messageSection.type;
        this.parameters = new DashboardSectionParametersModel(messageSection.uiParameters);
        if (messageSection.components)
            for (var _i = 0, _a = messageSection.components; _i < _a.length; _i++) {
                var componentRef = _a[_i];
                this.components.push(new DashboardSectionComponentModel(componentRef));
            }
        if (messageSection.panels) {
            console.log("spa", messageSection.panels);
            for (var _b = 0, _c = messageSection.panels; _b < _c.length; _b++) {
                var subMessageSection = _c[_b];
                var section = new DashboardSectionModel(this, subMessageSection);
                this.subSections.push(section);
            }
        }
    }
    DashboardSectionModel.prototype.reload = function (source) {
        //console.log("rl", this);
        for (var _i = 0, _a = source.subSections; _i < _a.length; _i++) {
            var subSection = _a[_i];
            this.reload(subSection);
        }
        for (var _b = 0, _c = source.components; _b < _c.length; _b++) {
            var sourceComponent = _c[_b];
            var found = false;
            for (var _d = 0, _e = this.components; _d < _e.length; _d++) {
                var component = _e[_d];
                if (component.componentId == sourceComponent.componentId) {
                    found = true;
                }
            }
            if (!found) {
                this.components.push(sourceComponent);
            }
        }
        var deleteComponents = [];
        for (var _f = 0, _g = this.components; _f < _g.length; _f++) {
            var component = _g[_f];
            var found = false;
            for (var _h = 0, _j = source.components; _h < _j.length; _h++) {
                var sourceComponent = _j[_h];
                if (sourceComponent.componentId == component.componentId) {
                    found = true;
                    break;
                }
            }
            if (!found)
                deleteComponents.push(component);
        }
        //console.log("dsc",deleteComponents);
        for (var _k = 0, deleteComponents_1 = deleteComponents; _k < deleteComponents_1.length; _k++) {
            var component = deleteComponents_1[_k];
            this.components.splice(this.components.indexOf(component), 1);
        }
    };
    return DashboardSectionModel;
}());

var DashboardBackgroundModel = (function () {
    function DashboardBackgroundModel(message) {
        this.type = message.type;
        this.cameraId = message.cameraId;
    }
    return DashboardBackgroundModel;
}());

var DashboardModel = (function () {
    function DashboardModel(message) {
        this.headerSection = null;
        this.footerCenterSection = null;
        this.footerLeftSection = null;
        this.footerRightSection = null;
        this.sysSection = null;
        this.backgroundSection = null;
        this.controllerSection = null;
        this.LeftPadXSection = null;
        this.LeftPadYSection = null;
        this.RightPadXSection = null;
        this.RightPadYSection = null;
        this.id = message.id;
        this.name = message.name;
        this.componentType = "dashboard";
        this.type = message.type;
        this.isDefault = message.isDefault;
        this.template = message.template;
        this.unitSize = message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.sections = [];
        if (!this.template) {
            var currentSection = null;
            for (var _i = 0, _a = message.sections; _i < _a.length; _i++) {
                var messageSection = _a[_i];
                if (!messageSection) {
                    console.log("dashboard with null section", this.id);
                    continue;
                }
                var section = new DashboardSectionModel(this, messageSection);
                if (section.id == "header_center")
                    this.headerSection = section;
                else if (section.id == "footer_left")
                    this.footerLeftSection = section;
                else if (section.id == "footer_center")
                    this.footerCenterSection = section;
                else if (section.id == "footer_right")
                    this.footerRightSection = section;
                else if (section.id == "header_right")
                    this.sysSection = section;
                else if (section.id == "controllers")
                    this.controllerSection = section;
                else if (section.id == "background")
                    this.backgroundSection = section;
                else if (section.id == "left_pad_x")
                    this.LeftPadXSection = section;
                else if (section.id == "left_pad_y")
                    this.LeftPadYSection = section;
                else if (section.id == "right_pad_x")
                    this.RightPadXSection = section;
                else if (section.id == "right_pad_y")
                    this.RightPadYSection = section;
                else {
                    console.log("sp", section);
                    if (section.type != "group") {
                        if (currentSection == null) {
                            currentSection = new DashboardSectionModel(this, {
                                "id": null,
                                "name": "",
                                "type": "group",
                                "components": [],
                                "panels": [],
                                "uiParameters": {
                                    "title": "",
                                    "width": 0,
                                    "height": 0,
                                    "userLog": false,
                                    "logLength": 0
                                }
                            });
                            currentSection.subSections.push(section);
                            this.sections.push(currentSection);
                        }
                        else {
                            currentSection.subSections.push(section);
                        }
                    }
                    else {
                        this.sections.push(section);
                        currentSection = null;
                    }
                }
            }
        }
    }
    DashboardModel.prototype.updateReferences = function () { };
    ;
    DashboardModel.prototype.reload = function (component) {
        var source = component;
        if (!this.backgroundSection && source.backgroundSection)
            this.backgroundSection = source.backgroundSection;
        else if (this.backgroundSection && !source.backgroundSection)
            this.backgroundSection = null;
        else if (this.backgroundSection)
            this.backgroundSection.reload(source.backgroundSection);
        if (!this.footerLeftSection && source.footerLeftSection)
            this.footerLeftSection = source.footerLeftSection;
        else if (this.footerLeftSection && !source.footerLeftSection)
            this.footerLeftSection = null;
        else if (this.footerLeftSection)
            this.footerLeftSection.reload(source.footerLeftSection);
        if (!this.footerRightSection && source.footerRightSection)
            this.footerRightSection = source.footerRightSection;
        else if (this.footerRightSection && !source.footerRightSection)
            this.footerRightSection = null;
        else if (this.footerRightSection)
            this.footerRightSection.reload(source.footerRightSection);
        if (!this.footerCenterSection && source.footerCenterSection)
            this.footerCenterSection = source.footerCenterSection;
        else if (this.footerCenterSection && !source.footerCenterSection)
            this.footerCenterSection = null;
        else if (this.footerCenterSection)
            this.footerCenterSection.reload(source.footerCenterSection);
        /*if (!this.headerSection && source.headerSection)
            this.headerSection=source.headerSection;
        else if (this.headerSection && !source.headerSection)
            this.headerSection = null
        else if (this.headerSection)
            this.headerSection.reload(source.headerSection)*/
        if (!this.sysSection && source.sysSection)
            this.sysSection = source.sysSection;
        else if (this.sysSection && !source.sysSection)
            this.sysSection = null;
        else if (this.sysSection)
            this.sysSection.reload(source.sysSection);
        if (!this.LeftPadXSection && source.LeftPadXSection)
            this.LeftPadXSection = source.LeftPadXSection;
        else if (this.LeftPadXSection && !source.LeftPadXSection)
            this.LeftPadXSection = null;
        else if (this.LeftPadXSection)
            this.LeftPadXSection.reload(source.LeftPadXSection);
        if (!this.LeftPadYSection && source.LeftPadYSection)
            this.LeftPadYSection = source.LeftPadYSection;
        else if (this.LeftPadYSection && !source.LeftPadYSection)
            this.LeftPadYSection = null;
        else if (this.LeftPadYSection)
            this.LeftPadYSection.reload(source.LeftPadYSection);
        if (!this.RightPadXSection && source.RightPadXSection)
            this.RightPadXSection = source.RightPadXSection;
        else if (this.RightPadXSection && !source.RightPadXSection)
            this.RightPadXSection = null;
        else if (this.RightPadXSection)
            this.RightPadXSection.reload(source.RightPadXSection);
        if (!this.RightPadYSection && source.RightPadYSection)
            this.RightPadYSection = source.RightPadYSection;
        else if (this.RightPadYSection && !source.RightPadYSection)
            this.RightPadYSection = null;
        else if (this.RightPadYSection)
            this.RightPadYSection.reload(source.RightPadYSection);
        if (!this.controllerSection && source.controllerSection)
            this.controllerSection = source.controllerSection;
        else if (this.controllerSection && !source.controllerSection)
            this.controllerSection = null;
        else if (this.controllerSection)
            this.controllerSection.reload(source.controllerSection);
    };
    ;
    return DashboardModel;
}());

//# sourceMappingURL=dashboard.model.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboards_dashboards_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedService; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectedService = (function () {
    function ConnectedService(kerviService, dashboardsService, router, route) {
        this.kerviService = kerviService;
        this.dashboardsService = dashboardsService;
        this.router = router;
        this.route = route;
        this.isConnected = false;
        this.isAuthenticated = false;
        this.currentPage = null;
        console.log("connected service c");
        var self = this;
        this.kerviService.connect();
        var s = this.kerviService.connected$.subscribe(function (connectedValue) {
            console.log("connected service state", connectedValue, self.isConnected, self);
            if (connectedValue) {
                self.isConnected = true;
                self.isAuthenticated = true;
                if (self.currentPage)
                    self.router.navigate([self.currentPage]);
                else {
                    self.dashboardsService.getDashboards$().subscribe(function (v) {
                        if (v && v.length) {
                            var defaultDashboard = v.filter(function (v) { return v.isDefault; });
                            if (defaultDashboard.length > 0) {
                                console.log("df", defaultDashboard[0].componentType + '/' + defaultDashboard[0].id);
                                setTimeout(function () {
                                    self.router.navigate(['/' + defaultDashboard[0].componentType + '/' + defaultDashboard[0].id]);
                                }, 100);
                            }
                        }
                    });
                }
            }
            else if (!connectedValue) {
                self.isAuthenticated = false;
                if (self.isConnected) {
                    self.currentPage = self.router.url;
                    self.router.navigate(['/connect']);
                }
                self.isConnected = false;
            }
        });
    }
    ConnectedService.prototype.connect = function (userName, password) {
        this.kerviService.authenticate(userName, password);
    };
    ConnectedService.prototype.logout = function () {
        this.isAuthenticated = false;
        //this.kerviService.disconnect();
    };
    return ConnectedService;
}());
ConnectedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dashboards_dashboards_service__["a" /* DashboardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboards_dashboards_service__["a" /* DashboardsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], ConnectedService);

var _a, _b, _c, _d;
//# sourceMappingURL=connected.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kervi_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboards_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(elementRef, zone, kerviService, dashboardsService, router, activatedRoute) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.kerviService = kerviService;
        this.dashboardsService = dashboardsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dashboards$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["BehaviorSubject"]([]);
        this.dashboardCount = 0;
        this.sections = [];
        this.authenticated = false;
        this.sectionRows = [];
        this.cameraId = null;
        this.cameraParameters = null;
        this.dashboardSectionsHidden = false;
        this.anonymous = true;
        this.padSize = 180;
        this.moveLeftDelayTimer = null;
        this.moveRightDelayTimer = null;
        this.showLeftPad = false;
        this.showRightPad = false;
        this.inLeftPadDrag = false;
        this.inRightPadDrag = false;
        this.autoZeroLeftPad = false;
        this.autoZeroRightPad = false;
        this.showMenu = true;
        this.defaultSizes = new __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["b" /* DashboardSizes */]();
        this.leftXValue = null;
        this.leftYValue = null;
        this.rightXValue = null;
        this.rightYValue = null;
    }
    DashboardComponent.prototype.logoff = function (event) {
        this.kerviService.logoff();
        event.stopPropagation();
    };
    DashboardComponent.prototype.padPress = function (pad) {
        if (pad == "left")
            this.inLeftPadDrag = true;
        if (pad == "right")
            this.inRightPadDrag = true;
    };
    DashboardComponent.prototype.padRelease = function (pad) {
        if (pad == "left")
            this.inLeftPadDrag = false;
        if (this.autoZeroLeftPad && this.leftXValue) {
            jQuery("input[name='left-x']", this.elementRef.nativeElement).val(0).change();
            this.kerviService.spine.sendCommand(this.leftXValue.command, 0);
        }
        if (this.autoZeroLeftPad && this.leftYValue) {
            jQuery("input[name='left-y']", this.elementRef.nativeElement).val(0).change();
            this.kerviService.spine.sendCommand(this.leftYValue.command, 0);
        }
        if (pad == "right")
            this.inRightPadDrag = false;
        if (this.autoZeroRightPad && this.rightXValue) {
            jQuery("input[name='right-x']", this.elementRef.nativeElement).val(0).change();
            this.kerviService.spine.sendCommand(this.rightXValue.command, 0);
        }
        if (this.autoZeroRightPad && this.rightYValue) {
            jQuery("input[name='right-y']", this.elementRef.nativeElement).val(0).change();
            this.kerviService.spine.sendCommand(this.rightYValue.command, 0);
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("db init", this);
        var self = this;
        this.dashboardsService.getDashboards$().subscribe(function (v) {
            self.dashboardCount = v.length;
            self.showMenu = (self.dashboardCount > 1 || self.kerviService.doAuthenticate);
            self.anonymous = self.kerviService.isAnonymous();
            self.dashboards$.next(v);
        });
        this.authenticated = this.kerviService.doAuthenticate;
        if (!this.kerviService.connected$.value)
            this.router.navigate(['/connect']);
        this.routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            _this.dashboardId = params['name'];
            self.setupDashboard();
            _this.dashboardsService.getDashboards$().subscribe(function (v) {
                self.setupDashboard();
            });
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    DashboardComponent.prototype.setupDashboard = function () {
        console.log("setup dashboard");
        var self = this;
        this.dashboard = this.dashboardsService.getDashboardById(this.dashboardId);
        if (this.dashboard) {
            this.dashboardSectionsHidden = false;
            this.showSectionController = false;
            this.cameraId = null;
            this.cameraParameters = null;
            if (this.dashboard.backgroundSection) {
                if (this.dashboard.backgroundSection.components.length > 0) {
                    this.dashboardSectionsHidden = true;
                    this.showSectionController = true;
                    this.cameraId = this.dashboard.backgroundSection.components[0].componentId;
                    this.cameraParameters = this.dashboard.backgroundSection.components[0].parameters;
                }
            }
            var rowSize = 3;
            this.sectionRows = [];
            var currentRow = [];
            this.sectionRows.push(currentRow);
            for (var _i = 0, _a = this.dashboard.sections; _i < _a.length; _i++) {
                var section = _a[_i];
                currentRow.push(section);
                if (currentRow.length == rowSize) {
                    currentRow = [];
                    this.sectionRows.push(currentRow);
                }
            }
            if (this.dashboard.LeftPadXSection && this.dashboard.LeftPadXSection.components.length || this.dashboard.LeftPadYSection && this.dashboard.LeftPadYSection.components.length) {
                this.showLeftPad = true;
                if (self.dashboard.LeftPadXSection.components.length) {
                    self.leftXValue = self.dashboard.LeftPadXSection.components[0].component;
                    if (self.dashboard.LeftPadXSection.components[0].parameters.padAutoCenter)
                        self.autoZeroLeftPad = true;
                }
                if (self.dashboard.LeftPadYSection.components.length) {
                    self.leftYValue = self.dashboard.LeftPadYSection.components[0].component;
                    if (self.dashboard.LeftPadYSection.components[0].parameters.padAutoCenter)
                        self.autoZeroLeftPad = true;
                }
                //console.log("lc",self.dashboard.LeftPadXSection, self.dashboard.LeftPadYSection,this.leftXValue,this.leftYValue)
                if (self.leftXValue) {
                    self.leftXValue.value$.subscribe(function (v) {
                        if (!this.inLeftPadDrag)
                            jQuery("input[name='left-x']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                if (self.leftYValue) {
                    self.leftYValue.value$.subscribe(function (v) {
                        if (!this.inLeftPadDrag)
                            jQuery("input[name='left-y']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                setTimeout(function () {
                    var h = window.innerHeight;
                    var w = window.innerWidth;
                    jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize / 2), left: w / 4 - (self.padSize / 2) });
                    jQuery(window).bind('resize', function () {
                        var h = window.innerHeight;
                        var w = window.innerWidth;
                        jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize / 2, left: w / 4 - self.padSize / 2 });
                    });
                    if (self.leftXValue)
                        jQuery("input[name='left-x']", self.elementRef.nativeElement).val(self.leftXValue.value$.value).change();
                    if (self.leftYValue)
                        jQuery("input[name='left-y']", self.elementRef.nativeElement).val(self.leftYValue.value$.value).change();
                    var color = "rgba(255,255,255,.5)";
                    var p = jQuery('#leftPad').xy({
                        displayPrevious: false,
                        min: -100,
                        max: 100,
                        width: self.padSize,
                        height: self.padSize,
                        fgColor: color,
                        bgColor: color,
                        change: function (value) {
                            if (self.moveLeftDelayTimer) {
                                clearTimeout(self.moveLeftDelayTimer);
                            }
                            self.moveLeftDelayTimer = setTimeout(function () {
                                if (self.leftXValue && self.inLeftPadDrag)
                                    self.kerviService.spine.sendCommand(self.leftXValue.command, value[0]);
                                if (self.leftYValue && self.inLeftPadDrag)
                                    self.kerviService.spine.sendCommand(self.leftYValue.command, value[1]);
                            }, 200);
                        }
                    })
                        .css({ 'border': '2px solid ' + color });
                }, 0);
            }
            if (this.dashboard.RightPadXSection && this.dashboard.RightPadXSection.components.length || this.dashboard.RightPadYSection && this.dashboard.RightPadYSection.components.length) {
                this.showRightPad = true;
                if (self.dashboard.RightPadXSection.components.length) {
                    self.rightXValue = self.dashboard.RightPadXSection.components[0].component;
                    if (self.dashboard.RightPadXSection.components[0].parameters.padAutoCenter)
                        self.autoZeroRightPad = true;
                }
                if (self.dashboard.RightPadYSection.components.length) {
                    self.rightYValue = self.dashboard.RightPadYSection.components[0].component;
                    if (self.dashboard.RightPadYSection.components[0].parameters.padAutoCenter)
                        self.autoZeroRightPad = true;
                }
                if (self.rightXValue) {
                    self.rightXValue.value$.subscribe(function (v) {
                        if (!this.inLeftPadDrag)
                            jQuery("input[name='right-x']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                if (self.rightYValue) {
                    self.rightYValue.value$.subscribe(function (v) {
                        if (!this.inLeftPadDrag)
                            jQuery("input[name='right-y']", self.elementRef.nativeElement).val(v).change();
                    });
                }
                setTimeout(function () {
                    var color = "rgba(255,255,255,.5)";
                    var h = window.innerHeight;
                    var w = window.innerWidth;
                    jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize / 2), left: w - (w / 4) - (self.padSize / 2) });
                    jQuery(window).bind('resize', function () {
                        var h = window.innerHeight;
                        var w = window.innerWidth;
                        jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize / 2, left: w - (w / 4) - self.padSize / 2 });
                    });
                    if (self.rightXValue)
                        jQuery("input[name='right-x']", self.elementRef.nativeElement).val(self.rightXValue.value$.value).change();
                    if (self.rightYValue)
                        // jQuery("input[name='right-y']", self.elementRef.nativeElement).val(self.rightYValue.value$.value).change();
                        var p = jQuery('#rightPad').xy({
                            displayPrevious: false,
                            min: -100,
                            max: 100,
                            width: self.padSize,
                            height: self.padSize,
                            fgColor: color,
                            bgColor: color,
                            change: function (value) {
                                if (self.moveRightDelayTimer) {
                                    clearTimeout(self.moveRightDelayTimer);
                                }
                                self.moveRightDelayTimer = setTimeout(function () {
                                    if (self.rightXValue)
                                        self.kerviService.spine.sendCommand(self.rightXValue.command, value[0]);
                                    if (self.rightYValue)
                                        self.kerviService.spine.sendCommand(self.rightYValue.command, value[1]);
                                }, 200);
                            }
                        })
                            .css({ 'border': '2px solid ' + color });
                }, 0);
            }
        }
        //console.log("dbbcx", this.cameraId, this.cameraParameters);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        //providers: [ KerviService ],
        template: __webpack_require__(293),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kervi_service__["a" /* KerviService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__dashboards_service__["a" /* DashboardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboards_service__["a" /* DashboardsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionModel; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

var ActionModel = (function () {
    function ActionModel(message) {
        this.id = null;
        this.name = null;
        this.componentType = "action";
        this.ui = {};
        this.type = null;
        this.visible = true;
        this.dashboards = [];
        this.running$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](false);
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.visible = message.visible;
        this.dashboards = message.dashboards;
        this.type = message.type;
    }
    ActionModel.prototype.updateReferences = function () { };
    ;
    ActionModel.prototype.reload = function (component) { };
    ;
    return ActionModel;
}());

//# sourceMappingURL=action.model.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentRef__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerModel; });

//import { ControllersFactory } from './factory' 
var ControllerModel = (function () {
    function ControllerModel(message) {
        this.componentType = "controller";
        this.ui = {};
        this.inputs = [];
        this.outputs = [];
        this.inputReferences = [];
        this.outputReferences = [];
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.ui = message.ui;
        this.visible = message.visible;
        this.dashboards = message.dashboards;
        this.parameters = message.parameters;
        this.template = message.template;
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var ref = _a[_i];
            this.inputReferences.push(new __WEBPACK_IMPORTED_MODULE_0__ComponentRef__["a" /* ComponentRef */](ref));
        }
        for (var _b = 0, _c = message.outputs; _b < _c.length; _b++) {
            var ref = _c[_b];
            this.outputReferences.push(new __WEBPACK_IMPORTED_MODULE_0__ComponentRef__["a" /* ComponentRef */](ref));
        }
    }
    ControllerModel.prototype.updateReferences = function () { };
    ;
    ControllerModel.prototype.reload = function (component) { };
    ;
    return ControllerModel;
}());

//# sourceMappingURL=controller.model.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorModel; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

var SensorModel = (function () {
    function SensorModel(message) {
        this.subSensors = [];
        this.id = null;
        this.name = null;
        this.componentType = "sensor";
        this.ui = {};
        this.type = null;
        this.visible = true;
        this.value = null;
        this.dashboards = [];
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.visible = message.visible;
        this.dashboards = message.dashboards;
        this.value = new __WEBPACK_IMPORTED_MODULE_0__dynamicValues_model__["b" /* DynamicNumberModel */](message);
        this.type = message.type;
        for (var _i = 0, _a = message.subSensors; _i < _a.length; _i++) {
            var subSensor = _a[_i];
            this.subSensors.push(new SensorModel(subSensor));
        }
    }
    SensorModel.prototype.updateReferences = function () { };
    ;
    SensorModel.prototype.reload = function (component) { };
    ;
    return SensorModel;
}());

//# sourceMappingURL=sensor.model.js.map

/***/ })

},[581]);
//# sourceMappingURL=main.bundle.js.map