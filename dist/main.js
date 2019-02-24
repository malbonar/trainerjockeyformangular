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

/***/ "./src/TrainerJockeyDataService/TrainerJockeyService.ts":
/*!**************************************************************!*\
  !*** ./src/TrainerJockeyDataService/TrainerJockeyService.ts ***!
  \**************************************************************/
/*! exports provided: TrainerJockeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerJockeyService", function() { return TrainerJockeyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "TrainerJockeyForm";
var TrainerJockeyService = /** @class */ (function () {
    function TrainerJockeyService(http) {
        this.http = http;
    }
    TrainerJockeyService.prototype.getTrainerJockeyForm = function () {
        return this.http.get(apiUrl);
    };
    TrainerJockeyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainerJockeyService);
    return TrainerJockeyService;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"lead\">\n    Angular has been introduced to my development team at work for our front end\n    client apps, so thought I'd re-write this app in Angular (I'd written a\n    React version of it about a month previous)\n  </p>\n  <p class=\"lead\">\n    The app fetches data from a C# .Net Core Web-API I've written to read from\n    an Azure database. The code for the API can be found in this\n    <a href=\"https://github.com/malbonar/HorseRacing\">github repo</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _trainerjockeyreport_trainerjockeyreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainerjockeyreport/trainerjockeyreport.component */ "./src/app/trainerjockeyreport/trainerjockeyreport.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");






var routes = [
    { path: 'trainerjockeyreport', component: _trainerjockeyreport_trainerjockeyreport_component__WEBPACK_IMPORTED_MODULE_3__["TrainerjockeyreportComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '', redirectTo: '/trainerjockeyreport', pathMatch: 'full' },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"] }
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

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0\">\n    <div class=\"container\">\n      <div class=\"navbar-brand\">{{ title }}</div>\n      <div>\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"trainerjockeyreport\">\n              <i class=\"fa fa-home\"></i> Home</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"about\">\n              <i class=\"fa fa-question\"></i> About</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n"

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
        this.title = "Mal's Horse Racing Info";
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formlines_formlines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formlines/formlines.component */ "./src/app/formlines/formlines.component.ts");
/* harmony import */ var _selector_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selector/selector.component */ "./src/app/selector/selector.component.ts");
/* harmony import */ var _profitlossselector_profitlossselector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profitlossselector/profitlossselector.component */ "./src/app/profitlossselector/profitlossselector.component.ts");
/* harmony import */ var _percentselector_percentselector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./percentselector/percentselector.component */ "./src/app/percentselector/percentselector.component.ts");
/* harmony import */ var _ivselector_ivselector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ivselector/ivselector.component */ "./src/app/ivselector/ivselector.component.ts");
/* harmony import */ var _formlineselector_formlineselector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formlineselector/formlineselector.component */ "./src/app/formlineselector/formlineselector.component.ts");
/* harmony import */ var _trainerjockeyreport_trainerjockeyreport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trainerjockeyreport/trainerjockeyreport.component */ "./src/app/trainerjockeyreport/trainerjockeyreport.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _formlines_formlines_component__WEBPACK_IMPORTED_MODULE_6__["FormlinesComponent"],
                _selector_selector_component__WEBPACK_IMPORTED_MODULE_7__["SelectorComponent"],
                _profitlossselector_profitlossselector_component__WEBPACK_IMPORTED_MODULE_8__["ProfitlossselectorComponent"],
                _percentselector_percentselector_component__WEBPACK_IMPORTED_MODULE_9__["PercentselectorComponent"],
                _ivselector_ivselector_component__WEBPACK_IMPORTED_MODULE_10__["IvselectorComponent"],
                _formlineselector_formlineselector_component__WEBPACK_IMPORTED_MODULE_11__["FormlineselectorComponent"],
                _trainerjockeyreport_trainerjockeyreport_component__WEBPACK_IMPORTED_MODULE_12__["TrainerjockeyreportComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__["PagenotfoundComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/formlines/formlines.component.css":
/*!***************************************************!*\
  !*** ./src/app/formlines/formlines.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,\r\ntd {\r\n  font-family: \"Open Sans\";\r\n  font-size: \"0.95em\";\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWxpbmVzL2Zvcm1saW5lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb3JtbGluZXMvZm9ybWxpbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCxcclxudGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gIGZvbnQtc2l6ZTogXCIwLjk1ZW1cIjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/formlines/formlines.component.html":
/*!****************************************************!*\
  !*** ./src/app/formlines/formlines.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"loading; else elseBlock\">Fetching Trainer Jockey data</div>\n  <ng-template #elseBlock>\n    <table class=\"table table-striped table-sm table-bordered\">\n      <thead>\n        <tr>\n          <th>Trainer</th>\n          <th>Jockey</th>\n          <th>Runs</th>\n          <th>Wins</th>\n          <th>Places</th>\n          <th>Win%</th>\n          <th>Place%</th>\n          <th>Win P/L</th>\n          <th>EW P/L</th>\n          <th>A/E</th>\n          <th>IV</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let formLine of formLines\">\n          <td>{{ formLine.trainer }}</td>\n          <td>{{ formLine.jockey }}</td>\n          <td>{{ formLine.runs }}</td>\n          <td>{{ formLine.wins }}</td>\n          <td>{{ formLine.placed }}</td>\n          <td>{{ formLine.winPercent }}</td>\n          <td>{{ formLine.placedPercent }}</td>\n          <td>{{ formLine.winProfitLoss }}</td>\n          <td>{{ formLine.placedProfitLoss }}</td>\n          <td>{{ formLine.ae }}</td>\n          <td>{{ formLine.iv }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/formlines/formlines.component.ts":
/*!**************************************************!*\
  !*** ./src/app/formlines/formlines.component.ts ***!
  \**************************************************/
/*! exports provided: FormlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlinesComponent", function() { return FormlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _TrainerJockeyDataService_TrainerJockeyService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TrainerJockeyDataService/TrainerJockeyService */ "./src/TrainerJockeyDataService/TrainerJockeyService.ts");



