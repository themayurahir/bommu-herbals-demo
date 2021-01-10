function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminModuleRouting */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModuleRouting", function () {
      return AdminModuleRouting;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");

    var routes = [{
      path: 'adminhome',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var AdminModuleRouting = function AdminModuleRouting() {
      _classCallCheck(this, AdminModuleRouting);
    };

    AdminModuleRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModuleRouting
    });
    AdminModuleRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModuleRouting_Factory(t) {
        return new (t || AdminModuleRouting)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModuleRouting, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModuleRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminModuleRouting"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminModuleRouting"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminModuleRouting"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var appRoutes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bommu1';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/about-us/about-us.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/about-us/about-us.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppUserAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 22,
      vars: 0,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "mb-5"], [1, "quote"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sri Bommu Venkateshwarara Reddy founder of Bommu Herbals Pvt Ltd created a mission of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\"Taking Ayurveda to every Citizen of India \".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Our goal is making every Citizen of India happy and healthy through genuine Ayurvedic treatment delivered at their Life style.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Today every age group have a health problems such as Diabetes, Joints , Heart, Kidney, Liver, Immunity, Hair, Skin, Indigestion, Sexual Problems, Piles, Body Pains, Anemia, Asthma and Cancer. We have solution for the problems mentioned above with our Ayurvedic/Herbal products.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: SpicyRice;\n  color: #9f4103;\n  letter-spacing: 0.05em;\n}\n\n.container[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hYm91dC11cy9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYkhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gICAgICAgIGNvbG9yOiAjOWY0MTAzO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3RlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIH1cclxufSIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgY29sb3I6ICM5ZjQxMDM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG4uY29udGFpbmVyIC5xdW90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/carousel/carousel.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/carousel/carousel.component.ts ***!
    \*****************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppUserCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function CarouselComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;
        var isFirst_r3 = ctx.first;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, isFirst_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.subHeadingOne);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.subHeadingTwo);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      // slides = [
      //   {
      //     image: '../../assets/slider1.png',
      //     heading: 'Hair Oils / Shampoo',
      //     subHeadingOne: 'flat 10% off all products',
      //     subHeadingTwo: 'Nulla vitae elit libero',
      //   },
      //   {
      //     image: '../../assets/slider2.png',
      //     heading: 'Health Care',
      //     subHeadingOne: 'flat 10% off all products',
      //     subHeadingTwo: 'Nulla vitae elit libero',
      //   },
      //   {
      //     image: '../../assets/slider3.png',
      //     heading: 'Body Care',
      //     subHeadingOne: 'flat 10% off all products',
      //     subHeadingTwo: 'Nulla vitae elit libero',
      //   }
      // ]
      function CarouselComponent(userService) {
        _classCallCheck(this, CarouselComponent);

        this.userService = userService;
        this.slides = [];
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlides();
        }
      }, {
        key: "getSlides",
        value: function getSlides() {
          var _this = this;

          this.userService.getSliders().subscribe(function (response) {
            var _iterator = _createForOfIteratorHelper(response.Data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var slide = _step.value;
                var obj = {};
                obj.heading = slide.captionLine1;
                obj.subHeadingOne = slide.captionLine2;
                obj.subHeadingTwo = slide.captionLine3;
                obj.image = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + slide.image[0];

                _this.slides.push(obj);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      decls: 11,
      vars: 1,
      consts: [["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["id", "carouselExampleDark", 1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleDark", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["href", "#carouselExampleDark", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item", 3, "ngClass"], ["alt", "...", 1, "d-block", "w-100", "carousel-img", 3, "src"], [1, "carousel-caption"], ["id", "captionHeading", 1, "animate__animated", "animate__fadeInDownBig"], ["id", "captionSubHeading1", 1, "animate__animated", "animate__fadeInDownBig"], ["id", "captionSubHeading2", 1, "animate__animated", "animate__fadeInDownBig"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 9, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  height: 630px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 630px;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  bottom: initial;\n  transform-style: preserve-3d;\n}\n\n#captionHeading[_ngcontent-%COMP%] {\n  --animate-duration: 2s;\n  font-size: 58px;\n  letter-spacing: 0.1em;\n  font-family: SpicyRice;\n}\n\n#captionSubHeading1[_ngcontent-%COMP%] {\n  --animate-duration: 2.2s;\n  font-size: 32px;\n  text-transform: uppercase;\n  font-family: Roboto;\n  color: #f4b323;\n  display: inline-block;\n  border-top: 3px solid #f4b323;\n  border-bottom: 3px solid #f4b323;\n  padding: 2%;\n  margin-top: 1%;\n}\n\n#captionSubHeading2[_ngcontent-%COMP%] {\n  --animate-duration: 2.3s;\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 600px) {\n  #captionHeading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  #captionSubHeading1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  #captionSubHeading2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jYXJvdXNlbC9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxjYXJvdXNlbFxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUdBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksZUFBQTtFQ0NOOztFRENFO0lBQ0ksZUFBQTtFQ0VOOztFREFFO0lBQ0ksZUFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNjMwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MzBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWw7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4jY2FwdGlvbkhlYWRpbmcge1xyXG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAycztcclxuICAgIGZvbnQtc2l6ZTogNThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XHJcbn1cclxuXHJcbiNjYXB0aW9uU3ViSGVhZGluZzEge1xyXG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAyLjJzO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBjb2xvcjogI2Y0YjMyMztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjRiMzIzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNGIzMjM7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4jY2FwdGlvblN1YkhlYWRpbmcyIHtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogMi4zcztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgI2NhcHRpb25IZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICAgICNjYXB0aW9uU3ViSGVhZGluZzF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgI2NhcHRpb25TdWJIZWFkaW5nMntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfSIsIi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogNjMwcHg7XG59XG5cbi5jYXJvdXNlbC1pdGVtIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDYzMHB4O1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvdHRvbTogaW5pdGlhbDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbiNjYXB0aW9uSGVhZGluZyB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMnM7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xufVxuXG4jY2FwdGlvblN1YkhlYWRpbmcxIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAyLjJzO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiAjZjRiMzIzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjRiMzIzO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y0YjMyMztcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4jY2FwdGlvblN1YkhlYWRpbmcyIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAyLjNzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2NhcHRpb25IZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAjY2FwdGlvblN1YkhlYWRpbmcxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAjY2FwdGlvblN1YkhlYWRpbmcyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel',
          templateUrl: './carousel.component.html',
          styleUrls: ['./carousel.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/cart/cart.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/cart/cart.component.ts ***!
    \*********************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppUserCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CartComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_30_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var product_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.minusBtn(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartComponent_div_30_Template_input_change_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onChangeQuantity();
        })("ngModelChange", function CartComponent_div_30_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var product_r1 = ctx.$implicit;
          return product_r1.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_30_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var product_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.plusBtn(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_30_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.removeProduct(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r1.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.total);
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      // products = [
      //   {
      //     image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      //     title: 'tree',
      //     price: 10,
      //     quantity: 4,
      //     total: 40,
      //   },
      //   {
      //     image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      //     title: 'tree',
      //     price: 10,
      //     quantity: 4,
      //     total: 40,
      //   }
      // ]
      function CartComponent(changeRef, userService) {
        _classCallCheck(this, CartComponent);

        this.changeRef = changeRef;
        this.userService = userService;
        this.TotalMoney = 0;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProductsArray();
          this.totalMoney();
        }
      }, {
        key: "minusBtn",
        value: function minusBtn(product) {
          if (product.quantity > 1) {
            product.quantity--;
            product.total = product.total - product.price;
            this.totalMoney();
            this.setFromCart();
            this.changeRef.detectChanges();
          }
        }
      }, {
        key: "plusBtn",
        value: function plusBtn(product) {
          product.quantity++;
          product.total = product.price * product.quantity;
          this.totalMoney();
          this.setFromCart();
          this.changeRef.detectChanges();
        }
      }, {
        key: "onChangeQuantity",
        value: function onChangeQuantity() {
          var _iterator2 = _createForOfIteratorHelper(this.products),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var product = _step2.value;
              product.total = product.price * product.quantity;
              this.changeRef.detectChanges();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "totalMoney",
        value: function totalMoney() {
          this.TotalMoney = 0;

          var _iterator3 = _createForOfIteratorHelper(this.products),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var product = _step3.value;
              this.TotalMoney += product.total;
              this.changeRef.detectChanges();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "getProductsArray",
        value: function getProductsArray() {
          this.products = this.userService.getProductsInCart();
        }
      }, {
        key: "setFromCart",
        value: function setFromCart() {
          this.userService.setFromCart(this.products);
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(index) {
          if (index > -1) {
            this.products.splice(index, 1);
          }

          this.totalMoney();
          this.setFromCart();
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 43,
      vars: 2,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], ["routerLink", "/", 1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "cart"], [1, "row", "text-center", "d-flex", "align-items-center", "header"], [1, "col"], ["class", "row text-center d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "cart-Total"], [1, "row"], [1, "col-sm-12", "d-flex", "justify-content-end"], [1, "allTitles"], [1, "totalMoney"], ["routerLink", "/checkout", 1, "btn", "mx-2", "mt-3", "proceedBtn"], [1, "row", "text-center", "d-flex", "align-items-center"], [2, "height", "100px", "width", "200px", 3, "src"], [1, "quantity"], ["type", "button", "name", "button", 1, "plus-btn", 3, "click"], ["type", "text", "name", "quantity", 3, "ngModel", "change", "ngModelChange"], ["type", "button", "name", "button", 1, "minus-btn", 3, "click"], [1, "col", 3, "click"], [1, "fas", "fa-trash"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cart Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CartComponent_div_30_Template, 21, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total :- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Proceed to Checkout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.TotalMoney, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.cart[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: 10%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.cart[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background: #212529;\n  color: white;\n  margin-bottom: 2%;\n  padding: 2%;\n}\n\n.cart[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.cart[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: none;\n  text-align: center;\n  width: 32px;\n  font-size: 16px;\n  color: black;\n  font-weight: 300;\n}\n\n.cart[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n  background-color: transparent;\n}\n\n.cart[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.cart[_ngcontent-%COMP%]   .cart-Total[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\n.cart[_ngcontent-%COMP%]   .cart-Total[_ngcontent-%COMP%]   .allTitles[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #9f4103;\n  font-size: 32px;\n}\n\n.cart[_ngcontent-%COMP%]   .cart-Total[_ngcontent-%COMP%]   .totalMoney[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #222121;\n  font-size: 32px;\n}\n\n.cart[_ngcontent-%COMP%]   .proceedBtn[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n}\n\n.cart[_ngcontent-%COMP%]   .proceedBtn[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.cart[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 95px;\n}\n\n@media only screen and (max-width: 600px) {\n  .cart[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cart[_ngcontent-%COMP%]   .cart-Total[_ngcontent-%COMP%]   .allTitles[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jYXJ0L0U6XFxBbmd1bGFyIFByb2plY3RzXFxib21tdS1oZXJiYWxzLWRlbW8vc3JjXFxhcHBcXHVzZXJcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQUo7O0FER0U7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREo7O0FER0E7RUFDSSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRElJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBREtJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hOOztBRE9FO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRRTtFQUNFLHlCQUFBO0FDTko7O0FEU0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFdBO0VBRUk7SUFDRSxXQUFBO0VDVEo7RURhSTtJQUNFLGVBQUE7RUNYTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYkhlYWRlciB7XHJcbiAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcblxyXG4gIC5xdWFudGl0eSBpbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5xdWFudGl0eSBidXR0b257XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJvcmRlcjoycHggc29saWQgIzlmNDEwMztcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5xdWFudGl0eSBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xyXG59XHJcblxyXG4gIC5jYXJ0LVRvdGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuXHJcbiAgICAuYWxsVGl0bGVzIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgICAgY29sb3I6ICM5ZjQxMDM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWxNb25leSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XHJcbiAgICAgIGNvbG9yOiAjMjIyMTIxO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvY2VlZEJ0biB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOWY0MTAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcblxyXG4gIC5wcm9jZWVkQnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGIzMjM7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBoZWlnaHQ6IDk1cHggXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcnQge1xyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtVG90YWwge1xyXG4gICAgICAuYWxsVGl0bGVzIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuYnJlYWRjcnVtYkhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuLmNhcnQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuLmNhcnQgLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHBhZGRpbmc6IDIlO1xufVxuLmNhcnQgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmNhcnQgLnF1YW50aXR5IGlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNhcnQgLnF1YW50aXR5IGJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzlmNDEwMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY2FydCAucXVhbnRpdHkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcbn1cbi5jYXJ0IC5jYXJ0LVRvdGFsIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmNhcnQgLmNhcnQtVG90YWwgLmFsbFRpdGxlcyB7XG4gIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XG4gIGNvbG9yOiAjOWY0MTAzO1xuICBmb250LXNpemU6IDMycHg7XG59XG4uY2FydCAuY2FydC1Ub3RhbCAudG90YWxNb25leSB7XG4gIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XG4gIGNvbG9yOiAjMjIyMTIxO1xuICBmb250LXNpemU6IDMycHg7XG59XG4uY2FydCAucHJvY2VlZEJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzlmNDEwMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5jYXJ0IC5wcm9jZWVkQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcbn1cbi5jYXJ0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcnQgLnF1YW50aXR5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2FydCAuY2FydC1Ub3RhbCAuYWxsVGl0bGVzIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/checkout/checkout.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/checkout/checkout.component.ts ***!
    \*****************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppUserCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckoutComponent_tr_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", product_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", product_r1.total, "");
      }
    }

    var CheckoutComponent = /*#__PURE__*/function () {
      // products = [
      //   {
      //     item: 'Soap',
      //     quantity: 3,
      //     price: 1000,
      //     total: 3000
      //   },
      //   {
      //     item: 'Soap',
      //     quantity: 3,
      //     price: 1000,
      //     total: 3000
      //   },
      //   {
      //     item: 'Soap',
      //     quantity: 3,
      //     price: 1000,
      //     total: 3000
      //   }
      // ]
      function CheckoutComponent(userService) {
        _classCallCheck(this, CheckoutComponent);

        this.userService = userService;
        this.items = 0;
        this.subtotal = 0;
        this.total = 0;
        this.products = [];
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProductsArray();
          this.subTotalMoney();
          this.totalMoney();
          this.items = this.products.length;

          var _iterator4 = _createForOfIteratorHelper(this.products),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var product = _step4.value;
              product.id = JSON.parse(product.id);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "getProductsArray",
        value: function getProductsArray() {
          this.products = this.userService.getProductsInCart();
        }
      }, {
        key: "subTotalMoney",
        value: function subTotalMoney() {
          var _iterator5 = _createForOfIteratorHelper(this.products),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var product = _step5.value;
              this.subtotal += product.total;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }, {
        key: "totalMoney",
        value: function totalMoney() {
          var _iterator6 = _createForOfIteratorHelper(this.products),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var product = _step6.value;
              this.total += product.total;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }, {
        key: "proceedToPayment",
        value: function proceedToPayment() {
          var _this2 = this;

          var body = {
            customer: {
              name: "".concat(this.firstName, " ").concat(this.lastName),
              email: this.email,
              mobile: this.phone
            },
            details: {
              city: "".concat(this.city, ", ").concat(this.state),
              address: this.address,
              zipcode: this.zipcode
            },
            products: this.products,
            paymentStatus: 'fail',
            orderDate: new Date().toJSON().slice(0, 10),
            orderStatus: 'waiting'
          };
          this.userService.addOrderApi(body).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var options, rzp1;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('AddOrder:::', response.Data);
                      this.razorPayOrderId = response.Data.orderId;
                      this.id = response.Data.id;
                      options = {
                        key: 'rzp_test_iSQwdxTqcFP48O',
                        currency: 'INR',
                        name: 'Bommu Herbals',
                        amount: this.total * 100,
                        description: 'Transaction test',
                        image: '',
                        order_id: response.Data.orderId,
                        prefill: {
                          name: "".concat(this.firstName, " ").concat(this.lastName),
                          email: this.email,
                          contact: this.phone
                        },
                        handler: function handler(response) {
                          console.log('Razor pay response:::', response.razorpay_signature);
                          _this3.razorPayPaymentId = response.razorpay_payment_id;
                          _this3.razorPayResponseOrderId = response.razorpay_order_id;
                          _this3.razorPaySignature = response.razorpay_signature;

                          _this3.verifyPayment();
                        },
                        theme: {
                          color: '#227254'
                        }
                      };
                      rzp1 = new Razorpay(options);
                      _context.next = 7;
                      return rzp1.open();

                    case 7:
                      rzp1.on('payment.failed', function (response) {
                        console.log('Payment Failed::', response);
                        _this3.razorPayPaymentFailedDescription = response.error.description;
                      });
                      console.log('opened');
                      console.log('Razor Pay::::', this.razorPayPaymentId, this.razorPayOrderId, this.razorPaySignature);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "verifyPayment",
        value: function verifyPayment() {
          console.log('Razor pay signature:', this.razorPaySignature);
          var body = {
            id: this.id,
            orderId: this.razorPayOrderId,
            paymentId: this.razorPayPaymentId,
            signature: this.razorPaySignature
          };
          console.log('Verify payment body', body);
          this.userService.paymentVerification(body).subscribe(function (response) {
            if (response.Data) {
              console.log("Payment Successful!");
            } else {
              console.log("Something went wrong!");
            }
          });
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 95,
      vars: 13,
      consts: [[1, "body"], ["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], ["routerLink", "/", 1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-sm-6"], [1, "card", "billing-details"], [1, "card-body"], [1, "card-title", "text-center"], ["appearance", "outline", 1, "form"], ["matInput", "", "type", "text", "name", "firstName", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "lastName", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "name", "phone", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "city", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "state", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "country", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "name", "zipcode", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "address", 3, "ngModel", "ngModelChange"], [1, "card", "text-center"], [1, "table", "table-striped"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "col"], [1, "btn", "mx-2", "mt-3", "proceedBtn", 3, "click"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Checkout Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Billing Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Zipcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.zipcode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Enter your Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_textarea_ngModelChange_52_listener($event) {
            return ctx.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Payment Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "thead", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CheckoutComponent_tr_70_Template, 9, 4, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Total No of Items");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Subtotal Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_93_listener() {
            return ctx.proceedToPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Proceed to Payment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zipcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.subtotal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9", ctx.total, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 2%;\n}\n\n.billing-details[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: grey;\n  margin-bottom: 1%;\n}\n\n.productDetails[_ngcontent-%COMP%] {\n  background-color: #928d8d;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.proceedBtn[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n  float: right;\n}\n\n.proceedBtn[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGVja291dC9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBREFJO0VBQ0ksV0FBQTtBQ0dSOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iSGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcbi5iaWxsaW5nLWRldGFpbHN7XHJcbiAgICAuZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG4ucHJvZHVjdERldGFpbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI4ZDhkO1xyXG59XHJcblxyXG4uY29sLTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucHJvY2VlZEJ0biB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ZjQxMDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9jZWVkQnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xyXG59XHJcbiIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDIlO1xufVxuXG4uYmlsbGluZy1kZXRhaWxzIC5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLnByb2R1Y3REZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyOGQ4ZDtcbn1cblxuLmNvbC02IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4ucHJvY2VlZEJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzlmNDEwMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvY2VlZEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGIzMjM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/contact-us/contact-us.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/contact-us/contact-us.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppUserContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 66,
      vars: 5,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "details"], [1, "col-sm-4"], [1, "card", "text-center", 2, "width", "18rem"], [1, "icon"], [1, "fas", "fa-envelope"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "fas", "fa-location-arrow"], [1, "fas", "fa-phone"], [1, "row", "message"], [1, "text-center", "fs-3", 2, "font-family", "SpicyRice"], [1, "col-sm-6"], ["appearance", "outline", 1, "form"], ["matInput", "", "type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "Email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "name", "phone", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "rows", "8", "name", "message", 3, "ngModel", "ngModelChange"], [1, "btn", "mx-2", "mt-3", "sendBtn"]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Us Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "info@bommuherbals.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bommu Herbals Private Limited Plot No 75, Road No 7, ALEAP Industrial Estate, Pragathi Nagar, Kukatpally, Telangana - 500072");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+91 9912588699");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Send Us a Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_54_listener($event) {
            return ctx.subject = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_textarea_ngModelChange_63_listener($event) {
            return ctx.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: 8%;\n  font-size: medium;\n}\n\n.icon[_ngcontent-%COMP%] {\n  background: #292929;\n  color: white;\n  border-radius: 50%;\n  line-height: 50px;\n  margin-left: 40%;\n  width: 20%;\n  margin-top: 5%;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 100%;\n  border-color: transparent;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 600;\n  font-family: SpicyRice;\n  letter-spacing: 2px;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  margin-left: 10%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sendBtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #9f4103;\n  border-radius: 30px;\n  width: 100%;\n  height: 3rem;\n}\n\n.sendBtn[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n@media only screen and (max-width: 600px) {\n  .details[_ngcontent-%COMP%] {\n    margin-left: -3%;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 736px) {\n  .details[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb250YWN0LXVzL0U6XFxBbmd1bGFyIFByb2plY3RzXFxib21tdS1oZXJiYWxzLWRlbW8vc3JjXFxhcHBcXHVzZXJcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0FDR0o7O0FEQUE7RUFDSTtJQUNHLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VDR0w7QUFDRjs7QURBQTtFQUNJO0lBQ0csZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUNFTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYkhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxufVxyXG4uaWNvbntcclxuICAgIGJhY2tncm91bmQ6ICMyOTI5Mjk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5pY29uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VuZEJ0bntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOWY0MTAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgfVxyXG4gIC5zZW5kQnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGIzMjM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5kZXRhaWxze1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IC0zJTtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG4gICAgLmRldGFpbHN7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5pY29uIHtcbiAgYmFja2dyb3VuZDogIzI5MjkyOTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VuZEJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmNDEwMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLnNlbmRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogLTMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmRldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUserFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 54,
      vars: 0,
      consts: [[1, "footer", "mt-auto"], [1, "container", "mt-auto"], [1, "row"], [1, "col-lg-4", "col-12", "col-sm-12", 2, "border-right", "2px solid white"], [1, "col-12", "col-lg-4", "col-sm-12", 2, "border-right", "2px solid white"], [1, "col-sm-6", "col-6", "col-lg-6"], [1, "col-lg-4", "col-sm-12", "col-12"], [1, "fas", "fa-map-marked-alt"], [1, "fas", "fa-phone-alt"], [1, "fas", "fa-envelope"], [1, "d-flex", "justify-content-center", "pb-2"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sri Bommu Venkateshwarara Reddy founder of Bommu Herbals Pvt Ltd created a mission of \"Taking Ayurveda to every Citizen of India \". Our goal is making every Citizen of India happy and healthy through genuine Ayurvedic treatment delivered at their Life style. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Beauty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Herbs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Powder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Bommu Herbals Private Limited Plot No 75, Road No 7, ALEAP Industrial Estate, Pragathi Nagar, Kukatpally, Telangana - 500072 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " +91 9912749786 / +91 9912588699 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " info@bommuherbals.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Copyright \xA9 Bommu Herbals 2020 . All Right Reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  background: url('footer.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  color: white;\n  font-size: larger;\n}\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  letter-spacing: 1px;\n  color: #f4b323;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 4%;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb290ZXIvRTpcXEFuZ3VsYXIgUHJvamVjdHNcXGJvbW11LWhlcmJhbHMtZGVtby9zcmNcXGFwcFxcdXNlclxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FERUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2Zvb3Rlci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZVxyXG4gICAgfVxyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjZjRiMzIzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxubGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZm9vdGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmZvb3RlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogI2Y0YjMyMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/grid/grid.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/grid/grid.component.ts ***!
    \*********************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppUserGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GridComponent = /*#__PURE__*/function () {
      function GridComponent() {
        _classCallCheck(this, GridComponent);

        this.generalCareNav = '/products/general-care';
        this.beautyCareNav = '/products/beauty-care';
        this.hairCareNav = '/products/hair-care';
        this.healthCareNav = '/products/health-care';
        this.powdersNav = '/products/powders';
      }

      _createClass(GridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GridComponent;
    }();

    GridComponent.ɵfac = function GridComponent_Factory(t) {
      return new (t || GridComponent)();
    };

    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridComponent,
      selectors: [["app-grid"]],
      decls: 46,
      vars: 5,
      consts: [[1, "grid", "m-3", "d-flex", "justify-content-center"], [1, "row"], [1, "col-sm-4"], ["src", "assets/1.jpg", 2, "height", "400px"], [1, "main-block"], [1, "title-grid", "fs-2", 2, "color", "#f4b323"], [2, "font-size", "x-large"], [1, "btn", "mx-2", 3, "routerLink"], [1, "col-sm-8"], [1, "row", "mb-4"], [1, "col-sm-4", "content"], ["src", "assets/2.png"], [1, "overlay", "overlayLeft"], [1, "text-block"], [1, "title-grid", "fs-2"], [1, "col-sm-8", "content"], ["src", "assets/3.jpg"], ["src", "assets/4.jpg"], ["src", "assets/5.jpg"]],
      template: function GridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "General Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "50% FLAT OFFER ALL PRODUCTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Beauty Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Health Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Powders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Hair Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.generalCareNav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.beautyCareNav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.healthCareNav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.powdersNav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.hairCareNav);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".grid[_ngcontent-%COMP%] {\n  min-height: 25rem;\n}\n.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n}\n.grid[_ngcontent-%COMP%]   .col-sm-8[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background-color: rgba(0, 0, 0, 0.699);\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: all 0.3s ease;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.699);\n}\n.grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.grid[_ngcontent-%COMP%]   .overlayLeft[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.699);\n}\n.grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .overlayLeft[_ngcontent-%COMP%] {\n  width: 96%;\n}\n.grid[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: white;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.grid[_ngcontent-%COMP%]   .title-grid[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n}\n.grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n}\n.grid[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9ncmlkL0U6XFxBbmd1bGFyIFByb2plY3RzXFxib21tdS1oZXJiYWxzLWRlbW8vc3JjXFxhcHBcXHVzZXJcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjtBREFHO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FDQUo7QURHQTtFQUNJLFVBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esc0NBQUE7QUNGSjtBREtBO0VBQ0UsVUFBQTtBQ0hGO0FES0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hKO0FES0U7RUFDRSxzQkFBQTtBQ0hKO0FES0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XHJcbiAgbWluLWhlaWdodDogMjVyZW07XHJcbiAgIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmNvbC1zbS04e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY29sLXNtLTR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC50ZXh0LWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5OSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59IFxyXG4gIFxyXG4ub3ZlcmxheSB7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IFxyXG4gICAgb3BhY2l0eTogMDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk5KTsgXHJcbn0gXHJcbiAgXHJcbi5jb250ZW50OmhvdmVyIC5vdmVybGF5IHsgXHJcbiAgICBvcGFjaXR5OiAxOyBcclxufSBcclxuICBcclxuLm92ZXJsYXlMZWZ0eyBcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICB3aWR0aDogMDsgXHJcbiAgICB0b3A6IDA7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC42OTkpOzsgXHJcbn0gXHJcbiAgXHJcbi5jb250ZW50OmhvdmVyIC5vdmVybGF5TGVmdHsgXHJcbiAgd2lkdGg6IDk2JTsgXHJcbn0gXHJcbiAgLm1haW4tYmxvY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnRpdGxlLWdyaWR7XHJcbiAgICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICM5ZjQxMDM7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgfVxyXG4gIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn0iLCIuZ3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDI1cmVtO1xufVxuLmdyaWQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZCAuY29sLXNtLTgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCAuY29sLXNtLTQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCAudGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5OSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZ3JpZCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk5KTtcbn1cbi5ncmlkIC5jb250ZW50OmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5ncmlkIC5vdmVybGF5TGVmdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5OSk7XG59XG4uZ3JpZCAuY29udGVudDpob3ZlciAub3ZlcmxheUxlZnQge1xuICB3aWR0aDogOTYlO1xufVxuLmdyaWQgLm1haW4tYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5ncmlkIC50aXRsZS1ncmlkIHtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbn1cbi5ncmlkIC5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ZjQxMDM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uZ3JpZCAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid',
          templateUrl: './grid.component.html',
          styleUrls: ['./grid.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppUserHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-popper */
    "./node_modules/ngx-popper/__ivy_ngcc__/fesm2015/ngx-popper.js");

    function HeaderComponent_li_14_ul_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subCategory_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", subCategory_r9.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r9.name, " ");
      }
    }

    function HeaderComponent_li_14_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_14_ul_3_div_1_Template, 4, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r5.subCategories);
      }
    }

    function HeaderComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_14_ul_3_Template, 2, 1, "ul", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5.main, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r5.subCategories.length > 0);
      }
    }

    function HeaderComponent_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_p_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_p_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_p_31_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.logoutUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(userService) {
        _classCallCheck(this, HeaderComponent);

        this.userService = userService;
        this.categories = [];
        this.firstName = '';
        this.lastName = '';
        this.isLoggedIn = false;
        this.productsInCart = 0;
      } // categories = [
      //   {
      //     main: 'Beauty Care',
      //     subCategories: [
      //       {
      //         name:'Handmade Soaps',
      //         link: '/productCatelog',
      //       },
      //       {
      //         name:'Body Lotions',
      //         link: '#',
      //       },
      //       {
      //         name:'Face Glowing Oil',
      //         link: '#',
      //       },
      //       {
      //         name:'Face Cream',
      //         link: '#',
      //       },
      //       {
      //         name:'Hair Oils',
      //         link: '#',
      //       },
      //       {
      //         name:'Hair Shampoos',
      //         link: '#',
      //       },
      //     ],
      //   },
      //   {
      //     main: 'General Care',
      //     subCategories: [
      //       {
      //         name:'Hair Oils',
      //         link: '#',
      //       },
      //       {
      //         name:'Shampoos',
      //         link: '#',
      //       },
      //       {
      //         name:'Hair Care',
      //         link: '#',
      //       },
      //       {
      //         name:'Gels & Face Wash',
      //         link: '#',
      //       },
      //     ],
      //   },
      //   {
      //     main: 'Health Care',
      //     subCategories: [
      //       {
      //         name:'Syrups',
      //         link: '#',
      //       },
      //       {
      //         name:'Juices',
      //         link: '#',
      //       },
      //       {
      //         name:'Capsules',
      //         link: '#',
      //       },
      //       {
      //         name:'Tablets',
      //         link: '#',
      //       },
      //       {
      //         name:'Covid-19',
      //         link: '#',
      //       },
      //       {
      //         name:'Lehyams',
      //         link: '#',
      //       },
      //       {
      //         name:'Creams',
      //         link: '#',
      //       },
      //       {
      //         name:'Knee Pains',
      //         link: '#',
      //       },
      //       {
      //         name:'Sharbats',
      //         link: '#',
      //       },
      //       {
      //         name:'Oils',
      //         link: '#',
      //       },
      //       {
      //         name:'Churans',
      //         link: '#',
      //       },
      //     ],
      //   },
      //   {
      //     main: 'Powders',
      //     subCategories: [
      //       {
      //         name:'Powder',
      //         link: '#',
      //       },
      //     ],
      //   },
      //   {
      //     main: 'Hair Care',
      //     subCategories: [
      //       {
      //         name:'Hair Oil',
      //         link: '#',
      //       },
      //     ],
      //   },
      // ];


      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productsInCart = this.userService.getProductsInCart().length;
          this.getCategories();
          this.getSubCategories();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.productsInCart = this.userService.getProductsInCart().length;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var user = JSON.parse(localStorage.getItem('user'));

          if (user) {
            this.id = user.id;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.isLoggedIn = true;
          }

          this.productsInCart = this.userService.getProductsInCart().length;
          console.log('User::', this.firstName, this.lastName, user);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this4 = this;

          this.userService.getCategories().subscribe(function (response) {
            var _iterator7 = _createForOfIteratorHelper(response.Data),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var element = _step7.value;

                _this4.categories.push({
                  main: element.categoryName.charAt(0).toUpperCase() + element.categoryName.slice(1),
                  subCategories: []
                });
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          });
        }
      }, {
        key: "getSubCategories",
        value: function getSubCategories() {
          var _this5 = this;

          this.userService.getSubCategories().subscribe(function (response) {
            var _iterator8 = _createForOfIteratorHelper(_this5.categories),
                _step8;

            try {
              var _loop = function _loop() {
                var category = _step8.value;
                console.log('Response data::', response.Data);
                var subCategoryFiltered = response.Data.filter(function (element) {
                  return element.categoryName.toLowerCase() === category.main.toLocaleLowerCase();
                });

                var _iterator9 = _createForOfIteratorHelper(subCategoryFiltered),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var subCategoryFilteredElement = _step9.value;
                    category.subCategories.push({
                      name: subCategoryFilteredElement.subCategoryName.charAt(0).toUpperCase() + subCategoryFilteredElement.subCategoryName.slice(1),
                      link: "/products/".concat(category.main.toLowerCase(), "/").concat(subCategoryFilteredElement.subCategoryName)
                    });
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              };

              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            console.log('Categories::', _this5.categories);
          });
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          var _this6 = this;

          var body = {
            id: this.id
          };
          this.userService.logoutUser(body).subscribe(function (response) {
            _this6.firstName = '';
            _this6.lastName = '';
            _this6.id = null;
            _this6.isLoggedIn = false;
            localStorage.removeItem('user');
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 36,
      vars: 10,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/bommu-logo.png", "alt", "Bommu"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/", 1, "nav-link", "active"], ["routerLink", "/about", 1, "nav-link"], ["class", "nav-item dropdown", 4, "ngFor", "ngForOf"], ["routerLink", "/contact", 1, "nav-link"], [1, "d-flex", "justify-content-start"], ["routerLink", "/track", 1, "mt-2", "mr-2", "track"], [1, "fas", "fa-truck-moving", 2, "color", "white", "font-size", "25px"], [1, "user"], [3, "popper", "popperTrigger", "popperPlacement"], [1, "fas", "fa-user", 2, "color", "white", "font-size", "25px"], [2, "color", "white", "font-size", "20px", "margin-left", "3px"], ["tooltipcontent", ""], [4, "ngIf"], ["routerLink", "/cart", 1, "mt-2", "mr-1", "cart"], [1, "fas", "fa-shopping-cart", 2, "color", "white", "font-size", "25px"], [1, "badge", "rounded-pill", "bg-danger"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link"], ["class", "dropdown-menu fade-down", "aria-labelledby", "navbarDropdown", 4, "ngIf"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "fade-down"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "href"], ["routerLink", "/login"], ["routerLink", "/register"], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 4, 2, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Online Consultation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "popper-content", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_p_29_Template, 3, 0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderComponent_p_30_Template, 3, 0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_p_31_Template, 3, 0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popper", _r1)("popperTrigger", "hover")("popperPlacement", "bottom-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.firstName, " ", ctx.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productsInCart);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_popper__WEBPACK_IMPORTED_MODULE_4__["PopperController"], ngx_popper__WEBPACK_IMPORTED_MODULE_4__["PopperContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".nav-item[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.3s;\n  margin-top: 0;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.navbar[_ngcontent-%COMP%]   .dropdown-menu.fade-down[_ngcontent-%COMP%] {\n  top: 80%;\n  transform: rotateX(-75deg);\n  transform-origin: 0% 0%;\n}\n\n.navbar[_ngcontent-%COMP%]   .dropdown-menu.fade-up[_ngcontent-%COMP%] {\n  top: 180%;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.3s;\n  opacity: 1;\n  visibility: visible;\n  top: 100%;\n  transform: rotateX(0deg);\n}\n\n.badge[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-left: -10px;\n  margin-top: -7px;\n}\n\n  .ngxp__container {\n  background: white;\n  width: 120px;\n}\n\n.track[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.user[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-top: 5px;\n}\n\n.user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9oZWFkZXIvRTpcXEFuZ3VsYXIgUHJvamVjdHNcXGJvbW11LWhlcmJhbHMtZGVtby9zcmNcXGFwcFxcdXNlclxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksUUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUk7RUFDRyxpQkFBQTtFQUNBLFlBQUE7QUNDUDs7QURHRztFQUNJLGtCQUFBO0FDQVA7O0FERUc7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudS5mYWRlLWRvd24ge1xyXG4gICAgdG9wOiA4MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTc1ZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZhZGUtdXAge1xyXG4gICAgdG9wOiAxODAlO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYtaXRlbTpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4uYmFkZ2V7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgLm5neHBfX2NvbnRhaW5lcnsgXHJcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC50cmFja3tcclxuICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgfVxyXG4gICAudXNlcntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufSIsIi5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5hdmJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uYXZiYXIgLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZhZGUtZG93biB7XG4gIHRvcDogODAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTc1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG59XG5cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUuZmFkZS11cCB7XG4gIHRvcDogMTgwJTtcbn1cblxuLm5hdmJhciAubmF2LWl0ZW06aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG59XG5cbi5iYWRnZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuOjpuZy1kZWVwIC5uZ3hwX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4udHJhY2sge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51c2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udXNlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/home-page/home-page.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/home-page/home-page.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppUserHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../carousel/carousel.component */
    "./src/app/user/carousel/carousel.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/user/products/products.component.ts");
    /* harmony import */


    var _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../parallax/parallax.component */
    "./src/app/user/parallax/parallax.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/user/grid/grid.component.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);

        this.topProducts = 'Top Sale Products';
        this.generalProducts = 'General Care';
        this.beautyProducts = ' Beauty Care';
        this.healthProducts = 'Health Care';
        this.powderProducts = 'Powders';
        this.topProductsUrl = 'products/top-products';
        this.generalProductsUrl = 'products?category=general care';
        this.beautyProductsUrl = 'products?category=beauty care';
        this.healthProductsUrl = 'products?category=health care';
        this.powderProductsUrl = 'products?category=powders';
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 9,
      vars: 10,
      consts: [[3, "pageTitle", "url"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-products", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-parallax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-products", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-products", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-products", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-products", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\xA9 2021 GitHub, Inc.\n");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.topProducts)("url", ctx.topProductsUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.beautyProducts)("url", ctx.beautyProductsUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.generalProducts)("url", ctx.generalProductsUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.healthProducts)("url", ctx.healthProductsUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.powderProducts)("url", ctx.powderProductsUrl);
        }
      },
      directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_3__["ParallaxComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/layout/layout.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/layout/layout.component.ts ***!
    \*************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppUserLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/user/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/user/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 4,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login-page/login-page.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/login-page/login-page.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppUserLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(router, userService) {
        _classCallCheck(this, LoginPageComponent);

        this.router = router;
        this.userService = userService;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this7 = this;

          var body = {
            email: this.email,
            password: this.password
          };
          this.userService.loginUser(body).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Login response', response);
                      localStorage.setItem('user', JSON.stringify(response.Data)); // this.outputEvent.emit(response);

                      this.router.navigate(['/']);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 33,
      vars: 2,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], ["routerLink", "/", 1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "my-5"], [1, "d-flex", "justify-content-center"], [1, "signinForm"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "aria-describedby", "emailHelp", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["href", "#", 1, "form-label"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "click"], ["routerLink", "/register", 1, "form-label"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Forgot Password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_27_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  padding: 10px 50px;\n  border-radius: 30px;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.signinForm[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi1wYWdlL0U6XFxBbmd1bGFyIFByb2plY3RzXFxib21tdS1oZXJiYWxzLWRlbW8vc3JjXFxhcHBcXHVzZXJcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYkhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2lnbmluRm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG59IiwiLmJyZWFkY3J1bWJIZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWduaW5Gb3JtIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/parallax/parallax.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/parallax/parallax.component.ts ***!
    \*****************************************************/

  /*! exports provided: ParallaxComponent */

  /***/
  function srcAppUserParallaxParallaxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function () {
      return ParallaxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParallaxComponent = /*#__PURE__*/function () {
      function ParallaxComponent() {
        _classCallCheck(this, ParallaxComponent);
      }

      _createClass(ParallaxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParallaxComponent;
    }();

    ParallaxComponent.ɵfac = function ParallaxComponent_Factory(t) {
      return new (t || ParallaxComponent)();
    };

    ParallaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParallaxComponent,
      selectors: [["app-parallax"]],
      decls: 16,
      vars: 0,
      consts: [[1, "parallax"], [1, "container", "grid__item", "d-flex", "align-items-center", 2, "padding", "80px 0 80px"], [2, "color", "#f4b323", "font-family", "SpicyRice"], [2, "color", "#ffffff"], [1, "cms-type-3-btn"], ["href", "", 1, "btn", "mx-2", 2, "color", "#fff", "border", "2px solid #9f4103", "border-radius", "30px"], ["href", "", 1, "btn", "mx-2", 2, "color", "#fff", "border", "2px solid #ffffff", "border-radius", "30px"]],
      template: function ParallaxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get 10% off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "On all Spicy & Herbs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum has become the industry standard for design mockups and prototypes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "By adding a little bit of Latin to a mockup.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shop Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n\n.parallax[_ngcontent-%COMP%] {\n  \n  background-image: url('parallax1.jpg');\n  \n  height: 100vh;\n  \n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 0 15px 0;\n}\n\n.cms-type-3-btn[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  margin-top: 40px;\n}\n\n.cms-type-3-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.cms-type-3-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.grid__item[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 20px;\n  min-height: 1px;\n  vertical-align: top;\n  width: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wYXJhbGxheC9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxwYXJhbGxheFxccGFyYWxsYXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcGFyYWxsYXgvcGFyYWxsYXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURBSTtFQUNJLFlBQUE7QUNFUjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFHQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wYXJhbGxheC9wYXJhbGxheC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvcGFyYWxsYXgxLmpwZ1wiKTtcclxuICAgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG59XHJcblxyXG4uY21zLXR5cGUtMy1idG4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jbXMtdHlwZS0zLWJ0biA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcclxuICAgIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuLmdyaWRfX2l0ZW0ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYWxsYXgge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL3BhcmFsbGF4MS5qcGdcIik7XG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuXG4uY21zLXR5cGUtMy1idG4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jbXMtdHlwZS0zLWJ0biA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xufVxuLmNtcy10eXBlLTMtYnRuIDpob3ZlciAuYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ3JpZF9faXRlbSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWluLWhlaWdodDogMXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParallaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parallax',
          templateUrl: './parallax.component.html',
          styleUrls: ['./parallax.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/product-catelog/product-catelog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/product-catelog/product-catelog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductCatelogComponent */

  /***/
  function srcAppUserProductCatelogProductCatelogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCatelogComponent", function () {
      return ProductCatelogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductCatelogComponent = /*#__PURE__*/function () {
      function ProductCatelogComponent() {
        _classCallCheck(this, ProductCatelogComponent);
      }

      _createClass(ProductCatelogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductCatelogComponent;
    }();

    ProductCatelogComponent.ɵfac = function ProductCatelogComponent_Factory(t) {
      return new (t || ProductCatelogComponent)();
    };

    ProductCatelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCatelogComponent,
      selectors: [["app-product-catelog"]],
      decls: 1,
      vars: 0,
      template: function ProductCatelogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".product-catelog-header[_ngcontent-%COMP%]   .cateogry-name[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #000000;\n  width: 100%;\n  font-size: 28px;\n}\n.product-catelog-header[_ngcontent-%COMP%]   .cateogry-path[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  float: left;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n.product-catelog-header[_ngcontent-%COMP%]   .cateogry-path[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\n.catelog-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LWNhdGVsb2cvRTpcXEFuZ3VsYXIgUHJvamVjdHNcXGJvbW11LWhlcmJhbHMtZGVtby9zcmNcXGFwcFxcdXNlclxccHJvZHVjdC1jYXRlbG9nXFxwcm9kdWN0LWNhdGVsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdC1jYXRlbG9nL3Byb2R1Y3QtY2F0ZWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQVI7QURDUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9kdWN0LWNhdGVsb2cvcHJvZHVjdC1jYXRlbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2F0ZWxvZy1oZWFkZXJ7XHJcbiAgICAuY2F0ZW9ncnktbmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAuY2F0ZW9ncnktcGF0aCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhdGVsb2ctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiLnByb2R1Y3QtY2F0ZWxvZy1oZWFkZXIgLmNhdGVvZ3J5LW5hbWUge1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5wcm9kdWN0LWNhdGVsb2ctaGVhZGVyIC5jYXRlb2dyeS1wYXRoIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9kdWN0LWNhdGVsb2ctaGVhZGVyIC5jYXRlb2dyeS1wYXRoIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2F0ZWxvZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCatelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-catelog',
          templateUrl: './product-catelog.component.html',
          styleUrls: ['./product-catelog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/product-detail/product-detail.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/product-detail/product-detail.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppUserProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/user/products/products.component.ts");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function ProductDetailComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;
        var isFirst_r3 = ctx.first;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, isFirst_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductDetailComponent = /*#__PURE__*/function () {
      function ProductDetailComponent(changeRef, userService, route) {
        _classCallCheck(this, ProductDetailComponent);

        this.changeRef = changeRef;
        this.userService = userService;
        this.route = route;
        this.relatedProducts = 'Related Products';
        this.quantity = 1;
        this.images = [];
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.paramMap.subscribe(function (params) {
            _this8.routeCategory = params.get('category');
            _this8.routeSubCategory = params.get('subCategory');
            _this8.id = params.get('id');
            _this8.category = params.get('category').replace('-', ' ');
            _this8.category = _this8.category.charAt(0).toUpperCase() + _this8.category.slice(1);
            _this8.subCategory = _this8.routeSubCategory ? params.get('subCategory').replace(/\-/gi, ' ') : null;
            _this8.subCategory = _this8.subCategory ? _this8.subCategory.charAt(0).toUpperCase() + _this8.subCategory.slice(1) : null;
            _this8.url = "product/".concat(_this8.id);
            _this8.relatedProductsUrl = "products?category=".concat(_this8.category);
            console.log("Related url", _this8.relatedProductsUrl);
          });
          console.log('URL:::', this.url);
          this.getProductDetails();
        }
      }, {
        key: "minusBtn",
        value: function minusBtn() {
          if (this.quantity > 1) {
            this.quantity--;
            this.subtotal = this.subtotal - this.effectivePrice ? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
            this.changeRef.detectChanges();
            console.log(this.quantity);
          }
        }
      }, {
        key: "getProductDetails",
        value: function getProductDetails() {
          var _this9 = this;

          this.userService.getProductDetails(this.url).subscribe(function (response) {
            _this9.title = response.Data.title;
            _this9.description = response.Data.description;
            _this9.effectivePrice = response.Data.effectivePrice ? response.Data.effectivePrice : null;
            _this9.originalPrice = response.Data.originalPrice;
            _this9.subtotal = response.Data.effectivePrice ? response.Data.effectivePrice : response.Data.originalPrice;
            _this9.delivery = response.Data.delivery ? response.Data.delivery : null;
            _this9.customerReviews = response.Data.reviews ? response.Data.reviews : null;

            var _iterator10 = _createForOfIteratorHelper(response.Data.images),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var image = _step10.value;

                _this9.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + image);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          });
        }
      }, {
        key: "plusBtn",
        value: function plusBtn() {
          this.quantity++;
          this.subtotal = this.effectivePrice ? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
          this.changeRef.detectChanges();
          console.log(this.quantity);
        }
      }, {
        key: "onChangeQuantity",
        value: function onChangeQuantity() {
          this.subtotal = this.effectivePrice ? this.effectivePrice * this.quantity : this.originalPrice * this.quantity;
          this.changeRef.detectChanges();
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          var productObj = {
            id: this.id,
            quantity: 1,
            title: this.title,
            image: this.images[0],
            price: this.effectivePrice ? this.effectivePrice : this.originalPrice,
            total: this.effectivePrice ? this.effectivePrice : this.originalPrice
          };
          this.userService.setProductsInCart(productObj);
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
      return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      decls: 69,
      vars: 17,
      consts: [[1, "body"], ["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], ["routerLink", "/", 1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active", 3, "routerLink"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center"], ["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["id", "carouselExampleDark", 1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleDark", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["href", "#carouselExampleDark", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-sm-6"], [1, "details"], [1, "title"], [1, "tr"], [1, "label"], [1, "price"], [1, "price", 2, "font-size", "18px", "color", "grey"], [1, "quantity"], ["type", "button", "name", "button", 1, "plus-btn", 2, "padding-right", "8px", "padding-left", "8px", 3, "click"], ["type", "text", "name", "quantity", 3, "ngModel", "change", "ngModelChange"], ["type", "button", "name", "button", 1, "minus-btn", 3, "click"], [1, "cms-type-3-btn"], [1, "btn", "mx-2", 2, "color", "black", "border", "2px solid #9f4103", "border-radius", "30px", 3, "click"], [1, "fas", "fa-cart-plus"], ["mat-align-tabs", "center", 1, "mt-2"], ["label", "Product Description"], ["label", "Reviews"], [1, "customer-reviews-title"], ["label", "Shipping Details"], [3, "pageTitle", "url"], [1, "carousel-item", 3, "ngClass"], ["alt", "...", 1, "d-block", "w-100", "carousel-img", 3, "src"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductDetailComponent_div_17_Template, 2, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Effective Price :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Quantity :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_46_listener() {
            return ctx.minusBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailComponent_Template_input_change_48_listener() {
            return ctx.onChangeQuantity();
          })("ngModelChange", function ProductDetailComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_49_listener() {
            return ctx.plusBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Subtotal :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_57_listener() {
            return ctx.addToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Add to Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-tab-group", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-tab", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-tab", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-products", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.routeCategory, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.routeSubCategory, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.effectivePrice ? "\u20B9 " + ctx.effectivePrice : ctx.originalPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.originalPrice ? "\u20B9 " + ctx.originalPrice : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.subtotal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.customerReviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.delivery, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", ctx.relatedProducts)("url", ctx.relatedProductsUrl);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  height: 630px;\n}\n\n.body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.slide[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 80%;\n  height: 400px;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 400px;\n}\n\n.details[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  font-size: 48px;\n  letter-spacing: 0.1em;\n  font-family: SpicyRice;\n  color: #9f4103;\n  margin-bottom: 5%;\n}\n\n.details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: none;\n  text-align: center;\n  width: 32px;\n  font-size: 16px;\n  color: black;\n  font-weight: 300;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n  background-color: transparent;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #f4b323;\n}\n\n.cms-type-3-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n  .mat-tab-list .mat-tab-labels .mat-tab-label-active {\n  color: #f4b323;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  color: #f4b323 !important;\n  background-color: #f4b323 !important;\n}\n\n.customer-reviews-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  letter-spacing: 0.1em;\n  font-family: SpicyRice;\n  margin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREFJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNFUjs7QURBSTtFQUNJLGFBQUE7QUNFUjs7QURBSTtFQUNJLGlCQUFBO0FDRVI7O0FERUk7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQVI7O0FERUk7RUFDSSx5QkFBQTtBQ0FSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iSGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbn1cclxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNjMwcHg7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRle1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuXHJcbi5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmRldGFpbHN7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6eHgtbGFyZ2U7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gICAgICAgIGNvbG9yOiAjOWY0MTAzO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG4gICAgLmxhYmVse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4OyAgXHJcbiAgICB9XHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkgaW5wdXQge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eSBidXR0b257XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjOWY0MTAzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5xdWFudGl0eSBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcclxuICAgIH1cclxuICAgIC5wcmljZXtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmNGIzMjM7XHJcbiAgICB9XHJcbn1cclxuLmNtcy10eXBlLTMtYnRuIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiNmNGIzMjM7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gICAgY29sb3I6I2Y0YjMyMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjRiMzIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21lci1yZXZpZXdzLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4iLCIuYnJlYWRjcnVtYkhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcbiAgaGVpZ2h0OiA2MzBweDtcbn1cblxuLmJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGUge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uZGV0YWlscyAudGl0bGUge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgY29sb3I6ICM5ZjQxMDM7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmRldGFpbHMgLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5kZXRhaWxzIHRkIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5kZXRhaWxzIC5xdWFudGl0eSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmRldGFpbHMgLnF1YW50aXR5IGlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRldGFpbHMgLnF1YW50aXR5IGJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgIzlmNDEwMztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGV0YWlscyAucXVhbnRpdHkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcbn1cbi5kZXRhaWxzIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjRiMzIzO1xufVxuXG4uY21zLXR5cGUtMy1idG4gOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZjRiMzIzO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XG4gIGNvbG9yOiAjZjRiMzIzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGIzMjMgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbWVyLXJldmlld3MtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgbWFyZ2luLXRvcDogMSU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-detail',
          templateUrl: './product-detail.component.html',
          styleUrls: ['./product-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/product-list/product-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/product-list/product-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppUserProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../quick-view/quick-view.component */
    "./src/app/user/quick-view/quick-view.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subCategory ? ctx_r0.subCategory : "");
      }
    }

    function ProductListComponent_div_12_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", image_r2.savePercent, "%");
      }
    }

    function ProductListComponent_div_12_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sale");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductListComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var image_r2 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.addToCart(image_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var image_r2 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.quickView(image_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductListComponent_div_12_p_18_Template, 5, 1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductListComponent_div_12_p_19_Template, 2, 0, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_12_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var image_r2 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.addToCart(image_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r2.savePercent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r2.savePercent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", image_r2.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r2.effectivePrice ? "\u20B9 " + image_r2.effectivePrice : image_r2.originalPrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r2.originalPrice ? "\u20B9 " + image_r2.originalPrice : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "/products/", ctx_r1.routeCategory, "/", ctx_r1.routeSubCategory, "/", image_r2.id, "");
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      // images = [
      //   {
      //     title: 'Product 1',
      //     src: 'assets/product1.png',
      //     price: 750,
      //     save_percent: 10,
      //     lastprice: 1000
      //   },
      //   {
      //     title: 'Product 2',
      //     src: 'assets/product2.jpg',
      //     price: 850,
      //     save_percent:10,
      //     lastprice: 1000
      //   },
      //   {
      //     title: 'Product 3',
      //     src: 'assets/product3.jpg',
      //     price: 950,
      //     save_percent:10,
      //     lastprice: 1000
      //   },
      //   {
      //     title: 'Product 4',
      //     src: 'assets/product4.jpg',
      //     price: 650,
      //     save_percent:10,
      //     lastprice: 1000
      //   },
      //   {
      //     title: 'Product 5',
      //     src: 'assets/product5.jpg',
      //     price: 550,
      //     save_percent:10,
      //     lastprice: 1000
      //   },
      // ];
      function ProductListComponent(router, dialog, route, userService) {
        _classCallCheck(this, ProductListComponent);

        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.userService = userService;
        this.images = [];
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.subscribe(function (params) {
            _this10.routeCategory = params.get('category');
            _this10.routeSubCategory = params.get('subCategory');
            _this10.category = params.get('category').replace('-', ' ');
            _this10.category = _this10.category.charAt(0).toUpperCase() + _this10.category.slice(1);
            _this10.subCategory = _this10.routeSubCategory ? params.get('subCategory').replace(/\-/gi, ' ') : null;
            _this10.subCategory = _this10.subCategory ? _this10.subCategory.charAt(0).toUpperCase() + _this10.subCategory.slice(1) : null;

            if (_this10.subCategory) {
              _this10.url = "products?category=".concat(_this10.category, "&subCategory=").concat(_this10.subCategory);
            } else {
              _this10.url = "products?category=".concat(_this10.category);
            }

            _this10.getProducts();

            console.log('Category:::', _this10.category, _this10.subCategory, _this10.url);
          });
        }
      }, {
        key: "quickView",
        value: function quickView(product) {
          this.dialog.open(_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__["QuickViewComponent"], {
            height: '60%',
            width: '100%',
            data: product
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this11 = this;

          this.userService.getProducts(this.url).subscribe(function (response) {
            console.log('PRODUCTS:::', response.Data);

            var _iterator11 = _createForOfIteratorHelper(response.Data),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var element = _step11.value;
                var obj = {};
                obj.id = element.id;
                obj.title = element.title;
                obj.description = element.description;
                obj.src = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + element.images[0];
                obj.effectivePrice = element.effectivePrice ? element.effectivePrice : element.originalPrice;
                obj.originalPrice = element.effectivePrice ? element.originalPrice : null;
                obj.category = element.category;
                obj.subCategory = element.subCategory;
                obj.link = "/products/".concat(element.category, "/").concat(element.subCategory, "/").concat(element.id);

                if (element.effectivePrice) {
                  obj.savePercent = 100 - Math.round(element.effectivePrice * 100 / element.originalPrice);
                } else {
                  obj.savePercent = null;
                }

                _this11.images.push(obj);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            console.log('IMAGES::::', _this11.images);
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var productObj = {
            id: product.id,
            quantity: 1,
            title: product.title,
            image: product.src,
            price: product.effectivePrice ? product.effectivePrice : product.originalPrice,
            total: product.effectivePrice ? product.effectivePrice : product.originalPrice
          };
          this.userService.setProductsInCart(productObj);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 13,
      vars: 5,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], ["routerLink", "/", 1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active", 3, "routerLink"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "row", "mt-4"], ["class", "d-flex justify-content-center col-sm-6 col-md-3 col-xs-12 col-12 mb-4", 4, "ngFor", "ngForOf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "justify-content-center", "col-sm-6", "col-md-3", "col-xs-12", "col-12", "mb-4"], [1, "card", "d-flex", "flex-column", 2, "width", "18rem"], [1, "card-overlay"], ["alt", "", 1, "card-img-top", "image", 3, "src"], [1, "ImageWrapper"], [1, "product-button"], ["title", "Add to Cart", 1, "add-cart-btn", 3, "click"], [1, "fas", "fa-shopping-cart"], ["title", "quick-view", 1, "quick-view", 3, "click"], [1, "far", "fa-eye"], [1, "line", "line-top"], [1, "line", "line-right"], [1, "line", "line-bottom"], [1, "line", "line-left"], ["class", "product-right-tag", 4, "ngIf"], ["class", "product-left-tag", 4, "ngIf"], [1, "card-body"], [1, "card-title", "text-center", "productTitle", 3, "routerLink"], [1, "card-text", "text-center"], [1, "row", "d-flex", "justify-content-center"], [1, "col-sm-6"], [1, "btn", "btn-primary", "align-self-end", "mx-auto", "w-100", 3, "routerLink"], [1, "btn", "btn-primary", "align-self-end", "mx-auto", "w-100", 3, "click"], [1, "product-right-tag"], [1, "product-left-tag"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductListComponent_li_10_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductListComponent_div_12_Template, 35, 10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subCategory ? ctx.subCategory : ctx.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.routeCategory, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category ? ctx.category : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.product-right-tag[_ngcontent-%COMP%] {\n  float: right;\n  padding: 10px;\n  background: #f4b323;\n  color: #292929;\n  position: absolute;\n  right: 0;\n  top: 0px;\n  z-index: 2;\n  text-align: center;\n  line-height: 1.1;\n}\n\n.product-left-tag[_ngcontent-%COMP%] {\n  float: left;\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  z-index: 2;\n  text-align: center;\n  line-height: 1.1;\n  background: #9f4103;\n}\n\n.productTitle[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #9f4103;\n  font-size: large;\n}\n\n.ImageWrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #0000009a;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 300px;\n}\n\n.card-overlay[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.card-overlay[_ngcontent-%COMP%]:hover   .ImageWrapper[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.726);\n}\n\n.product-button[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #ff7b00;\n  color: white;\n}\n\n.add-cart-btn[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background-color: black;\n  color: white;\n  padding: 3px;\n}\n\n.quick-view[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 20px;\n  color: white;\n  background-color: black;\n  padding: 3px;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  background-color: blue;\n  position: absolute;\n}\n\n.card[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n  position: inherit;\n  display: block;\n  transition: all 0.4s ease-in;\n}\n\n.card[_ngcontent-%COMP%]   .line-top[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\n.card[_ngcontent-%COMP%]   .line-right[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]   .line-bottom[_ngcontent-%COMP%] {\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 4px;\n}\n\n.card[_ngcontent-%COMP%]   .line-left[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  bottom: inherit;\n  left: inherit;\n  width: 0;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: inherit;\n  left: inherit;\n  width: 100%;\n  height: 0;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  right: inherit;\n  top: inherit;\n  width: 0;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  bottom: inherit;\n  right: inherit;\n  width: 100%;\n  height: 0;\n}\n\n.card[_ngcontent-%COMP%]   .line-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .line-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%]   .line-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .line-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LWxpc3QvRTpcXEFuZ3VsYXIgUHJvamVjdHNcXGJvbW11LWhlcmJhbHMtZGVtby9zcmNcXGFwcFxcdXNlclxccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0FDQ0o7O0FERUE7O0VBRUksWUFBQTtBQ0NKOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iSGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXJpZ2h0LXRhZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0YjMyMztcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcblxyXG4ucHJvZHVjdC1sZWZ0LXRhZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGJhY2tncm91bmQ6ICM5ZjQxMDM7XHJcbn1cclxuXHJcbi5wcm9kdWN0VGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgIGNvbG9yOiAjOWY0MTAzO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLkltYWdlV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5YTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1vdmVybGF5OmhvdmVyIC5JbWFnZVdyYXBwZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2IwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZC1jYXJ0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLnF1aWNrLXZpZXcge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2FyZCAubGluZSBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5jYXJkIC5saW5lLXRvcCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxufVxyXG5cclxuLmNhcmQgLmxpbmUtcmlnaHQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkIC5saW5lLWJvdHRvbSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5saW5lLWxlZnQge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAubGluZS10b3Agc3BhbiB7XHJcbiAgICBib3R0b206IGluaGVyaXQ7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5saW5lLXJpZ2h0IHNwYW4ge1xyXG4gICAgdG9wOiBpbmhlcml0O1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAubGluZS1ib3R0b20gc3BhbiB7XHJcbiAgICByaWdodDogaW5oZXJpdDtcclxuICAgIHRvcDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAubGluZS1sZWZ0IHNwYW4ge1xyXG4gICAgYm90dG9tOiBpbmhlcml0O1xyXG4gICAgcmlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQgLmxpbmUtdG9wIHNwYW4sXHJcbi5jYXJkIC5saW5lLWJvdHRvbSBzcGFuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCAubGluZS1yaWdodCBzcGFuLFxyXG4uY2FyZCAubGluZS1sZWZ0IHNwYW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbiIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4ucHJvZHVjdC1yaWdodC10YWcge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGIzMjM7XG4gIGNvbG9yOiAjMjkyOTI5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG4ucHJvZHVjdC1sZWZ0LXRhZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBiYWNrZ3JvdW5kOiAjOWY0MTAzO1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgY29sb3I6ICM5ZjQxMDM7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5JbWFnZVdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOWE7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLW92ZXJsYXk6aG92ZXIgLkltYWdlV3JhcHBlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xufVxuXG4ucHJvZHVjdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQtY2FydC1idG4ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnF1aWNrLXZpZXcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZDpob3ZlciAubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQgLmxpbmUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG59XG5cbi5jYXJkIC5saW5lLXRvcCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xufVxuXG4uY2FyZCAubGluZS1yaWdodCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCAubGluZS1ib3R0b20ge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG59XG5cbi5jYXJkIC5saW5lLWxlZnQge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkOmhvdmVyIC5saW5lLXRvcCBzcGFuIHtcbiAgYm90dG9tOiBpbmhlcml0O1xuICBsZWZ0OiBpbmhlcml0O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZDpob3ZlciAubGluZS1yaWdodCBzcGFuIHtcbiAgdG9wOiBpbmhlcml0O1xuICBsZWZ0OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uY2FyZDpob3ZlciAubGluZS1ib3R0b20gc3BhbiB7XG4gIHJpZ2h0OiBpbmhlcml0O1xuICB0b3A6IGluaGVyaXQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkOmhvdmVyIC5saW5lLWxlZnQgc3BhbiB7XG4gIGJvdHRvbTogaW5oZXJpdDtcbiAgcmlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5jYXJkIC5saW5lLXRvcCBzcGFuLFxuLmNhcmQgLmxpbmUtYm90dG9tIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQgLmxpbmUtcmlnaHQgc3Bhbixcbi5jYXJkIC5saW5lLWxlZnQgc3BhbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/products/products.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/products/products.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppUserProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsComponent_ng_container_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.effectivePrice ? "Rs. " + image_r1.effectivePrice : image_r1.originalPrice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.originalPrice ? "Rs. " + image_r1.originalPrice : "");
      }
    }

    function ProductsComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_ng_container_6_ng_template_1_Template, 22, 4, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(userService) {
        _classCallCheck(this, ProductsComponent);

        this.userService = userService; // images = [
        //   {
        //     title: 'Product 1',
        //     src: 'assets/product1.png',
        //     effectivePrice: 750,
        //     originalPrice: 1000,
        //   },
        //   {
        //     title: 'Product 2',
        //     src: 'assets/product2.jpg',
        //     effectivePrice: 750,
        //     originalPrice: 1000,
        //   },
        //   {
        //     title: 'Product 3',
        //     src: 'assets/product3.jpg',
        //     effectivePrice: 750,
        //     originalPrice: 1000,
        //   },
        //   {
        //     title: 'Product 4',
        //     src: 'assets/product4.jpg',
        //     effectivePrice: 750,
        //     originalPrice: 1000,
        //   },
        //   {
        //     title: 'Product 5',
        //     src: 'assets/product5.jpg',
        //     effectivePrice: 750,
        //     originalPrice: 1000,
        //   },
        // ];

        this.images = [];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          navSpeed: 700,
          navText: ['<div class="btn btn-primary rounded-pill"><i class="fas fa-arrow-left"></i> Prev</div>', '<div class="btn btn-primary rounded-pill">Next <i class="fas fa-arrow-right"></i></div>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 4
            }
          },
          nav: true
        };
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this12 = this;

          this.userService.getProducts(this.url).subscribe(function (response) {
            console.log('PRODUCTS:::', response.Data);

            var _iterator12 = _createForOfIteratorHelper(response.Data),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var element = _step12.value;
                var obj = {};
                obj.title = element.title;
                obj.src = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + element.images[0];
                obj.effectivePrice = element.effectivePrice ? element.effectivePrice : element.originalPrice;
                obj.originalPrice = element.effectivePrice ? element.originalPrice : null;

                _this12.images.push(obj);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            console.log('IMAGES::::', _this12.images);
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      inputs: {
        pageTitle: "pageTitle",
        url: "url"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "container"], [1, "product-header", "text-center", "row", "d-flex", "align-items-center"], [1, "top-product-heading"], [1, "d-flex", "justify-content-center", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "card", "d-flex", "flex-column", 2, "width", "18rem"], [1, "line", "line-top"], [1, "line", "line-right"], [1, "line", "line-bottom"], [1, "line", "line-left"], ["alt", "", 1, "card-img-top", 2, "height", "18rem", 3, "src"], [1, "card-body"], [1, "card-title", "text-center", "productTitle"], [1, "card-text", "text-center"], [1, "text-center"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-6"], [1, "btn", "btn-primary", "align-self-end", "mx-auto", "w-100"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_ng_container_6_Template, 2, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"]],
      styles: [".btn[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\nowl-carousel-o[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.top-product-heading[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  font-size: 45px;\n}\n\n.product-header[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #9f4103;\n  letter-spacing: 0.05em;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.productTitle[_ngcontent-%COMP%] {\n  font-family: SpicyRice;\n  color: #9f4103;\n  font-size: large;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  background-color: blue;\n  position: absolute;\n}\n\n.card[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n  position: inherit;\n  display: block;\n  transition: all 0.4s ease-in;\n}\n\n.card[_ngcontent-%COMP%]   .line-top[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\n.card[_ngcontent-%COMP%]   .line-right[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]   .line-bottom[_ngcontent-%COMP%] {\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 4px;\n}\n\n.card[_ngcontent-%COMP%]   .line-left[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  bottom: inherit;\n  left: inherit;\n  width: 0;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: inherit;\n  left: inherit;\n  width: 100%;\n  height: 0;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  right: inherit;\n  top: inherit;\n  width: 0;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]:hover   .line-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  bottom: inherit;\n  right: inherit;\n  width: 100%;\n  height: 0;\n}\n\n.card[_ngcontent-%COMP%]   .line-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .line-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%]   .line-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .line-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  owl-carousel-o[_ngcontent-%COMP%] {\n    margin-left: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0cy9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGdCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbm93bC1jYXJvdXNlbC1vIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnRvcC1wcm9kdWN0LWhlYWRpbmd7XHJcbiAgICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgIGNvbG9yOiAjOWY0MTAzO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdFRpdGxlIHtcclxuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xyXG4gIGNvbG9yOiAjOWY0MTAzO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNhcmQgLmxpbmUgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2FyZCAubGluZS10b3Age1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5saW5lLXJpZ2h0IHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCAubGluZS1ib3R0b20ge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG59XHJcblxyXG4uY2FyZCAubGluZS1sZWZ0IHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmxpbmUtdG9wIHNwYW4ge1xyXG4gICAgYm90dG9tOiBpbmhlcml0O1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAubGluZS1yaWdodCBzcGFuIHtcclxuICAgIHRvcDogaW5oZXJpdDtcclxuICAgIGxlZnQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmxpbmUtYm90dG9tIHNwYW4ge1xyXG4gICAgcmlnaHQ6IGluaGVyaXQ7XHJcbiAgICB0b3A6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmxpbmUtbGVmdCBzcGFuIHtcclxuICAgIGJvdHRvbTogaW5oZXJpdDtcclxuICAgIHJpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkIC5saW5lLXRvcCBzcGFuLFxyXG4uY2FyZCAubGluZS1ib3R0b20gc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQgLmxpbmUtcmlnaHQgc3BhbixcclxuLmNhcmQgLmxpbmUtbGVmdCBzcGFuIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgb3dsLWNhcm91c2VsLW8ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcbn1cclxuIiwiLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbm93bC1jYXJvdXNlbC1vIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4udG9wLXByb2R1Y3QtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBTcGljeVJpY2U7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLnByb2R1Y3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcbiAgY29sb3I6ICM5ZjQxMDM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xuICBjb2xvcjogIzlmNDEwMztcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkOmhvdmVyIC5saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZCAubGluZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbn1cblxuLmNhcmQgLmxpbmUtdG9wIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG59XG5cbi5jYXJkIC5saW5lLXJpZ2h0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIC5saW5lLWJvdHRvbSB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbn1cblxuLmNhcmQgLmxpbmUtbGVmdCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQ6aG92ZXIgLmxpbmUtdG9wIHNwYW4ge1xuICBib3R0b206IGluaGVyaXQ7XG4gIGxlZnQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkOmhvdmVyIC5saW5lLXJpZ2h0IHNwYW4ge1xuICB0b3A6IGluaGVyaXQ7XG4gIGxlZnQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5jYXJkOmhvdmVyIC5saW5lLWJvdHRvbSBzcGFuIHtcbiAgcmlnaHQ6IGluaGVyaXQ7XG4gIHRvcDogaW5oZXJpdDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQ6aG92ZXIgLmxpbmUtbGVmdCBzcGFuIHtcbiAgYm90dG9tOiBpbmhlcml0O1xuICByaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbn1cblxuLmNhcmQgLmxpbmUtdG9wIHNwYW4sXG4uY2FyZCAubGluZS1ib3R0b20gc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCAubGluZS1yaWdodCBzcGFuLFxuLmNhcmQgLmxpbmUtbGVmdCBzcGFuIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG93bC1jYXJvdXNlbC1vIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, {
        pageTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/quick-view/quick-view.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/quick-view/quick-view.component.ts ***!
    \*********************************************************/

  /*! exports provided: QuickViewComponent */

  /***/
  function srcAppUserQuickViewQuickViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickViewComponent", function () {
      return QuickViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var QuickViewComponent = /*#__PURE__*/function () {
      function QuickViewComponent(changeRef, dialogRef, data) {
        _classCallCheck(this, QuickViewComponent);

        this.changeRef = changeRef;
        this.dialogRef = dialogRef;
        this.data = data;
        this.quantity = 1;
      }

      _createClass(QuickViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Quick view', this.data);
          this.id = this.data.id;
          this.title = this.data.title;
          this.description = this.data.description;
          this.effectivePrice = this.data.effectivePrice;
          this.originalPrice = this.data.originalPrice;
          this.total = this.effectivePrice ? this.effectivePrice : this.originalPrice;
          this.image = this.data.src;
          console.log('total::', this.total);
        }
      }, {
        key: "minusBtn",
        value: function minusBtn() {
          if (this.quantity > 1) {
            this.quantity--;
            this.total = this.total - this.effectivePrice;
            this.changeRef.detectChanges();
            console.log(this.quantity);
          }
        }
      }, {
        key: "plusBtn",
        value: function plusBtn() {
          this.quantity++;
          this.total = this.effectivePrice * this.quantity;
          this.changeRef.detectChanges();
          console.log(this.quantity);
        }
      }, {
        key: "onChangeQuantity",
        value: function onChangeQuantity() {
          this.total = this.effectivePrice * this.quantity;
          this.changeRef.detectChanges();
        }
      }]);

      return QuickViewComponent;
    }();

    QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) {
      return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    QuickViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuickViewComponent,
      selectors: [["app-quick-view"]],
      decls: 39,
      vars: 8,
      consts: [[1, "closeIcon", 3, "mat-dialog-close"], [1, "fas", "fa-times"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center"], [3, "src"], [1, "col-sm-6"], [1, "details"], [1, "title"], [1, "tr"], [1, "label"], [1, "price"], [1, "price", 2, "font-size", "18px", "color", "grey"], [1, "quantity"], ["type", "button", "name", "button", 1, "plus-btn", 2, "padding-right", "8px", "padding-left", "8px", 3, "click"], ["type", "text", "name", "quantity", 3, "ngModel", "change", "ngModelChange"], ["type", "button", "name", "button", 1, "minus-btn", 3, "click"], [1, "cms-type-3-btn"], [1, "btn", "mx-2", 2, "color", "black", "border", "2px solid #9f4103", "border-radius", "30px"], [1, "fas", "fa-cart-plus"]],
      template: function QuickViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Effective Price :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Quantity :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_button_click_25_listener() {
            return ctx.minusBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuickViewComponent_Template_input_change_27_listener() {
            return ctx.onChangeQuantity();
          })("ngModelChange", function QuickViewComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_button_click_28_listener() {
            return ctx.plusBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Subtotal :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Add to Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.effectivePrice ? "\u20B9 " + ctx.effectivePrice : ctx.originalPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.originalPrice ? "\u20B9 " + ctx.originalPrice : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.total, "");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".closeIcon[_ngcontent-%COMP%] {\n  float: right;\n  top: 0px;\n  font-size: large;\n  color: black;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.details[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 48px;\n  letter-spacing: 0.1em;\n  font-family: SpicyRice;\n  color: #9f4103;\n  margin-bottom: 5%;\n}\n\n.details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  margin-right: 60px;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  border: none;\n  text-align: center;\n  width: 32px;\n  font-size: 16px;\n  color: black;\n  font-weight: 300;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid #9f4103;\n  border-radius: 30px;\n  background-color: transparent;\n}\n\n.details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n.details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #f4b323;\n}\n\n.details[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%] {\n  border: 2px solid #f4b323;\n  padding: 0 15px;\n  margin: 0 0px 3px 0;\n  line-height: 35px;\n  cursor: pointer;\n  font-weight: bold !important;\n  color: #000;\n}\n\n.details[_ngcontent-%COMP%]   .avaiability[_ngcontent-%COMP%] {\n  color: #f4b323;\n}\n\n.cms-type-3-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n@media only screen and (max-width: 600px) {\n  .closeIcon[_ngcontent-%COMP%] {\n    float: right;\n    top: 0px;\n    font-size: larger;\n    color: black;\n  }\n\n  img[_ngcontent-%COMP%] {\n    height: 70%;\n    margin-top: 10%;\n  }\n\n  .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .details[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9xdWljay12aWV3L0U6XFxBbmd1bGFyIFByb2plY3RzXFxib21tdS1oZXJiYWxzLWRlbW8vc3JjXFxhcHBcXHVzZXJcXHF1aWNrLXZpZXdcXHF1aWNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcXVpY2stdmlldy9xdWljay12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURDSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1I7O0FERUk7RUFDSSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksYUFBQTtBQ0RSOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBREtJO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRE1JO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0pSOztBRE1JO0VBQ0kseUJBQUE7QUNKUjs7QURPSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMUjs7QURRSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDTlI7O0FEU0k7RUFDSSxjQUFBO0FDUFI7O0FEV0E7RUFDSSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsUUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ1JOOztFRFVFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUNQTjs7RURVTTtJQUNJLGVBQUE7RUNQVjtFRFNNO0lBQ0ksV0FBQTtFQ1BWO0VEU007SUFDSSxnQkFBQTtFQ1BWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3F1aWNrLXZpZXcvcXVpY2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZUljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgICAgICBjb2xvcjogIzlmNDEwMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IGlucHV0IHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IGJ1dHRvbntcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkICM5ZjQxMDM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLnF1YW50aXR5IGJ1dHRvbjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZjRiMzIzO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWlnaHQge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGIzMjM7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwcHggM3B4IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YWlhYmlsaXR5IHtcclxuICAgICAgICBjb2xvcjogI2Y0YjMyMztcclxuICAgIH1cclxufVxyXG5cclxuLmNtcy10eXBlLTMtYnRuIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2xvc2VJY29uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsc3tcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5kZXRhaWxzIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xuICBjb2xvcjogIzlmNDEwMztcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uZGV0YWlscyAubGFiZWwge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmRldGFpbHMgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmRldGFpbHMgLnF1YW50aXR5IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cbi5kZXRhaWxzIC5xdWFudGl0eSBpbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kZXRhaWxzIC5xdWFudGl0eSBidXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ZjQxMDM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRldGFpbHMgLnF1YW50aXR5IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGIzMjM7XG59XG4uZGV0YWlscyAucHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2Y0YjMyMztcbn1cbi5kZXRhaWxzIC53ZWlnaHQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjRiMzIzO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogMCAwcHggM3B4IDA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmRldGFpbHMgLmF2YWlhYmlsaXR5IHtcbiAgY29sb3I6ICNmNGIzMjM7XG59XG5cbi5jbXMtdHlwZS0zLWJ0biA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jbG9zZUljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuXG4gIC5kZXRhaWxzIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICB9XG4gIC5kZXRhaWxzIC5xdWFudGl0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRldGFpbHMgLmxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quick-view',
          templateUrl: './quick-view.component.html',
          styleUrls: ['./quick-view.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/services/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/services/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.productsInCart = [];
        this.browserRefresh = false;
        this.encryptSecretKey = 'bommuHerbalsSecretKeyForProductsInCart';
        this.sliders = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "all-sliders");
        this.topProducts = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "products/top-products");
        this.categories = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "categories");
        this.subCategories = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "sub-categories");
        this.addOrder = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "order");
        this.verify = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "verify");
        this.login = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "login");
        this.logout = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "logout");
        this.register = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "register");
        this.trackOrder = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "track-order/");
      }

      _createClass(UserService, [{
        key: "getSliders",
        value: function getSliders() {
          return this.http.get(this.sliders);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(this.categories);
        }
      }, {
        key: "getSubCategories",
        value: function getSubCategories() {
          return this.http.get(this.subCategories);
        }
      }, {
        key: "getProducts",
        value: function getProducts(url) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + url));
        }
      }, {
        key: "getOrderStatus",
        value: function getOrderStatus(orderId) {
          return this.http.get("".concat(this.trackOrder + orderId));
        }
      }, {
        key: "getProductDetails",
        value: function getProductDetails(url) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + url));
        }
      }, {
        key: "loginUser",
        value: function loginUser(body) {
          return this.http.post(this.login, body);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser(body) {
          return this.http.post(this.logout, body);
        }
      }, {
        key: "registerUser",
        value: function registerUser(body) {
          return this.http.post(this.register, body);
        }
      }, {
        key: "addOrderApi",
        value: function addOrderApi(body) {
          return this.http.post(this.addOrder, body);
        }
      }, {
        key: "paymentVerification",
        value: function paymentVerification(body) {
          return this.http.post(this.verify, body);
        }
      }, {
        key: "setFromCart",
        value: function setFromCart(products) {
          localStorage.setItem('products', crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(JSON.stringify(products), this.encryptSecretKey).toString());
        }
      }, {
        key: "setProductsInCart",
        value: function setProductsInCart(product) {
          var itemFromStorage = localStorage.getItem('products');

          if (itemFromStorage) {
            this.productsInCart = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(itemFromStorage, this.encryptSecretKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8));
          }

          var isProductPresent = this.productsInCart.find(function (element) {
            if (element.title === product.title) {
              element.quantity = element.quantity + 1;
              element.total = element.total + product.price;
            }

            return element.title === product.title;
          });

          if (!isProductPresent) {
            this.productsInCart.push(product);
          }

          localStorage.setItem('products', crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(JSON.stringify(this.productsInCart), this.encryptSecretKey).toString());
          console.log('Setter::', this.productsInCart);
        }
      }, {
        key: "getProductsInCart",
        value: function getProductsInCart() {
          var itemFromStorage = localStorage.getItem('products');

          if (itemFromStorage) {
            this.productsInCart = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(itemFromStorage, this.encryptSecretKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8));
          }

          console.log('Getter::', this.productsInCart);
          return this.productsInCart;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/signup-page/signup-page.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/signup-page/signup-page.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignupPageComponent */

  /***/
  function srcAppUserSignupPageSignupPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
      return SignupPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupPageComponent = /*#__PURE__*/function () {
      function SignupPageComponent(router, userService) {
        _classCallCheck(this, SignupPageComponent);

        this.router = router;
        this.userService = userService;
      }

      _createClass(SignupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this13 = this;

          var body = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phone: this.phone
          };
          this.userService.registerUser(body).subscribe(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (response.Data) {
                        this.router.navigate(['/login']);
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }]);

      return SignupPageComponent;
    }();

    SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) {
      return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupPageComponent,
      selectors: [["app-signup-page"]],
      decls: 41,
      vars: 5,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "my-5"], [1, "d-flex", "justify-content-center"], [1, "signupForm"], [1, "mb-3"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "placeholder", "Enter First Name", "name", "firstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "placeholder", "Enter Last Name", "name", "lastName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "placeholder", "Enter Your Email Address", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "placeholder", "Enter Password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone", 1, "form-label"], ["type", "tel", "maxlength", "10", "id", "phone", "placeholder", "Enter number without country code", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "click"], ["routerLink", "/login", 1, "form-label"]],
      template: function SignupPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Phone number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupPageComponent_Template_button_click_35_listener() {
            return ctx.registerUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Already have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phone);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  padding: 10px 50px;\n  border-radius: 30px;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.signupForm[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAtcGFnZS9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFxzaWdudXAtcGFnZVxcc2lnbnVwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJIZWFkZXIge1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpZ251cEZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufSIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2lnbnVwRm9ybSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signup-page',
          templateUrl: './signup-page.component.html',
          styleUrls: ['./signup-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/track-order/track-order.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/track-order/track-order.component.ts ***!
    \***********************************************************/

  /*! exports provided: TrackOrderComponent */

  /***/
  function srcAppUserTrackOrderTrackOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackOrderComponent", function () {
      return TrackOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TrackOrderComponent = /*#__PURE__*/function () {
      function TrackOrderComponent(userService) {
        _classCallCheck(this, TrackOrderComponent);

        this.userService = userService;
        this.orderStatus = null;
      }

      _createClass(TrackOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOrderStatus",
        value: function getOrderStatus() {
          var _this14 = this;

          this.userService.getOrderStatus(this.orderNumber).subscribe(function (response) {
            _this14.orderStatus = response.Data.orderStatus;
          });
        }
      }]);

      return TrackOrderComponent;
    }();

    TrackOrderComponent.ɵfac = function TrackOrderComponent_Factory(t) {
      return new (t || TrackOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    TrackOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrackOrderComponent,
      selectors: [["app-track-order"]],
      decls: 25,
      vars: 2,
      consts: [["aria-label", "breadcrumb"], [1, "breadcrumbHeader", "d-flex", "justify-content-center"], [1, "text-center", 2, "font-family", "SpicyRice", "color", "#9f4103"], [1, "breadcrumb", "text-center"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card"], [1, "card-body"], [1, "card-title", "text-center", "fs-1", "mb-5"], [1, "card-subtitle", "mb-2", "text-center", "fs-4"], ["appearance", "outline", 1, "form"], ["matInput", "", "type", "text", "name", "orderNumber", 3, "ngModel", "ngModelChange"], [1, "btn", "mx-2", "mt-3", 3, "click"], ["routerLink", "/", 1, "btn", "mx-2", "mt-3"]],
      template: function TrackOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Track Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Track your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Track Your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrackOrderComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.orderNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackOrderComponent_Template_button_click_21_listener() {
            return ctx.getOrderStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderStatus ? "Your order is in " + ctx.orderStatus + "." : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.orderNumber);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: [".breadcrumbHeader[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  background: #f4f4f4;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin: 0 auto;\n  float: none;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #9f4103;\n  font-family: SpicyRice;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #9f4103;\n  border-radius: 30px;\n  width: 100%;\n  height: 3rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4b323;\n}\n\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    width: 15rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFjay1vcmRlci9FOlxcQW5ndWxhciBQcm9qZWN0c1xcYm9tbXUtaGVyYmFscy1kZW1vL3NyY1xcYXBwXFx1c2VyXFx0cmFjay1vcmRlclxcdHJhY2stb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdHJhY2stb3JkZXIvdHJhY2stb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURBSTtFQUNJLFlBQUE7QUNFUjs7QUREUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtBQ0daOztBRERRO0VBQ0ksVUFBQTtBQ0daOztBREFRO0VBQ0ksV0FBQTtBQ0VaOztBRENRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NaOztBRENVO0VBQ0UseUJBQUE7QUNDWjs7QURJQTtFQUNJO0lBQ0ksWUFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYWNrLW9yZGVyL3RyYWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJIZWFkZXIge1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBjb2xvcjogIzlmNDEwMztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNwaWN5UmljZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojOWY0MTAzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YjMyMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxufSIsIi5icmVhZGNydW1iSGVhZGVyIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAyNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTAlO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjOWY0MTAzO1xuICBmb250LWZhbWlseTogU3BpY3lSaWNlO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZjQxMDM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMzIzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTVyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-track-order',
          templateUrl: './track-order.component.html',
          styleUrls: ['./track-order.component.scss']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/user/about-us/about-us.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/user/cart/cart.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/user/checkout/checkout.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/user/contact-us/contact-us.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/user/home-page/home-page.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/user/layout/layout.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/user/login-page/login-page.component.ts");
    /* harmony import */


    var _product_catelog_product_catelog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-catelog/product-catelog.component */
    "./src/app/user/product-catelog/product-catelog.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/user/product-detail/product-detail.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/user/product-list/product-list.component.ts");
    /* harmony import */


    var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./signup-page/signup-page.component */
    "./src/app/user/signup-page/signup-page.component.ts");
    /* harmony import */


    var _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./track-order/track-order.component */
    "./src/app/user/track-order/track-order.component.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
      children: [{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"]
      }, {
        path: 'products',
        component: _product_catelog_product_catelog_component__WEBPACK_IMPORTED_MODULE_9__["ProductCatelogComponent"],
        pathMatch: 'full'
      }, {
        path: 'products/:category',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
        pathMatch: 'full'
      }, {
        path: 'products/:category/:subCategory',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
        pathMatch: 'full'
      }, {
        path: 'products/:category/:subCategory/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"],
        pathMatch: 'full'
      }, // children: [
      //   {
      //     path: 'products/:category',
      //     component: ProductListComponent,
      //   },
      //   {
      //     path: 'products/:category/:subCategory',
      //     component: ProductListComponent,
      //   },
      //   {
      //     path: 'products/:category/:subCategory/:id',
      //     component: ProductDetailComponent,
      //   },
      // ],},
      {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
      }, {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"]
      }, {
        path: 'contact',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
      }, {
        path: 'track',
        component: _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_13__["TrackOrderComponent"]
      }, {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"]
      }, {
        path: 'register',
        component: _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_12__["SignupPageComponent"]
      }, {
        path: 'about',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
      }]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRoutingModule_Factory(t) {
        return new (t || UserRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/user/header/header.component.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/user/carousel/carousel.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/user/products/products.component.ts");
    /* harmony import */


    var _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parallax/parallax.component */
    "./src/app/user/parallax/parallax.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/user/login-page/login-page.component.ts");
    /* harmony import */


    var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup-page/signup-page.component */
    "./src/app/user/signup-page/signup-page.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/user/footer/footer.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/user/home-page/home-page.component.ts");
    /* harmony import */


    var _product_catelog_product_catelog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product-catelog/product-catelog.component */
    "./src/app/user/product-catelog/product-catelog.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/user/product-list/product-list.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/user/product-detail/product-detail.component.ts");
    /* harmony import */


    var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./quick-view/quick-view.component */
    "./src/app/user/quick-view/quick-view.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/user/cart/cart.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/user/checkout/checkout.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/user/contact-us/contact-us.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/user/grid/grid.component.ts");
    /* harmony import */


    var _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./track-order/track-order.component */
    "./src/app/user/track-order/track-order.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/user/about-us/about-us.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_popper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-popper */
    "./node_modules/ngx-popper/__ivy_ngcc__/fesm2015/ngx-popper.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/user/layout/layout.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_32__["UserService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_30__["UserRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], ngx_popper__WEBPACK_IMPORTED_MODULE_24__["NgxPopperModule"].forRoot({
        placement: 'bottom'
      }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_5__["ParallaxComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"], _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _product_catelog_product_catelog_component__WEBPACK_IMPORTED_MODULE_10__["ProductCatelogComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_13__["QuickViewComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"], _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_18__["TrackOrderComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_31__["LayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_30__["UserRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], ngx_popper__WEBPACK_IMPORTED_MODULE_24__["NgxPopperModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]],
        exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_31__["LayoutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_5__["ParallaxComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"], _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _product_catelog_product_catelog_component__WEBPACK_IMPORTED_MODULE_10__["ProductCatelogComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_13__["QuickViewComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"], _track_order_track_order_component__WEBPACK_IMPORTED_MODULE_18__["TrackOrderComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_31__["LayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_30__["UserRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], ngx_popper__WEBPACK_IMPORTED_MODULE_24__["NgxPopperModule"].forRoot({
            placement: 'bottom'
          }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"]],
          exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_31__["LayoutComponent"]],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_32__["UserService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // api: 'http://localhost:3000/',
      api: 'https://tcs-bommu-herbals.herokuapp.com/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Angular Projects\bommu-herbals-demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map