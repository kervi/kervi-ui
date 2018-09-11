(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboards/dashboards.module */ "./src/app/dashboards/dashboards.module.ts");
/* harmony import */ var _values_values_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./values/values.module */ "./src/app/values/values.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _dashboards_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboards/dashboard/dashboard.component */ "./src/app/dashboards/dashboard/dashboard.component.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _connected_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./connected.service */ "./src/app/connected.service.ts");
/* harmony import */ var _dashboards_dashboards_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboards/dashboards.service */ "./src/app/dashboards/dashboards.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template.service */ "./src/app/template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ROUTES = [
    {
        path: '',
        redirectTo: '/connect',
        pathMatch: 'full'
    },
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_9__["ConnectComponent"] },
    { path: 'dashboard/:name', component: _dashboards_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule(connectedService) {
        this.connectedService = connectedService;
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_9__["ConnectComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _dashboards_dashboards_module__WEBPACK_IMPORTED_MODULE_6__["DashboardsModule"],
                _values_values_module__WEBPACK_IMPORTED_MODULE_7__["ValuesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(ROUTES)
            ],
            providers: [_kervi_service__WEBPACK_IMPORTED_MODULE_11__["KerviService"], _dashboards_dashboards_service__WEBPACK_IMPORTED_MODULE_13__["DashboardsService"], _connected_service__WEBPACK_IMPORTED_MODULE_12__["ConnectedService"], _template_service__WEBPACK_IMPORTED_MODULE_14__["TemplateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_connected_service__WEBPACK_IMPORTED_MODULE_12__["ConnectedService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--{{isConnected}} {{doAuthenticate}} {{isAuthenticated}} {{inAuthentication}}-->\r\n<div *ngIf=\"isConnected && doAuthenticate && !isAuthenticated && !inAuthentication\" style=\"line-height: 1;width:266px;height:200px;background:rgba(255,255,255,0);border-radius: 4px;position: absolute; top:40%;left:50%;margin: -133px 0 0 -128px;padding:10px\">\r\n  <form class=\"form\" [formGroup]=\"loginForm\"  \r\n        (ngSubmit)=\"onSubmit(loginForm.value)\"  \r\n        class=\"form\"  \r\n        [class.error]=\"!loginForm.valid && loginForm.touched\">\r\n \r\n    <div class=\"form-group\"  \r\n        [class.error]=\"!userName.valid && userName.touched\">  \r\n      <!--<label class=\"control-label\" for=\"userNameInput\">User name</label>  -->\r\n      <input type=\"text\"  \r\n             id=\"userNameInput\"  \r\n             placeholder=\"User name\"  \r\n             [formControl]=\"userName\"\r\n             class=\"form-control\"\r\n             autofocus>  \r\n         \r\n    </div>\r\n\r\n    <div class=\"form-group\"  [class.error]=\"!password.valid && password.touched\">  \r\n      <!--<label class=\"control-label\" for=\"passwordInput\">Password</label>  -->\r\n      <input type=\"password\"  \r\n             id=\"passwordInput\"  \r\n             placeholder=\"Password\"  \r\n             [formControl]=\"password\"\r\n             class=\"form-control\">  \r\n    </div>\r\n    <div *ngIf=\"invalidUser\" class=\"ui error message\"><p>Invalid user name or password</p></div>\r\n \r\n    <button type=\"submit\" class=\"btn btn-primary\">Log on</button>  \r\n  </form>  \r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!isConnected\" style=\"line-height: 1;width:266px;height:256px;background:rgba(255,255,255,1);border-radius: 4px;position: absolute; top:40%;left:50%;margin: -133px 0 0 -128px\">\r\n  \r\n  <img \r\n  src=\"data:image/png;base64,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\"\r\n  />\r\n  \r\n  <span style=\"font-size:800%\" >Kervi</span><br>\r\n  Connecting, please wait \r\n  <div class='uil-facebook-css' style='-webkit-transform:scale(0.08);display: inline-block; top:-12px;width:0;height:0'><div></div><div></div><div></div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/connect/connect.component.scss":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connected_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connected.service */ "./src/app/connected.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnectComponent = /** @class */ (function () {
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
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.scss */ "./src/app/connect/connect.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _connected_service__WEBPACK_IMPORTED_MODULE_3__["ConnectedService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/connected.service.ts":
/*!**************************************!*\
  !*** ./src/app/connected.service.ts ***!
  \**************************************/
/*! exports provided: ConnectedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedService", function() { return ConnectedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _dashboards_dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboards/dashboards.service */ "./src/app/dashboards/dashboards.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectedService = /** @class */ (function () {
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
    ConnectedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _dashboards_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConnectedService);
    return ConnectedService;
}());



/***/ }),

/***/ "./src/app/controllers/controller.service.ts":
/*!***************************************************!*\
  !*** ./src/app/controllers/controller.service.ts ***!
  \***************************************************/
/*! exports provided: ControllersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllersService", function() { return ControllersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kervi.service */ "./src/app/kervi.service.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControllersService = /** @class */ (function () {
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
            if (controller.actions.length == 0) {
                for (var _e = 0, _f = controller.actionsReferences; _e < _f.length; _e++) {
                    var ref = _f[_e];
                    controller.actions.push(this.kerviService.getComponent(ref.id));
                }
            }
        }
        //console.log("rc", controllers);    
    };
    ControllersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"]])
    ], ControllersService);
    return ControllersService;
}());



/***/ }),

/***/ "./src/app/controllers/controller/controller.component.html":
/*!******************************************************************!*\
  !*** ./src/app/controllers/controller/controller.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"controller.type!='camera'\">\r\n  <ng-container  *ngFor=\"let component of controller.inputs\">\r\n    <ng-container *ngIf=\"component.visible\">\r\n      <ng-container [ngSwitch]=\"component.type\">\r\n        <ng-template ngSwitchCase=\"number-value\">\r\n          <dynamic-value [dashboardSection]=\"dashboardSection\" [value]=\"component\"></dynamic-value>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container  *ngFor=\"let component of controller.actions\">\r\n    <ng-container *ngIf=\"component.visible\">\r\n      <ng-container [ngSwitch]=\"component.type\">\r\n        <ng-template ngSwitchCase=\"number-value\">\r\n          <kervi-action [dashboardSection]=\"dashboardSection\" [action]=\"component\" ></kervi-action>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n<ng-container *ngIf=\"controller.type=='camera'\">\r\n    <kervi-cam-viewer [isBackground]=\"false\" [cameraId]=\"controller.id\" [parameters]=\"parameters\"></kervi-cam-viewer>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/controllers/controller/controller.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/controllers/controller/controller.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controllers/controller/controller.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/controllers/controller/controller.component.ts ***!
  \****************************************************************/
/*! exports provided: ControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerComponent", function() { return ControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_controller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/controller.model */ "./src/app/models/controller.model.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControllerComponent = /** @class */ (function () {
    function ControllerComponent() {
        this.section = "left";
    }
    ControllerComponent.prototype.ngOnInit = function () {
        console.log("ctrli", this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_controller_model__WEBPACK_IMPORTED_MODULE_1__["ControllerModel"])
    ], ControllerComponent.prototype, "controller", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControllerComponent.prototype, "section", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSectionModel"])
    ], ControllerComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControllerComponent.prototype, "parameters", void 0);
    ControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-controller',
            template: __webpack_require__(/*! ./controller.component.html */ "./src/app/controllers/controller/controller.component.html"),
            styles: [__webpack_require__(/*! ./controller.component.scss */ "./src/app/controllers/controller/controller.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ControllerComponent);
    return ControllerComponent;
}());



/***/ }),

/***/ "./src/app/controllers/controllers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/controllers/controllers.module.ts ***!
  \***************************************************/