var FormlinesComponent = /** @class */ (function () {
    function FormlinesComponent(service) {
        var _this = this;
        this.service = service;
        this.loading = false;
        this.filterForm = function (filter) {
            if (filter !== undefined) {
                var newFormLines = _this.orgFormLines;
                if (!isNaN(filter.runs) && filter.runs !== '' && filter.runs > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.runs >= filter.runs; });
                }
                if (!isNaN(filter.wins) && filter.wins !== '' && filter.wins > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.wins >= filter.wins; });
                }
                if (!isNaN(filter.placed) && filter.placed !== '' && filter.placed > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.placed >= filter.placed; });
                }
                if (!isNaN(filter.winPercent) &&
                    filter.winPercent !== '' &&
                    filter.winPercent > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.winPercent >= filter.winPercent; });
                }
                if (!isNaN(filter.placedPercent) &&
                    filter.placedPercent !== '' &&
                    filter.placedPercent > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.placedPercent >= filter.placedPercent; });
                }
                if (!isNaN(filter.winProfitLoss) &&
                    filter.winProfitLoss !== '' &&
                    filter.winProfitLoss > -1000) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.winProfitLoss >= filter.winProfitLoss; });
                }
                if (!isNaN(filter.placedProfitLoss) &&
                    filter.placedProfitLoss !== '' &&
                    filter.placedProfitLoss > -1000) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.placedProfitLoss >= filter.placedProfitLoss; });
                }
                if (!isNaN(filter.AE) && filter.AE !== '' && filter.AE > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.ae >= filter.AE; });
                }
                if (!isNaN(filter.IV) && filter.IV !== '' && filter.IV > 0) {
                    newFormLines = newFormLines.filter(function (formline) { return formline.iv >= filter.IV; });
                }
                _this.formLines = newFormLines;
            }
        };
        this.reset = function () {
            _this.formLines = _this.orgFormLines;
        };
    }
    FormlinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.service.getTrainerJockeyForm().subscribe(function (formlines) {
            _this.formLines = formlines;
            _this.orgFormLines = formlines;
            _this.loading = false;
        });
    };
    FormlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formlines',
            template: __webpack_require__(/*! ./formlines.component.html */ "./src/app/formlines/formlines.component.html"),
            styles: [__webpack_require__(/*! ./formlines.component.css */ "./src/app/formlines/formlines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_TrainerJockeyDataService_TrainerJockeyService__WEBPACK_IMPORTED_MODULE_2__["TrainerJockeyService"]])
    ], FormlinesComponent);
    return FormlinesComponent;
}());



/***/ }),

