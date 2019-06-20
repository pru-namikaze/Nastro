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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _template_main_template_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template/main-template-component.component */ "./src/app/template/main-template-component.component.ts");




var routes = [
    { path: '', component: _template_main_template_component_component__WEBPACK_IMPORTED_MODULE_3__["MainTemplateComponentComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/template.module */ "./src/app/template/template.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _template_template_module__WEBPACK_IMPORTED_MODULE_7__["TemplateModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/domainUrlDict.json":
/*!*********************************************!*\
  !*** ./src/app/services/domainUrlDict.json ***!
  \*********************************************/
/*! exports provided: APoD, NeoWs, DONKI, EPIC, default */
/***/ (function(module) {

module.exports = {"APoD":{"0":{"Name":"Astronomy Picture of the Day","Properties":{"RequestURLDomian":"https://api.nasa.gov/planetary/apod?","QueryString":{"0":{"VariableName":"date","DefaultValue":"2019-05-20"},"1":{"VariableName":"hd","DefaultValue":"true"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"NeoWs":{"0":{"Name":"Neo - Feed","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/feed?","QueryString":{"0":{"VariableName":"start_date","DefaultValue":"2019-05-20"},"1":{"VariableName":"end_date","DefaultValue":"2019-05-20"},"2":{"VariableName":"detailed","DefaultValue":"true"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"1":{"Name":"Neo - Browse","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/browse?","QueryString":{"0":{"VariableName":"page","DefaultValue":"0"},"1":{"VariableName":"size","DefaultValue":"20"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"2":{"Name":"Neo - Sentry","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/sentry?","QueryString":{"0":{"VariableName":"is_active","DefaultValue":"true"},"1":{"VariableName":"page","DefaultValue":"0"},"2":{"VariableName":"size","DefaultValue":"50"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"3":{"Name":"Neo - Stats","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/stats?","QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"4":{"Name":"Neo - Browse by Asteroid ID","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/","URLAddder":{"0":{"VariableName":"asteroid_id","DefaultValue":"3729835","IncludeVariableName":"false"}},"QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"DONKI":{"0":{"Name":"Coronal Mass Ejection (CME)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/CME?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"1":{"Name":"Coronal Mass Ejection (CME) Analysis","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/CMEAnalysis?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2019-04-20"},"1":{"VariableName":"endDate","DefaultValue":"2019-05-20"},"2":{"VariableName":"mostAccurateOnly","DefaultValue":"true"},"3":{"VariableName":"completeEntryOnly","DefaultValue":"true"},"4":{"VariableName":"speed","DefaultValue":"0"},"5":{"VariableName":"halfAngle","DefaultValue":"0"},"6":{"VariableName":"catalog","DefaultValue":"ALL"},"7":{"VariableName":"keyword","DefaultValue":"NONE"},"8":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"2":{"Name":"Geomagnetic Storm (GST)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/GST?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"3":{"Name":"Interplanetary Shock (IPS)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/IPS?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"location","DefaultValue":"ALL"},"3":{"VariableName":"catalog","DefaultValue":"ALL"},"4":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"4":{"Name":"Solar Flare (FLR)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/FLR?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"5":{"Name":"Solar Energetic Particle (SEP)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/SEP?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"6":{"Name":"Magnetopause Crossing (MPC)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/MPC?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"7":{"Name":"Radiation Belt Enhancement (RBE)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/RBE?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"8":{"Name":"Hight Speed Stream (HSS)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/HSS?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"9":{"Name":"WSA+EnlilSimulation","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/WSAEnlilSimulations?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"10":{"Name":"Notifications","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/notifications?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"type","DefaultValue":"all"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"EPIC":{"0":{"Name":"Daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument","Properties":{"RequestURLDomian":"https://api.nasa.gov/EPIC/api/","URLAddder":{"0":{"VariableName":"natural","DefaultValue":"","IncludeVariableName":"true"},"1":{"VariableName":"natural/date","DefaultValue":"2016-12-31","IncludeVariableName":"true"},"2":{"VariableName":"natural/all","DefaultValue":"","IncludeVariableName":"true"},"3":{"VariableName":"natural/available","DefaultValue":"","IncludeVariableName":"true"},"4":{"VariableName":"enhanced","DefaultValue":"","IncludeVariableName":"true"},"5":{"VariableName":"enhanced/date","DefaultValue":"2016-12-31","IncludeVariableName":"true"},"6":{"VariableName":"enhanced/all","DefaultValue":"","IncludeVariableName":"true"},"7":{"VariableName":"enhanced/available","DefaultValue":"","IncludeVariableName":"true"}},"QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}}};

/***/ }),

/***/ "./src/app/services/infrastructure-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/infrastructure-api.service.ts ***!
  \********************************************************/
/*! exports provided: InfrastructureApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureApiService", function() { return InfrastructureApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var InfrastructureApiService = /** @class */ (function () {
    function InfrastructureApiService(http) {
        this.http = http;
        this.DataDict = _domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__;
        this.ResponceURLDict = {};
        this.QueryPrameters = {};
        this.UrlAdderPrameters = {};
        this.baseServiceName = '';
        this.baseService = '';
        this.GenerateResponseUrl();
        this.baseServiceName = Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__)[0];
        this.baseService = _domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__[Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__)[0]][Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__[Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__)[0]])[0]].Name;
    }
    InfrastructureApiService.prototype.GenerateResponseUrl = function () {
        var baseServiceNameList = Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__);
        for (var _i = 0, baseServiceNameList_1 = baseServiceNameList; _i < baseServiceNameList_1.length; _i++) {
            var baseServiceName = baseServiceNameList_1[_i];
            this.getResponseURL(baseServiceName);
        }
        console.log('UrlAdderPrameters');
        console.table(this.UrlAdderPrameters);
        console.log('QueryPrameters');
        console.table(this.QueryPrameters);
        console.log('ResponceURLDict');
        console.table(this.ResponceURLDict);
    };
    InfrastructureApiService.prototype.getResponseURL = function (baseServiceName) {
        var responseURLList = {};
        var responseURLwithAdderList = {};
        var baseService = this.DataDict[baseServiceName];
        for (var _i = 0, _a = Object.keys(baseService); _i < _a.length; _i++) {
            var serviceNumName = _a[_i];
            var serviceNum = baseService[serviceNumName];
            var serviceName = serviceNum.Name;
            var serviceProperties = serviceNum.Properties;
            var responseURL = serviceProperties.RequestURLDomian;
            var URLAddder = serviceProperties.URLAddder;
            var QueryPram = serviceProperties.QueryString;
            var date = new Date(new Date().getTime() - 45000000);
            var startDate = new Date(new Date().getTime() - 131400000);
            var endDate = new Date(new Date().getTime() - 45000000);
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(URLAddder)) {
                var i = 0;
                for (var _b = 0, _c = Object.keys(URLAddder); _b < _c.length; _b++) {
                    var URLAddNumName = _c[_b];
                    responseURL = serviceProperties.RequestURLDomian;
                    var adder = URLAddder[URLAddNumName];
                    this.UrlAdderPrameters[URLAddder[URLAddNumName].VariableName] = URLAddder[URLAddNumName];
                    // tslint:disable-next-line: max-line-length
                    responseURL = responseURL.concat("" + ((adder.IncludeVariableName === 'true') ? adder.VariableName + '/' : '') + ((true) ? adder.DefaultValue : undefined) + "?");
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(QueryPram)) {
                        for (var _d = 0, _e = Object.keys(QueryPram); _d < _e.length; _d++) {
                            var propertyName = _e[_d];
                            var property = QueryPram[propertyName];
                            // tslint:disable-next-line: max-line-length
                            this.QueryPrameters[property.VariableName] = (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) ? property.DefaultValue : this.QueryPrameters[property.VariableName];
                            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) {
                                switch (property.VariableName) {
                                    case 'date': {
                                        // tslint:disable-next-line: max-line-length
                                        this.QueryPrameters[property.VariableName] = date.getFullYear().toString().padStart(4, '0') + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
                                        break;
                                    }
                                    case 'startDate': {
                                        // tslint:disable-next-line: max-line-length
                                        this.QueryPrameters[property.VariableName] = startDate.getFullYear().toString().padStart(4, '0') + "-" + (startDate.getMonth() + 1).toString().padStart(2, '0') + "-" + startDate.getDate().toString().padStart(2, '0');
                                        break;
                                    }
                                    case 'endDate': {
                                        // tslint:disable-next-line: max-line-length
                                        this.QueryPrameters[property.VariableName] = endDate.getFullYear().toString().padStart(4, '0') + "-" + (endDate.getMonth() + 1).toString().padStart(2, '0') + "-" + endDate.getDate().toString().padStart(2, '0');
                                        break;
                                    }
                                    default: {
                                        this.QueryPrameters[property.VariableName] = property.DefaultValue;
                                        break;
                                    }
                                }
                            }
                            responseURL = responseURL.concat(property.VariableName + "=" + this.QueryPrameters[property.VariableName] + "&");
                        }
                    }
                    responseURLwithAdderList[i.toString()] = responseURL;
                    i = i + 1;
                }
                responseURLList[serviceName] = (Object.keys(URLAddder).length === 1) ? responseURLwithAdderList[0] : responseURLwithAdderList;
            }
            else {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(QueryPram)) {
                    for (var _f = 0, _g = Object.keys(QueryPram); _f < _g.length; _f++) {
                        var propertyName = _g[_f];
                        var property = QueryPram[propertyName];
                        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) {
                            switch (property.VariableName) {
                                case 'date': {
                                    // tslint:disable-next-line: max-line-length
                                    this.QueryPrameters[property.VariableName] = date.getFullYear().toString().padStart(4, '0') + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
                                    break;
                                }
                                case 'start_date': {
                                    // tslint:disable-next-line: max-line-length
                                    this.QueryPrameters[property.VariableName] = startDate.getFullYear().toString().padStart(4, '0') + "-" + (startDate.getMonth() + 1).toString().padStart(2, '0') + "-" + startDate.getDate().toString().padStart(2, '0');
                                    break;
                                }
                                case 'end_date': {
                                    // tslint:disable-next-line: max-line-length
                                    this.QueryPrameters[property.VariableName] = endDate.getFullYear().toString().padStart(4, '0') + "-" + (endDate.getMonth() + 1).toString().padStart(2, '0') + "-" + endDate.getDate().toString().padStart(2, '0');
                                    break;
                                }
                                default: {
                                    this.QueryPrameters[property.VariableName] = property.DefaultValue;
                                    break;
                                }
                            }
                        }
                        responseURL = responseURL.concat(property.VariableName + "=" + this.QueryPrameters[property.VariableName] + "&");
                    }
                }
                responseURLList[serviceName] = responseURL;
            }
        }
        this.ResponceURLDict[baseServiceName] = responseURLList;
    };
    InfrastructureApiService.prototype.cardPress = function (tablename) {
        if (!document.getElementById('collapse' + tablename).className.includes('show')) {
            document.getElementById('arrow' + tablename).className = 'fas fa-angle-down';
        }
        else {
            document.getElementById('arrow' + tablename).className = 'fas fa-angle-right';
        }
        document.location.href = '#accordion-' + tablename;
    };
    InfrastructureApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InfrastructureApiService);
    return InfrastructureApiService;
}());



/***/ }),

/***/ "./src/app/template/apod-template/apod-template.component.css":
/*!********************************************************************!*\
  !*** ./src/app/template/apod-template/apod-template.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2Fwb2QtdGVtcGxhdGUvYXBvZC10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/template/apod-template/apod-template.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/template/apod-template/apod-template.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jumbotron-fluid mx-auto d-block px-5 ml-4\">\n  <div class=\"row\" *ngFor=\"let baseService of baseServiceList\">\n    <div class=\"input-group my-2\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">date:&nbsp;</label>\n      </div>\n      <input type=\"date\" id='date' [(ngModel)]=\"infrastructureApi.QueryPrameters.date\">\n    </div>\n\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"reloadAPoD()\">Show</button>\n    <span class=\"w-100\"></span>\n    <div class=\"mt-2 ml-2\" *ngIf=\"serviceResponseBodyList[baseService].media_type==='image'\">\n      <input type=\"checkbox\" [(ngModel)]=\"infrastructureApi.QueryPrameters.hd\">&nbsp;Show HD Image\n    </div>\n    <h2 class=\"w-100 mt-3 mb-5\">{{serviceResponseBodyList[baseService].title}}</h2>\n    <div class=\"row\">\n      <img id=\"APoD-img\" [src]=\"serviceResponseBodyList[baseService].url\" class=\"img-fluid border rounded-lg col-auto p-3 d-block col-sm\" *ngIf=\"serviceResponseBodyList[baseService].media_type === 'image' && !infrastructureApi.QueryPrameters.hd\">\n      <iframe type=\"text/html\" width=\"750\" height=\"500 \" class=\"col-sm mx-auto\" [src]=\"serviceResponseBodyList[baseService].url\" frameborder=\"0\" *ngIf=\"serviceResponseBodyList[baseService].media_type === 'video'\"></iframe>\n      <img id=\"APoD-hd-img\" [src]=\"serviceResponseBodyList[baseService].hdurl\" class=\"img-fluid max-width-100vw col-sm border rounded-lg p-3 mx-auto d-block\" *ngIf=\"serviceResponseBodyList[baseService].media_type === 'image' && infrastructureApi.QueryPrameters.hd\">\n      <span class=\"col-sm mx-auto my-auto p-5\">\n        <p class=\"text-justify\">{{serviceResponseBodyList[baseService].explanation}}</p>\n        <span class=\"w-100\" *ngIf=\"serviceResponseBodyList[baseService].copyright\">\n          <b>Copyright:</b>&nbsp;{{serviceResponseBodyList[baseService].copyright}}\n        </span>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/template/apod-template/apod-template.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/template/apod-template/apod-template.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApodTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApodTemplateComponent", function() { return ApodTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");





var ApodTemplateComponent = /** @class */ (function () {
    function ApodTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.tableObject = {};
        // tslint:disable-next-line: max-line-length
        this.serviceResponseBodyList = {};
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
        this.infrastructureApi.baseService = this.baseServiceList[0];
        this.reloadAPoD();
    }
    ApodTemplateComponent.prototype.reloadAPoD = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        console.log(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]);
        // tslint:disable-next-line: max-line-length
        this.http.get(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName][this.infrastructureApi.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.infrastructureApi.baseService] = {};
            _this.serviceResponseBodyList[_this.infrastructureApi.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.infrastructureApi.baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.infrastructureApi.baseService].url);
            // tslint:disable-next-line: object-literal-key-quotes
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.infrastructureApi.baseService] });
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    ApodTemplateComponent.prototype.ngOnInit = function () {
    };
    ApodTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apod-template',
            template: __webpack_require__(/*! ./apod-template.component.html */ "./src/app/template/apod-template/apod-template.component.html"),
            styles: [__webpack_require__(/*! ./apod-template.component.css */ "./src/app/template/apod-template/apod-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_4__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ApodTemplateComponent);
    return ApodTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/main-template-component.component.css":
/*!****************************************************************!*\
  !*** ./src/app/template/main-template-component.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL21haW4tdGVtcGxhdGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/template/main-template-component.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/template/main-template-component.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light y-padding-0rem mt-5 px-5\">\r\n  <span class=\"navbar-brand align-self-center\">\r\n      <img src=\"https://raw.githubusercontent.com/pru-namikaze/Nastro/master/src/assets/Nastro_logo.jpg\" width=\"150\" height=\"150\" class=\"d-inline-block align-top\" alt=\"\">\r\n    </span>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item dropdown\" *ngFor=\"let baseServiceName of baseServiceNameList\" attr.id=\"{{'navbar-list-' + baseServiceName}}\" (mouseover)=\"toggleNavDropDown(baseServiceName, true)\" (mouseout)=\"toggleNavDropDown(baseServiceName, false)\">\r\n        <span class=\"nav-link dropdown-toggle\" attr.id=\"{{'navbarDropdown' + baseServiceName}}\" role=\"button\" data-toggle=\"dropdown\">\r\n          {{baseServiceName}}\r\n        </span>\r\n        <div class=\"dropdown-menu\" attr.id=\"{{'navbar-dropdown-list-' + baseServiceName}}\">\r\n          <a class=\"dropdown-item\" *ngFor=\"let baseService of getNavbaseServiceList(baseServiceName)\" (click)=\"Visit(baseServiceName, baseService)\">{{baseService}}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div>\r\n  <div class=\"container-fluid jumbotron-fluid mx-auto d-block\">\r\n    <h1 class=\"display-1 w-100\"><b>{{infrastructureApi.baseServiceName}}</b></h1>\r\n    <h1 class=\"display-4 w-100 mb-4\">{{infrastructureApi.baseService}}</h1>\r\n    <div [ngSwitch]=\"infrastructureApi.baseServiceName\">\r\n      <app-apod-template *ngSwitchCase=\"'APoD'\"></app-apod-template>\r\n      <app-neows-template *ngSwitchCase=\"'NeoWs'\"></app-neows-template>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/template/main-template-component.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/template/main-template-component.component.ts ***!
  \***************************************************************/
/*! exports provided: MainTemplateComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTemplateComponentComponent", function() { return MainTemplateComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);




var MainTemplateComponentComponent = /** @class */ (function () {
    function MainTemplateComponentComponent(infrastructureApi) {
        this.infrastructureApi = infrastructureApi;
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
        infrastructureApi.baseService = this.baseServiceList[0];
    }
    MainTemplateComponentComponent.prototype.getbaseServiceList = function () {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.baseService = (this.infrastructureApi.baseService === '') ? Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName])[0] : this.infrastructureApi.baseService;
        return Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
    };
    MainTemplateComponentComponent.prototype.getNavbaseServiceList = function (baseServiceName) {
        var baseService = [];
        for (var _i = 0, _a = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__[baseServiceName]); _i < _a.length; _i++) {
            var index = _a[_i];
            baseService = baseService.concat([_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__[baseServiceName][index].Name]);
        }
        return baseService;
    };
    MainTemplateComponentComponent.prototype.Visit = function (baseServiceName, baseService) {
        console.table([[this.infrastructureApi.baseServiceName, baseServiceName], [this.infrastructureApi.baseService, baseService]]);
        this.infrastructureApi.baseServiceName = baseServiceName;
        console.log('qwertygfcvbjkl;');
        console.table(this.infrastructureApi);
        this.infrastructureApi.baseService = baseService;
    };
    MainTemplateComponentComponent.prototype.toggleNavDropDown = function (baseServiceName, showDropDownFlag) {
        if (showDropDownFlag) {
            document.getElementById('navbar-list-' + baseServiceName).className = 'nav-item dropdown show';
            document.getElementById('navbar-dropdown-list-' + baseServiceName).className = 'dropdown-menu show';
        }
        else {
            document.getElementById('navbar-list-' + baseServiceName).className = 'nav-item dropdown';
            document.getElementById('navbar-dropdown-list-' + baseServiceName).className = 'dropdown-menu';
        }
    };
    MainTemplateComponentComponent.prototype.ngOnInit = function () {
    };
    MainTemplateComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-template-component',
            template: __webpack_require__(/*! ./main-template-component.component.html */ "./src/app/template/main-template-component.component.html"),
            styles: [__webpack_require__(/*! ./main-template-component.component.css */ "./src/app/template/main-template-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_2__["InfrastructureApiService"]])
    ], MainTemplateComponentComponent);
    return MainTemplateComponentComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLWJyb3dzZS1ieS1hc3Rlcm9pZC1pZC10ZW1wbGF0ZS9uZW93cy1icm93c2UtYnktYXN0ZXJvaWQtaWQtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row my-2\">\n  <div class=\"container-fluid col-xl-4 col-lg-5 col-md-7 col-sm-9 col-12 no-gutters\">\n    <div class=\"w-100 input-group\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\" for=\"inputGroupSelect01\">Asteroid Id</label>\n      </div>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"infrastructureApi.UrlAdderPrameters.asteroid_id.DefaultValue\">\n    </div><br />\n    <div class=\"w-100 input-group\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">estimated_diameterType</label>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"selectEstimatedDiameterType\">\n        <option *ngFor=\"let estimated_diameterType of estimatedDiameterTypes\">{{estimated_diameterType}}</option>\n      </select>\n    </div><br />\n    <div class=\"w-100 input-group\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">asteroidRelativeVelocityType</label>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"selectcloseApproachDataRelativeVelocityType\">\n        <option *ngFor=\"let asteroidRelativeVelocityType of closeApproachDataRelativeVelocityTypes\">\n          {{asteroidRelativeVelocityType}}</option>\n      </select>\n    </div><br />\n    <div class=\"w-100 input-group\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">asteroidMissDistanceType</label>\n      </div>\n      <select class=\"custom-select\" [(ngModel)]=\"selectCloseApproachDataMissDistanceType\">\n        <option *ngFor=\"let asteroidMissDistanceType of closeApproachDataMissDistanceTypes\">{{asteroidMissDistanceType}}\n        </option>\n      </select>\n    </div><br />\n\n    <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowseByAsteroidId()\">Show</button>\n  </div>\n</div>\n<br />\n<span class=\"w-100 font-size-2rem\" *ngFor=\"let tuple of tupleList\">\n  <span class=\"font-size-h2\">{{tuple[0]}}:</span>&nbsp;{{tuple[1]}}<br />\n</span>\n<br />\n<div *ngFor=\"let table of tableDef\">\n  <div attr.id=\"{{'accordion-' + table}}\">\n    <div attr.id=\"{{'card-' + table}}\" class=\"card\">\n      <div class=\"card-header\" attr.id=\"{{'card-header' + table}}\">\n        <h3 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" attr.data-target=\"{{'#collapse' + table}}\" aria-expanded=\"false\" attr.aria-controls=\"{{'#collapse' + table}}\" (click)=\"infrastructureApi.cardPress(table)\">\n            <span class=\"fas fa-angle-right\" attr.id=\"{{'arrow' + table}}\"></span>&nbsp;\n            <span class=\"w-100 font-size-2rem\">\n              <span class=\"font-size-h2\">{{table}}:&nbsp;</span><br />\n            </span>\n          </button>\n        </h3>\n      </div>\n      <div attr.id=\"{{'collapse' + table}}\" class=\"collapse\" attr.data-parent=\"{{'#accordion-' + table}}\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered\">\n              <thead class=\"table-info\">\n                <tr>\n                  <th scope=\"col\" *ngFor=\"let column of tableTupleList[findIndexInColumnDef(table)][1]\">{{column}}</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let row of tableTupleList[findIndexInColumnDef(table)][2]\">\n                <tr>\n                  <td *ngFor=\"let column of tableTupleList[findIndexInColumnDef(table)][1]\">{{row[column]}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  </div>\n</div>\n<br />\n"

/***/ }),

/***/ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NeowsBrowseByAsteroidIdTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsBrowseByAsteroidIdTemplateComponent", function() { return NeowsBrowseByAsteroidIdTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var NeowsBrowseByAsteroidIdTemplateComponent = /** @class */ (function () {
    function NeowsBrowseByAsteroidIdTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.tableDef = [];
        this.tableTupleList = [];
        this.tupleList = [];
        this.serviceResponseBodyList = {};
        this.baseServiceName = 'NeoWs';
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.baseService = 'Neo - Browse by Asteroid ID';
        this.estimatedDiameterTypes = [];
        this.closeApproachDataRelativeVelocityTypes = [];
        this.closeApproachDataMissDistanceTypes = [];
        this.selectEstimatedDiameterType = '';
        this.selectcloseApproachDataRelativeVelocityType = '';
        this.selectCloseApproachDataMissDistanceType = '';
        this.reloadNeoWsBrowseByAsteroidId();
    }
    NeowsBrowseByAsteroidIdTemplateComponent.prototype.findIndexInColumnDef = function (tableName) {
        for (var _i = 0, _a = this.tableTupleList; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row[0] === tableName) {
                return this.tableTupleList.indexOf(row);
            }
        }
        return null;
    };
    NeowsBrowseByAsteroidIdTemplateComponent.prototype.reloadNeoWsBrowseByAsteroidId = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.baseService] = {};
            _this.serviceResponseBodyList[_this.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].links.self = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].links.self);
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].links = _this.serviceResponseBodyList[_this.baseService].links.self.changingThisBreaksApplicationSecurity;
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.baseService] });
            _this.estimatedDiameterTypes = Object.keys(_this.serviceResponseBodyList[_this.baseService].estimated_diameter);
            // tslint:disable-next-line: max-line-length
            _this.closeApproachDataRelativeVelocityTypes = Object.keys(_this.serviceResponseBodyList[_this.baseService].close_approach_data[0].relative_velocity);
            // tslint:disable-next-line: max-line-length
            _this.closeApproachDataMissDistanceTypes = Object.keys(_this.serviceResponseBodyList[_this.baseService].close_approach_data[0].miss_distance);
            // tslint:disable-next-line: max-line-length
            _this.selectEstimatedDiameterType = (_this.selectEstimatedDiameterType === '') ? _this.estimatedDiameterTypes[0] : _this.selectEstimatedDiameterType;
            // tslint:disable-next-line: max-line-length
            _this.selectcloseApproachDataRelativeVelocityType = (_this.selectcloseApproachDataRelativeVelocityType === '') ? _this.closeApproachDataRelativeVelocityTypes[0] : _this.selectcloseApproachDataRelativeVelocityType;
            // tslint:disable-next-line: max-line-length
            _this.selectCloseApproachDataMissDistanceType = (_this.selectCloseApproachDataMissDistanceType === '') ? _this.closeApproachDataMissDistanceTypes[0] : _this.selectCloseApproachDataMissDistanceType;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].estimated_diameter = _this.serviceResponseBodyList[_this.baseService].estimated_diameter[_this.selectEstimatedDiameterType];
            for (var _i = 0, _a = _this.serviceResponseBodyList[_this.baseService].close_approach_data; _i < _a.length; _i++) {
                var row = _a[_i];
                row.miss_distance = row.miss_distance[_this.selectCloseApproachDataMissDistanceType];
                row.relative_velocity = row.relative_velocity[_this.selectcloseApproachDataRelativeVelocityType];
            }
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].orbital_data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.serviceResponseBodyList[_this.baseService].orbital_data, _this.serviceResponseBodyList[_this.baseService].orbital_data.orbit_class);
            delete _this.serviceResponseBodyList[_this.baseService].orbital_data.orbit_class;
            _this.tableTupleList = [];
            _this.tableDef = [];
            _this.tupleList = [];
            for (var _b = 0, _c = Object.keys(_this.serviceResponseBodyList[_this.baseService]); _b < _c.length; _b++) {
                var key = _c[_b];
                if (typeof (_this.serviceResponseBodyList[_this.baseService][key]) === 'object') {
                    if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(_this.serviceResponseBodyList[_this.baseService][key])) {
                        // tslint:disable-next-line: max-line-length
                        _this.tableTupleList.push([key, Object.keys(_this.serviceResponseBodyList[_this.baseService][key][0]), _this.serviceResponseBodyList[_this.baseService][key]]);
                    }
                    else if (_this.tableDef.indexOf(key) < 0) {
                        // tslint:disable-next-line: max-line-length
                        _this.tableTupleList.push([key, Object.keys(_this.serviceResponseBodyList[_this.baseService][key]), [_this.serviceResponseBodyList[_this.baseService][key]]]);
                    }
                    _this.tableDef.push(key);
                }
                else {
                    _this.tupleList.push([key, _this.serviceResponseBodyList[_this.baseService][key]]);
                }
            }
            console.table(_this.tupleList);
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    NeowsBrowseByAsteroidIdTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsBrowseByAsteroidIdTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-browse-by-asteroid-id-template',
            template: __webpack_require__(/*! ./neows-browse-by-asteroid-id-template.component.html */ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-browse-by-asteroid-id-template.component.css */ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NeowsBrowseByAsteroidIdTemplateComponent);
    return NeowsBrowseByAsteroidIdTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-browse-template/neows-browse-template.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/template/neows-browse-template/neows-browse-template.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLWJyb3dzZS10ZW1wbGF0ZS9uZW93cy1icm93c2UtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/neows-browse-template/neows-browse-template.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/template/neows-browse-template/neows-browse-template.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n  <div class=\"container-fluid col-xl-4 col-lg-5 col-md-7 col-sm-9 col-12 no-gutters\">\n    <div class=\"w-100 input-group my-2\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">Page:&nbsp;</label>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"infrastructureApi.QueryPrameters.page\">\n      <div class=\"input-group-append\">\n        <label class=\"input-group-text\">&nbsp;/&nbsp;{{maxPageNo}}</label>\n      </div>\n    </div>\n    <div class=\"w-100 input-group my-2\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">Size:&nbsp;</label>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"infrastructureApi.QueryPrameters.size\">\n    </div><br />\n    <div class=\"my-2\">\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowsePrevious()\">Previous</button>\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowse()\">Show</button>\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowseNext()\">Next</button>\n    </div>\n  </div>\n</div>\n<br />\n<span class=\"row w-100 font-size-2rem\">\n    <span class=\"font-size-h2\">Total Element:</span>&nbsp;{{totalNoOfElements}}\n</span>\n<div class=\"table-responsive my-5\">\n    <table class=\"table table-bordered\">\n      <thead class=\"table-info\">\n        <tr>\n          <th scope=\"col\" *ngFor=\"let column of columnDef\">{{column}}</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let row of this.serviceResponseBodyList[this.baseService].near_earth_objects\">\n        <tr>\n            <td *ngFor=\"let column of columnDef\">{{row[column]}}</td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/template/neows-browse-template/neows-browse-template.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/template/neows-browse-template/neows-browse-template.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NeowsBrowseTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsBrowseTemplateComponent", function() { return NeowsBrowseTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");






var NeowsBrowseTemplateComponent = /** @class */ (function () {
    function NeowsBrowseTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.columnDef = [];
        this.baseServiceName = 'NeoWs';
        this.serviceResponseBodyList = {};
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.baseService = 'Neo - Browse';
        this.maxPageNo = '';
        this.totalNoOfElements = '';
        this.reloadNeoWsBrowse();
    }
    NeowsBrowseTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsBrowseTemplateComponent.prototype.reloadNeoWsBrowsePrevious = function () {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.page = (this.infrastructureApi.QueryPrameters.page === '0') ? '0' : (parseInt(this.infrastructureApi.QueryPrameters.page) - 1).toString();
        this.reloadNeoWsBrowse();
    };
    NeowsBrowseTemplateComponent.prototype.reloadNeoWsBrowseNext = function () {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.page = (parseInt(this.infrastructureApi.QueryPrameters.page) >= (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1)) ? (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1).toString() : (parseInt(this.infrastructureApi.QueryPrameters.page) + 1).toString();
        this.reloadNeoWsBrowse();
    };
    NeowsBrowseTemplateComponent.prototype.reloadNeoWsBrowse = function () {
        var _this = this;
        console.log('/*-+');
        console.log(typeof (this.infrastructureApi.QueryPrameters.page));
        this.infrastructureApi.GenerateResponseUrl();
        console.log(this.serviceResponseBodyList[this.baseService]);
        console.log(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]);
        this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.baseService] = {};
            _this.serviceResponseBodyList[_this.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].url);
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.baseService] });
            console.log(Object.keys(_this.serviceResponseBodyList[_this.baseService].near_earth_objects[0]));
            for (var _i = 0, _a = Object.keys(_this.serviceResponseBodyList[_this.baseService].near_earth_objects[0]); _i < _a.length; _i++) {
                var key = _a[_i];
                // tslint:disable-next-line: max-line-length
                if ((typeof (_this.serviceResponseBodyList[_this.baseService].near_earth_objects[0][key]) !== 'object') && (_this.columnDef.indexOf(key) < 0)) {
                    _this.columnDef.push(key);
                }
            }
            console.log(_this.columnDef);
            _this.maxPageNo = (parseInt(_this.serviceResponseBodyList[_this.baseService].page.total_pages) - 1).toString();
            _this.totalNoOfElements = _this.serviceResponseBodyList[_this.baseService].page.total_elements.toString();
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    NeowsBrowseTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-browse-template',
            template: __webpack_require__(/*! ./neows-browse-template.component.html */ "./src/app/template/neows-browse-template/neows-browse-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-browse-template.component.css */ "./src/app/template/neows-browse-template/neows-browse-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NeowsBrowseTemplateComponent);
    return NeowsBrowseTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-feed-template/neows-feed-template.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/template/neows-feed-template/neows-feed-template.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLWZlZWQtdGVtcGxhdGUvbmVvd3MtZmVlZC10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/template/neows-feed-template/neows-feed-template.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/template/neows-feed-template/neows-feed-template.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-xl-4 col-lg-5 col-md-7 col-sm-9 col-12 no-gutters\">\n  <div class=\"input-group my-2\">\n    <div class=\"input-group-prepend\">\n      <label class=\"input-group-text\">start_date:&nbsp;</label>\n    </div>\n    <input type=\"date\" [(ngModel)]=\"infrastructureApi.QueryPrameters.start_date\">\n  </div>\n  <div class=\"input-group my-2\">\n    <div class=\"input-group-prepend\">\n      <label class=\"input-group-text\">end_date:&nbsp;</label>\n    </div>\n    <input type=\"date\" [(ngModel)]=\"infrastructureApi.QueryPrameters.end_date\">\n  </div>\n  <div class=\"w-100\">\n    <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsFeed()\">Show</button>\n    <button type=\"button\" class=\"btn btn-info ml-4\" (click)=\"reloadNeoWsFeedForToday()\">Show Today's\n      Feed</button><br /><br />\n  </div>\n</div>\n<span class=\"w-100 font-size-2rem\">\n  <span class=\"font-size-h2\">Element Count:</span>&nbsp;{{serviceResponseBodyList[baseService].element_count}}\n</span>\n<br />\n<br />\n  <div id=\"accordion\" *ngFor=\"let date of NearEarthObjectsDatesList\">\n    <div class=\"card\">\n      <div class=\"card-header\" attr.id=\"{{'card' + date}}\">\n        <h3 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" attr.data-target=\"{{'#collapse' + date}}\" aria-expanded=\"true\" attr.aria-controls=\"{{'#collapse' + date}}\">\n            <span class=\"fas fa-calendar-alt\"></span>&nbsp;{{date}}\n          </button>\n        </h3>\n      </div>\n      <div attr.id=\"{{'collapse' + date}}\" class=\"collapse show\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered\">\n              <thead class=\"table-info\">\n                <tr>\n                  <th scope=\"col\" *ngFor=\"let column of columnDef\">{{column}}</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let row of serviceResponseBodyList[baseService].near_earth_objects[date]\">\n                <tr>\n                  <td *ngFor=\"let column of columnDef\">{{row[column]}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  </div>\n"