/*! exports provided: ControllersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllersModule", function() { return ControllersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _controller_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/controller.component */ "./src/app/controllers/controller/controller.component.ts");
/* harmony import */ var _controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.service */ "./src/app/controllers/controller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _values_values_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../values/values.module */ "./src/app/values/values.module.ts");
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/app/ui-components/ui-components.module.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ControllersModule = /** @class */ (function () {
    function ControllersModule(controllerService) {
        this.controllerService = controllerService;
    }
    ControllersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _values_values_module__WEBPACK_IMPORTED_MODULE_5__["ValuesModule"],
                _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_6__["UIComponentsModule"]
            ],
            exports: [
                _controller_controller_component__WEBPACK_IMPORTED_MODULE_2__["ControllerComponent"],
            ],
            providers: [_controller_service__WEBPACK_IMPORTED_MODULE_3__["ControllersService"]],
            declarations: [
                _controller_controller_component__WEBPACK_IMPORTED_MODULE_2__["ControllerComponent"],
            ]
        }),
        __metadata("design:paramtypes", [_controller_service__WEBPACK_IMPORTED_MODULE_3__["ControllersService"]])
    ], ControllersModule);
    return ControllersModule;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-section/dashboard-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-section/dashboard-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboards/dashboard-section/dashboard-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-section/dashboard-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!bodyOnly && section.type=='group'\">\r\n    <div class=\"card-deck\">\r\n        <ng-container *ngFor=\"let subSection of section.subSections\">\r\n            <ng-container *ngIf=\"subSection.type!='group'\">\r\n                <div class=\"card-section\" [style.width]=\"calcWidth(subSection, false)\">\r\n                    <div class=\"card\" [ngClass]=\"{'has-card-header': showSectionHeader(subSection)}\">\r\n                        <kervi-dashboard-section [bodyOnly]=\"true\" [inGroup]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"subSection\"></kervi-dashboard-section>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"subSection.type=='group'\">\r\n                <div class=\"card-deck-section\" [style.width]=\"calcWidth(subSection, inGroup)\">\r\n                    <kervi-dashboard-section  [inGroup]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"subSection\"></kervi-dashboard-section>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n \r\n<ng-container *ngIf=\"!bodyOnly && !inline && section.type!='group'\">\r\n    <div class=\"card-section card-non-group\" [style.width]=\"calcWidth(section, false)\">\r\n        <div class=\"card\" [ngClass]=\"{'has-card-header': showSectionHeader(section)}\">\r\n            <kervi-dashboard-section [bodyOnly]=\"true\" [defaultSizes]=\"defaultSizes\"  [section]=\"section\"></kervi-dashboard-section>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"bodyOnly\">\r\n    <div class=\"card-header\" *ngIf=\"showHeader\" >\r\n        <h4 class=\"text-left\">\r\n            {{title}}\r\n            <!-- <a data-toggle=\"collapse\" role=\"tab\" href=\"#section-{{section.id}}\" [attr.aria-expanded]=\"expanded\" aria-control=\"\" style=\"float:left\"> <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> </a> -->\r\n            <div class=\"card-body\" *ngIf=\"headerComponents.length>0\" style=\"padding:0\">\r\n                <ng-container *ngFor=\"let sectionComponent of headerComponents\">\r\n                    <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n                    <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n                    <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n                    <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n                </ng-container>\r\n            </div>\r\n        </h4>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"components.length>0\" >\r\n        \r\n        <ng-container *ngFor=\"let sectionComponent of components\">\r\n            <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n            <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n        </ng-container>\r\n    </div>\r\n    \r\n    <div class=\"card-body\" *ngIf=\"section.parameters.userLog\"  >\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th>&nbsp;</th>\r\n                <th>Time</th>\r\n                <th>component</th>\r\n                <th style=\"width:100%\">topic</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let message of messages$ | async\">\r\n                    <td>\r\n                        <span *ngIf=\"message.level<=3\" class=\"alert\" [ngClass]=\"{'text-danger': message.level==1, 'text-warning': message.level==2, 'text-normal': message.level==3}\" >&#11044;</span>\r\n                    </td>\r\n                    <td>{{message.timestamp | date: 'HH:mm:ss'}}</td>\r\n                    <td>{{message.sourceName}}</td>\r\n                    <td style=\"white-space:nowrap; overflow:hidden;text-overflow:ellipsis; max-width: 0;\" title=\"{{message.topic}}\">{{message.topic}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        \r\n    </div>    \r\n    \r\n    \r\n    <!-- <div class=\"card-body {{sectionClassHeight}} \" *ngIf=\"!showHeader\" style=\"overflow:auto\">\r\n        <ng-container *ngFor=\"let sectionComponent of components\">\r\n            <kervi-controller [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\" *ngIf=\"sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value [dashboardSection]=\"section\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\"  *ngIf=\"sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor [dashboardSection]=\"section\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.component && sectionComponent.parameters\" *ngIf=\"sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n        </ng-container>\r\n    </div> -->\r\n</ng-container>\r\n<ng-template [ngIf]=\"!bodyOnly && inline && section.components.length>0\" style=\"display:inline-block\">\r\n        <ng-container *ngFor=\"let sectionComponent of section.components\" style=\"display:inline-block\">\r\n            <kervi-controller  [dashboardSection]=\"section\" [controller]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='controller'\" ></kervi-controller>\r\n            <dynamic-value  [dashboardSection]=\"section\" [inline]=\"inline\" [value]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\"  *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='DynamicValue'\" ></dynamic-value>\r\n            <kervi-sensor  [dashboardSection]=\"section\" [inline]=\"inline\" [sensor]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='sensor'\" ></kervi-sensor>\r\n            <kervi-action [dashboardSection]=\"section\" [action]=\"sectionComponent.component\" [parameters]=\"sectionComponent.parameters\" *ngIf=\"sectionComponent.component && sectionComponent.component.componentType=='action'\" ></kervi-action>\r\n        </ng-container>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/dashboards/dashboard-section/dashboard-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-section/dashboard-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSectionComponent", function() { return DashboardSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardSectionComponent = /** @class */ (function () {
    //sectionComponents:IComponent[] = []
    function DashboardSectionComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.inGroup = false;
        this.bodyOnly = false;
        this.width = "";
        this.showHeader = false;
        this.expanded = false;
        this.components = [];
        this.headerComponents = [];
        //messages: DashboardMessageModel[] = [];
        this.messages$ = null;
        this.messages$ = this.kerviService.getLogMessages$();
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
            /*this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                var messages = self.messages$.value
                console.log("lm", this);
                messages.unshift(new DashboardMessageModel(this));
                if (messages.length>self.section.parameters.logLength)
                    messages.pop();
                self.messages$.next(messages);
            });*/
        }
        this.width = this.inGroup ? "" : this.templateService.getSizeValue(self.section.parameters.width);
    };
    DashboardSectionComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSectionModel"])
    ], DashboardSectionComponent.prototype, "section", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DashboardSectionComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], DashboardSectionComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DashboardSectionComponent.prototype, "inGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DashboardSectionComponent.prototype, "bodyOnly", void 0);
    DashboardSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-dashboard-section',
            template: __webpack_require__(/*! ./dashboard-section.component.html */ "./src/app/dashboards/dashboard-section/dashboard-section.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-section.component.css */ "./src/app/dashboards/dashboard-section/dashboard-section.component.css")],
            //encapsulation: ViewEncapsulation.None
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]])
    ], DashboardSectionComponent);
    return DashboardSectionComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/dashboards/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n    position:relative;\r\n    z-index:2000;\r\n    \r\n}\r\n\r\ndashboard-sections{\r\n    \r\n}\r\n\r\n.dashboard-sections-hidden{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/dashboards/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar row navbar-toggleable-md navbar-fixed-top navbar-light bg-faded page-header\">\r\n\t<div class=\"row\" style=\"width:100%\">\r\n\t\t<div class=\"col-xs-4 col-sm-4\">\r\n\t\t\t<ul class=\"navbar-nav flex-nowrap flex-row\" >\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t<a *ngIf=\"showMenu\" class=\"dropdown btn nav-link\" title=\"Dashboards\" style=\"padding-top:0;cursor: pointer\" data-toggle=\"dropdown\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></a>\r\n\t\t\t\t\t<div  class=\"dropdown-menu  multi-leve ul.nav.navbar-nav.no-collapse\">\r\n\t\t\t\t\t\t<!--<span class=\"dropdown-divider\">&nbsp; Dashboards</span>-->\r\n\t\t\t\t\t\t<div class=\"dropdown-submenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"dashboardCount > 1\">\r\n\t\t\t\t\t\t\t<a  *ngFor=\"let dashboard of (dashboards$ | async)\" class=\"dropdown-item\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<div *ngIf=\"authenticated && dashboardCount > 1\" class=\"dropdown-divider\"></div>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >Log in</a>\r\n\t\t\t\t\t\t\t<a *ngIf=\"authenticated && !anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" class=\"dropdown-item\" >Log out</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"showSectionController\">\r\n\t\t\t\t\t<a  class=\"nav-link btn\" (click)=\"dashboardSectionsHidden = !dashboardSectionsHidden;\"><i class=\"fa fa-sliders-h fa-lg\" aria-hidden=\"true\" style=\"transform:rotate(90deg);\"></i>{{dashboardSectionsVisible}}</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"dashboard\" style=\"display:inline-block;white-space:nowrap\">&nbsp;&nbsp;&nbsp;{{dashboard.name}}</li>\r\n\t\t\t</ul>\r\n\t\t</div>\t\r\n\t\t<div *ngIf=\"dashboard && dashboard.sysSection\" class=\"col-xs-8 col-sm-8 core-sensors text-xs-center text-sm-right\" style=\"display:inline-block\">\r\n\t\t\t\t&nbsp;<kervi-dashboard-section [defaultSizes]=\"defaultSizes\" [inline]=\"true\" [section]=\"dashboard.sysSection\" ></kervi-dashboard-section>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<ng-container *ngIf=\"dashboard && dashboard.template\">\r\n\t<!--<dashboard-layout [dashboard]=\"dashboard\"></dashboard-layout>-->\r\n</ng-container>\r\n<div *ngIf=\"dashboard && !dashboard.template\" style=\"position:relative;margin-top:35px;\">\r\n\t<kervi-cam-viewer *ngIf=\"cameraId\" [isBackground]=\"true\" [cameraId]=\"cameraId\" [parameters]=\"cameraParameters\"></kervi-cam-viewer>\r\n\t<div id=\"controller-pads\">\r\n\t\t<div *ngIf=\"showLeftPad\" class=\"left-pad-area\" style=\"position:fixed;\" (mousedown)=\"padPress('left')\" (mouseup)=\"padRelease('left')\">\r\n\t\t\t<fieldset id=\"leftPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\t<input type=\"hidden\" id=\"left-pad-x\" name=\"left-x\" value=\"0\"><input type=\"hidden\" id=\"left-pad-y\" name=\"left-y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"showRightPad\" class=\"right-pad-area\" style=\"position:fixed\" (mousedown)=\"padPress('right')\" (mouseup)=\"padRelease('right')\">\r\n\t\t\t<fieldset id=\"rightPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\t<input id=\"right-pad-x\" type=\"hidden\" name=\"right-x\" value=\"0\"> <input type=\"hidden\" id=\"right-pad-y\" name=\"right-y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid\" style=\"top:0;padding-top:10px;z-index:1999;position:absolute;padding-bottom:30px;\" >\r\n\t\t<div  [ngClass]=\"{'dashboard-sections-hidden' : dashboardSectionsHidden }\">\r\n\t\t\t<kervi-dashboard-section  *ngFor=\"let section of dashboard.sections\" [defaultSizes]=\"defaultSizes\" [section]=\"section\" class=\"w-{{section.width}}\"></kervi-dashboard-section>\r\n\t\t</div>  \r\n\t</div>\r\n</div>\r\n<footer class=\"footer\" *ngIf=\"dashboard\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-4 text-left\" style=\"text-align: left\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerLefSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerLeftSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 text-center\" style=\"text-align:center\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerCenterSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerCenterSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 text-right\" style=\"text-align: right\">\r\n\t\t\t\t<kervi-dashboard-section [inline]=\"true\" *ngIf=\"dashboard.footerRightSection\" [defaultSizes]=\"defaultSizes\" [section]=\"dashboard.footerRightSection\"></kervi-dashboard-section>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/dashboards/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboards/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboards.service */ "./src/app/dashboards/dashboards.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(elementRef, zone, kerviService, dashboardsService, router, activatedRoute) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.kerviService = kerviService;
        this.dashboardsService = dashboardsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dashboards$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
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
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
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
                    this.cameraId = this.dashboard.backgroundSection.components[0].component.id;
                    this.cameraParameters = this.dashboard.backgroundSection.components[0].parameters;
                    console.log("cam", this.cameraId, this.cameraParameters);
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
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboards/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboards/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboards.module.ts ***!
  \*************************************************/
/*! exports provided: DashboardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsModule", function() { return DashboardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboards.service */ "./src/app/dashboards/dashboards.service.ts");
/* harmony import */ var _sensors_sensors_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sensors/sensors.module */ "./src/app/sensors/sensors.module.ts");
/* harmony import */ var _controllers_controllers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/controllers.module */ "./src/app/controllers/controllers.module.ts");
/* harmony import */ var _values_values_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../values/values.module */ "./src/app/values/values.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboards/dashboard/dashboard.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/dashboards/page-header/page-header.component.ts");
/* harmony import */ var _dashboard_section_dashboard_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-section/dashboard-section.component */ "./src/app/dashboards/dashboard-section/dashboard-section.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/app/ui-components/ui-components.module.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardsModule = /** @class */ (function () {
    function DashboardsModule() {
    }
    DashboardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _sensors_sensors_module__WEBPACK_IMPORTED_MODULE_3__["SensorsModule"],
                _controllers_controllers_module__WEBPACK_IMPORTED_MODULE_4__["ControllersModule"],
                _values_values_module__WEBPACK_IMPORTED_MODULE_5__["ValuesModule"],
                _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_10__["UIComponentsModule"]
            ],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"],
                _dashboard_section_dashboard_section_component__WEBPACK_IMPORTED_MODULE_8__["DashboardSectionComponent"],
                _values_values_module__WEBPACK_IMPORTED_MODULE_5__["ValuesModule"]
            ],
            providers: [_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"],],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"],
                _dashboard_section_dashboard_section_component__WEBPACK_IMPORTED_MODULE_8__["DashboardSectionComponent"],
            ]
        })
    ], DashboardsModule);
    return DashboardsModule;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboards.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboards/dashboards.service.ts ***!
  \**************************************************/
/*! exports provided: DashboardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsService", function() { return DashboardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ControllersService } from "../controllers/controllers.service";
//import { SensorsService } from "../sensors/sensors.service";

var DashboardsService = /** @class */ (function () {
    function DashboardsService(kerviService) {
        this.kerviService = kerviService;
        this.dashboards = [];
        this._dashboards$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        var self = this;
        var s = this.kerviService.getComponents$().subscribe(function (v) {
            self.dashboards = self.kerviService.getComponentsByType("dashboard");
            console.log("load dashboards", self.dashboards);
            for (var _i = 0, _a = self.dashboards; _i < _a.length; _i++) {
                var dashboard = _a[_i];
                //var dashboard = dashboardComponent as DashboardModel;
                for (var _b = 0, _c = dashboard.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
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
    /*private resolveSubSections(section:DashboardSectionModel){
        if (section.subSections){
            for(var subSection of section.subSections){
                this.resolveSubSections(subSection);
                for (var sectionComponent of subSection.components ){
                    if (!sectionComponent.component)
                        sectionComponent.component=this.kerviService.getComponent(sectionComponent.componentId)
                }
            }
        }
    }*/
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
    DashboardsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"]])
    ], DashboardsService);
    return DashboardsService;
}());



/***/ }),

/***/ "./src/app/dashboards/page-header/page-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboards/page-header/page-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-item dropdown\">\r\n\t<a class=\"nav-link\" title=\"Dashboards\" style=\"padding-top:0;cursor: pointer\" data-toggle=\"dropdown\"><i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i></a>\r\n\t<div class=\"dropdown-menu  multi-leve ul.nav.navbar-nav.no-collapse\">\r\n\t\t\t<!--<span class=\"dropdown-divider\">&nbsp; Dashboards</span>-->\r\n\t\t\t<div class=\"dropdown-submenu\">\r\n\t\t\t\t\t<a *ngFor=\"let dashboard of (dashboards$ | async)\" class=\"dropdown-item\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</a>\r\n\t\t\t</div>\r\n\t\t<!--<div class=\"dropdown-divider\"></div>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/charts\">Charts</a>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/about\">About</a>-->\r\n\t\t<!--<a class=\"dropdown-item\" href=\"#/settings\">Settings</a>-->\r\n\t</div>\r\n</li>\r\n\t\t"

/***/ }),