/***/ "./src/app/formlineselector/formlineselector.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/formlineselector/formlineselector.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1saW5lc2VsZWN0b3IvZm9ybWxpbmVzZWxlY3Rvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/formlineselector/formlineselector.component.html":
/*!******************************************************************!*\
  !*** ./src/app/formlineselector/formlineselector.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-3 mt-3\">\n  <app-selector\n    #runs\n    title=\"Runs\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-selector>\n  <app-selector\n    #wins\n    title=\"Wins\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-selector>\n  <app-selector\n    #placed\n    title=\"Placed\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-selector>\n  <app-percentselector\n    #winpct\n    title=\"Win%\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-percentselector>\n  <app-percentselector\n    #placedpct\n    title=\"Placed%\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-percentselector>\n  <app-profitlossselector\n    #winpl\n    title=\"Win PL\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-profitlossselector>\n  <app-profitlossselector\n    #placedpl\n    title=\"Placed PL\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-profitlossselector>\n  <app-ivselector\n    #iv\n    title=\"IV\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-ivselector>\n  <app-ivselector\n    #ae\n    title=\"AE\"\n    (onChangeCallback)=\"onChanged($event)\"\n  ></app-ivselector>\n\n  <button\n    class=\"btn btn-outline-success mb-3 mr-3\"\n    style=\"height: 70px\"\n    (click)=\"updateClick()\"\n  >\n    Update\n  </button>\n  <button\n    class=\"btn btn-outline-warning mb-3\"\n    style=\"height: 70px; min-width: 80px\"\n    (click)=\"resetClick()\"\n  >\n    Reset\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/formlineselector/formlineselector.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/formlineselector/formlineselector.component.ts ***!
  \****************************************************************/
/*! exports provided: FormlineselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlineselectorComponent", function() { return FormlineselectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _selector_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/selector.component */ "./src/app/selector/selector.component.ts");
/* harmony import */ var _percentselector_percentselector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../percentselector/percentselector.component */ "./src/app/percentselector/percentselector.component.ts");
/* harmony import */ var _profitlossselector_profitlossselector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profitlossselector/profitlossselector.component */ "./src/app/profitlossselector/profitlossselector.component.ts");
/* harmony import */ var _ivselector_ivselector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ivselector/ivselector.component */ "./src/app/ivselector/ivselector.component.ts");






var FormlineselectorComponent = /** @class */ (function () {
    function FormlineselectorComponent() {
        var _this = this;
        this.onUpdateCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResetCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = {
            runs: '',
            wins: '',
            placed: '',
            winPercent: '',
            placedPercent: '',
            winProfitLoss: '',
            placedProfitLoss: '',
            AE: '',
            IV: ''
        };
        this.resetClick = function () {
            _this.onResetCallback.emit();
            _this.ngAfterViewInit();
        };
    }
    FormlineselectorComponent.prototype.ngOnInit = function () { };
    FormlineselectorComponent.prototype.ngAfterViewInit = function () {
        this.runSelector.value = '';
        this.winsSelector.value = '';
        this.placedSelector.value = '';
        this.winpctSelector.value = '';
        this.placedpctSelector.value = '';
        this.winplSelector.value = '';
        this.placedplSelector.value = '';
        this.ivSelector.value = '';
        this.aeSelector.value = '';
    };
    FormlineselectorComponent.prototype.onChanged = function (e) {
        var source = e.source, value = e.value;
        switch (source) {
            case 'Runs':
                this.filter.runs = value;
                break;
            case 'Wins':
                this.filter.wins = value;
                break;
            case 'Placed':
                this.filter.placed = value;
                break;
            case 'Win%':
                this.filter.winPercent = value;
                break;
            case 'Placed%':
                this.filter.placedPercent = value;
                break;
            case 'Win PL':
                this.filter.winProfitLoss = value;
                break;
            case 'Placed PL':
                this.filter.placedProfitLoss = value;
                break;
            case 'AE':
                this.filter.AE = value;
                break;
            case 'IV':
                this.filter.IV = value;
                break;
            default:
                break;
        }
    };
    FormlineselectorComponent.prototype.updateClick = function () {
        this.onUpdateCallback.emit(this.filter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormlineselectorComponent.prototype, "onUpdateCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FormlineselectorComponent.prototype, "onResetCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('runs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _selector_selector_component__WEBPACK_IMPORTED_MODULE_2__["SelectorComponent"])
    ], FormlineselectorComponent.prototype, "runSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wins'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _selector_selector_component__WEBPACK_IMPORTED_MODULE_2__["SelectorComponent"])
    ], FormlineselectorComponent.prototype, "winsSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _selector_selector_component__WEBPACK_IMPORTED_MODULE_2__["SelectorComponent"])
    ], FormlineselectorComponent.prototype, "placedSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('winpct'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _percentselector_percentselector_component__WEBPACK_IMPORTED_MODULE_3__["PercentselectorComponent"])
    ], FormlineselectorComponent.prototype, "winpctSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placedpct'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _percentselector_percentselector_component__WEBPACK_IMPORTED_MODULE_3__["PercentselectorComponent"])
    ], FormlineselectorComponent.prototype, "placedpctSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('winpl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _profitlossselector_profitlossselector_component__WEBPACK_IMPORTED_MODULE_4__["ProfitlossselectorComponent"])
    ], FormlineselectorComponent.prototype, "winplSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placedpl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _profitlossselector_profitlossselector_component__WEBPACK_IMPORTED_MODULE_4__["ProfitlossselectorComponent"])
    ], FormlineselectorComponent.prototype, "placedplSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ivselector_ivselector_component__WEBPACK_IMPORTED_MODULE_5__["IvselectorComponent"])
    ], FormlineselectorComponent.prototype, "ivSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ae'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ivselector_ivselector_component__WEBPACK_IMPORTED_MODULE_5__["IvselectorComponent"])
    ], FormlineselectorComponent.prototype, "aeSelector", void 0);
    FormlineselectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formlineselector',
            template: __webpack_require__(/*! ./formlineselector.component.html */ "./src/app/formlineselector/formlineselector.component.html"),
            styles: [__webpack_require__(/*! ./formlineselector.component.css */ "./src/app/formlineselector/formlineselector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormlineselectorComponent);
    return FormlineselectorComponent;
}());