/***/ }),

/***/ "./src/app/template/neows-feed-template/neows-feed-template.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/template/neows-feed-template/neows-feed-template.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NeowsFeedTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsFeedTemplateComponent", function() { return NeowsFeedTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");






var NeowsFeedTemplateComponent = /** @class */ (function () {
    function NeowsFeedTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.GetDetailedBody = false;
        this.NearEarthObjectsDatesList = [];
        this.columnDef = [];
        this.baseServiceName = 'NeoWs';
        this.serviceResponseBodyList = {};
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.baseService = 'Neo - Feed';
        this.reloadNeoWsFeed();
    }
    NeowsFeedTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsFeedTemplateComponent.prototype.reloadNeoWsFeedForToday = function () {
        var endDate = new Date(new Date().getTime() - 45000000);
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.start_date = endDate.getFullYear().toString().padStart(4, '0') + "-" + (endDate.getMonth() + 1).toString().padStart(2, '0') + "-" + endDate.getDate().toString().padStart(2, '0');
        ;
        this.infrastructureApi.QueryPrameters.end_date = this.infrastructureApi.QueryPrameters.start_date;
        this.reloadNeoWsFeed();
    };
    NeowsFeedTemplateComponent.prototype.reloadNeoWsFeed = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        console.log(this.serviceResponseBodyList[this.baseService]);
        console.log(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]);
        this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.baseService] = {};
            _this.serviceResponseBodyList[_this.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].url);
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.baseService] });
            _this.NearEarthObjectsDatesList = Object.keys(_this.serviceResponseBodyList[_this.baseService].near_earth_objects).sort();
            // tslint:disable-next-line: max-line-length
            for (var _i = 0, _a = Object.keys(_this.serviceResponseBodyList[_this.baseService].near_earth_objects[_this.NearEarthObjectsDatesList[0]][0]); _i < _a.length; _i++) {
                var key = _a[_i];
                // tslint:disable-next-line: max-line-length
                if (typeof (_this.serviceResponseBodyList[_this.baseService].near_earth_objects[_this.NearEarthObjectsDatesList[0]][0][key]) !== 'object') {
                    if (_this.columnDef.indexOf(key) < 0) {
                        _this.columnDef.push(key);
                    }
                }
            }
            console.log(_this.columnDef);
            console.log(_this.NearEarthObjectsDatesList);
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    NeowsFeedTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-feed-template',
            template: __webpack_require__(/*! ./neows-feed-template.component.html */ "./src/app/template/neows-feed-template/neows-feed-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-feed-template.component.css */ "./src/app/template/neows-feed-template/neows-feed-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NeowsFeedTemplateComponent);
    return NeowsFeedTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLW5lby1zZW50cnktdGVtcGxhdGUvbmVvd3MtbmVvLXNlbnRyeS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n  <div class=\"container-fluid col-xl-4 col-lg-5 col-md-7 col-sm-9 col-12 no-gutters\">\n    <div class=\"w-100 input-group my-2\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">Page:&nbsp;</label>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"infrastructureApi.QueryPrameters.page\">\n      <div class=\"input-group-append\">\n        <label class=\"input-group-text\">&nbsp;/&nbsp;{{maxPageNo}}</label>\n      </div>\n    </div>\n    <div class=\"w-100 input-group my-2\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\">Size:&nbsp;</label>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"infrastructureApi.QueryPrameters.size\">\n    </div><br />\n    <div class=\"my-2\">\n      <div class=\"w-100 my-2 row\">\n        <input type=\"checkbox\" class=\"align-self-center offset-1\" [(ngModel)]=\"infrastructureApi.QueryPrameters.is_active\" (click)=\"resetPageNumber()\">\n        <span class=\"col-1 align-self-center\">&nbsp;is_active</span>\n      </div>\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowsePrevious()\">Previous</button>\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowse()\">Show</button>\n      <button type=\"button\" class=\"btn btn-info mr-4\" (click)=\"reloadNeoWsBrowseNext()\">Next</button>\n    </div>\n  </div>\n</div>\n<br />\n<span class=\"row w-100 font-size-2rem\">\n    <span class=\"font-size-h2\">Total Element:</span>&nbsp;{{totalNoOfElements}}\n</span>\n<div class=\"table-responsive my-5\">\n    <table class=\"table table-bordered\">\n      <thead class=\"table-info\">\n        <tr>\n          <th scope=\"col\" *ngFor=\"let column of columnDef\">{{column}}</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let row of this.serviceResponseBodyList[this.baseService].sentry_objects\">\n        <tr>\n            <td *ngFor=\"let column of columnDef\">{{row[column]}}</td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NeowsNeoSentryTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsNeoSentryTemplateComponent", function() { return NeowsNeoSentryTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");






var NeowsNeoSentryTemplateComponent = /** @class */ (function () {
    function NeowsNeoSentryTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.columnDef = [];
        this.baseServiceName = 'NeoWs';
        this.serviceResponseBodyList = {};
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.baseService = 'Neo - Sentry';
        this.maxPageNo = '';
        this.totalNoOfElements = '';
        this.reloadNeoWsBrowse();
    }
    NeowsNeoSentryTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsNeoSentryTemplateComponent.prototype.reloadNeoWsBrowsePrevious = function () {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.page = (this.infrastructureApi.QueryPrameters.page === '0') ? '0' : (parseInt(this.infrastructureApi.QueryPrameters.page) - 1).toString();
        this.reloadNeoWsBrowse();
    };
    NeowsNeoSentryTemplateComponent.prototype.reloadNeoWsBrowseNext = function () {
        // tslint:disable-next-line: max-line-length
        this.infrastructureApi.QueryPrameters.page = (parseInt(this.infrastructureApi.QueryPrameters.page) >= (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1)) ? (parseInt(this.serviceResponseBodyList[this.baseService].page.total_pages) - 1).toString() : (parseInt(this.infrastructureApi.QueryPrameters.page) + 1).toString();
        this.reloadNeoWsBrowse();
    };
    NeowsNeoSentryTemplateComponent.prototype.reloadNeoWsBrowse = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.baseService] = {};
            _this.serviceResponseBodyList[_this.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].url);
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.baseService] });
            console.log(Object.keys(_this.serviceResponseBodyList[_this.baseService].sentry_objects[0]));
            for (var _i = 0, _a = Object.keys(_this.serviceResponseBodyList[_this.baseService].sentry_objects[0]); _i < _a.length; _i++) {
                var key = _a[_i];
                // tslint:disable-next-line: max-line-length
                if ((typeof (_this.serviceResponseBodyList[_this.baseService].sentry_objects[0][key]) !== 'object') && (_this.columnDef.indexOf(key) < 0)) {
                    _this.columnDef.push(key);
                }
            }
            console.log(_this.columnDef);
            _this.maxPageNo = (parseInt(_this.serviceResponseBodyList[_this.baseService].page.total_pages) - 1).toString();
            _this.totalNoOfElements = _this.serviceResponseBodyList[_this.baseService].page.total_elements.toString();
            console.log('maxPage');
            console.log(_this.maxPageNo);
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    NeowsNeoSentryTemplateComponent.prototype.resetPageNumber = function () {
        this.infrastructureApi.QueryPrameters.page = '0';
    };
    NeowsNeoSentryTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-neo-sentry-template',
            template: __webpack_require__(/*! ./neows-neo-sentry-template.component.html */ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-neo-sentry-template.component.css */ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NeowsNeoSentryTemplateComponent);
    return NeowsNeoSentryTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-stats-template/neows-stats-template.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/template/neows-stats-template/neows-stats-template.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLXN0YXRzLXRlbXBsYXRlL25lb3dzLXN0YXRzLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/template/neows-stats-template/neows-stats-template.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/template/neows-stats-template/neows-stats-template.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"font-size-h4\">\n  <b>near_earth_object_count:</b>&nbsp;{{serviceResponseBodyList[this.baseService].near_earth_object_count}}<br />\n  <b>close_approach_count:</b>&nbsp;{{serviceResponseBodyList[this.baseService].close_approach_count}}<br />\n  <b>last_updated:</b>&nbsp;{{serviceResponseBodyList[this.baseService].last_updated}}<br />\n  <br />\n  {{serviceResponseBodyList[this.baseService].source}}<br />\n  <a attr.href=\"{{serviceResponseBodyList[this.baseService].nasa_jpl_url}}\" target=\"_blank\">NASA's Center of Near Earth Object Studies</a><br />\n</div>\n"

