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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/template.module */ "./src/app/template/template.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _template_template_module__WEBPACK_IMPORTED_MODULE_6__["TemplateModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = {"APoD":{"0":{"Name":"Astronomy Picture of the Day","Properties":{"RequestURLDomian":"https://api.nasa.gov/planetary/apod?","QueryString":{"0":{"VariableName":"date","DefaultValue":"2019-05-20"},"1":{"VariableName":"hd","DefaultValue":"true"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"NeoWs":{"0":{"Name":"Neo - Feed","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/feed?","QueryString":{"0":{"VariableName":"start_date","DefaultValue":"2019-05-20"},"1":{"VariableName":"end_date","DefaultValue":"2019-05-20"},"2":{"VariableName":"detailed","DefaultValue":"true"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"1":{"Name":"Neo - Lookup","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/","URLAddder":{"0":{"VariableName":"Asteroid_Id","DefaultValue":"3542519","IncludeVariableName":"false"}},"QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"2":{"Name":"Neo - Browse","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/browse?","QueryString":{"0":{"VariableName":"page","DefaultValue":"0"},"1":{"VariableName":"size","DefaultValue":"20"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"3":{"Name":"Neo - Feed Today","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/feed/today?","QueryString":{"0":{"VariableName":"detailed","DefaultValue":"true"},"1":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"4":{"Name":"Neo - Sentry","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/neo/sentry?","QueryString":{"0":{"VariableName":"is_active","DefaultValue":"true"},"1":{"VariableName":"page","DefaultValue":"0"},"2":{"VariableName":"size","DefaultValue":"50"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"6":{"Name":"Neo - Stats","Properties":{"RequestURLDomian":"https://api.nasa.gov/neo/rest/v1/stats?","QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"DONKI":{"0":{"Name":"Coronal Mass Ejection (CME)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/CME?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"1":{"Name":"Coronal Mass Ejection (CME) Analysis","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/CMEAnalysis?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2019-04-20"},"1":{"VariableName":"endDate","DefaultValue":"2019-05-20"},"2":{"VariableName":"mostAccurateOnly","DefaultValue":"true"},"3":{"VariableName":"completeEntryOnly","DefaultValue":"true"},"4":{"VariableName":"speed","DefaultValue":"0"},"5":{"VariableName":"halfAngle","DefaultValue":"0"},"6":{"VariableName":"catalog","DefaultValue":"ALL"},"7":{"VariableName":"keyword","DefaultValue":"NONE"},"8":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"2":{"Name":"Geomagnetic Storm (GST)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/GST?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"3":{"Name":"Interplanetary Shock (IPS)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/IPS?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"location","DefaultValue":"ALL"},"3":{"VariableName":"catalog","DefaultValue":"ALL"},"4":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"4":{"Name":"Solar Flare (FLR)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/FLR?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"5":{"Name":"Solar Energetic Particle (SEP)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/SEP?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"6":{"Name":"Magnetopause Crossing (MPC)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/MPC?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"7":{"Name":"Radiation Belt Enhancement (RBE)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/RBE?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2018-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"8":{"Name":"Hight Speed Stream (HSS)","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/HSS?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"9":{"Name":"WSA+EnlilSimulation","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/WSAEnlilSimulations?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}},"10":{"Name":"Notifications","Properties":{"RequestURLDomian":"https://api.nasa.gov/DONKI/notifications?","QueryString":{"0":{"VariableName":"startDate","DefaultValue":"2017-01-03"},"1":{"VariableName":"endDate","DefaultValue":"2017-01-03"},"2":{"VariableName":"type","DefaultValue":"all"},"3":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}},"EPIC":{"0":{"Name":"Daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument","Properties":{"RequestURLDomian":"https://api.nasa.gov/EPIC/api/","URLAddder":{"0":{"VariableName":"natural","DefaultValue":"","IncludeVariableName":"true"},"1":{"VariableName":"natural/date","DefaultValue":"2016-12-31","IncludeVariableName":"true"},"2":{"VariableName":"natural/all","DefaultValue":"","IncludeVariableName":"true"},"3":{"VariableName":"natural/available","DefaultValue":"","IncludeVariableName":"true"},"4":{"VariableName":"enhanced","DefaultValue":"","IncludeVariableName":"true"},"5":{"VariableName":"enhanced/date","DefaultValue":"2016-12-31","IncludeVariableName":"true"},"6":{"VariableName":"enhanced/all","DefaultValue":"","IncludeVariableName":"true"},"7":{"VariableName":"enhanced/available","DefaultValue":"","IncludeVariableName":"true"}},"QueryString":{"0":{"VariableName":"api_key","DefaultValue":"ZXn3VY8awAQjbLgQYxaW0Jph0AoJFkS1hdhxDZWB"}}}}}};

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
        this.GenerateResponseUrl();
    }
    InfrastructureApiService.prototype.GenerateResponseUrl = function () {
        var baseServiceNameList = Object.keys(_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_3__);
        for (var _i = 0, baseServiceNameList_1 = baseServiceNameList; _i < baseServiceNameList_1.length; _i++) {
            var baseServiceName = baseServiceNameList_1[_i];
            this.getResponseURL(baseServiceName);
        }
        console.table(this.ResponceURLDict);
    };
    InfrastructureApiService.prototype.getResponseJsonData = function () {
        console.log(this.ResponceURLDict);
    };
    InfrastructureApiService.prototype.getResponseURL = function (baseServiceName) {
        var responseURLList = {};
        var baseService = this.DataDict[baseServiceName];
        for (var _i = 0, _a = Object.keys(baseService); _i < _a.length; _i++) {
            var serviceNumName = _a[_i];
            var serviceNum = baseService[serviceNumName];
            var serviceName = serviceNum.Name;
            var serviceProperties = serviceNum.Properties;
            var responseURL = serviceProperties.RequestURLDomian;
            var URLAddder = serviceProperties.URLAddder;
            var QueryPram = serviceProperties.QueryString;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(URLAddder)) {
                var responseURLwithAdderList = {};
                var i = 0;
                for (var _b = 0, _c = Object.keys(URLAddder); _b < _c.length; _b++) {
                    var URLAddNumName = _c[_b];
                    responseURL = serviceProperties.RequestURLDomian;
                    var adder = URLAddder[URLAddNumName];
                    // tslint:disable-next-line: max-line-length
                    responseURL = responseURL.concat("" + ((adder.IncludeVariableName === 'true') ? adder.VariableName + '/' : '') + ((true) ? adder.DefaultValue : undefined) + "?");
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(QueryPram)) {
                        for (var _d = 0, _e = Object.keys(QueryPram); _d < _e.length; _d++) {
                            var propertyName = _e[_d];
                            var property = QueryPram[propertyName];
                            // tslint:disable-next-line: max-line-length
                            this.QueryPrameters[property.VariableName] = (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) ? property.DefaultValue : this.QueryPrameters[property.VariableName];
                            var date = new Date();
                            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) {
                                if (property.VariableName === 'date') {
                                    // tslint:disable-next-line: max-line-length
                                    this.QueryPrameters[property.VariableName] = date.getFullYear().toString().padStart(4, '0') + "-" + date.getMonth().toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
                                }
                                else {
                                    this.QueryPrameters[property.VariableName] = property.DefaultValue;
                                }
                            }
                            else {
                                this.QueryPrameters[property.VariableName] = this.QueryPrameters[property.VariableName];
                            }
                            responseURL = responseURL.concat(property.VariableName + "=" + this.QueryPrameters[property.VariableName] + "&");
                        }
                    }
                    responseURLwithAdderList[i.toString()] = responseURL;
                    // this.http.get(responseURL).subscribe((body) => {
                    // });
                    // i = i + 1;
                }
                responseURLList[serviceName] = (Object.keys(URLAddder).length === 1) ? responseURLwithAdderList[0] : responseURLwithAdderList;
            }
            else {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(QueryPram)) {
                    for (var _f = 0, _g = Object.keys(QueryPram); _f < _g.length; _f++) {
                        var propertyName = _g[_f];
                        var property = QueryPram[propertyName];
                        var date = new Date();
                        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.QueryPrameters[property.VariableName])) {
                            if (property.VariableName === 'date') {
                                // tslint:disable-next-line: max-line-length
                                this.QueryPrameters[property.VariableName] = date.getFullYear().toString().padStart(4, '0') + "-" + date.getMonth().toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
                            }
                            else {
                                this.QueryPrameters[property.VariableName] = property.DefaultValue;
                            }
                        }
                        else {
                            this.QueryPrameters[property.VariableName] = this.QueryPrameters[property.VariableName];
                        }
                        responseURL = responseURL.concat(property.VariableName + "=" + this.QueryPrameters[property.VariableName] + "&");
                    }
                }
                responseURLList[serviceName] = responseURL;
                // this.http.get(responseURL).subscribe((body) => {
                //   responseURLList[serviceName] = body;
                //   // document.getElementById(baseServiceName).innerHTML = JSON.stringify(body);
                // });
            }
        }
        this.ResponceURLDict[baseServiceName] = responseURLList;
    };
    InfrastructureApiService.prototype.getJsonResponse = function (url) {
        var response = {};
        this.http.get(url).subscribe(function (body) {
            response = body;
            return response;
        });
        return null;
    };
    InfrastructureApiService.prototype.demoTable = function (columnDefs, rowData) {
        var table = '';
        table = table.concat('<table class="table table-striped table-bordered table-hover">');
        table = table.concat('<thead class="thead-dark"><tr>');
        for (var _i = 0, columnDefs_1 = columnDefs; _i < columnDefs_1.length; _i++) {
            var header = columnDefs_1[_i];
            table = table.concat("<th scope=\"col\">" + header + "</th>");
        }
        table = table.concat('</tr></thead>');
        for (var _a = 0, columnDefs_2 = columnDefs; _a < columnDefs_2.length; _a++) {
            var header = columnDefs_2[_a];
            console.log(typeof (rowData[header]) === 'object');
            if (typeof (rowData[header]) === 'object') {
                table = table.concat("<td>" + this.demoTable(Object.keys(rowData[header]), rowData[header]) + "</td>");
            }
            table = table.concat("<td>" + rowData[header] + "</td>");
        }
        table = table.concat('</table>');
        return table;
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

module.exports = "<div class='container-fluid jumbotron-fluid mx-auto d-block m-5 p-5'>\n  <h1><b>{{baseServiceName}}</b></h1>\n  <div *ngFor=\"let baseService of baseServiceList\">\n    <h1>{{baseService}}</h1><br />\n    <input type=\"date\" id='date' [(ngModel)]=\"infrastructureApi.QueryPrameters.date\"><br /><br />\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"reloadAPoD()\">Reload Response</button><br /><br />\n    {{serviceResponseBodyList[baseService].title}}<br />\n    {{serviceResponseBodyList[baseService].explanation}}<br />\n    <input type=\"checkbox\" [(ngModel)]=\"showHdImage\">Show HD Image<br /><br />\n    <img [src]=\"serviceResponseBodyList[baseService].url\" class=\"img-fluid border rounded-lg p-3 mx-auto d-block\" *ngIf=\"serviceResponseBodyList[baseService].media_type==='image' && !showHdImage\">\n    <img [src]=\"serviceResponseBodyList[baseService].hdurl\" class=\"img-fluid border rounded-lg p-3 mx-auto d-block\" *ngIf=\"serviceResponseBodyList[baseService].media_type === 'image' && showHdImage\">\n    <iframe id=\"youtubeplayer\" type=\"text/html\" width=\"640\" height=\"360\" [src]=\"serviceResponseBodyList[baseService].url\" frameborder=\"0\" *ngIf=\"serviceResponseBodyList[baseService].media_type === 'video'\"></iframe>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);
/* harmony import */ var src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");






var ApodTemplateComponent = /** @class */ (function () {
    function ApodTemplateComponent(infrastructureApi, http, sanitizer) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.tableObject = {};
        this.showHdImage = true;
        this.baseServiceName = 'APoD';
        this.serviceResponseBodyList = {};
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
        this.baseServiceList = Object.keys(this.infrastructureApi.ResponceURLDict[this.baseServiceName]);
        this.reloadAPoD();
    }
    ApodTemplateComponent.prototype.reloadAPoD = function () {
        var _this = this;
        this.infrastructureApi.GenerateResponseUrl();
        var _loop_1 = function (baseService) {
            console.log(this_1.infrastructureApi.ResponceURLDict[this_1.baseServiceName][baseService]);
            this_1.http.get(this_1.infrastructureApi.ResponceURLDict[this_1.baseServiceName][baseService]).subscribe(function (body) {
                _this.serviceResponseBodyList[baseService] = {};
                _this.serviceResponseBodyList[baseService] = body;
                // tslint:disable-next-line: max-line-length
                _this.serviceResponseBodyList[baseService].url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.serviceResponseBodyList[baseService].url);
                console.table({ 'responseObjectDictionary': _this.serviceResponseBodyList[baseService] });
                // this.tableObject[baseservice] = this.infrastructureApi.demoTable(Object.keys(body), body);
                // (document.getElementById(`${baseservice}-table`) as HTMLSpanElement).innerHTML = this.tableObject[baseservice];
            }, function (error) {
                console.log(error);
            }, function () { });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.baseServiceList; _i < _a.length; _i++) {
            var baseService = _a[_i];
            _loop_1(baseService);
        }
    };
    ApodTemplateComponent.prototype.UrlSanitizer = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ApodTemplateComponent.prototype.ngOnInit = function () {
    };
    ApodTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apod-template',
            template: __webpack_require__(/*! ./apod-template.component.html */ "./src/app/template/apod-template/apod-template.component.html"),
            styles: [__webpack_require__(/*! ./apod-template.component.css */ "./src/app/template/apod-template/apod-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
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

module.exports = "<!-- <br />\r\n<br />\r\n<div class=\"table-responsive\">\r\n  <span id='table'></span>\r\n</div>\r\n<br /> -->\r\n<app-apod-template></app-apod-template>\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/infrastructure-api.service */ "./src/app/services/infrastructure-api.service.ts");
/* harmony import */ var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json");
var _services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../services/domainUrlDict.json */ "./src/app/services/domainUrlDict.json", 1);





var MainTemplateComponentComponent = /** @class */ (function () {
    function MainTemplateComponentComponent(infrastructureApi, http) {
        this.infrastructureApi = infrastructureApi;
        this.http = http;
        this.table = '';
        this.baseServiceNameList = Object.keys(_services_domainUrlDict_json__WEBPACK_IMPORTED_MODULE_4__);
    }
    MainTemplateComponentComponent.prototype.demoTable = function (columnDefs, rowData) {
        var table = '';
        table = table.concat('<table class="table table-striped table-bordered table-hover">');
        table = table.concat('<thead class="thead-dark"><tr>');
        for (var _i = 0, columnDefs_1 = columnDefs; _i < columnDefs_1.length; _i++) {
            var header = columnDefs_1[_i];
            table = table.concat("<th scope=\"col\">" + header + "</th>");
        }
        table = table.concat('</tr></thead>');
        for (var _a = 0, columnDefs_2 = columnDefs; _a < columnDefs_2.length; _a++) {
            var header = columnDefs_2[_a];
            console.log(typeof (rowData[header]) === 'object');
            if (typeof (rowData[header]) === 'object') {
                table = table.concat("<td>" + this.demoTable(Object.keys(rowData[header]), rowData[header]) + "</td>");
            }
            table = table.concat("<td>" + rowData[header] + "</td>");
        }
        table = table.concat('</table>');
        return table;
    };
    MainTemplateComponentComponent.prototype.ngOnInit = function () {
    };
    MainTemplateComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-template-component',
            template: __webpack_require__(/*! ./main-template-component.component.html */ "./src/app/template/main-template-component.component.html"),
            styles: [__webpack_require__(/*! ./main-template-component.component.css */ "./src/app/template/main-template-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_infrastructure_api_service__WEBPACK_IMPORTED_MODULE_3__["InfrastructureApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainTemplateComponentComponent);
    return MainTemplateComponentComponent;
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
/* harmony import */ var _main_template_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-template-component.component */ "./src/app/template/main-template-component.component.ts");
/* harmony import */ var _apod_template_apod_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apod-template/apod-template.component */ "./src/app/template/apod-template/apod-template.component.ts");






var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_template_component_component__WEBPACK_IMPORTED_MODULE_4__["MainTemplateComponentComponent"],
                _apod_template_apod_template_component__WEBPACK_IMPORTED_MODULE_5__["ApodTemplateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
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