/***/ "./src/app/dashboards/page-header/page-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboards/page-header/page-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/dashboards/page-header/page-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboards/page-header/page-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboards.service */ "./src/app/dashboards/dashboards.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(dashboardsService) {
        this.dashboardsService = dashboardsService;
        this.dashboard = null;
        this.dashboards$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardModel"])
    ], PageHeaderComponent.prototype, "dashboard", void 0);
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/dashboards/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/dashboards/page-header/page-header.component.scss")],
        }),
        __metadata("design:paramtypes", [_dashboards_service__WEBPACK_IMPORTED_MODULE_1__["DashboardsService"]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/kervi.service.ts":
/*!**********************************!*\
  !*** ./src/app/kervi.service.ts ***!
  \**********************************/
/*! exports provided: KerviService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviService", function() { return KerviService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_spine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kervi-spine */ "./src/kervi-spine.ts");
/* harmony import */ var _kervi_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kervi_io */ "./src/kervi_io.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _models_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/factory */ "./src/app/models/factory.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KerviService = /** @class */ (function () {
    function KerviService() {
        this.spine = null;
        this.appInfo = null;
        this.components = [];
        this.components$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.doAuthenticate = false;
        this.inAuthentication$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.logMessages = [];
        this.logMessages$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.connected$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.IPCReady$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.authenticationFailed$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        console.log("kervi service constructor");
        var self = this;
        this.connected$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.application$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        setInterval(function () {
            if (self.connected$.value) {
                //self.refreshComponents()  
            }
        }, 10000);
        var s1 = this.IPCReady$.subscribe(function (connected) {
            if (connected) {
                console.log("kervi service ipc ready (connected)");
                self.spine.addEventHandler("valueChanged", "", function (id, value) {
                    for (var _i = 0, _a = self.components; _i < _a.length; _i++) {
                        var component = _a[_i];
                        if (component.id == value.id) {
                            var dynamicValue = component;
                            dynamicValue.valueTS = new Date(this.timestamp + " utc");
                            dynamicValue.value$.next(value.value);
                            var spl = dynamicValue.sparkline$.value;
                            spl.push(value.value);
                            if (spl.length > 10)
                                spl.shift();
                            dynamicValue.sparkline$.next(spl);
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
                self.spine.addEventHandler("userLogMessage", null, function (v) {
                    var messages = self.logMessages$.value;
                    //console.log("lm", this);
                    messages.unshift(new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_5__["DashboardMessageModel"](this));
                    if (messages.length > 10)
                        messages.pop();
                    self.logMessages$.next(messages);
                });
            }
        });
    }
    KerviService.prototype.refreshComponents = function () {
        var self = this;
        self.spine.sendQuery("getComponentInfo", function (message) {
            console.log("refresh component info", message);
            var components = _models_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponents(message);
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
    KerviService.prototype.getLogMessages$ = function () {
        return this.logMessages$.asObservable();
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
        console.log("ks", address, sessionStorage.getItem("mqc"));
        if (sessionStorage.getItem("mqc")) {
            this.spine = new _kervi_io__WEBPACK_IMPORTED_MODULE_2__["KerviIO"]({
                onOpen: this.onOpen,
                onClose: this.onClose,
                onAuthenticate: this.onAuthenticate,
                onAuthenticateFailed: this.onAuthenticateFailed,
                onLogOff: this.onLogoff,
                onAuthenticateStart: this.onAuthenticateStart,
                targetScope: this,
                apiToken: JSON.parse(sessionStorage.getItem("mqc"))
            });
        }
        else
            this.spine = new _kervi_spine__WEBPACK_IMPORTED_MODULE_1__["KerviSpine"]({
                address: address,
                protocol: protocol,
                onOpen: this.onOpen,
                onClose: this.onClose,
                onAuthenticate: this.onAuthenticate,
                onAuthenticateFailed: this.onAuthenticateFailed,
                onLogOff: this.onLogoff,
                onAuthenticateStart: this.onAuthenticateStart,
                targetScope: this
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
        this.spine.sendQuery("GetApplicationInfo", function (appInfo) {
            console.log("appinfo", appInfo);
            this.spine.sendQuery("getComponentInfo", function (message) {
                console.log("component info", message);
                self.application$.next(appInfo);
                self.components = _models_factory__WEBPACK_IMPORTED_MODULE_4__["ComponentFactory"].createComponents(message);
                self.components$.next(self.components);
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
    KerviService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], KerviService);
    return KerviService;
}());



/***/ }),

/***/ "./src/app/models/ComponentRef.ts":
/*!****************************************!*\
  !*** ./src/app/models/ComponentRef.ts ***!
  \****************************************/
/*! exports provided: ComponentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRef", function() { return ComponentRef; });
var ComponentRef = /** @class */ (function () {
    function ComponentRef(message) {
        this.id = message.id;
    }
    return ComponentRef;
}());



/***/ }),

/***/ "./src/app/models/IComponent.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/IComponent.model.ts ***!
  \********************************************/
/*! exports provided: DashboardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLink", function() { return DashboardLink; });
var DashboardLink = /** @class */ (function () {
    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/
    function DashboardLink(component, message) {
        this.dashboardId = message.dashboardId;
        this.sectionId = message.sectionId;
        this.sectionName = message.sectionName;
        this.component = component;
        this.parameters = message.parameters;
    }
    return DashboardLink;
}());



/***/ }),

/***/ "./src/app/models/action.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/action.model.ts ***!
  \****************************************/
/*! exports provided: ActionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionModel", function() { return ActionModel; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _IComponent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IComponent.model */ "./src/app/models/IComponent.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT


var ActionModel = /** @class */ (function () {
    function ActionModel(message) {
        this.id = null;
        this.name = null;
        this.componentType = "action";
        this.runCommand = "";
        this.interruptCommand = "";
        this.ui = {};
        this.type = null;
        this.visible = true;
        this.dashboards = [];
        this.running$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.visible = message.visible;
        this.type = message.type;
        this.runCommand = message.runCommand;
        this.interruptCommand = message.interruptCommand;
        this.running$.next(message.running);
        for (var _i = 0, _a = message.dashboardLinks; _i < _a.length; _i++) {
            var dashboardLink = _a[_i];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_1__["DashboardLink"](this, dashboardLink));
        }
    }
    ActionModel.prototype.updateReferences = function () { };
    ;
    ActionModel.prototype.reload = function (component) { };
    ;
    return ActionModel;
}());



/***/ }),

/***/ "./src/app/models/controller.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/controller.model.ts ***!
  \********************************************/
/*! exports provided: ControllerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return ControllerModel; });
/* harmony import */ var _IComponent_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IComponent.model */ "./src/app/models/IComponent.model.ts");
/* harmony import */ var _ComponentRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentRef */ "./src/app/models/ComponentRef.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT


//import { ControllersFactory } from './factory' 
var ControllerModel = /** @class */ (function () {
    function ControllerModel(message) {
        this.componentType = "controller";
        this.ui = {};
        this.inputs = [];
        this.outputs = [];
        this.actions = [];
        this.inputReferences = [];
        this.outputReferences = [];
        this.actionsReferences = [];
        this.dashboards = [];
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.ui = message.ui;
        this.visible = message.visible;
        this.parameters = message.parameters;
        this.template = message.template;
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var ref = _a[_i];
            this.inputReferences.push(new _ComponentRef__WEBPACK_IMPORTED_MODULE_1__["ComponentRef"](ref));
        }
        for (var _b = 0, _c = message.outputs; _b < _c.length; _b++) {
            var ref = _c[_b];
            this.outputReferences.push(new _ComponentRef__WEBPACK_IMPORTED_MODULE_1__["ComponentRef"](ref));
        }
        for (var _d = 0, _e = message.actions; _d < _e.length; _d++) {
            var ref = _e[_d];
            this.actionsReferences.push(new _ComponentRef__WEBPACK_IMPORTED_MODULE_1__["ComponentRef"](ref));
        }
        for (var _f = 0, _g = message.dashboardLinks; _f < _g.length; _f++) {
            var dashboardLink = _g[_f];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    ControllerModel.prototype.updateReferences = function () { };
    ;
    ControllerModel.prototype.reload = function (component) { };
    ;
    return ControllerModel;
}());



/***/ }),

/***/ "./src/app/models/dashboard.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/dashboard.model.ts ***!
  \*******************************************/
/*! exports provided: DashboardSizes, DashboardMessageModel, DashboardSectionComponentModel, DashboardSectionParametersModel, DashboardSectionModel, DashboardBackgroundModel, DashboardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSizes", function() { return DashboardSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMessageModel", function() { return DashboardMessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSectionComponentModel", function() { return DashboardSectionComponentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSectionParametersModel", function() { return DashboardSectionParametersModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSectionModel", function() { return DashboardSectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBackgroundModel", function() { return DashboardBackgroundModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModel", function() { return DashboardModel; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var DashboardSizes = /** @class */ (function () {
    function DashboardSizes() {
        this.valueWidth = "3rem";
        this.buttonWidth = "25px";
        this.buttonHeight = "";
        this.switchWidth = "25px";
        this.switchHeight = "25px";
        this.gaugeWidth = "100px";
        this.gaugeHeight = "200px";
    }
    return DashboardSizes;
}());

var DashboardMessageModel = /** @class */ (function () {
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

var DashboardSectionComponentModel = /** @class */ (function () {
    function DashboardSectionComponentModel(message) {
        this.message = message;
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.component = message.component;
        this.parameters = message.parameters;
    }
    return DashboardSectionComponentModel;
}());

var DashboardSectionParametersModel = /** @class */ (function () {
    function DashboardSectionParametersModel(messageParameters) {
        this.title = null;
        this.width = null;
        this.height = null;
        this.type = null;
        this.userLog = null;
        this.logLength = 5;
        this.title = messageParameters.label;
        this.height = messageParameters.height;
        this.width = messageParameters.width;
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        if (messageParameters.type)
            this.type = messageParameters.type;
    }
    return DashboardSectionParametersModel;
}());

var DashboardSectionModel = /** @class */ (function () {
    function DashboardSectionModel(dashboard, messageSection) {
        this.components = [];
        this.subSections = [];
        this.dashboard = dashboard;
        this.id = messageSection.id;
        this.name = messageSection.name;
        this.type = messageSection.type;
        this.parameters = new DashboardSectionParametersModel(messageSection.uiParameters);
        /*if (messageSection.components)
            for(var componentRef of messageSection.components){
                this.components.push(new DashboardSectionComponentModel(componentRef))
            }*/
        if (messageSection.panels) {
            //console.log("spa",messageSection.panels);
            for (var _i = 0, _a = messageSection.panels; _i < _a.length; _i++) {
                var subMessageSection = _a[_i];
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

var DashboardBackgroundModel = /** @class */ (function () {
    function DashboardBackgroundModel(message) {
        this.type = message.type;
        this.cameraId = message.cameraId;
    }
    return DashboardBackgroundModel;
}());

var DashboardModel = /** @class */ (function () {
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
        this.dashboards = [];
        this.id = message.id;
        this.name = message.name;
        this.componentType = "dashboard";
        this.type = message.type;
        this.isDefault = message.isDefault;
        this.template = message.template;
        this.unitSize = message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.sections = [];
        this.sysSections = [];
        if (!this.template) {
            var currentSection = null;
            for (var _i = 0, _a = message.sections; _i < _a.length; _i++) {
                var messageSection = _a[_i];
                if (!messageSection) {
                    console.log("dashboard with null section", this.id);
                    continue;
                }
                var section = new DashboardSectionModel(this, messageSection);
                var sysSection = true;
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
                    sysSection = false;
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
                if (sysSection)
                    this.sysSections.push(section);
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
    DashboardModel.prototype.getDashboardSectionById = function (id, sections) {
        for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
            var section = sections_1[_i];
            if (section.id == id)
                return section;
            else {
                var res = this.getDashboardSectionById(id, section.subSections);
                if (res)
                    return res;
            }
        }
        return null;
    };
    DashboardModel.prototype.addDashboardLink = function (link) {
        if (link.dashboardId == "*" || link.dashboardId == this.id || (link.dashboardId == "**default**" && this.isDefault)) {
            var sectionFound = false;
            var section = this.getDashboardSectionById(link.sectionId, this.sections);
            if (!section)
                section = this.getDashboardSectionById(link.sectionId, this.sysSections);
            if (section) {
                section.components.push(new DashboardSectionComponentModel(link));
            }
            else {
                console.log("adh", link);
                var messageSection = {
                    id: link.sectionId,
                    name: link.sectionName,
                    type: "panel",
                    uiParameters: {
                        "title": "",
                        "width": 0,
                        "height": 0,
                        "userLog": false,
                        "logLength": 0
                    }
                };
                var newSection = new DashboardSectionModel(this, messageSection);
                this.sections.push(newSection);
                newSection.components.push(new DashboardSectionComponentModel(link));
            }
        }
    };
    return DashboardModel;
}());



/***/ }),

/***/ "./src/app/models/dynamicValues.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/dynamicValues.model.ts ***!
  \***********************************************/
/*! exports provided: DynamicRangeType, DynamicRange, DynamicEnumOptionModel, DynamicEnumModel, DynamicNumberModel, DynamicStringModel, DynamicBooleanModel, DynamicDateTimeModel, DynamicColorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRangeType", function() { return DynamicRangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRange", function() { return DynamicRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicEnumOptionModel", function() { return DynamicEnumOptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicEnumModel", function() { return DynamicEnumModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicNumberModel", function() { return DynamicNumberModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicStringModel", function() { return DynamicStringModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicBooleanModel", function() { return DynamicBooleanModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDateTimeModel", function() { return DynamicDateTimeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicColorModel", function() { return DynamicColorModel; });
/* harmony import */ var _IComponent_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IComponent.model */ "./src/app/models/IComponent.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT


//import { ControllersFactory } from './factory' 
var DynamicRangeType;
(function (DynamicRangeType) {
    DynamicRangeType[DynamicRangeType["normal"] = 0] = "normal";
    DynamicRangeType[DynamicRangeType["warning"] = 1] = "warning";
    DynamicRangeType[DynamicRangeType["error"] = 2] = "error";
})(DynamicRangeType || (DynamicRangeType = {}));
;
var DynamicRange = /** @class */ (function () {
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

var DynamicEnumOptionModel = /** @class */ (function () {
    function DynamicEnumOptionModel(messageOption) {
        this.selected$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
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

var DynamicEnumModel = /** @class */ (function () {
    function DynamicEnumModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.options = [];
        this.lastSelected$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        var self = this;
        this.name = message.name;
        this.id = message.id;
        this.visible = message.visible;
        this.ui = message.ui;
        this.type = message.componentType;
        this.command = message.command;
        this.options = [];
        this.value$.next(message.value);
        for (var _i = 0, _a = message.options; _i < _a.length; _i++) {
            var option = _a[_i];
            this.options.push(new DynamicEnumOptionModel(option));
        }
        for (var _b = 0, _c = message.dashboardLinks; _b < _c.length; _b++) {
            var dashboardLink = _c[_b];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
        this.selectOptions(this.value$.value);
        this.value$.subscribe(function (v) {
            self.selectOptions(v);
        });
    }
    DynamicEnumModel.prototype.updateReferences = function () { };
    ;
    DynamicEnumModel.prototype.reload = function (component) { };
    ;
    DynamicEnumModel.prototype.selectOptions = function (selectedOptions) {
        console.log("soc");
        if (!selectedOptions)
            return;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected$.next(false);
        }
        for (var _b = 0, selectedOptions_1 = selectedOptions; _b < selectedOptions_1.length; _b++) {
            var selectedOption = selectedOptions_1[_b];
            console.log("so", selectedOption);
            for (var _c = 0, _d = this.options; _c < _d.length; _c++) {
                var option = _d[_c];
                console.log("sox", option);
                if (option.value == selectedOption) {
                    option.selected$.next(true);
                    this.lastSelected$.next(option);
                    console.log("os", option.text, option.selected$.value);
                    break;
                }
            }
        }
    };
    return DynamicEnumModel;
}());

var DynamicNumberModel = /** @class */ (function () {
    function DynamicNumberModel(message) {
        this.componentType = "DynamicValue";
        this.dashboards = [];
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sparkline$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
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
        for (var _b = 0, _c = message.dashboardLinks; _b < _c.length; _b++) {
            var dashboardLink = _c[_b];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    DynamicNumberModel.prototype.updateReferences = function () { };
    ;
    DynamicNumberModel.prototype.reload = function (component) { };
    ;
    return DynamicNumberModel;
}());

var DynamicStringModel = /** @class */ (function () {
    function DynamicStringModel(message) {
        this.componentType = "DynamicValue";
        this.dashboards = [];
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
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
        for (var prop in message.ui) {
            if (this.ui[prop] != undefined)
                this.ui[prop] = message.ui[prop];
        }
        for (var _i = 0, _a = message.dashboardLinks; _i < _a.length; _i++) {
            var dashboardLink = _a[_i];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    DynamicStringModel.prototype.updateReferences = function () { };
    ;
    DynamicStringModel.prototype.reload = function (component) { };
    ;
    return DynamicStringModel;
}());

var DynamicBooleanModel = /** @class */ (function () {
    function DynamicBooleanModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.command = message.command;
        this.value$.next(message.value);
        for (var _i = 0, _a = message.dashboardLinks; _i < _a.length; _i++) {
            var dashboardLink = _a[_i];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
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
var DynamicDateTimeModel = /** @class */ (function () {
    function DynamicDateTimeModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.command = message.command;
        for (var _i = 0, _a = message.dashboardLinks; _i < _a.length; _i++) {
            var dashboardLink = _a[_i];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    DynamicDateTimeModel.prototype.updateReferences = function () { };
    ;
    DynamicDateTimeModel.prototype.reload = function (component) { };
    ;
    return DynamicDateTimeModel;
}());

var DynamicColorModel = /** @class */ (function () {
    function DynamicColorModel(message) {
        this.componentType = "DynamicValue";
        this.ui = {};
        this.dashboards = [];
        this.value$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.id = message.id;
        this.name = message.name;
        this.type = message.componentType;
        this.ui = message.ui;
        this.isInput = message.isInput;
        this.visible = message.visible;
        this.subType = message.inputType;
        this.value$.next(message.value);
        this.command = message.command;
        for (var _i = 0, _a = message.dashboardLinks; _i < _a.length; _i++) {
            var dashboardLink = _a[_i];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    DynamicColorModel.prototype.updateReferences = function () { };
    ;
    DynamicColorModel.prototype.reload = function (component) { };
    ;
    return DynamicColorModel;
}());



/***/ }),

/***/ "./src/app/models/factory.ts":
/*!***********************************!*\
  !*** ./src/app/models/factory.ts ***!
  \***********************************/
/*! exports provided: ComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFactory", function() { return ComponentFactory; });
/* harmony import */ var _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _controller_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.model */ "./src/app/models/controller.model.ts");
/* harmony import */ var _sensor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensor.model */ "./src/app/models/sensor.model.ts");
/* harmony import */ var _dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _action_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action.model */ "./src/app/models/action.model.ts");





var ComponentFactory = /** @class */ (function () {
    function ComponentFactory() {
    }
    ComponentFactory.createComponents = function (message) {
        var foundComponents = this.createComponentsRec(message);
        this.linkToDashboards(foundComponents[0], foundComponents[1]);
        return foundComponents[0];
    };
    ComponentFactory.createComponentsRec = function (message) {
        var result = [];
        var dashboards = [];
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                subComponents = this.createComponentsRec(message[i]);
                result = result.concat(subComponents[0]);
                dashboards = dashboards.concat(subComponents[1]);
            }
        }
        else {
            var component = null;
            var subComponents = [];
            if (message.componentType == "KerviAction")
                component = new _action_model__WEBPACK_IMPORTED_MODULE_4__["ActionModel"](message);
            else if (message.componentType == "dashboard") {
                component = new _dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardModel"](message);
                dashboards.push(component);
            }
            else if (message.componentType == "sensor") {
                component = new _sensor_model__WEBPACK_IMPORTED_MODULE_2__["SensorModel"](message);
                subComponents = component.subSensors;
            }
            else if (message.componentType == "controller")
                component = new _controller_model__WEBPACK_IMPORTED_MODULE_1__["ControllerModel"](message);
            else if (message.componentType == "boolean-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicBooleanModel"](message);
            else if (message.componentType == "number-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicNumberModel"](message);
            else if (message.componentType == "string-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicStringModel"](message);
            else if (message.componentType == "enum-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicEnumModel"](message);
            else if (message.componentType == "datetime-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicDateTimeModel"](message);
            else if (message.componentType == "color-value")
                component = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_0__["DynamicColorModel"](message);
            if (component)
                result.push(component);
            if (subComponents) {
                for (var _i = 0, subComponents_1 = subComponents; _i < subComponents_1.length; _i++) {
                    var subComponent = subComponents_1[_i];
                    result.push(subComponent);
                }
            }
        }
        return [result, dashboards];
    };
    ComponentFactory.linkToDashboards = function (components, dashboards) {
        //console.log("ltd", components, dashboards);
        for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
            var component = components_1[_i];
            if (!(component instanceof _dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardModel"])) {
                for (var _a = 0, _b = component.dashboards; _a < _b.length; _a++) {
                    var link = _b[_a];
                    for (var _c = 0, dashboards_1 = dashboards; _c < dashboards_1.length; _c++) {
                        var dashboard = dashboards_1[_c];
                        dashboard.addDashboardLink(link);
                    }
                }
            }
        }
    };
    return ComponentFactory;
}());



/***/ }),

/***/ "./src/app/models/sensor.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/sensor.model.ts ***!
  \****************************************/
/*! exports provided: SensorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorModel", function() { return SensorModel; });
/* harmony import */ var _IComponent_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IComponent.model */ "./src/app/models/IComponent.model.ts");
/* harmony import */ var _dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT


var SensorModel = /** @class */ (function () {
    function SensorModel(message) {
        this.subSensors = [];
        this.id = null;
        this.name = null;
        this.componentType = "sensor";
        this.ui = {};
        this.type = null;
        this.visible = true;
        this.value = null;
        this.valueType = null;
        this.dashboards = [];
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.visible = message.visible;
        this.value = new _dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"](message);
        this.valueType = message.value_type;
        this.type = message.type;
        for (var _i = 0, _a = message.subSensors; _i < _a.length; _i++) {
            var subSensor = _a[_i];
            this.subSensors.push(new SensorModel(subSensor));
        }
        for (var _b = 0, _c = message.dashboardLinks; _b < _c.length; _b++) {
            var dashboardLink = _c[_b];
            this.dashboards.push(new _IComponent_model__WEBPACK_IMPORTED_MODULE_0__["DashboardLink"](this, dashboardLink));
        }
    }
    SensorModel.prototype.updateReferences = function () { };
    ;
    SensorModel.prototype.reload = function (component) { };
    ;
    return SensorModel;
}());



/***/ }),

/***/ "./src/app/sensors/sensor/sensor.component.html":
/*!******************************************************!*\
  !*** ./src/app/sensors/sensor/sensor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"sensor.subSensors.length == 0\">\r\n\t<dynamic-value-number *ngIf=\"sensor.valueType == 'number'\" [inline]=\"inline\" [input]=\"sensor.value\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\"></dynamic-value-number>\r\n\t<dynamic-value-color *ngIf=\"sensor.valueType == 'color'\" [inline]=\"inline\" [value]=\"sensor.value\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\"></dynamic-value-color>\t\r\n</ng-container>\r\n<ng-container *ngIf=\"sensor.subSensors.length > 0\">\r\n\t<div >\r\n\t\t<div>\r\n\t\t\t<i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t\t<span *ngIf=\"parameters.label\">{{parameters.label}}:</span>\r\n\t\t</div>\r\n\t\t<ng-container *ngFor=\"let subSensor of sensor.subSensors\">\r\n\t\t\t<div style=\"padding-left:15px;clear:both\">\r\n\t\t\t\t<kervi-sensor [inline]=\"lnline\" [sensor]=\"subSensor\" ></kervi-sensor>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/sensors/sensor/sensor.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sensors/sensor/sensor.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sensors/sensor/sensor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sensors/sensor/sensor.component.ts ***!
  \****************************************************/
/*! exports provided: SensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorComponent", function() { return SensorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sensor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/sensor.model */ "./src/app/models/sensor.model.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SensorComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_sensor_model__WEBPACK_IMPORTED_MODULE_1__["SensorModel"])
    ], SensorComponent.prototype, "sensor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SensorComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSectionModel"])
    ], SensorComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SensorComponent.prototype, "inline", void 0);
    SensorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-sensor',
            template: __webpack_require__(/*! ./sensor.component.html */ "./src/app/sensors/sensor/sensor.component.html"),
            styles: [__webpack_require__(/*! ./sensor.component.scss */ "./src/app/sensors/sensor/sensor.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_3__["KerviService"], _template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]])
    ], SensorComponent);
    return SensorComponent;
}());



/***/ }),

/***/ "./src/app/sensors/sensors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sensors/sensors.module.ts ***!
  \*******************************************/
/*! exports provided: SensorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsModule", function() { return SensorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensor/sensor.component */ "./src/app/sensors/sensor/sensor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _values_values_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/values.module */ "./src/app/values/values.module.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SensorsModule = /** @class */ (function () {
    function SensorsModule() {
    }
    SensorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _values_values_module__WEBPACK_IMPORTED_MODULE_4__["ValuesModule"]
            ],
            exports: [
                _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_2__["SensorComponent"]
            ],
            providers: [],
            declarations: [
                _sensor_sensor_component__WEBPACK_IMPORTED_MODULE_2__["SensorComponent"]
            ]
        })
    ], SensorsModule);
    return SensorsModule;
}());