/***/ }),

/***/ "./src/app/template/neows-stats-template/neows-stats-template.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/template/neows-stats-template/neows-stats-template.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NeowsStatsTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsStatsTemplateComponent", function() { return NeowsStatsTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");






var NeowsStatsTemplateComponent = /** @class */ (function () {
    function NeowsStatsTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.baseServiceName = 'NeoWs';
        this.serviceResponseBodyList = {};
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.baseService = 'Neo - Stats';
        this.reloadNeoWsStats();
    }
    NeowsStatsTemplateComponent.prototype.reloadNeoWsStats = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        this.http.get(this.infrastructureApi.ResponceURLDict[this.baseServiceName][this.baseService]).subscribe(function (body) {
            _this.serviceResponseBodyList[_this.baseService] = {};
            _this.serviceResponseBodyList[_this.baseService] = body;
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].url);
            console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[_this.baseService] });
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].nasa_jpl_url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[_this.baseService].nasa_jpl_url);
            // tslint:disable-next-line: max-line-length
            _this.serviceResponseBodyList[_this.baseService].nasa_jpl_url = _this.serviceResponseBodyList[_this.baseService].nasa_jpl_url.changingThisBreaksApplicationSecurity;
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    NeowsStatsTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsStatsTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-stats-template',
            template: __webpack_require__(/*! ./neows-stats-template.component.html */ "./src/app/template/neows-stats-template/neows-stats-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-stats-template.component.css */ "./src/app/template/neows-stats-template/neows-stats-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NeowsStatsTemplateComponent);
    return NeowsStatsTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/neows-template/neows-template.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/template/neows-template/neows-template.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25lb3dzLXRlbXBsYXRlL25lb3dzLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/template/neows-template/neows-template.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/template/neows-template/neows-template.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid jumbotron-fluid mx-auto d-block px-5 ml-4\">\n  <div [ngSwitch]=\"infrastructureApi.baseService\">\n    <app-neows-feed-template *ngSwitchCase=\"'Neo - Feed'\"></app-neows-feed-template>\n    <app-neows-browse-template *ngSwitchCase=\"'Neo - Browse'\"></app-neows-browse-template>\n    <app-neows-neo-sentry-template *ngSwitchCase=\"'Neo - Sentry'\"></app-neows-neo-sentry-template>\n    <app-neows-stats-template *ngSwitchCase=\"'Neo - Stats'\"></app-neows-stats-template>\n    <app-neows-browse-by-asteroid-id-template *ngSwitchCase=\"'Neo - Browse by Asteroid ID'\">Neo - Browse by Asteroid ID</app-neows-browse-by-asteroid-id-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/template/neows-template/neows-template.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/template/neows-template/neows-template.component.ts ***!
  \*********************************************************************/
