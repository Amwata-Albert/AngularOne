webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: green;\n  font-size: 60px;\n  font-family:\"sans-serif\";\n}\n\np {\n  font-size: 20px;\n  font-style: oblique;\n  font-family: monospace;\n}\n\n.developed{\n  float: left;\n  margin-bottom: 20px;\n  margin-right: 60%;\n  font-size: 20px;\n\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3 class=\"developed\"><i>Developed by Amwata Albert</i></h3>\n  <h1>\n\n    Welcome To Quotes App.\n  </h1>\n  <p>\n    This site will enable you to create quotes and have them upvoted or downvoted.\n  </p>\n  <app-quote-form></app-quote-form>\n  <br>\n  <app-quote-details></app-quote-details>\n  <br>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quote_form_quote_form_component__ = __webpack_require__("./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quote_details_quote_details_component__ = __webpack_require__("./src/app/quote-details/quote-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__quote_form_quote_form_component__["a" /* QuoteFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quote_details_quote_details_component__["a" /* QuoteDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  text-align: center;\n  font-size: 20px;\n}\n\nbutton {\n  background-color: black;\n  color: white;\n  font-size: 15px;\n  border: 1px solid black;\n}"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"voteUp()\">UpVote </button>\n\n<button (click)=\"voteDown()\">DownVote</button> -->"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
        this.votesup = 0;
        this.votesdown = 0;
    };
    QuoteDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quote-details',
            template: __webpack_require__("./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__("./src/app/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  font-size: 20px;\n}\n\nbutton {\n  background-color: black;\n  color: white;\n  font-size: 15px;\n  border: 1px solid black;\n}"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <form (submit)=\"onSubmit(quote.value)\">\n    <div>\n      <!-- <label for=\"name\">Write Quote Here!:</label> -->\n      <br>\n      <textarea rows=\"15\" cols=\"50\" value=\"Amwata\" placeholder=\"Write quote Here\" type=\"text\" name=\"quote\" [(ngModel)]=\"quote\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n\n      <label for=\"author\">Author</label>\n      <input type=\"text\" [(ngModel)]=\"author\" name=\"author\">\n    </div>\n    <br>\n    <div class=\"form-group\">\n\n      <label for=\"name\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n    </div>\n\n  </form>\n\n\n  <p>QUOTE:{{quote}}</p>\n  <p>AUTHOR:{{author}}</p>\n  <p>NAME:{{name}}</p>\n  <button (click)=\"onClick()\" type=\"submit\">Submit Quote</button>\n  <ul>\n    <li *ngFor=\"let quote of quotes; let i = index\">{{i+1}}: {{quote}}\n      <app-quote-details></app-quote-details>\n      <button (click)=\"deleteQuote(quote)\" type=\"submit\">Delete Quote</button>\n\n      <button (click)=\"voteUp()\" type=\"submit\">UpVote {{votesup}}</button>\n      <button (click)=\"voteDown()\" type=\"submit\">DownVote {{votesdown}}</button>\n    </li>\n\n\n  </ul>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
        this.author = '';
        this.name = '';
        this.quotes = ['love is life', 'context is king'];
    };
    QuoteFormComponent.prototype.onClick = function () {
        this.quotes.unshift('quote');
    };
    QuoteFormComponent.prototype.onSubmit = function (quote) {
        console.log(quote);
        return false;
        // this.quotes.push(quote)
    };
    QuoteFormComponent.prototype.deleteQuote = function (quote) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i] == quote) {
                this.quotes.splice(i, 1);
            }
        }
    };
    QuoteFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quote-form',
            template: __webpack_require__("./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__("./src/app/quote-form/quote-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map