/***/ }),

/***/ "./src/app/ivselector/ivselector.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ivselector/ivselector.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: Open Sans;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXZzZWxlY3Rvci9pdnNlbGVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9pdnNlbGVjdG9yL2l2c2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ivselector/ivselector.component.html":
/*!******************************************************!*\
  !*** ./src/app/ivselector/ivselector.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"selector pt-2 pb-3 px-1 mr-3\"\n  style=\"border: solid; border-color: #A8A8A8; border-width: 1px; text-align: center; min-width: 68px; font-weight: bold; font-size: 0.92em\"\n>\n  {{ title }} <br />\n  <select value=\"{{ value }}\" (change)=\"changed($event.target.value)\">\n    <option value=\"0\">0</option>\n    <option value=\"0.5\">0.5</option>\n    <option value=\"0.75\">0.75</option>\n    <option value=\"1\">1</option>\n    <option value=\"1.25\">1.25</option>\n    <option value=\"1.5\">1.5</option>\n    <option value=\"1.75\">1.75</option>\n    <option value=\"2\">2</option>\n    <option selected value=\"\"> Any </option></select\n  >\n</label>\n"

/***/ }),

/***/ "./src/app/ivselector/ivselector.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ivselector/ivselector.component.ts ***!
  \****************************************************/