/*! exports provided: NeowsTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeowsTemplateComponent", function() { return NeowsTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");



var NeowsTemplateComponent = /** @class */ (function () {
    function NeowsTemplateComponent(infrastructureApi) {
        this.infrastructureApi = infrastructureApi;
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.infrastructureApi.baseServiceName]);
        this.infrastructureApi.baseService = this.baseServiceList[0];
    }
    NeowsTemplateComponent.prototype.ngOnInit = function () {
    };
    NeowsTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-neows-template',
            template: __webpack_require__(/*! ./neows-template.component.html */ "./src/app/template/neows-template/neows-template.component.html"),
            styles: [__webpack_require__(/*! ./neows-template.component.css */ "./src/app/template/neows-template/neows-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_2__["InfrastructureApiService"]])
    ], NeowsTemplateComponent);
    return NeowsTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/template.module.ts":
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _main_template_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-template-component.component */ "./src/app/template/main-template-component.component.ts");
/* harmony import */ var _apod_template_apod_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apod-template/apod-template.component */ "./src/app/template/apod-template/apod-template.component.ts");
/* harmony import */ var _neows_template_neows_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./neows-template/neows-template.component */ "./src/app/template/neows-template/neows-template.component.ts");
/* harmony import */ var _neows_feed_template_neows_feed_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./neows-feed-template/neows-feed-template.component */ "./src/app/template/neows-feed-template/neows-feed-template.component.ts");
/* harmony import */ var _neows_browse_template_neows_browse_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./neows-browse-template/neows-browse-template.component */ "./src/app/template/neows-browse-template/neows-browse-template.component.ts");
/* harmony import */ var _neows_neo_sentry_template_neows_neo_sentry_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./neows-neo-sentry-template/neows-neo-sentry-template.component */ "./src/app/template/neows-neo-sentry-template/neows-neo-sentry-template.component.ts");
/* harmony import */ var _neows_stats_template_neows_stats_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./neows-stats-template/neows-stats-template.component */ "./src/app/template/neows-stats-template/neows-stats-template.component.ts");
/* harmony import */ var _neows_browse_by_asteroid_id_template_neows_browse_by_asteroid_id_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component */ "./src/app/template/neows-browse-by-asteroid-id-template/neows-browse-by-asteroid-id-template.component.ts");