/***/ }),

/***/ "./src/app/template.service.ts":
/*!*************************************!*\
  !*** ./src/app/template.service.ts ***!
  \*************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateService = /** @class */ (function () {
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
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "./src/app/ui-components/action/action.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui-components/action/action.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"value-value\">\r\n            <kervi-switchbutton [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"state\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n            <kervi-button [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"state\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <kervi-switchbutton [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"state\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n    <kervi-button [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"state\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/action/action.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ui-components/action/action.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/action/action.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/action/action.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_action_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/action.model */ "./src/app/models/action.model.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionComponent = /** @class */ (function () {
    function ActionComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.action = null;
        this.parameters = null;
        this.dashboardSection = null;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.size = 0;
        this.unitSize = 150;
        this.state = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.actionParameters = null;
        this.interruptParameters = null;
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
        self.state.next(this.action.running$.value);
        this.action.running$.subscribe(function (v) {
            self.state.next(v);
        });
    };
    ActionComponent.prototype.press = function () {
        if (!this.action.running$.value)
            if (this.parameters.actionParameters)
                (_a = this.kerviService.spine).sendCommand.apply(_a, [this.action.runCommand].concat(this.parameters.actionParameters));
            else
                this.kerviService.spine.sendCommand(this.action.runCommand);
        var _a;
    };
    ActionComponent.prototype.release = function () {
        if (this.action.running$.value && this.action.interruptCommand)
            if (this.parameters.interruptParameters)
                (_a = this.kerviService.spine).sendCommand.apply(_a, [this.action.interruptCommand].concat(this.parameters.interruptParameters));
            else
                this.kerviService.spine.sendCommand(this.action.interruptCommand);
        var _a;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_action_model__WEBPACK_IMPORTED_MODULE_1__["ActionModel"])
    ], ActionComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSectionModel"])
    ], ActionComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"])
    ], ActionComponent.prototype, "defaultSizes", void 0);
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-action',
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/ui-components/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.scss */ "./src/app/ui-components/action/action.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_3__["KerviService"], _template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/button/button.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui-components/button/button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!inline\" class=\"btn btn-primary pull-right\" [style.min.width]=\"width\" [style.height]=\"height\" [ngClass]=\"{'btn-primary-hover': (value.value$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"value.name\">\r\n    <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n    <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n</a>\r\n\r\n<a *ngIf=\"inline\" class=\"btn btn-primary\" [ngClass]=\"{'btn-primary-hover': (value.value$ | async)}\" (mousedown)=\"press()\" (mouseup)=\"release()\" [attr.title]=\"value.name\">\r\n    <i *ngIf=\"parameters.buttonIcon\" class='fa fa-{{parameters.buttonIcon}}'></i>\r\n    <ng-container *ngIf=\"parameters.buttonText\" >{{ parameters.buttonText}}</ng-container>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/ui-components/button/button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ui-components/button/button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/button/button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/button/button.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var Chart:any;
var ButtonComponent = /** @class */ (function () {
    //private  unitSize:number = 150;
    //state:boolean = false;
    //canvasId:string="";
    //private chart:any=null;
    //private chartData = [];
    function ButtonComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.parameters = null;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
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
        console.log("x");
        this.parent.press();
        //this.kerviService.spine.sendCommand(this.value.command, true);
    };
    ButtonComponent.prototype.release = function () {
        this.parent.release();
        //this.kerviService.spine.sendCommand(this.value.command, false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], ButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ButtonComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"])
    ], ButtonComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "parent", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/ui-components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/ui-components/button/button.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/cam-viewer/cam-viewer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ui-components/cam-viewer/cam-viewer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isBackground\">\r\n\t<div id=\"video-viewer\" class=\"video video-background\" style=\"text-align:center;position:fixed;top:60px;left:0px;height:100%;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\">\r\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;\">\r\n\t\t\t<kervi-mpeg-viewer [height]=100   [cameraSource]=\"(cameraSource$ | async)\" > </kervi-mpeg-viewer>\r\n\t\t</span>\r\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\"></canvas>\r\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<div class=\"cam-pad-area\" style=\"display:none\">\r\n\t\t\t<fieldset id=\"camPad\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\tpan : <input id=\"cam-servo-pan\" name=\"x\" value=\"0\"> tilt : <input id=\"cam-servo-tilt\" name=\"y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t\t<div style=\"position:absolute;top:30px;left:0px;width:100%;height:50px\">\r\n\t\t\t<ng-container  *ngFor=\"let component of actions\">\r\n\t\t\t\t<kervi-action *ngIf=\"component.visible\" [dashboardSection]=\"dashboardSection\" [action]=\"component\" ></kervi-action>\r\n\t\t\t</ng-container>\r\n\t\t\t<a class=\"btn btn-primary \" [style.width]=\"width\" [style.height]=\"height\" (mousedown)=\"imageViewer.show()\" [attr.title]=\"browse\">\r\n\t\t\t\t<i  class='fa fa-folder'></i>\r\n\t\t\t\t\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isBackground\">\r\n\t<div id=\"video-viewer\" class=\"video\" style=\"overflow:hidden;position:relative;width:100%\">\r\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;height:100%;width:100%\">\r\n\t\t\t<kervi-mpeg-viewer [width]=100  [cameraSource]=\"(cameraSource$ | async)\" > </kervi-mpeg-viewer>\r\n\t\t</span>\r\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\r\n\t\t<div class=\"cam-pad-area\" style=\"position:absolute\">\r\n\t\t\t<fieldset id=\"camPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\">\r\n\t\t\t\t<legend></legend>\r\n\t\t\t\tpan : <input id=\"cam-servo-pan\" name=\"x\" value=\"0\"> tilt : <input id=\"cam-servo-tilt\" name=\"y\" value=\"0\">\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<div style=\"\">\r\n\t\t<ng-container  *ngFor=\"let component of actions\">\r\n\t\t\t<kervi-action *ngIf=\"component.visible\" [dashboardSection]=\"dashboardSection\" [action]=\"component\" ></kervi-action>\r\n\t\t</ng-container>\r\n\t\t<a class=\"btn btn-primary \" [style.width]=\"width\" [style.height]=\"height\" (mousedown)=\"imageViewer.show()\" [attr.title]=\"browse\">\r\n\t\t\t<i  class='fa fa-folder'></i>\r\n\t\t\t\r\n\t\t</a>\r\n\t</div>\r\n</ng-container>\r\n<kervi-image-viewer #imageViewer [camComponent]=\"this\" [cameraSource]=\"(cameraSource$ | async)\"></kervi-image-viewer>"

/***/ }),

/***/ "./src/app/ui-components/cam-viewer/cam-viewer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/ui-components/cam-viewer/cam-viewer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-background#video-viewer {\n  margin-top: -20px; }\n\n.cam-pad-area {\n  vertical-align: middle;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  left: 389px;\n  top: 132px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/ui-components/cam-viewer/cam-viewer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-components/cam-viewer/cam-viewer.component.ts ***!
  \******************************************************************/