/*! exports provided: IvselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvselectorComponent", function() { return IvselectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IvselectorComponent = /** @class */ (function () {
    function IvselectorComponent() {
        var _this = this;
        this.onChangeCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = function (e) {
            _this.value = e;
            _this.onChangeCallback.emit({ source: _this.title, value: _this.value });
        };
    }
    IvselectorComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IvselectorComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IvselectorComponent.prototype, "onChangeCallback", void 0);
    IvselectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ivselector',
            template: __webpack_require__(/*! ./ivselector.component.html */ "./src/app/ivselector/ivselector.component.html"),
            styles: [__webpack_require__(/*! ./ivselector.component.css */ "./src/app/ivselector/ivselector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IvselectorComponent);
    return IvselectorComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color: red\">Page Not Found</h2>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/percentselector/percentselector.component.css":
/*!***************************************************************!*\
  !*** ./src/app/percentselector/percentselector.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: Open Sans;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyY2VudHNlbGVjdG9yL3BlcmNlbnRzZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGVyY2VudHNlbGVjdG9yL3BlcmNlbnRzZWxlY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/percentselector/percentselector.component.html":
/*!****************************************************************!*\
  !*** ./src/app/percentselector/percentselector.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"selector pt-2 pb-3 px-1 mr-3\"\n  style=\"border: solid; border-color: #A8A8A8; border-width: 1px; text-align: center; min-width: 68px; font-weight: bold; font-size: 0.92em\"\n>\n  {{ title }} <br />\n  <select value=\"{{ value }}\" (change)=\"changed($event.target.value)\">\n    <option value=\"0\">0</option>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    <option value=\"6\">6</option>\n    <option value=\"7\">7</option>\n    <option value=\"8\">8</option>\n    <option value=\"9\">9</option>\n    <option value=\"10\">10</option>\n    <option value=\"15\">15</option>\n    <option value=\"20\">20</option>\n    <option value=\"25\">25</option>\n    <option value=\"33\">33</option>\n    <option value=\"40\">40</option>\n    <option value=\"50\">50</option>\n    <option value=\"66\">66</option>\n    <option value=\"75\">75</option>\n    <option value=\"100\">100</option>\n    <option selected value=\"\">Any</option></select\n  >\n</label>\n"

/***/ }),

/***/ "./src/app/percentselector/percentselector.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/percentselector/percentselector.component.ts ***!
  \**************************************************************/
/*! exports provided: PercentselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentselectorComponent", function() { return PercentselectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PercentselectorComponent = /** @class */ (function () {
    function PercentselectorComponent() {
        var _this = this;
        this.onChangeCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = function (e) {
            _this.value = e;
            _this.onChangeCallback.emit({ source: _this.title, value: _this.value });
        };
    }
    PercentselectorComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PercentselectorComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PercentselectorComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PercentselectorComponent.prototype, "onChangeCallback", void 0);
    PercentselectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-percentselector',
            template: __webpack_require__(/*! ./percentselector.component.html */ "./src/app/percentselector/percentselector.component.html"),
            styles: [__webpack_require__(/*! ./percentselector.component.css */ "./src/app/percentselector/percentselector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PercentselectorComponent);
    return PercentselectorComponent;
}());



/***/ }),

/***/ "./src/app/profitlossselector/profitlossselector.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profitlossselector/profitlossselector.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: Open Sans;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZml0bG9zc3NlbGVjdG9yL3Byb2ZpdGxvc3NzZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZml0bG9zc3NlbGVjdG9yL3Byb2ZpdGxvc3NzZWxlY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profitlossselector/profitlossselector.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profitlossselector/profitlossselector.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"selector pt-2 pb-3 px-1 mr-3\"\n  style=\"border: solid; border-color: #A8A8A8; border-width: 1px; text-align: center; min-width: 68px; font-weight: bold; font-size: 0.92em\"\n>\n  {{ title }} <br />\n  <select value=\"{{ value }}\" (change)=\"changed($event.target.value)\">\n    <option value=\"-50\">-50</option>\n    <option value=\"-30\">-30</option>\n    <option value=\"-20\">-20</option>\n    <option value=\"-10\">-10</option>\n    <option value=\"-5\">-5</option>\n    <option value=\"0\">0</option>\n    <option value=\"5\">5</option>\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"30\">30</option>\n    <option value=\"50\">50</option>\n    <option selected value=\"\">Any</option></select\n  >\n</label>\n"

/***/ }),

/***/ "./src/app/profitlossselector/profitlossselector.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profitlossselector/profitlossselector.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfitlossselectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitlossselectorComponent", function() { return ProfitlossselectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfitlossselectorComponent = /** @class */ (function () {
    function ProfitlossselectorComponent() {
        var _this = this;
        this.value = '';
        this.onChangeCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = function (e) {
            _this.value = e;
            _this.onChangeCallback.emit({ source: _this.title, value: _this.value });
        };
    }
    ProfitlossselectorComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfitlossselectorComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProfitlossselectorComponent.prototype, "onChangeCallback", void 0);
    ProfitlossselectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profitlossselector',
            template: __webpack_require__(/*! ./profitlossselector.component.html */ "./src/app/profitlossselector/profitlossselector.component.html"),
            styles: [__webpack_require__(/*! ./profitlossselector.component.css */ "./src/app/profitlossselector/profitlossselector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfitlossselectorComponent);
    return ProfitlossselectorComponent;
}());



/***/ }),

