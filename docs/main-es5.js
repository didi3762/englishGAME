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
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/mainboard/mainboard.component */
    "./src/app/comps/mainboard/mainboard.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'memoriGame';
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mainboard");
        }
      },
      directives: [_comps_mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_1__["MainboardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/result/result.component */
    "./src/app/comps/result/result.component.ts");
    /* harmony import */


    var _comps_board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/board/board.component */
    "./src/app/comps/board/board.component.ts");
    /* harmony import */


    var _comps_mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/mainboard/mainboard.component */
    "./src/app/comps/mainboard/mainboard.component.ts");
    /* harmony import */


    var _comps_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/header/header.component */
    "./src/app/comps/header/header.component.ts");
    /* harmony import */


    var _directives_random_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./directives/random.directive */
    "./src/app/directives/random.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"], _comps_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _comps_mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_5__["MainboardComponent"], _comps_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_7__["RandomDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"], _comps_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _comps_mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_5__["MainboardComponent"], _comps_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_7__["RandomDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/board/board.component.ts":
  /*!************************************************!*\
    !*** ./src/app/comps/board/board.component.ts ***!
    \************************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppCompsBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.wordHeb = '';
        this.wordRand = '';
        this.englishWords = ['red', 'day', 'sky', 'week', 'flower', 'sun', 'moon', 'bread', 'color', 'wine'];
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)();
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["board"]],
      inputs: {
        wordHeb: "wordHeb",
        wordRand: "wordRand",
        arrLange: "arrLange"
      },
      decls: 4,
      vars: 1,
      consts: [["id", "design"], ["id", "rotatedBorder"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wordHeb);
        }
      },
      styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 150px; height: 150px;\r\n    margin: auto; margin-top: 100px; \r\n    text-align: center;   \r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 15px violet solid;\r\n    \r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQixFQUFFLFlBQVksRUFBRSxhQUFhO0lBQy9DLFlBQVksRUFBRSxpQkFBaUI7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsb0RBQW9EO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXNpZ24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87IG1hcmdpbi10b3A6IDEwMHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxufVxyXG5cclxuI3JvdGF0ZWRCb3JkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgYm9yZGVyOiAxNXB4IHZpb2xldCBzb2xpZDtcclxuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlYjMxMWYsIGluc2V0IDAgMCAyMHB4ICNlYjMxMWY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.css']
        }]
      }], function () {
        return [];
      }, {
        wordHeb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wordRand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrLange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/header/header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/comps/header/header.component.ts ***!
    \**************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCompsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.wordEng = "ssss";
        this.wordsArr = ["אדום", "פרח", "שמש", "ירח", "שבוע", "צבע", "שמיים", "יין", "לחם", "יום"];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["header"]],
      inputs: {
        wordEng: "wordEng"
      },
      decls: 4,
      vars: 1,
      consts: [["id", "design"], ["id", "rotatedBorder"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wordEng);
        }
      },
      styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 300px; height: 50px;\r\n    margin: auto; margin-top: 100px;    \r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 5px gray solid;\r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVk7SUFDOUMsWUFBWSxFQUFFLGlCQUFpQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0RBQW9EO0lBQ3BELGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXNpZ24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMzAwcHg7IGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTAwcHg7ICAgIFxyXG59XHJcblxyXG4jcm90YXRlZEJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBib3JkZXI6IDVweCBncmF5IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ViMzExZiwgaW5zZXQgMCAwIDIwcHggI2ViMzExZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        wordEng: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/mainboard/mainboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/comps/mainboard/mainboard.component.ts ***!
    \********************************************************/

  /*! exports provided: MainboardComponent */

  /***/
  function srcAppCompsMainboardMainboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainboardComponent", function () {
      return MainboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/comps/header/header.component.ts");
    /* harmony import */


    var _directives_random_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/random.directive */
    "./src/app/directives/random.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../result/result.component */
    "./src/app/comps/result/result.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../board/board.component */
    "./src/app/comps/board/board.component.ts");

    function MainboardComponent_board_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "board", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getRand", function MainboardComponent_board_3_Template_board_getRand_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.addRand($event);
        })("getWord", function MainboardComponent_board_3_Template_board_getWord_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.word = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrLange", ctx_r0.englishWords.length)("wordHeb", x_r1);
      }
    }

    var MainboardComponent = /*#__PURE__*/function () {
      function MainboardComponent() {
        _classCallCheck(this, MainboardComponent);

        this.word = '';
        this.wordEngM = '';
        this.resTexM = 'sss';
        this.sum = 0;
        this.wordsArr = ['', '', '', ''];
        this.HebWords = ["אדום", "יום", "שמיים", "שבוע", "פרח", "שמש", "ירח", "לחם", "צבע", "יין"];
        this.englishWords = ['red', 'day', 'sky', 'week', 'flower', 'sun', 'moon', 'bread', 'color', 'wine'];
      }

      _createClass(MainboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addRand",
        value: function addRand(event) {
          var HebIndex = this.HebWords.indexOf(this.word);
          var engIndex = this.englishWords.indexOf(this.wordEngM);

          if (HebIndex == engIndex) {
            this.sum++;
          } else {
            this.sum--;
          }

          console.log(event, this.wordsArr, this.wordEngM, this.word, HebIndex, engIndex);
          this.wordEngM = this.englishWords[event[0]];
          this.wordsArr[0] = this.HebWords[event[1]];
          this.wordsArr[1] = this.HebWords[event[2]];
          this.wordsArr[2] = this.HebWords[event[3]];
          this.wordsArr[3] = this.HebWords[event[4]];
          this.wordsArr[event[5]] = this.HebWords[event[0]];
          this.resTexM = this.sum.toString();
        }
      }]);

      return MainboardComponent;
    }();

    MainboardComponent.ɵfac = function MainboardComponent_Factory(t) {
      return new (t || MainboardComponent)();
    };

    MainboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainboardComponent,
      selectors: [["mainboard"]],
      decls: 5,
      vars: 4,
      consts: [[1, "home"], ["Random", "", 3, "arrLange", "wordEng", "getRandInit", "getRand"], [1, "board"], ["Random", "", 3, "arrLange", "wordHeb", "getRand", "getWord", 4, "ngFor", "ngForOf"], ["Random", "", 3, "resTex"], ["Random", "", 3, "arrLange", "wordHeb", "getRand", "getWord"]],
      template: function MainboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getRandInit", function MainboardComponent_Template_header_getRandInit_1_listener($event) {
            return ctx.addRand($event);
          })("getRand", function MainboardComponent_Template_header_getRand_1_listener($event) {
            return ctx.addRand($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainboardComponent_board_3_Template, 1, 2, "board", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "result", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrLange", ctx.englishWords.length)("wordEng", ctx.wordEngM);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wordsArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resTex", ctx.resTexM);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_2__["RandomDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"]],
      styles: [".home[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.board[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbWFpbmJvYXJkL21haW5ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9tYWluYm9hcmQvbWFpbmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm9hcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mainboard',
          templateUrl: './mainboard.component.html',
          styleUrls: ['./mainboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/result/result.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/comps/result/result.component.ts ***!
    \**************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppCompsResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent() {
        _classCallCheck(this, ResultComponent);
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)();
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["result"]],
      inputs: {
        resTex: "resTex"
      },
      decls: 4,
      vars: 1,
      consts: [["id", "design"], ["id", "rotatedBorder"], ["id", "sum"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resTex);
        }
      },
      styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 80px; height: 80px;\r\n    margin: auto; margin-top: 100px; \r\n    text-align: center;   \r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n    position: absolute; \r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 5px goldenrod solid;\r\n    border-radius: 50px;\r\n    box-shadow: 0 0 10px #ebe81f, inset 0 0 20px #ebe81f;\r\n    display: flex;\r\n}\r\n\r\n#sum[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVk7SUFDN0MsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVzaWduIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTAwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG59XHJcblxyXG4jcm90YXRlZEJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBib3JkZXI6IDVweCBnb2xkZW5yb2Qgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ViZTgxZiwgaW5zZXQgMCAwIDIwcHggI2ViZTgxZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNzdW17XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBicm93bjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.css']
        }]
      }], function () {
        return [];
      }, {
        resTex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/random.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/directives/random.directive.ts ***!
    \************************************************/

  /*! exports provided: RandomDirective */

  /***/
  function srcAppDirectivesRandomDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RandomDirective", function () {
      return RandomDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RandomDirective = /*#__PURE__*/function () {
      function RandomDirective(elRef) {
        _classCallCheck(this, RandomDirective);

        this.elRef = elRef;
        this.sum = 0;
        this.wordHeb = '';
        this.getWord = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRandInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randArr = [1, 2, 3, 4, 5, 6];
        this.el = elRef.nativeElement;
      }

      _createClass(RandomDirective, [{
        key: "rnd",
        value: function rnd() {
          console.log('clicked');
          this.rand();
          this.getWord.emit(this.wordHeb);
          this.getRand.emit(this.randArr);
        }
      }, {
        key: "rand",
        value: function rand() {
          for (var i = 0; i < this.randArr.length; i++) {
            var rand = Math.floor(Math.random() * Math.floor(this.arrLange));
            this.randArr[i] = rand;
          }

          var rand4 = Math.floor(Math.random() * Math.floor(4));
          this.randArr[5] = rand4;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rand();
          this.getRandInit.emit(this.randArr);
        }
      }]);

      return RandomDirective;
    }();

    RandomDirective.ɵfac = function RandomDirective_Factory(t) {
      return new (t || RandomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    RandomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RandomDirective,
      selectors: [["", "Random", ""]],
      hostBindings: function RandomDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomDirective_click_HostBindingHandler() {
            return ctx.rnd();
          });
        }
      },
      inputs: {
        wordHeb: "wordHeb",
        arrLange: "arrLange"
      },
      outputs: {
        getWord: "getWord",
        getRandInit: "getRandInit",
        getRand: "getRand"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[Random]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        wordHeb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrLange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getWord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        getRandInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        getRand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
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
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

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
    /*! C:\englishGAME\englishGAME\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map