/*! exports provided: CamViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamViewerComponent", function() { return CamViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ControllersService } from '../controllers.service';

var CamViewerComponent = /** @class */ (function () {
    function CamViewerComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.cameraId = null;
        this.isBackground = false;
        this.parameters = null;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.camera$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.cameraSource$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.cameraName$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.padSize = 180;
        this.panSubscription = null;
        this.tiltSubscription = null;
        this.moveDelayTimer = null;
        this.pointOfInterests = [];
        this.actions = null;
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
                self.cameraName$.next(v.name);
                self.actions = v.actions;
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
    CamViewerComponent.prototype.browsePress = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CamViewerComponent.prototype, "cameraId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CamViewerComponent.prototype, "isBackground", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CamViewerComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"])
    ], CamViewerComponent.prototype, "defaultSizes", void 0);
    CamViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-cam-viewer',
            template: __webpack_require__(/*! ./cam-viewer.component.html */ "./src/app/ui-components/cam-viewer/cam-viewer.component.html"),
            styles: [__webpack_require__(/*! ./cam-viewer.component.scss */ "./src/app/ui-components/cam-viewer/cam-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CamViewerComponent);
    return CamViewerComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/chart/chart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/chart/chart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%\">\r\n    <div class=\"row\" *ngIf=\"parameters.chartButtons || parameters.label\">\r\n        <div class=\"col-sm-6\" *ngIf=\"parameters.label\">\r\n            {{parameters.label}}\r\n        </div>\r\n        <div class=\"col-sm-6 text-right\" *ngIf=\"parameters.chartButtons=='top'\">\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        {{selectedPeriodText}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"wrapper\" style=\"\">\r\n        <canvas id=\"{{canvasId}}\" class=\"sensor-canvas\"></canvas>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 text-right\" *ngIf=\"parameters.chartButtons && parameters.chartButtons!='top'\">\r\n            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click) = \"movePeriod(-1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click) = \"movePeriod(1)\"></i></button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" title=\"live\" (click) = \"goLive()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        {{selectedPeriodText}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('5min')\" >5 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('15min')\" >15 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('30min')\" >30 min</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\" >Hour</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('day')\">Day</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('week')\">Week</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('month')\">Month</span>\r\n                        <span class=\"dropdown-item\" href=\"#\" (click)=\"selectPeriod('hour')\">Year</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/chart/chart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/chart/chart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/chart/chart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-components/chart/chart.component.ts ***!
  \********************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = /** @class */ (function () {
    function ChartComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.parameters = null;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
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
                            fill: self.parameters.chartFill,
                            //lineTension: 0.5,
                            //borderColor: self.color("border-color",".sensor-chart"),
                            pointBorderWidth: 1,
                            pointRadius: self.parameters.chartPoint,
                            //backgroundColor: "rgba(75,192,192,0.1)",
                            borderColor: "rgba(0,0,0,0.1)",
                            borderWidth: 3
                            /*borderColor: self.color("border-color",".sensor-chart"),
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: self.color("color",".sensor-chart"),
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: self.color("color",".sensor-chart .spot"),
                            pointHoverBorderColor: self.color("border-color",".sensor-chart .spot"),
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,*/
                        },
                    ]
                },
                options: {
                    responsive: true,
                    //maintainAspectRatio: true,
                    pan: {
                        enabled: false,
                        mode: 'xy'
                    },
                    zoom: {
                        enabled: false,
                        mode: 'xy'
                    },
                    title: {
                        display: false,
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
                                gridLines: {},
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
                                ticks: {},
                                gridLines: {
                                    //color:"rgba(255,255,255,0.5)",
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"])
    ], ChartComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChartComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChartComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"])
    ], ChartComponent.prototype, "defaultSizes", void 0);
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/ui-components/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/ui-components/chart/chart.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_3__["KerviService"], _template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/color/color.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/color/color.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width:90px\" class=\"input-group\">\r\n<div  attr.value=\"{{value | async}}\" class=\"form-control color\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-components/color/color.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/color/color.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/color/color.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-components/color/color.component.ts ***!
  \********************************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorComponent = /** @class */ (function () {
    function ColorComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.value = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("#FFFFFF");
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.picker = null;
    }
    ColorComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters) {
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
        self.valueSubscription = self.value.subscribe(function (v) {
            if (self.picker && this.parent && this.parent.value.ui.isInput)
                jQuery('.color', self.elementRef.nativeElement).css("background-color", v);
            else
                jQuery('.color', self.elementRef.nativeElement).attr("style", "background-color:" + v);
        });
        if (this.parent.value.ui.isInput) {
            setTimeout(function () {
                self.picker = jQuery('.color', self.elementRef.nativeElement).colorPicker({
                    //color: 'rgba(255,12,14,1)',
                    cssAddon: '.cp-color-picker {z-index:2000}',
                    buildCallback: function (b) {
                    },
                    positionCallback: function (p) {
                    },
                    renderCallback: function (v) {
                        var value = v.text;
                        if (value.indexOf("rgb") == 0) {
                            var rgb = v.text.split(',');
                            var r = parseInt(rgb[0].substring(4));
                            var g = parseInt(rgb[1]);
                            var b = parseInt(rgb[2]);
                            value = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                        }
                        if (value)
                            self.parent.color_change(value);
                    },
                    actionCallback: function (v, x) {
                        console.log("c", v, x);
                    }
                });
            }, 0);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
    ], ColorComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSectionModel"])
    ], ColorComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColorComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ColorComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"])
    ], ColorComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColorComponent.prototype, "parent", void 0);
    ColorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-color',
            template: __webpack_require__(/*! ./color.component.html */ "./src/app/ui-components/color/color.component.html"),
            styles: [__webpack_require__(/*! ./color.component.scss */ "./src/app/ui-components/color/color.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorComponent);
    return ColorComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/datetimepicker/datetimepicker.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui-components/datetimepicker/datetimepicker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" >\r\n    <div class=\"input-group date\" id=\"datetimepicker_{{id}}\" data-target-input=\"nearest\">\r\n        <input type=\"text\" class=\"form-control datetimepicker-input\"  [attr.data-target]=\"'#datetimepicker_' + id\"/>\r\n        <div class=\"input-group-append\" [attr.data-target]=\"'#datetimepicker_' + id\" data-toggle=\"datetimepicker\">\r\n            <span *ngIf=\"parameters.type=='datetime' || parameters.type=='date'\" class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n            <span *ngIf=\"parameters.type=='time'\" class=\"input-group-text\"><i class=\"fa fa-clock-o\"></i></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/datetimepicker/datetimepicker.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-components/datetimepicker/datetimepicker.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/datetimepicker/datetimepicker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-components/datetimepicker/datetimepicker.component.ts ***!
  \**************************************************************************/
/*! exports provided: DateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeComponent", function() { return DateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var Chart:any;
var DateTimeComponent = /** @class */ (function () {
    function DateTimeComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.value = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.parameters = null;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.id = null;
        this.datetimevalue = null;
    }
    DateTimeComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    DateTimeComponent.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    DateTimeComponent.prototype.ngOnInit = function () {
        this.id = this.guid();
        var self = this;
        if (self.parameters) {
            if (!self.inline && self.parameters.inline)
                self.inline = true;
        }
        else {
        }
        if (self.value.value)
            self.datetimevalue = self.value.value.toLocaleString();
        setTimeout(function () {
            var mdate = moment(self.value.value);
            console.log("dp", self.parent.value.id, self.value.value, mdate.toDate());
            var options = {
                date: moment(self.value.value).toDate(),
                buttons: {
                    showToday: true,
                    showClear: true,
                    showClose: true
                }
            };
            if (self.parameters.type == "time")
                options["format"] = self.kerviService.application$.value.display.unit_system.datetime.time;
            else if (self.parameters.type == "date")
                options["format"] = self.kerviService.application$.value.display.unit_system.datetime.date;
            else
                options["format"] = self.kerviService.application$.value.display.unit_system.datetime.datetime;
            jQuery('.date', self.elementRef.nativeElement).datetimepicker(options);
            jQuery('.date', self.elementRef.nativeElement).on("change.datetimepicker", function (e) {
                self.parent.change(e);
            });
            self.value.subscribe(function (v) {
                console.log("dvl", v);
                if (v) {
                    jQuery('.date', self.elementRef.nativeElement).data("datetimepicker").date(moment(v).toDate());
                }
            });
        }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], DateTimeComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DateTimeComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DateTimeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DateTimeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DateTimeComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"])
    ], DateTimeComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DateTimeComponent.prototype, "parent", void 0);
    DateTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-datetime',
            template: __webpack_require__(/*! ./datetimepicker.component.html */ "./src/app/ui-components/datetimepicker/datetimepicker.component.html"),
            styles: [__webpack_require__(/*! ./datetimepicker.component.scss */ "./src/app/ui-components/datetimepicker/datetimepicker.component.scss")],
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], DateTimeComponent);
    return DateTimeComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/gauge/gauge.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/gauge/gauge.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-gauge class=\"gauge-width\"\r\n    [value]=\"(value.value$ | async)\" \r\n    [min] = \"value.minValue\"\r\n    [max] = \"value.maxValue\"\r\n    [thresholds] = \"dataHighlights\"\r\n    [thick] = \"12\"\r\n    [cap] = \"round\"\r\n    [duration] = \"1\"\r\n    \r\n>\r\n<ngx-gauge-prepend>\r\n    <!-- custom prepend text or HTML goes here -->\r\n</ngx-gauge-prepend>\r\n<ngx-gauge-value>\r\n    {{value.value$ | async}}\r\n    <div class=\"gauge-unit\">{{value.unit}}</div>\r\n</ngx-gauge-value>\r\n<ngx-gauge-append>\r\n    \r\n</ngx-gauge-append>\r\n<ngx-gauge-label>\r\n    \r\n    <div>{{value.name}}</div>\r\n</ngx-gauge-label>\r\n\r\n</ngx-gauge>"

/***/ }),

/***/ "./src/app/ui-components/gauge/gauge.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/gauge/gauge.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/gauge/gauge.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-components/gauge/gauge.component.ts ***!
  \********************************************************/
/*! exports provided: GaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeComponent", function() { return GaugeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GaugeComponent = /** @class */ (function () {
    function GaugeComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.value = null;
        this.parameters = null;
        this.type = "radial_gauge";
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.unitSize = 110;
        this.canvasId = "";
        this.dataHighlights = {};
        this.gauge = null;
        this.gaugeTypes = ['radial_gauge', 'vertical_linear_gauge', 'horizontal_linear_gauge', 'compass'];
    }
    GaugeComponent.prototype.color = function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    GaugeComponent.prototype.ngOnInit = function () {
        var self = this;
        this.canvasId = this.templateService.makeId();
        var warningColor = this.color("color", ".sensor-template .sensor-warning");
        var fatalColor = this.color("color", ".sensor-template .sensor-fatal");
        var normalColor = this.color("color", ".sensor-template .sensor-major-ticks");
        var fromLimit = self.value.minValue;
        this.dataHighlights[self.value.minValue] = { color: normalColor };
        for (var _i = 0, _a = self.value.ranges; _i < _a.length; _i++) {
            var range = _a[_i];
            if (range.type == _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicRangeType"].error)
                this.dataHighlights[range.start] = { color: fatalColor };
            else if (range.type == _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicRangeType"].warning)
                this.dataHighlights[range.start] = { color: warningColor };
            else
                this.dataHighlights[range.start] = { color: normalColor };
            this.dataHighlights[range.end] = { color: normalColor };
        }
        console.log("dr", self.value.ranges, this.dataHighlights);
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
            highlights: this.dataHighlights,
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"])
    ], GaugeComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugeComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GaugeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"])
    ], GaugeComponent.prototype, "defaultSizes", void 0);
    GaugeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-gauge',
            template: __webpack_require__(/*! ./gauge.component.html */ "./src/app/ui-components/gauge/gauge.component.html"),
            styles: [__webpack_require__(/*! ./gauge.component.scss */ "./src/app/ui-components/gauge/gauge.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_3__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]])
    ], GaugeComponent);
    return GaugeComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/icons/icons.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/icons/icons.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-{{icon}}\"></i>"

/***/ }),

/***/ "./src/app/ui-components/icons/icons.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/icons/icons.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/icons/icons.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui-components/icons/icons.component.ts ***!
  \********************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icon = null;
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IconsComponent.prototype, "icon", void 0);
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-icon',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/ui-components/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/ui-components/icons/icons.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/image-viewer/image-viewer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui-components/image-viewer/image-viewer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"z-index:2001\">\r\n\r\n    <!-- Background of PhotoSwipe. \r\n         It's a separate element as animating opacity is faster than rgba(). -->\r\n    <div class=\"pswp__bg\"></div>\r\n\r\n    <!-- Slides wrapper with overflow:hidden. -->\r\n    <div class=\"pswp__scroll-wrap\">\r\n\r\n        <!-- Container that holds slides. \r\n            PhotoSwipe keeps only 3 of them in the DOM to save memory.\r\n            Don't modify these 3 pswp__item elements, data is added later on. -->\r\n        <div class=\"pswp__container\">\r\n            <div class=\"pswp__item\"></div>\r\n            <div class=\"pswp__item\"></div>\r\n            <div class=\"pswp__item\"></div>\r\n        </div>\r\n\r\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\r\n        <div class=\"pswp__ui pswp__ui--hidden\">\r\n\r\n            <div class=\"pswp__top-bar\">\r\n\r\n                <!--  Controls are self-explanatory. Order can be changed. -->\r\n\r\n                <div class=\"pswp__counter\"></div>\r\n\r\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\r\n\r\n                <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\r\n\r\n                <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\r\n\r\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\r\n\r\n                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\r\n                <!-- element will get class pswp__preloader--active when preloader is running -->\r\n                <div class=\"pswp__preloader\">\r\n                    <div class=\"pswp__preloader__icn\">\r\n                      <div class=\"pswp__preloader__cut\">\r\n                        <div class=\"pswp__preloader__donut\"></div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\r\n                <div class=\"pswp__share-tooltip\"></div> \r\n            </div>\r\n\r\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\r\n            </button>\r\n\r\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\r\n            </button>\r\n\r\n            <div class=\"pswp__caption\">\r\n                <div class=\"pswp__caption__center\"></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/image-viewer/image-viewer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ui-components/image-viewer/image-viewer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/image-viewer/image-viewer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-components/image-viewer/image-viewer.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cam-viewer/cam-viewer.component */ "./src/app/ui-components/cam-viewer/cam-viewer.component.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.camComponent = null;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.width = null;
        this.height = null;
        this.firstLoad = true;
        var self = this;
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
    };
    ImageViewerComponent.prototype.show = function () {
        var _this = this;
        var self = this;
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = [
            {
                src: 'https://placekitten.com/600/400',
                w: 600,
                h: 400
            }
        ];
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        setTimeout(function () {
            _this.kerviService.spine.sendQuery(_this.camComponent.cameraId + ".getMedia", function (response) {
                console.log("ir", response);
                for (var _i = 0, _a = response.files; _i < _a.length; _i++) {
                    var file = _a[_i];
                    console.log("f", response["path"] + "/" + file.name);
                    gallery.items.push({
                        src: response["path"] + "/" + file.name,
                        h: 400,
                        w: 600
                    });
                }
                if (response.files.length > 0) {
                    gallery.goTo(2);
                    gallery.items.splice(1, 1);
                    //gallery.invalidateCurrItems();
                    // updates the content of slides
                    gallery.updateSize(true);
                }
            });
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CamViewerComponent"])
    ], ImageViewerComponent.prototype, "camComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageViewerComponent.prototype, "cameraSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], ImageViewerComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageViewerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageViewerComponent.prototype, "height", void 0);
    ImageViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-image-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/ui-components/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/ui-components/image-viewer/image-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img (load)=\"imageReady()\" class=\"camImage\" src=\"{{cameraSource}}\" [style.height.%]=\"height\" [style.width.%]=\"width\">\r\n"