/***/ "./src/app/selector/selector.component.css":
/*!*************************************************!*\
  !*** ./src/app/selector/selector.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: Open Sans;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdG9yL3NlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/selector/selector.component.html":
/*!**************************************************!*\
  !*** ./src/app/selector/selector.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"selector pt-2 pb-3 px-1 mr-3\"\n  style=\"border: solid; border-color: #A8A8A8; border-width: 1px; text-align: center; min-width: 68px; font-weight: bold; font-size: 0.92em\"\n>\n  {{ title }} <br />\n  <select value=\"{{ value }}\" (change)=\"changed($event.target.value)\">\n    <option value=\"0\">0</option>\n    <option value=\"5\">5</option>\n    <option value=\"10\">10</option>\n    <option value=\"15\">15</option>\n    <option value=\"20\">20</option>\n    <option value=\"25\">25</option>\n    <option value=\"50\">50</option>\n    <option value=\"75\">75</option>\n    <option value=\"100\">100</option>\n    <option value=\"150\">150</option>\n    <option selected value=\"\"> Any </option>\n  </select>\n</label>\n"

/***/ }),

/***/ "./src/app/selector/selector.component.ts":
/*!************************************************!*\
  !*** ./src/app/selector/selector.component.ts ***!
  \************************************************/
/*! exports provided: SelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorComponent", function() { return SelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectorComponent = /** @class */ (function () {
    function SelectorComponent() {
        var _this = this;
        this.value = '';
        this.onChangeCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = function (e) {
            _this.value = e;
            _this.onChangeCallback.emit({ source: _this.title, value: _this.value });
        };
    }
    SelectorComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectorComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SelectorComponent.prototype, "onChangeCallback", void 0);
    SelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selector',
            template: __webpack_require__(/*! ./selector.component.html */ "./src/app/selector/selector.component.html"),
            styles: [__webpack_require__(/*! ./selector.component.css */ "./src/app/selector/selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectorComponent);
    return SelectorComponent;
}());



/***/ }),

/***/ "./src/app/trainerjockeyreport/trainerjockeyreport.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/trainerjockeyreport/trainerjockeyreport.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXJqb2NrZXlyZXBvcnQvdHJhaW5lcmpvY2tleXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trainerjockeyreport/trainerjockeyreport.component.html":
/*!************************************************************************!*\
  !*** ./src/app/trainerjockeyreport/trainerjockeyreport.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4 mt-5\">\n  <h2>Trainer Jockey Report</h2>\n</div>\n\n<app-formlineselector\n  (onUpdateCallback)=\"onUpdate($event)\"\n  (onResetCallback)=\"onReset()\"\n></app-formlineselector>\n<app-formlines></app-formlines>\n"

/***/ }),

/***/ "./src/app/trainerjockeyreport/trainerjockeyreport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/trainerjockeyreport/trainerjockeyreport.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrainerjockeyreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerjockeyreportComponent", function() { return TrainerjockeyreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formlines_formlines_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formlines/formlines.component */ "./src/app/formlines/formlines.component.ts");



var TrainerjockeyreportComponent = /** @class */ (function () {
    function TrainerjockeyreportComponent() {
        var _this = this;
        this.isReset = false;
        this.onUpdate = function (selection) {
            _this.filter = selection;
            _this.ngAfterViewInit();
        };
        this.onReset = function () {
            _this.isReset = true;
            _this.ngAfterViewInit();
            _this.isReset = false;
        };
    }
    TrainerjockeyreportComponent.prototype.ngOnInit = function () { };
    TrainerjockeyreportComponent.prototype.ngAfterViewInit = function () {
        if (!this.isReset) {
            this.child.filterForm(this.filter);
        }
        else {
            this.child.reset();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_formlines_formlines_component__WEBPACK_IMPORTED_MODULE_2__["FormlinesComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _formlines_formlines_component__WEBPACK_IMPORTED_MODULE_2__["FormlinesComponent"])
    ], TrainerjockeyreportComponent.prototype, "child", void 0);
    TrainerjockeyreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainerjockeyreport',
            template: __webpack_require__(/*! ./trainerjockeyreport.component.html */ "./src/app/trainerjockeyreport/trainerjockeyreport.component.html"),
            styles: [__webpack_require__(/*! ./trainerjockeyreport.component.css */ "./src/app/trainerjockeyreport/trainerjockeyreport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrainerjockeyreportComponent);
    return TrainerjockeyreportComponent;
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
    production: false,
    apiUrl: 'https://localhost:44303/api/'
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

module.exports = __webpack_require__(/*! C:\Code\JavaScript\angular\trainerjockeyform\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map