var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_template_component_component__WEBPACK_IMPORTED_MODULE_6__["MainTemplateComponentComponent"],
                _apod_template_apod_template_component__WEBPACK_IMPORTED_MODULE_7__["ApodTemplateComponent"],
                _neows_template_neows_template_component__WEBPACK_IMPORTED_MODULE_8__["NeowsTemplateComponent"],
                _neows_feed_template_neows_feed_template_component__WEBPACK_IMPORTED_MODULE_9__["NeowsFeedTemplateComponent"],
                _neows_browse_template_neows_browse_template_component__WEBPACK_IMPORTED_MODULE_10__["NeowsBrowseTemplateComponent"],
                _neows_neo_sentry_template_neows_neo_sentry_template_component__WEBPACK_IMPORTED_MODULE_11__["NeowsNeoSentryTemplateComponent"],
                _neows_stats_template_neows_stats_template_component__WEBPACK_IMPORTED_MODULE_12__["NeowsStatsTemplateComponent"],
                _neows_browse_by_asteroid_id_template_neows_browse_by_asteroid_id_template_component__WEBPACK_IMPORTED_MODULE_13__["NeowsBrowseByAsteroidIdTemplateComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"]
            ]
        })
    ], TemplateModule);
    return TemplateModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pragoel\source\repos\Angular 7\NAStro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map