/***/ }),

/***/ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video-viewer {\n  margin-top: -20px; }\n\n.cam-pad-area {\n  z-index: 1200;\n  vertical-align: middle;\n  width: 200px;\n  display: inline-block;\n  position: absolute;\n  left: 389px;\n  top: 132px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.ts ***!
  \********************************************************************/
/*! exports provided: MPEGViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPEGViewerComponent", function() { return MPEGViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cam-viewer/cam-viewer.component */ "./src/app/ui-components/cam-viewer/cam-viewer.component.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MPEGViewerComponent = /** @class */ (function () {
    function MPEGViewerComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.camComponent = null;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CamViewerComponent"])
    ], MPEGViewerComponent.prototype, "camComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MPEGViewerComponent.prototype, "cameraSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], MPEGViewerComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MPEGViewerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MPEGViewerComponent.prototype, "height", void 0);
    MPEGViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-mpeg-viewer',
            template: __webpack_require__(/*! ./mpeg-viewer.component.html */ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.html"),
            styles: [__webpack_require__(/*! ./mpeg-viewer.component.scss */ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MPEGViewerComponent);
    return MPEGViewerComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/slider/slider.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui-components/slider/slider.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:rgba(0,0,0,.1); border-radius: 8px;padding-left:8px;padding-right:8px;display:flex\">\r\n    <input class=\"form-control\" />\r\n    <div style=\"display: inline-block;white-space: nowrap\">\r\n        <kervi-icon class=\"slider-button\" style=\"margin-left:14px;\" (mousedown)=\"step(-1)\" icon=\"caret-down\"></kervi-icon>\r\n        <kervi-icon class=\"slider-button\" style=\"\" (mousedown)=\"step(1)\" icon=\"caret-up\" style=\"margin-left:4px;\"></kervi-icon>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/slider/slider.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ui-components/slider/slider.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/slider/slider.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-components/slider/slider.component.ts ***!
  \**********************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SliderComponent = /** @class */ (function () {
    function SliderComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.type = "horizontal_slider";
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
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
    SliderComponent.prototype.step = function (v) {
        this.kerviService.spine.sendCommand(this.value.command, this.value.value$.value + v);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"])
    ], SliderComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "tick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"])
    ], SliderComponent.prototype, "defaultSizes", void 0);
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/ui-components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/ui-components/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/sparkline/sparkline.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/sparkline/sparkline.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/sparkline/sparkline.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui-components/sparkline/sparkline.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/sparkline/sparkline.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-components/sparkline/sparkline.component.ts ***!
  \****************************************************************/
/*! exports provided: SparklineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparklineComponent", function() { return SparklineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SparklineComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"])
    ], SparklineComponent.prototype, "value", void 0);
    SparklineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'value-sparkline',
            template: __webpack_require__(/*! ./sparkline.component.html */ "./src/app/ui-components/sparkline/sparkline.component.html"),
            styles: [__webpack_require__(/*! ./sparkline.component.css */ "./src/app/ui-components/sparkline/sparkline.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]])
    ], SparklineComponent);
    return SparklineComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/switch-button/switch-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ui-components/switch-button/switch-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\" \" >\r\n    <input type=\"checkbox\" checked=\"\">\r\n</div>    \r\n\r\n\r\n<!--<div *ngIf=\"!inline\" class=\"can-toggle pull-right\" [style.width.%]=\"parameters.inputSize\">\r\n    <input id=\"a\" class=\"\"  type=\"checkbox\" [attr.checked]=\"state ? '' : null\" >\r\n    <label for=\"a\">\r\n        <div class=\"can-toggle__switch\" data-checked=\"<b>On</b>\" data-unchecked=\"Off\"></div>\r\n    </label>\r\n</div>-->\r\n\r\n<div *ngIf=\"inline\" class=\"\" style=\"display:inline-flex\">\r\n    <input type=\"checkbox\" checked=\"\">\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/switch-button/switch-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ui-components/switch-button/switch-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/switch-button/switch-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui-components/switch-button/switch-button.component.ts ***!
  \************************************************************************/
/*! exports provided: SwitchButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchButtonComponent", function() { return SwitchButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchButtonComponent = /** @class */ (function () {
    function SwitchButtonComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.value = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.state = false;
    }
    SwitchButtonComponent.prototype.press = function () {
        this.parent.press();
        //this.kerviService.spine.sendCommand(this.value.command, true);
    };
    SwitchButtonComponent.prototype.release = function () {
        this.parent.release();
        //this.kerviService.spine.sendCommand(this.value.command, false);
    };
    SwitchButtonComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters) {
            //  this.parameters = this.value.ui;
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
        self.valueSubscription = self.value.subscribe(function (v) {
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
            if (self.value.value)
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on');
            else
                jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off');
            jQuery('input', self.elementRef.nativeElement).change(function () {
                var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
                console.log("z", state, self.value.value);
                if (state && !self.value.value)
                    self.press();
                else if (!state && self.value.value)
                    self.release();
            });
        }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
    ], SwitchButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSectionModel"])
    ], SwitchButtonComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitchButtonComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SwitchButtonComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"])
    ], SwitchButtonComponent.prototype, "defaultSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitchButtonComponent.prototype, "parent", void 0);
    SwitchButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kervi-switchbutton',
            template: __webpack_require__(/*! ./switch-button.component.html */ "./src/app/ui-components/switch-button/switch-button.component.html"),
            styles: [__webpack_require__(/*! ./switch-button.component.scss */ "./src/app/ui-components/switch-button/switch-button.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SwitchButtonComponent);
    return SwitchButtonComponent;
}());



/***/ }),

/***/ "./src/app/ui-components/ui-components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/ui-components.module.ts ***!
  \*******************************************************/
/*! exports provided: UIComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponentsModule", function() { return UIComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparkline/sparkline.component */ "./src/app/ui-components/sparkline/sparkline.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/ui-components/slider/slider.component.ts");
/* harmony import */ var _gauge_gauge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gauge/gauge.component */ "./src/app/ui-components/gauge/gauge.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/ui-components/chart/chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch-button/switch-button.component */ "./src/app/ui-components/switch-button/switch-button.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.component */ "./src/app/ui-components/button/button.component.ts");
/* harmony import */ var _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cam-viewer/cam-viewer.component */ "./src/app/ui-components/cam-viewer/cam-viewer.component.ts");
/* harmony import */ var _mpeg_viewer_mpeg_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mpeg-viewer/mpeg-viewer.component */ "./src/app/ui-components/mpeg-viewer/mpeg-viewer.component.ts");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "./src/app/ui-components/image-viewer/image-viewer.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action/action.component */ "./src/app/ui-components/action/action.component.ts");
/* harmony import */ var _datetimepicker_datetimepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datetimepicker/datetimepicker.component */ "./src/app/ui-components/datetimepicker/datetimepicker.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/ui-components/icons/icons.component.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var _color_color_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./color/color.component */ "./src/app/ui-components/color/color.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var UIComponentsModule = /** @class */ (function () {
    function UIComponentsModule() {
    }
    UIComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_1__["SparklineComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"],
                _gauge_gauge_component__WEBPACK_IMPORTED_MODULE_3__["GaugeComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"],
                _switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__["SwitchButtonComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_8__["CamViewerComponent"],
                _mpeg_viewer_mpeg_viewer_component__WEBPACK_IMPORTED_MODULE_9__["MPEGViewerComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ImageViewerComponent"],
                _action_action_component__WEBPACK_IMPORTED_MODULE_11__["ActionComponent"],
                _datetimepicker_datetimepicker_component__WEBPACK_IMPORTED_MODULE_12__["DateTimeComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__["IconsComponent"],
                _color_color_component__WEBPACK_IMPORTED_MODULE_15__["ColorComponent"]
            ],
            exports: [
                _sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_1__["SparklineComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"],
                _gauge_gauge_component__WEBPACK_IMPORTED_MODULE_3__["GaugeComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"],
                _switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__["SwitchButtonComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _cam_viewer_cam_viewer_component__WEBPACK_IMPORTED_MODULE_8__["CamViewerComponent"],
                _action_action_component__WEBPACK_IMPORTED_MODULE_11__["ActionComponent"],
                _datetimepicker_datetimepicker_component__WEBPACK_IMPORTED_MODULE_12__["DateTimeComponent"],
                _color_color_component__WEBPACK_IMPORTED_MODULE_15__["ColorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ngx_gauge__WEBPACK_IMPORTED_MODULE_14__["NgxGaugeModule"]
            ],
            providers: [],
            bootstrap: []
        }),
        __metadata("design:paramtypes", [])
    ], UIComponentsModule);
    return UIComponentsModule;
}());



/***/ }),

/***/ "./src/app/values/boolean-value/boolean-value.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/values/boolean-value/boolean-value.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <kervi-switchbutton class=\"pull-right\" [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value.value$\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n    <kervi-button [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"value.value$\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n    \r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <span *ngIf=\"parameters.labelIcon || parameters.label\" >&nbsp;</span>\r\n    <kervi-switchbutton [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value.value$\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-switchbutton>\r\n    <kervi-button [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"value.value$\" [inline]=\"inline\" [parameters]=\"parameters\" *ngIf=\"displayType=='button'\"></kervi-button>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/values/boolean-value/boolean-value.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/values/boolean-value/boolean-value.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/boolean-value/boolean-value.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/values/boolean-value/boolean-value.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynamicBooleanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicBooleanComponent", function() { return DynamicBooleanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicBooleanComponent = /** @class */ (function () {
    function DynamicBooleanComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
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
    DynamicBooleanComponent.prototype.press = function () {
        this.kerviService.spine.sendCommand(this.value.command, true);
    };
    DynamicBooleanComponent.prototype.release = function () {
        this.kerviService.spine.sendCommand(this.value.command, false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicBooleanModel"])
    ], DynamicBooleanComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSectionModel"])
    ], DynamicBooleanComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicBooleanComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicBooleanComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"])
    ], DynamicBooleanComponent.prototype, "defaultSizes", void 0);
    DynamicBooleanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-boolean',
            template: __webpack_require__(/*! ./boolean-value.component.html */ "./src/app/values/boolean-value/boolean-value.component.html"),
            styles: [__webpack_require__(/*! ./boolean-value.component.scss */ "./src/app/values/boolean-value/boolean-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], DynamicBooleanComponent);
    return DynamicBooleanComponent;
}());



/***/ }),

/***/ "./src/app/values/color-value/color-value.component.html":
/*!***************************************************************!*\
  !*** ./src/app/values/color-value/color-value.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <kervi-color [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"value.value$\" [inline]=\"inline\" [parameters]=\"parameters\" ></kervi-color>\r\n    \r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <span *ngIf=\"parameters.labelIcon || parameters.label\" >&nbsp;</span>\r\n    <kervi-color [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [value]=\"value.value$\" [inline]=\"inline\" [parameters]=\"parameters\" ></kervi-color>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/values/color-value/color-value.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/values/color-value/color-value.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/color-value/color-value.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/values/color-value/color-value.component.ts ***!
  \*************************************************************/
/*! exports provided: DynamicColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicColorComponent", function() { return DynamicColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicColorComponent = /** @class */ (function () {
    function DynamicColorComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
        this.size = 0;
        this.unitSize = 150;
        this.displayType = "button";
        //console.log("cnio",this);
    }
    DynamicColorComponent.prototype.ngOnInit = function () {
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
    DynamicColorComponent.prototype.color_change = function (v) {
        this.kerviService.spine.sendCommand(this.value.command, v);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicColorModel"])
    ], DynamicColorComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSectionModel"])
    ], DynamicColorComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicColorComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicColorComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"])
    ], DynamicColorComponent.prototype, "defaultSizes", void 0);
    DynamicColorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-color',
            template: __webpack_require__(/*! ./color-value.component.html */ "./src/app/values/color-value/color-value.component.html"),
            styles: [__webpack_require__(/*! ./color-value.component.scss */ "./src/app/values/color-value/color-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], DynamicColorComponent);
    return DynamicColorComponent;
}());



/***/ }),

/***/ "./src/app/values/datetime-value/datetime-value.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/values/datetime-value/datetime-value.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class=\"value-section pull-right\" style=\"display:inline-block\">  \r\n        <kervi-datetime [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value.value$\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-datetime>\r\n    </div>\r\n</div>\r\n<div style=\"display:inline-block\" *ngIf=\"inline\" >\r\n    <span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\" >{{parameters.label}}</span>\r\n    <kervi-datetime [parent]=\"this\" [defaultSizes]=\"defaultSizes\" [inline]=\"inline\" [value]=\"value.value$\" [parameters]=\"parameters\" *ngIf=\"displayType!='button'\"></kervi-datetime>\r\n    \r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/values/datetime-value/datetime-value.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/values/datetime-value/datetime-value.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/datetime-value/datetime-value.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/values/datetime-value/datetime-value.component.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDateTimeComponent", function() { return DynamicDateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicDateTimeComponent = /** @class */ (function () {
    function DynamicDateTimeComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
        this.size = 0;
        this.unitSize = 150;
        this.displayType = "datetime";
        //console.log("cnio",this);
    }
    DynamicDateTimeComponent.prototype.ngOnInit = function () {
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
    DynamicDateTimeComponent.prototype.change = function (value) {
        var time = moment.utc(value.date).format();
        console.log("dtvc", value.date, time);
        this.kerviService.spine.sendCommand(this.value.command, time);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicDateTimeModel"])
    ], DynamicDateTimeComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSectionModel"])
    ], DynamicDateTimeComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicDateTimeComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicDateTimeComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"])
    ], DynamicDateTimeComponent.prototype, "defaultSizes", void 0);
    DynamicDateTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-datetime',
            template: __webpack_require__(/*! ./datetime-value.component.html */ "./src/app/values/datetime-value/datetime-value.component.html"),
            styles: [__webpack_require__(/*! ./datetime-value.component.scss */ "./src/app/values/datetime-value/datetime-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], DynamicDateTimeComponent);
    return DynamicDateTimeComponent;
}());



/***/ }),

/***/ "./src/app/values/dynamic-value/dynamic-value.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/values/dynamic-value/dynamic-value.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"value.type\">\r\n    <ng-template ngSwitchCase=\"number-value\">\r\n        <dynamic-value-number [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [input]=\"value\"></dynamic-value-number>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"boolean-value\">\r\n        <dynamic-value-boolean [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [value]=\"value\"></dynamic-value-boolean>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"string-value\">\r\n        <dynamic-value-string [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [input]=\"value\"></dynamic-value-string>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"enum-value\">\r\n        <dynamic-value-enum [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [input]=\"value\"></dynamic-value-enum>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"datetime-value\">\r\n        <dynamic-value-datetime [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [value]=\"value\"></dynamic-value-datetime>\r\n    </ng-template>\r\n    <ng-template ngSwitchCase=\"color-value\">\r\n        <dynamic-value-color [defaultSizes]=\"defaultSizes\" [parameters]=\"parameters\" [dashboardSection]=\"dashboardSection\" [inline]=\"inline\" [value]=\"value\"></dynamic-value-color>\r\n    </ng-template>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/values/dynamic-value/dynamic-value.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/values/dynamic-value/dynamic-value.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/dynamic-value/dynamic-value.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/values/dynamic-value/dynamic-value.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynamicValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicValueComponent", function() { return DynamicValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicValueComponent = /** @class */ (function () {
    function DynamicValueComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.size = 0;
        this.unitSize = 150;
        //console.log("cnio",this);
    }
    DynamicValueComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicValueComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSectionModel"])
    ], DynamicValueComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicValueComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicValueComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], DynamicValueComponent.prototype, "defaultSizes", void 0);
    DynamicValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value',
            template: __webpack_require__(/*! ./dynamic-value.component.html */ "./src/app/values/dynamic-value/dynamic-value.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-value.component.scss */ "./src/app/values/dynamic-value/dynamic-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_1__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]])
    ], DynamicValueComponent);
    return DynamicValueComponent;
}());



/***/ }),

/***/ "./src/app/values/enum-value/enum-value.component.html":
/*!*************************************************************!*\
  !*** ./src/app/values/enum-value/enum-value.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\" *ngIf=\"parameters.type=='dropdown'\">\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        {{selectedText$ | async}}\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <ng-container *ngFor=\"let option of input.options\">\r\n            <button class=\"dropdown-item\" (mouseup)=\"select(option.value)\"   >{{option.text}}</button>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" *ngIf=\"parameters.type=='buttons'\">\r\n    <ng-container *ngFor=\"let option of input.options\">\r\n        <label class=\"btn btn-primary\" (mouseup)=\"select(option.value)\" [ngClass]=\"{'active':(option.selected$ | async)}\">\r\n            <input type=\"radio\" name=\"options\" id=\"option1\"  autocomplete=\"off\" [checked]=\"(option.selected$ | async)\"> \r\n            {{option.text}}\r\n        </label>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/values/enum-value/enum-value.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/values/enum-value/enum-value.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/enum-value/enum-value.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/values/enum-value/enum-value.component.ts ***!
  \***********************************************************/
/*! exports provided: DynamicEnumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicEnumComponent", function() { return DynamicEnumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
// Copyright (c) 2018, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicEnumComponent = /** @class */ (function () {
    function DynamicEnumComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.selectedText$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
    }
    DynamicEnumComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.input.ui;
        self.selectedText$.next(self.input.lastSelected$.value.text);
        this.input.lastSelected$.subscribe(function (v) {
            self.selectedText$.next(v.text);
        });
    };
    DynamicEnumComponent.prototype.onChange = function (event) {
        console.log("evv", event);
        this.kerviService.spine.sendCommand(this.input.command, event.target.value);
    };
    DynamicEnumComponent.prototype.select = function (value) {
        this.kerviService.spine.sendCommand(this.input.command, value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicEnumModel"])
    ], DynamicEnumComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSectionModel"])
    ], DynamicEnumComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicEnumComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicEnumComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], DynamicEnumComponent.prototype, "defaultSizes", void 0);
    DynamicEnumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-enum',
            template: __webpack_require__(/*! ./enum-value.component.html */ "./src/app/values/enum-value/enum-value.component.html"),
            styles: [__webpack_require__(/*! ./enum-value.component.scss */ "./src/app/values/enum-value/enum-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DynamicEnumComponent);
    return DynamicEnumComponent;
}());



/***/ }),

/***/ "./src/app/values/number-value/number-value.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/values/number-value/number-value.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayType=='slider' && !inline\" class=\"block-component\"> \r\n    <div class=\"label-section\">\r\n        <div style=\"display:inline-block;float:left;\">\r\n            <div class=\"value-label\">\r\n                <span   *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n                <span   *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n            </div>\r\n        </div>\r\n        \r\n\t</div>\r\n    <div class=\"value-section\">\r\n        <div class=\"value-input\" >\r\n            <ui-slider [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\"></ui-slider>\r\n        </div>\r\n        <div class=\"value-value\" [style.min-width.rem]=\"parameters.valueSize\">\r\n            {{(input.value$ | async | number:numberFormat)}}\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<div *ngIf=\"displayType=='slider' && inline\" class=\"inline-component\"> \r\n    <div style=\"display:inline-block\">\r\n        <span style=\"display:inline\"  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n        <span style=\"display:inline\"  *ngIf=\"parameters.label\"  >{{parameters.label}}</span>\r\n\t</div>\r\n    <div style=\"display:inline-block\" class=\"slider-inline\"  [style.max-width.%]=\"parameters.inputSize\">\r\n        <ui-slider [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\"></ui-slider>\r\n\t</div>\r\n    <span style=\"display:inline\"  [style.max-width.%]=\"parameters.valueSize\"    class=\"slider-value\">{{(input.value$ | async | number:numberFormat)}}</span>\r\n</div>\r\n\r\n<span *ngIf=\"displayType=='value' && inline\" class=\"input-inline input-type-value\">\r\n\t\t<i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<ng-container *ngIf=\"parameters.label\">{{parameters.label}}:</ng-container>\r\n\t\t<i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<value-sparkline *ngIf=\"parameters.showSparkline\" [value]=\"input\"></value-sparkline>\r\n\t\t<span style=\"display:inline-block\" [style.min-width.rem]=\"parameters.valueSize\" class=\"input-value\">\r\n            {{(input.value$ | async | number:numberFormat)}}\r\n            <span *ngIf=\"parameters.displayUnit\">{{input.unit}}</span>\r\n        </span>\r\n</span>\r\n\r\n<div *ngIf=\"displayType=='value' && !inline\" class=\"block-component\">\r\n    <div class=\"value-label\" style=\"float: left\">\r\n        <i *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n\t\t<ng-container *ngIf=\"parameters.label\">{{parameters.label}}</ng-container>\r\n\t\t\r\n    </div>\r\n    <div style=\"display:inline-block; float: right\">\r\n        <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\r\n        <value-sparkline *ngIf=\"parameters.showSparkline\" [value]=\"input\"></value-sparkline>\r\n        <span style=\"display: inline-block;text-align:right\" [style.min-width.rem]=\"parameters.valueSize\" class=\"input-value\">\r\n            {{(input.value$ | async | number:numberFormat)}}\r\n            <span *ngIf=\"parameters.displayUnit\">{{input.unit}}</span>\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"displayType=='gauge'\" class=\"block-component\" >\r\n    <kervi-gauge [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\" [type]=\"gaugeType\" [size]=\"size\"></kervi-gauge>\r\n</div>\r\n\r\n<ng-container *ngIf=\"displayType=='chart'\" class=\"\" >\r\n    <kervi-chart [defaultSizes]=\"defaultSizes\" [value]=\"input\" [parameters]=\"parameters\" [size]=\"size\" ></kervi-chart>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/values/number-value/number-value.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/values/number-value/number-value.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/number-value/number-value.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/values/number-value/number-value.component.ts ***!
  \***************************************************************/
/*! exports provided: DynamicNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicNumberComponent", function() { return DynamicNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../template.service */ "./src/app/template.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicNumberComponent = /** @class */ (function () {
    function DynamicNumberComponent(kerviService, elementRef, templateService) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.inline = false;
        this.moveDelayTimer = null;
        this.size = 0;
        this.unitSize = 150;
        this.inSlide = false;
        this.numberFormat = "1.2-2";
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"]();
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
            this.numberFormat = this.parameters.minIntegerDigits + "." + this.parameters.minFractionDigits + "-" + this.parameters.maxFractionDigits;
            if (!this.parameters.valueIcon)
                this.currentIcon = null;
            else if (typeof (this.parameters.valueIcon) == "string")
                this.currentIcon = this.parameters.valueIcon;
            else {
                this.input.value$.subscribe(function (v) {
                    for (var _i = 0, _a = self.parameters.valueIcon; _i < _a.length; _i++) {
                        var iconSection = _a[_i];
                        if (v >= iconSection.range[0] && v <= iconSection.range[1]) {
                            self.currentIcon = iconSection.icon;
                            break;
                        }
                    }
                });
            }
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicNumberModel"])
    ], DynamicNumberComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSectionModel"])
    ], DynamicNumberComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicNumberComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicNumberComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_4__["DashboardSizes"])
    ], DynamicNumberComponent.prototype, "defaultSizes", void 0);
    DynamicNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-number',
            template: __webpack_require__(/*! ./number-value.component.html */ "./src/app/values/number-value/number-value.component.html"),
            styles: [__webpack_require__(/*! ./number-value.component.scss */ "./src/app/values/number-value/number-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], DynamicNumberComponent);
    return DynamicNumberComponent;
}());



/***/ }),

/***/ "./src/app/values/string-value/string-value.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/values/string-value/string-value.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!parameters.inline\"   class=\"block-component\">\r\n\t<span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n    \r\n    <span *ngIf=\"!parameters.isInput\" class=\"pull-right\" [style.width]=\"parameters.inputSize\" >{{(input.value$ | async)}}</span>\r\n    <input *ngIf=\"parameters.isInput\" class=\"form-control pull-right\" [style.width]=\"parameters.inputSize\" (keyup)=\"onChange($event)\" name=\"{{input.id}}\" value=\"{{(input.value$ | async)}}\"/>\r\n</div>\r\n<div *ngIf=\"parameters.inline\" style=\"white-space:nowrap\"  >\r\n\t<span  *ngIf=\"parameters.labelIcon\" class=\"fa fa-{{parameters.labelIcon}}\"></span>\r\n    <span *ngIf=\"parameters.label\">{{parameters.label}}</span>\r\n    <span *ngIf=\"!parameters.isInput\" [style.width]=\"parameters.inputSize\" >&nbsp;{{(input.value$ | async)}}</span>\r\n    <input *ngIf=\"parameters.isInput\" class=\"form-control\" (keyup)=\"onChange($event)\" [style.width]=\"parameters.inputSize\" style=\"display: inline-block\" name=\"{{input.id}}\" [style.width.%]=\"parameters.inputSize\" value=\"{{(input.value$ | async)}}\"/>\r\n</div>"

/***/ }),

/***/ "./src/app/values/string-value/string-value.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/values/string-value/string-value.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/string-value/string-value.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/values/string-value/string-value.component.ts ***!
  \***************************************************************/
/*! exports provided: DynamicStringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicStringComponent", function() { return DynamicStringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/dynamicValues.model */ "./src/app/models/dynamicValues.model.ts");
/* harmony import */ var _kervi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kervi.service */ "./src/app/kervi.service.ts");
/* harmony import */ var _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/dashboard.model */ "./src/app/models/dashboard.model.ts");
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicStringComponent = /** @class */ (function () {
    function DynamicStringComponent(kerviService, elementRef) {
        this.kerviService = kerviService;
        this.elementRef = elementRef;
        this.inline = false;
        this.defaultSizes = new _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
    }
    DynamicStringComponent.prototype.ngOnInit = function () {
        var self = this;
        if (!this.parameters)
            this.parameters = this.input.ui;
        if (self.input.isInput) {
        }
        this.input.value$.subscribe(function (v) {
            jQuery("input", self.elementRef.nativeElement).val(v).change();
        });
    };
    DynamicStringComponent.prototype.onChange = function (event) {
        console.log("evv", event);
        this.kerviService.spine.sendCommand(this.input.command, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dynamicValues_model__WEBPACK_IMPORTED_MODULE_1__["DynamicStringModel"])
    ], DynamicStringComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSectionModel"])
    ], DynamicStringComponent.prototype, "dashboardSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicStringComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicStringComponent.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_dashboard_model__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"])
    ], DynamicStringComponent.prototype, "defaultSizes", void 0);
    DynamicStringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-value-string',
            template: __webpack_require__(/*! ./string-value.component.html */ "./src/app/values/string-value/string-value.component.html"),
            styles: [__webpack_require__(/*! ./string-value.component.scss */ "./src/app/values/string-value/string-value.component.scss")]
        }),
        __metadata("design:paramtypes", [_kervi_service__WEBPACK_IMPORTED_MODULE_2__["KerviService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DynamicStringComponent);
    return DynamicStringComponent;
}());



/***/ }),

/***/ "./src/app/values/values.module.ts":
/*!*****************************************!*\
  !*** ./src/app/values/values.module.ts ***!
  \*****************************************/
/*! exports provided: ValuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesModule", function() { return ValuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _number_value_number_value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-value/number-value.component */ "./src/app/values/number-value/number-value.component.ts");
/* harmony import */ var _boolean_value_boolean_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean-value/boolean-value.component */ "./src/app/values/boolean-value/boolean-value.component.ts");
/* harmony import */ var _string_value_string_value_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string-value/string-value.component */ "./src/app/values/string-value/string-value.component.ts");
/* harmony import */ var _datetime_value_datetime_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datetime-value/datetime-value.component */ "./src/app/values/datetime-value/datetime-value.component.ts");
/* harmony import */ var _color_value_color_value_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-value/color-value.component */ "./src/app/values/color-value/color-value.component.ts");
/* harmony import */ var _enum_value_enum_value_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enum-value/enum-value.component */ "./src/app/values/enum-value/enum-value.component.ts");
/* harmony import */ var _dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-value/dynamic-value.component */ "./src/app/values/dynamic-value/dynamic-value.component.ts");
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/app/ui-components/ui-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ValuesModule = /** @class */ (function () {
    function ValuesModule() {
    }
    ValuesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _number_value_number_value_component__WEBPACK_IMPORTED_MODULE_2__["DynamicNumberComponent"],
                _dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_8__["DynamicValueComponent"],
                _boolean_value_boolean_value_component__WEBPACK_IMPORTED_MODULE_3__["DynamicBooleanComponent"],
                _string_value_string_value_component__WEBPACK_IMPORTED_MODULE_4__["DynamicStringComponent"],
                _enum_value_enum_value_component__WEBPACK_IMPORTED_MODULE_7__["DynamicEnumComponent"],
                _datetime_value_datetime_value_component__WEBPACK_IMPORTED_MODULE_5__["DynamicDateTimeComponent"],
                _color_value_color_value_component__WEBPACK_IMPORTED_MODULE_6__["DynamicColorComponent"]
            ],
            exports: [
                _number_value_number_value_component__WEBPACK_IMPORTED_MODULE_2__["DynamicNumberComponent"],
                _dynamic_value_dynamic_value_component__WEBPACK_IMPORTED_MODULE_8__["DynamicValueComponent"],
                _boolean_value_boolean_value_component__WEBPACK_IMPORTED_MODULE_3__["DynamicBooleanComponent"],
                _string_value_string_value_component__WEBPACK_IMPORTED_MODULE_4__["DynamicStringComponent"],
                _enum_value_enum_value_component__WEBPACK_IMPORTED_MODULE_7__["DynamicEnumComponent"],
                _datetime_value_datetime_value_component__WEBPACK_IMPORTED_MODULE_5__["DynamicDateTimeComponent"],
                _color_value_color_value_component__WEBPACK_IMPORTED_MODULE_6__["DynamicColorComponent"]
            ],
            imports: [
                _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_9__["UIComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [],
            bootstrap: []
        }),
        __metadata("design:paramtypes", [])
    ], ValuesModule);
    return ValuesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/ikervi-spine.ts":
/*!*****************************!*\
  !*** ./src/ikervi-spine.ts ***!
  \*****************************/
/*! exports provided: KerviSpineBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviSpineBase", function() { return KerviSpineBase; });
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var KerviSpineBase = /** @class */ (function () {
    function KerviSpineBase(constructorOptions) {
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
            protocol: "ws",
            apiToken: null
        };
        this.addEventHandler = function (eventName, id, callback) {
        };
        console.log("Kervi base spine init", this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        this.connect();
    }
    KerviSpineBase.prototype.extend = function () {
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
    KerviSpineBase.prototype.addRPCCallback = function (id, callback) {
        if (callback)
            this.rpcQueue[id] = callback;
    };
    KerviSpineBase.prototype.handleRPCResponse = function (message) {
        var callback = this.rpcQueue[message.id];
        if (callback) {
            delete this.rpcQueue[message.id];
            callback.call(this.options.targetScope, message.response, message.response);
        }
    };
    KerviSpineBase.prototype.handleEvent = function (message) {
        console.log("ev", message);
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
    KerviSpineBase.prototype.handleCommand = function (message) {
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
    KerviSpineBase.prototype.connect = function () {
    };
    KerviSpineBase.prototype.onOpen = function (evt) {
        console.log("Kervi open", this, evt);
        var self = this;
        this.isConnected = true;
        this.eventHandlers = [];
        this.commandHandlers = [];
        this.queryHandlers = [];
        console.log("Kervi spine ready");
    };
    KerviSpineBase.prototype.onClose = function (evt) {
        console.log("Kervi spine on close", evt);
        this.isConnected = false;
        if (this.options.onClose)
            this.options.onClose.call(this.options.targetScope, evt);
        this.firstOnOpen = true;
        if (this.options.autoConnect) {
            setTimeout(1000, this.connect());
        }
    };
    KerviSpineBase.prototype.authenticate = function (userName, password) {
    };
    KerviSpineBase.prototype.logoff = function () {
    };
    KerviSpineBase.prototype.onMessage = function (evt) {
    };
    KerviSpineBase.prototype.onError = function (evt) {
        console.log("Kervi on error", evt);
    };
    KerviSpineBase.prototype.addCommandHandler = function (command, callback) {
    };
    ;
    KerviSpineBase.prototype.addQueryHandler = function (query, callback) {
    };
    ;
    KerviSpineBase.prototype.sendCommand = function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    ;
    KerviSpineBase.prototype.sendQuery = function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    ;
    KerviSpineBase.prototype.triggerEvent = function (eventName, id) {
    };
    ;
    return KerviSpineBase;
}());



/***/ }),

/***/ "./src/kervi-spine.ts":
/*!****************************!*\
  !*** ./src/kervi-spine.ts ***!
  \****************************/
/*! exports provided: KerviSpine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviSpine", function() { return KerviSpine; });
/* harmony import */ var _ikervi_spine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ikervi-spine */ "./src/ikervi-spine.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

var KerviSpine = /** @class */ (function (_super) {
    __extends(KerviSpine, _super);
    /*public isConnected: Boolean = false;
    public doAuthenticate:boolean = false;
    sessionId = null;
    queryHandlers=[];
    commandHandlers=[];
    eventHandlers=[];
    rpcQueue={};
    ready=false;
    messageId=0;
    sensors={};
    controllers={};
    sensorTypes=[];
    controllerTypes=[];
    pointOfInterests=[];
    application=null;
    allowAnonymous = true;
    firstOnOpen = true;*/
    /*public options=  {
            userName: "anonymous",
            password: null,
            address:null,
            onOpen:null,
            onClose:null,
            onAuthenticate:null,
            onAuthenticateFailed:null,
            onAuthenticateStart:null,
            onLogOff: null,
            autoConnect:true,
            targetScope:null,
            protocol:"ws"
    }*/
    function KerviSpine(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.addEventHandler = function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            //console.log("add event handler",cmd);
            this.websocket.send(JSON.stringify(cmd));
        };
        console.log("kervi spine constructor");
        return _this;
    }
    /*private extend(...p:any[])
    {
        for(var i=1; i<p.length; i++)
            for(var key in p[i])
                if(p[i].hasOwnProperty(key))
                    p[0][key] = p[i][key];
        return p[0];
    }

    private addRPCCallback(id:string,callback)
    {
        if (callback)
            this.rpcQueue[id]=callback;
    }

    private handleRPCResponse(message){
        var callback=this.rpcQueue[message.id];
        if (callback){
            delete this.rpcQueue[message.id];
            callback.call(this.options.targetScope,message.response,message.response);
        }
    }

    private handleEvent(message){
        var eventName=message.event;
        var id=message.id;
        
        var eventPath=eventName;
        if (id){
            eventPath+="/"+id;
        }
        
        var value=null;
        if(message.args && message.args.length){
            value=message.args[0];
        }
        for(var n=0;(n<this.eventHandlers.length);n++)
        {
            var h=this.eventHandlers[n];
            if (h.eventName==eventPath)
                h.callback.call(value,id,value);
            else if (h.eventName==eventName)
                h.callback.call(value,id,value);
        }
    }

    private handleCommand(message){
        console.log("cmd",this,message);
        var command=message.command
        
        var args=null;
        if(message.args && message.args.length){
            args=message.args[0];
        }
        
        for(var n=0;(n<this.commandHandlers.length);n++)
        {
            var c=this.commandHandlers[n];
            if (c.command==command)
                c.callback.call(this,args);
        }
    }*/
    KerviSpine.prototype.connect = function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        var self = this;
        this.websocket = new WebSocket(this.options.protocol + "://" + this.options.address);
        this.websocket.onopen = function (evt) {
            console.log("kervi spine on open");
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
    /*protected onOpen(evt){
        console.log("Kervi spine on open",this,evt);
        
        var self=this
        this.isConnected=true;
        
        this.eventHandlers = [];
        this.commandHandlers = [];
        this.queryHandlers = [];
        console.log("Kervi spine ready")
    }

    protected onClose(evt){
        console.log("Kervi spine on close",evt);
        this.isConnected=false;
        
        if (this.options.onClose)
            this.options.onClose.call(this.options.targetScope,evt);
        this.firstOnOpen=true;
        if (this.options.autoConnect){
            setTimeout(1000,this.connect());
        }
    }*/
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
        console.log("on m", evt.data);
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
                console.log("to", self.options);
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
        console.log("sendQuery", callback, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    ;
    KerviSpine.prototype.triggerEvent = function (eventName, id) {
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    ;
    return KerviSpine;
}(_ikervi_spine__WEBPACK_IMPORTED_MODULE_0__["KerviSpineBase"]));



/***/ }),

/***/ "./src/kervi_io.ts":
/*!*************************!*\
  !*** ./src/kervi_io.ts ***!
  \*************************/
/*! exports provided: KerviIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviIO", function() { return KerviIO; });
/* harmony import */ var _ikervi_spine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ikervi-spine */ "./src/ikervi-spine.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

var KerviIO = /** @class */ (function (_super) {
    __extends(KerviIO, _super);
    function KerviIO(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.exchange = "/exchange/app_1";
        _this.addEventHandler = function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            this.websocket.send(this.exchange, { topic: "registerEventHandler", router_id: this.socketSession }, JSON.stringify(cmd));
        };
        console.log("Kervi io spine init x", _this.options, constructorOptions);
        return _this;
    }
    KerviIO.prototype.onMQError = function (frame) {
        console.log("MQ error", frame);
    };
    KerviIO.prototype.connect = function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        var self = this;
        //var mqUrl= this.options.protocol + "://" + this.options.address
        var mqUrl = "wss://mq.kervi.io:15673/ws";
        this.websocket = Stomp.client(mqUrl);
        this.websocket.heartbeat.incoming = 0;
        this.websocket.connect(self.options.apiToken.api_token, "ui", function (frame) {
            console.log("MQ connect", frame, this.websocket, this);
            self.socketSession = frame.headers.session;
            self.websocket.subscribe(self.exchange, function (message) {
                console.log("mq ", message);
                if (message.headers["topic"])
                    message.headers["topic"] = message.headers["topic"].replace(new RegExp("\\c", "g"), ":");
                if (message.command == "CONNECTED") {
                }
                else if (message.headers["topic"] == "ping")
                    self.onPing(message);
                else
                    self.onMessage(message);
            }, {});
        }, self.onMQError, self.options.apiToken.api_channel);
    };
    KerviIO.prototype.onPing = function (message) {
        console.log("onping", this.options.appId, message);
        var self = this;
        if (!this.isConnected && message.headers["connection_id"] == self.options.apiToken.app_id) {
            this.onOpen(message);
            this.websocket.send(self.exchange, { topic: "session:new", router_id: message.headers["router_id"], session_id: this.socketSession }, "{}");
        }
    };
    KerviIO.prototype.authenticate = function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        if (this.options.onAuthenticateStart)
            this.options.onAuthenticateStart.call(this.options.targetScope);
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": this.options.userName, "password": this.options.password };
        this.websocket.send(JSON.stringify(cmd));
    };
    KerviIO.prototype.logoff = function () {
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    KerviIO.prototype.onMessage = function (evt) {
        console.log("on m", evt);
        var message = JSON.parse(evt.body);
        var self = this;
        var topic = evt.headers["topic"];
        if (topic == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (topic == "authentication_failed") {
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
        else if (topic == "session_authenticated") {
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
        else if (topic == "session_logoff") {
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
        else if (evt.headers["type"] == "query_response") {
            this.handleRPCResponse({ id: evt.headers["query_id"], response: message });
        }
        else if (evt.headers["type"] == "event") {
            console.log("e", evt);
            var topic_tag = evt.headers["topic"].split(":");
            this.handleEvent({ event: topic_tag[1], id: topic_tag[2], args: message.args });
        }
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    KerviIO.prototype.onError = function (evt) {
        console.log("Kervi on error", evt);
    };
    KerviIO.prototype.addCommandHandler = function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "registerCommandHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    ;
    KerviIO.prototype.addQueryHandler = function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(this.exchange, { topic: "registerQueryHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    ;
    KerviIO.prototype.sendCommand = function (command) {
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
        var cmd = { id: this.messageId++, "args": args, kwargs: {} };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback);
        console.log("sendCommand", this, cmd);
        this.websocket.send(this.exchange, { topic: "command:" + command, router_id: this.socketSession }, JSON.stringify(cmd));
    };
    ;
    KerviIO.prototype.sendQuery = function (query) {
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
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args, kwargs: [], qts: 0 };
        this.addRPCCallback(cmd.id.toString(), callback);
        console.log("sendQuery", callback, cmd);
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "query:" + query, qts: 0, query_id: cmd.id.toString(), router_id: this.socketSession, response_address: this.socketSession }, JSON.stringify(cmd));
    };
    ;
    KerviIO.prototype.triggerEvent = function (eventName, id) {
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    ;
    return KerviIO;
}(_ikervi_spine__WEBPACK_IMPORTED_MODULE_0__["KerviSpineBase"]));



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\tim privat\github\kervi-ui\kervi\ui\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map