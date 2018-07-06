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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voter_list_voter_list_component__ = __webpack_require__("./src/app/components/voter-list/voter-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_candidate_list_candidate_list_component__ = __webpack_require__("./src/app/components/candidate-list/candidate-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_canvassing_report_canvassing_report_component__ = __webpack_require__("./src/app/components/canvassing-report/canvassing-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_vote_page_vote_page_component__ = __webpack_require__("./src/app/components/vote-page/vote-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_validate_voter_validate_voter_component__ = __webpack_require__("./src/app/components/validate-voter/validate-voter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_vice_president_vice_president_component__ = __webpack_require__("./src/app/components/vice-president/vice-president.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_general_secretary_general_secretary_component__ = __webpack_require__("./src/app/components/general-secretary/general-secretary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_teasurer_teasurer_component__ = __webpack_require__("./src/app/components/teasurer/teasurer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_member_member_component__ = __webpack_require__("./src/app/components/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_joint_secretary_joint_secretary_component__ = __webpack_require__("./src/app/components/joint-secretary/joint-secretary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_candidate_add_candidate_component__ = __webpack_require__("./src/app/components/add-candidate/add-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_add_voter_add_voter_component__ = __webpack_require__("./src/app/components/add-voter/add-voter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_photo_upload_photo_upload_component__ = __webpack_require__("./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_photo_upload_candidate_photo_upload_candidate_component__ = __webpack_require__("./src/app/components/photo-upload-candidate/photo-upload-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_update_candidate_update_candidate_component__ = __webpack_require__("./src/app/components/update-candidate/update-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_view_candidate_view_candidate_component__ = __webpack_require__("./src/app/components/view-candidate/view-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_view_candidate2_view_candidate2_component__ = __webpack_require__("./src/app/components/view-candidate2/view-candidate2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_view_candidate3_view_candidate3_component__ = __webpack_require__("./src/app/components/view-candidate3/view-candidate3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_result_result_component__ = __webpack_require__("./src/app/components/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'voter-list', component: __WEBPACK_IMPORTED_MODULE_6__components_voter_list_voter_list_component__["a" /* VoterListComponent */] },
    { path: 'candidate-list', component: __WEBPACK_IMPORTED_MODULE_7__components_candidate_list_candidate_list_component__["a" /* CandidateListComponent */] },
    { path: 'canvassing-report', component: __WEBPACK_IMPORTED_MODULE_8__components_canvassing_report_canvassing_report_component__["a" /* CanvassingReportComponent */] },
    { path: 'vote-page', component: __WEBPACK_IMPORTED_MODULE_9__components_vote_page_vote_page_component__["a" /* VotePageComponent */] },
    { path: 'validate-voter', component: __WEBPACK_IMPORTED_MODULE_10__components_validate_voter_validate_voter_component__["a" /* ValidateVoterComponent */] },
    { path: 'vice-president', component: __WEBPACK_IMPORTED_MODULE_11__components_vice_president_vice_president_component__["a" /* VicePresidentComponent */] },
    { path: 'general-secretary', component: __WEBPACK_IMPORTED_MODULE_12__components_general_secretary_general_secretary_component__["a" /* GeneralSecretaryComponent */] },
    { path: 'treasurer', component: __WEBPACK_IMPORTED_MODULE_13__components_teasurer_teasurer_component__["a" /* TeasurerComponent */] },
    { path: 'member', component: __WEBPACK_IMPORTED_MODULE_14__components_member_member_component__["a" /* MemberComponent */] },
    { path: 'joint-secretary', component: __WEBPACK_IMPORTED_MODULE_15__components_joint_secretary_joint_secretary_component__["a" /* JointSecretaryComponent */] },
    { path: 'add-candidate', component: __WEBPACK_IMPORTED_MODULE_16__components_add_candidate_add_candidate_component__["a" /* AddCandidateComponent */] },
    { path: 'add-voter', component: __WEBPACK_IMPORTED_MODULE_17__components_add_voter_add_voter_component__["a" /* AddVoterComponent */] },
    { path: 'photo-upload/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */] },
    { path: 'photo-upload-candidate/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_photo_upload_candidate_photo_upload_candidate_component__["a" /* PhotoUploadCandidateComponent */] },
    { path: 'update-candidate/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_update_candidate_update_candidate_component__["a" /* UpdateCandidateComponent */] },
    { path: 'view-candidate/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_view_candidate_view_candidate_component__["a" /* ViewCandidateComponent */] },
    { path: 'view-candidate2/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_view_candidate2_view_candidate2_component__["a" /* ViewCandidate2Component */] },
    { path: 'view-candidate3/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_view_candidate3_view_candidate3_component__["a" /* ViewCandidate3Component */] },
    { path: 'canvassing-report', component: __WEBPACK_IMPORTED_MODULE_8__components_canvassing_report_canvassing_report_component__["a" /* CanvassingReportComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_24__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_25__components_result_result_component__["a" /* ResultComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-title></app-title>-->\r\n<!--<app-navigation></app-navigation>-->\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_title_title_component__ = __webpack_require__("./src/app/components/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_password_validation_service__ = __webpack_require__("./src/app/services/password-validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_inner_navbar_inner_navbar_component__ = __webpack_require__("./src/app/components/inner-navbar/inner-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_voter_list_voter_list_component__ = __webpack_require__("./src/app/components/voter-list/voter-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_candidate_list_candidate_list_component__ = __webpack_require__("./src/app/components/candidate-list/candidate-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_canvassing_report_canvassing_report_component__ = __webpack_require__("./src/app/components/canvassing-report/canvassing-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_vote_page_vote_page_component__ = __webpack_require__("./src/app/components/vote-page/vote-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_validate_voter_validate_voter_component__ = __webpack_require__("./src/app/components/validate-voter/validate-voter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_vice_president_vice_president_component__ = __webpack_require__("./src/app/components/vice-president/vice-president.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_general_secretary_general_secretary_component__ = __webpack_require__("./src/app/components/general-secretary/general-secretary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_joint_secretary_joint_secretary_component__ = __webpack_require__("./src/app/components/joint-secretary/joint-secretary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_teasurer_teasurer_component__ = __webpack_require__("./src/app/components/teasurer/teasurer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_member_member_component__ = __webpack_require__("./src/app/components/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_add_candidate_add_candidate_component__ = __webpack_require__("./src/app/components/add-candidate/add-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_add_voter_add_voter_component__ = __webpack_require__("./src/app/components/add-voter/add-voter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_photo_upload_photo_upload_component__ = __webpack_require__("./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_photo_upload_candidate_photo_upload_candidate_component__ = __webpack_require__("./src/app/components/photo-upload-candidate/photo-upload-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_update_candidate_update_candidate_component__ = __webpack_require__("./src/app/components/update-candidate/update-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_view_candidate_view_candidate_component__ = __webpack_require__("./src/app/components/view-candidate/view-candidate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_view_candidate2_view_candidate2_component__ = __webpack_require__("./src/app/components/view-candidate2/view-candidate2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_view_candidate3_view_candidate3_component__ = __webpack_require__("./src/app/components/view-candidate3/view-candidate3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_vote_publish_service__ = __webpack_require__("./src/app/services/vote-publish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_result_result_component__ = __webpack_require__("./src/app/components/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_inner_navbar_inner_navbar_component__["a" /* InnerNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_voter_list_voter_list_component__["a" /* VoterListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_candidate_list_candidate_list_component__["a" /* CandidateListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_canvassing_report_canvassing_report_component__["a" /* CanvassingReportComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_vote_page_vote_page_component__["a" /* VotePageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_validate_voter_validate_voter_component__["a" /* ValidateVoterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_vice_president_vice_president_component__["a" /* VicePresidentComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_general_secretary_general_secretary_component__["a" /* GeneralSecretaryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_joint_secretary_joint_secretary_component__["a" /* JointSecretaryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_teasurer_teasurer_component__["a" /* TeasurerComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_add_candidate_add_candidate_component__["a" /* AddCandidateComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_add_voter_add_voter_component__["a" /* AddVoterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_photo_upload_candidate_photo_upload_candidate_component__["a" /* PhotoUploadCandidateComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_update_candidate_update_candidate_component__["a" /* UpdateCandidateComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_view_candidate_view_candidate_component__["a" /* ViewCandidateComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_view_candidate2_view_candidate2_component__["a" /* ViewCandidate2Component */],
                __WEBPACK_IMPORTED_MODULE_35__components_view_candidate3_view_candidate3_component__["a" /* ViewCandidate3Component */],
                __WEBPACK_IMPORTED_MODULE_37__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_36_ng2_carouselamos__["a" /* Ng2CarouselamosModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
                __WEBPACK_IMPORTED_MODULE_11__services_voter_service__["a" /* VoterService */],
                __WEBPACK_IMPORTED_MODULE_12__services_password_validation_service__["a" /* PasswordValidationService */],
                __WEBPACK_IMPORTED_MODULE_13__services_candidate_service__["a" /* CandidateService */],
                __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_38__services_vote_publish_service__["a" /* VotePublishService */],
                __WEBPACK_IMPORTED_MODULE_40__services_admin_service__["a" /* AdminService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".mission {\r\n  float: right;\r\n  /*float: top;*/\r\n  border-radius: 25px;\r\n  border: 5px solid rgba(20,20,20,0.6);\r\n  padding: 15px;\r\n  /*width: 350px;*/\r\n  margin-top: 20px;\r\n}\r\n\r\n.mission1 {\r\n  width: 100%;\r\n}\r\n\r\n.home-title {\r\n  font-size: 130%;\r\n  background-color: rgb(200,200,200);\r\n  padding: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n.home_description {\r\n  font-size: 120%;\r\n  margin-left: 2%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar xmlns=\"\"></app-navbar>\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"home\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li class=\"active\"><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n  <div class=\"mission1 mission\">\r\n    <div class=\"home-title\">\r\n      About this platform\r\n    </div>\r\n    <div class=\"home_description\">\r\n      <b>E-voting</b> system is designed to enable Electoral\r\n      Authority of the teachers to use capture (teachers) voter’s information.\r\n      The design cover security issues like authenticating\r\n      the ID number and Password of the voters (teachers) through integrating\r\n      the ID and password database to the voters’ registration process\r\n      and also capturing the picture of the electorates for validation during election.\r\n      The project covers all common electoral supports/functionality to voter\r\n      and authority.<br>\r\n      This surely increases the voting percentage in university. E-Voting System\r\n      will be fast enough to calculate the results and reduce the human efforts,\r\n      as all the things will be automated.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"mission1 mission\">\r\n    <div class=\"home-title\">\r\n      Contact Us\r\n    </div>\r\n    <div class=\"home_description\"><br>\r\n      <i class=\"fas fa-phone\"></i>&nbsp;&nbsp; Tel - <b>880 721 750244 </b><br>\r\n      <i class=\"fa fa-fax\"></i>&nbsp;&nbsp; Fax - <b>880 721 750064 </b><br>\r\n      <i class=\"fas fa-envelope\"></i>&nbsp;&nbsp; Email - <b>registrar@ru.ac.bd</b><br>\r\n      <i class=\"fa fa-globe\"></i>&nbsp;&nbsp; Web - <a href=\"http://www.ru.ac.bd/\"  target=\"_blank\"><b>ru.ac.bd</b></a><br>\r\n      <i class=\"fa fa-map-marker\"></i>&nbsp;&nbsp; Address: <b>Rajshahi - Dhaka Highway, Rajshahi 6205</b><br>\r\n      <b>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;University of Rajshahi, Bangladesh</b>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.published = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
    };
    AboutComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    AboutComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    AboutComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/add-candidate/add-candidate.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-candidate/add-candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div style=\" margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Add Candidate</div>\r\n      </div>\r\n\r\n      <div class=\"panel-body\" >\r\n        <form (submit)=\"registerCandidate()\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"col-md-3 control-label\">First Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"firstName\" class=\"form-control\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Middle Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"middleName\" class=\"form-control\" name=\"middleName\" id=\"middleName\" placeholder=\"Middle Name\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Last Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"lastName\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Postion</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"position\" class=\"form-control\" name=\"position\" id=\"position\" placeholder=\"Position\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"dept\" class=\"col-md-3 control-label\">Department</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"dept\" class=\"form-control\" name=\"dept\" id=\"dept\" placeholder=\"Department\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"degree\" class=\"col-md-3 control-label\">Status</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"degree\" class=\"form-control\" name=\"degree\" id=\"degree\" placeholder=\"degree\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"party\" class=\"col-md-3 control-label\">Party</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"party\" class=\"form-control\" name=\"party\" id=\"party\" placeholder=\"Party\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"col-md-3 control-label\">User Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"User Name\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"col-md-3 control-label\">Password</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <!-- Button -->\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button style=\"text-align: center\" id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\">\r\n                <i class=\"icon-hand-right\"></i>Add Candidate\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-candidate/add-candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCandidateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCandidateComponent = /** @class */ (function () {
    function AddCandidateComponent(candidateService, location, router) {
        this.candidateService = candidateService;
        this.location = location;
        this.router = router;
        this.candidate = new __WEBPACK_IMPORTED_MODULE_2__models_candidate__["a" /* Candidate */]();
        this.total_vote = 0;
    }
    AddCandidateComponent.prototype.ngOnInit = function () {
    };
    AddCandidateComponent.prototype.registerCandidate = function () {
        var _this = this;
        this.candidate.firstName = this.firstName;
        this.candidate.middleName = this.middleName;
        this.candidate.lastName = this.lastName;
        this.candidate.position = this.position;
        this.candidate.dept = this.dept;
        this.candidate.email = this.email;
        this.candidate.username = this.username;
        this.candidate.password = this.password;
        this.candidate.party = this.party;
        this.candidate.degree = this.degree;
        this.candidate.total_vote = this.total_vote;
        console.log(this.candidate);
        this.candidateService.registerCandidate(this.candidate)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(["photo-upload-candidate/" + res.data._id]);
        });
    };
    AddCandidateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-candidate',
            template: __webpack_require__("./src/app/components/add-candidate/add-candidate.component.html"),
            styles: [__webpack_require__("./src/app/components/add-candidate/add-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], AddCandidateComponent);
    return AddCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/add-voter/add-voter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-voter/add-voter.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div style=\" margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Add Voter</div>\r\n      </div>\r\n      <div class=\"panel-body\" >\r\n        <form (submit)=\"registerVoter()\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"col-md-3 control-label\">First Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"firstName\" class=\"form-control\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Middle Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"middleName\" class=\"form-control\" name=\"middleName\" id=\"middleName\" placeholder=\"Middle Name\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Last Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"lastName\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"dept\" class=\"col-md-3 control-label\">Department</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"dept\" class=\"form-control\" name=\"dept\" id=\"dept\" placeholder=\"Department\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"dept\" class=\"col-md-3 control-label\">Email</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"col-md-3 control-label\">User Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"username\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"col-md-3 control-label\">Password</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <!-- Button -->\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button style=\"text-align: center\" id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i>Add Voter</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-voter/add-voter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVoterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVoterComponent = /** @class */ (function () {
    function AddVoterComponent(voterService, location, router) {
        this.voterService = voterService;
        this.location = location;
        this.router = router;
        this.voter = new __WEBPACK_IMPORTED_MODULE_1__models_voter__["a" /* Voter */]();
    }
    AddVoterComponent.prototype.ngOnInit = function () {
    };
    AddVoterComponent.prototype.registerVoter = function () {
        var _this = this;
        this.voter.firstName = this.firstName,
            this.voter.middleName = this.middleName,
            this.voter.lastName = this.lastName,
            this.voter.dept = this.dept,
            this.voter.email = this.email,
            this.voter.username = this.username,
            this.voter.password = this.password;
        this.voterService.registerVoter(this.voter)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(["/photo-upload/" + res.data._id]);
        });
    };
    AddVoterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-voter',
            template: __webpack_require__("./src/app/components/add-voter/add-voter.component.html"),
            styles: [__webpack_require__("./src/app/components/add-voter/add-voter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_voter_service__["a" /* VoterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], AddVoterComponent);
    return AddVoterComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n\r\n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\" style=\"font-size: 130%\"><b>Admin</b> Sign In</div>\r\n      </div>\r\n\r\n      <div style=\"padding-top:30px\" class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n            <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\"  placeholder=\"Admin Email\">\r\n          </div>\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password2\"  placeholder=\"Admin Password\">\r\n          </div>\r\n\r\n          <div style=\"margin-top:10px\" class=\"form-group\">\r\n            <div class=\"col-sm-12 controls\">\r\n              <a id=\"btn-login\" (click)=\"onLoginSubmit()\" class=\"btn btn-success\">Login</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    // username = new FormControl('', [Validators.required]);
    // password = new FormControl('', [Validators.required]);
    function AdminComponent(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.published = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.loginForm = this.formBuilder.group({});
    };
    AdminComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        console.log(user);
        this.authService.authenticateAdmin(user).subscribe(function (res) {
            console.log(user);
            if (res.success) {
                // console.log(res.data.isAdmin);
                localStorage.setItem('isAdmin', res.data.isAdmin);
                localStorage.setItem('loginId', res.data._id);
                localStorage.setItem('status', res.data.status);
                console.log(res.data);
                // if(res.data.isPublished){
                //   localStorage.setItem('published', 'true');
                // }
                _this.authService.storeUserDatta(res.token, res.data);
                // this._flashMessagesService.show('You are now Logged In!', { cssClass: 'alert-success' } );
                _this.router.navigate(['/home']);
            }
            else {
                // this._flashMessagesService.show('Email or Password do not match', { cssClass: 'alert-danger' } );
                _this.router.navigate(['/admin']);
            }
        });
    };
    AdminComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    AdminComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/candidate-list/candidate-list.component.css":
/***/ (function(module, exports) {

module.exports = "th{\r\n  text-align: center;\r\n}\r\ntd{\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-size: 120%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/candidate-list/candidate-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <app-inner-navbar></app-inner-navbar>\r\n  <div style=\"margin-left: -1px\" id=\"loginbox\" style=\"margin-top:10px;\" class=\"mainbox col-md-12 col-sm-8\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n            <button (click)=\"ngOnInit()\" type=\"button\" class=\"btn btn-default\">All</button>\r\n            <button (click)=\"president()\" type=\"button\" class=\"btn btn-default\">President</button>\r\n            <button (click)=\"vice_president()\" type=\"button\" class=\"btn btn-default\">Vice President</button>\r\n            <button (click)=\"members()\" type=\"button\" class=\"btn btn-default\"><span style=\"padding: 9px\">Members</span></button>\r\n            <button (click)=\"general_secretary()\" type=\"button\" class=\"btn btn-default\">General Secretary</button>\r\n            <button (click)=\"joint_secretary()\" type=\"button\" class=\"btn btn-default\">Joint Secretary</button>\r\n            <button (click)=\"treasurer()\" type=\"button\" class=\"btn btn-default\">Treasurer</button>\r\n          </div>\r\n\r\n        </div>\r\n        <button *ngIf=\"authService.isAdmin()\" (click)=\"registerCandidate()\" style=\"margin-top: 5px\" class=\"btn btn-default\"><i class=\"fas fa-plus\"></i> Add Candidates</button>\r\n      </div>\r\n\r\n      <div class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n\r\n        <nav class=\"navbar navbar-default\">\r\n\r\n          <form class=\"navbar-form navbar-left\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#\">Items Per Page</a></li>\r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Default<span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\">5</a></li>\r\n                    <li><a href=\"#\">10</a></li>\r\n                    <li><a href=\"#\">15</a></li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </form>\r\n\r\n          <form class=\"navbar-form navbar-right\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <input style=\"margin-right: 5px\" type=\"text\" class=\"form-control\" placeholder=\"Search Here\">\r\n            </div>\r\n          </form>\r\n        </nav>\r\n\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr style=\"background-color: #f2f2f8\">\r\n              <th>Position</th>\r\n              <th>Firstname</th>\r\n              <th>Lastname</th>\r\n              <th>Dept</th>\r\n              <th>Party</th>\r\n              <th>Photo</th>\r\n              <th style=\"text-align: center\">Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let candidate of candidates\">\r\n            <tr>\r\n              <td>{{candidate.position}}</td>\r\n              <td>{{candidate.firstName}}</td>\r\n              <td>{{candidate.lastName}}</td>\r\n              <td>{{candidate.dept}}</td>\r\n              <td>{{candidate.party}}</td>\r\n              <td><img src=\"{{candidate.picture}}\" height=\"50px\" width=\"50px\" alt=\"no photo\"></td>\r\n              <td style=\"text-align: center\">\r\n                <button *ngIf=\"authService.isAdmin()\" (click)=\"updateCandidate(candidate)\" class=\"btn btn-primary\"><i class=\"far fa-edit\"></i></button>\r\n                <button (click)=\"viewCandidate(candidate)\"  class=\"btn btn-info\"><i class=\"fas fa-eye\"></i> View</button>\r\n                <button  *ngIf=\"authService.isAdmin()\" (click)=\"deleteCandidate(candidate)\" class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/candidate-list/candidate-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateListComponent = /** @class */ (function () {
    function CandidateListComponent(candidateService, router, authService) {
        this.candidateService = candidateService;
        this.router = router;
        this.authService = authService;
        this.newCandidates = [];
        this.published = false;
        this.candidates = new Array();
        this.temp_candidates = new Array();
    }
    CandidateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.candidateService.getCandidate()
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
        });
    };
    CandidateListComponent.prototype.registerCandidate = function () {
        this.router.navigate(['add-candidate']);
    };
    CandidateListComponent.prototype.updateCandidate = function (candidate) {
        this.router.navigate(["update-candidate/" + candidate._id]);
    };
    // deleteCandidate(candidate){
    //   this.candidateService.deleteCandidate(candidate._id)
    //     .subscribe(res=>{
    //       console.log(res.data);
    //     })
    // }
    CandidateListComponent.prototype.deleteCandidate = function (candidate) {
        var r = confirm("Are you sure!");
        if (r == true) {
            this.candidates.splice(this.candidates.indexOf(candidate), 1);
            this.candidateService.deleteCandidate(candidate._id)
                .subscribe(function (res) {
            });
        }
        else {
            // this.toasterService.Warning("You have cancelled deletion!!");
        }
    };
    CandidateListComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate/" + candidate._id]);
    };
    CandidateListComponent.prototype.president = function () {
        var _this = this;
        this.searchKey = "President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            var j = 0;
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].position == "President") {
                    _this.temp_candidates[j] = res.data[i];
                    j++;
                }
            }
            _this.candidates = _this.temp_candidates;
            console.log(_this.temp_candidates);
            // console.log(this.candidates);
        });
    };
    CandidateListComponent.prototype.vice_president = function () {
        var _this = this;
        this.searchKey = "Vice President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
        });
    };
    CandidateListComponent.prototype.members = function () {
        var _this = this;
        this.searchKey = "Member";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
        });
    };
    CandidateListComponent.prototype.general_secretary = function () {
        var _this = this;
        this.searchKey = "General Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
        });
    };
    CandidateListComponent.prototype.joint_secretary = function () {
        var _this = this;
        this.searchKey = "Joint Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
        });
    };
    CandidateListComponent.prototype.treasurer = function () {
        var _this = this;
        this.searchKey = "Treasurer";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
        });
    };
    CandidateListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-candidate-list',
            template: __webpack_require__("./src/app/components/candidate-list/candidate-list.component.html"),
            styles: [__webpack_require__("./src/app/components/candidate-list/candidate-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], CandidateListComponent);
    return CandidateListComponent;
}());



/***/ }),

/***/ "./src/app/components/canvassing-report/canvassing-report.component.css":
/***/ (function(module, exports) {

module.exports = "th{\r\n  text-align: center;\r\n}\r\ntd{\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-size: 120%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/canvassing-report/canvassing-report.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <!--inner navbar starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li class=\"active\" *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--inner navbar ends here-->\r\n\r\n  <div style=\"margin-left: -1px\" id=\"loginbox\" style=\"margin-top:10px;\" class=\"mainbox col-md-12 col-sm-12\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n            <button (click)=\"ngOnInit()\" type=\"button\" class=\"btn btn-default\">All</button>\r\n            <button (click)=\"president()\" type=\"button\" class=\"btn btn-default\">President</button>\r\n            <button (click)=\"vice_president()\" type=\"button\" class=\"btn btn-default\">Vice President</button>\r\n            <button (click)=\"members()\" type=\"button\" class=\"btn btn-default\"><span style=\"padding: 9px\">Members</span></button>\r\n            <button (click)=\"general_secretary()\" type=\"button\" class=\"btn btn-default\">General Secretary</button>\r\n            <button (click)=\"joint_secretary()\" type=\"button\" class=\"btn btn-default\">Joint Secretary</button>\r\n            <button (click)=\"treasurer()\" type=\"button\" class=\"btn btn-default\">Treasurer</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n\r\n        <nav class=\"navbar navbar-default\">\r\n\r\n          <form class=\"navbar-form navbar-left\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#\">Items Per Page</a></li>\r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Default<span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\">5</a></li>\r\n                    <li><a href=\"#\">10</a></li>\r\n                    <li><a href=\"#\">15</a></li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </form>\r\n\r\n          <form class=\"navbar-form navbar-right\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <input style=\"margin-right: 5px\" type=\"text\" class=\"form-control\" placeholder=\"Search Here\">\r\n            </div>\r\n          </form>\r\n        </nav>\r\n\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr style=\"background-color: #f2f2f8\">\r\n              <th>Position</th>\r\n              <th>Name</th>\r\n              <th>Dept</th>\r\n              <th>Position</th>\r\n              <th>Party</th>\r\n              <th>Photo</th>\r\n              <th>No. of Votes</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let candidate of candidates; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{candidate.firstName}}{{candidate.middleName}}{{candidate.lastName}}</td>\r\n              <td>{{candidate.dept}}</td>\r\n              <td>{{candidate.position}}</td>\r\n              <td>{{candidate.party}}</td>\r\n              <td><img src=\"{{candidate.picture}}\" height=\"50px\" width=\"50px\" alt=\"no photo\"></td>\r\n              <td style=\"text-align: center; font-weight: bold\">{{candidate.total_vote}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/canvassing-report/canvassing-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvassingReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CanvassingReportComponent = /** @class */ (function () {
    function CanvassingReportComponent(authService, router, candidateService) {
        this.authService = authService;
        this.router = router;
        this.candidateService = candidateService;
        this.candidates = new Array();
        this.newCandidates = new Array();
        this.temp_candidates = new Array();
        this.tempCan = new __WEBPACK_IMPORTED_MODULE_4__models_candidate__["a" /* Candidate */]();
        this.published = false;
    }
    CanvassingReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.candidateService.getCandidate()
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    CanvassingReportComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    CanvassingReportComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    CanvassingReportComponent.prototype.sort = function () {
        var length = this.candidates.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // console.log(i + " " + j + " " + this.candidates2[i].total_vote + " " + this.candidates2[j].total_vote);
                if (this.candidates[j].total_vote < this.candidates[j + 1].total_vote) {
                    this.tempCan = this.candidates[j];
                    this.candidates[j] = this.candidates[j + 1];
                    this.candidates[j + 1] = this.tempCan;
                }
            }
        }
    };
    CanvassingReportComponent.prototype.president = function () {
        var _this = this;
        this.searchKey = "President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            var j = 0;
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].position == "President") {
                    _this.temp_candidates[j] = res.data[i];
                    j++;
                }
            }
            _this.candidates = _this.temp_candidates; // only president except vice-president
            console.log(_this.temp_candidates);
            // console.log(this.candidates);
            // console.log(res.data);
            _this.newCandidates = _this.temp_candidates;
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.vice_president = function () {
        var _this = this;
        this.searchKey = "Vice President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.members = function () {
        var _this = this;
        this.searchKey = "Member";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.general_secretary = function () {
        var _this = this;
        this.searchKey = "General Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.joint_secretary = function () {
        var _this = this;
        this.searchKey = "Joint Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
        });
    };
    CanvassingReportComponent.prototype.treasurer = function () {
        var _this = this;
        this.searchKey = "Treasurer";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
        });
    };
    CanvassingReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-canvassing-report',
            template: __webpack_require__("./src/app/components/canvassing-report/canvassing-report.component.html"),
            styles: [__webpack_require__("./src/app/components/canvassing-report/canvassing-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */]])
    ], CanvassingReportComponent);
    return CanvassingReportComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  max-width: 80%;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n}\r\n\r\n.border {\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.copyRight {\r\n  margin-left: 40%;\r\n}\r\n\r\n.links {\r\n  margin-left: 48%;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .copyRight {\r\n    margin-left: 20%;\r\n\r\n  }\r\n  .footer {\r\n    max-width: 100%;\r\n  }\r\n  .links {\r\n    margin-left: 25%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 310px) {\r\n  .copyRight {\r\n    margin-left: 0%;\r\n  }\r\n  .links {\r\n    margin-left: 5%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"border\"><br>\r\n    <div class=\"links\">\r\n      <a href=\"home\"> Home </a>\r\n      .\r\n      <a href=\"about\"> About </a>\r\n      .\r\n      <a href=\"about\"> Contact </a>\r\n    </div>\r\n    <p class=\"copyRight\">\r\n      Copyright &copy; 2018 University of Rajshahi\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/general-secretary/general-secretary.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/general-secretary/general-secretary.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n  <!--navigation starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navigation ends here-->\r\n\r\n\r\n\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for General Secretary</h2></div>\r\n      <div class=\"panel-body\">\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\"  class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div><!-- row -->\r\n\r\n\r\n  <ul class=\"pagination\">\r\n    <li ><a href=\"vote-page\">President</a></li>\r\n    <li ><a href=\"vice-president\">Vice President</a></li>\r\n    <li class=\"active\"><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li><a href=\"treasurer\">Treasurer</a></li>\r\n    <li><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/general-secretary/general-secretary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSecretaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralSecretaryComponent = /** @class */ (function () {
    function GeneralSecretaryComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.id = null;
        this.published = false;
    }
    GeneralSecretaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        var vote_temp2 = localStorage.getItem('general_secretary_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "General Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
        });
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    GeneralSecretaryComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    GeneralSecretaryComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    GeneralSecretaryComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    GeneralSecretaryComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate2/" + candidate._id]);
    };
    GeneralSecretaryComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                console.log(res.data);
                localStorage.setItem('general_secretary_vote', 'true');
                _this.ngOnInit();
                _this.router.navigate(['joint-secretary']);
            });
        }
    };
    GeneralSecretaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-general-secretary',
            template: __webpack_require__("./src/app/components/general-secretary/general-secretary.component.html"),
            styles: [__webpack_require__("./src/app/components/general-secretary/general-secretary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_voter_service__["a" /* VoterService */]])
    ], GeneralSecretaryComponent);
    return GeneralSecretaryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".slideShow {\r\n  float: left;\r\n  max-width: 620px;\r\n  border: 3px solid rgba(50,50,50,0.6);\r\n}\r\n#container2 {\r\n  width: 100%;\r\n  /*margin: 5em auto;*/\r\n  padding: 2px;\r\n  background:#fff;\r\n}\r\n.items2 {\r\n  width:100%;\r\n  height:400px;\r\n  background:#ECECEC;\r\n}\r\n#left, #right {\r\n  margin: 30px;\r\n}\r\n.photoGallery {\r\n  background-color: rgb(245,245,245);\r\n  font-size: 150%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n.mission {\r\n  float: right;\r\n  /*float: top;*/\r\n  border-radius: 25px;\r\n  border: 3px solid rgba(20,20,20,0.6);\r\n  padding: 15px;\r\n  /*width: 350px;*/\r\n  margin-top: 20px;\r\n}\r\n.mission1 {\r\n  width: 350px;\r\n  margin-right: 50px;\r\n}\r\n.mission2 {\r\n  width: 380px;\r\n  margin-right: 40px;\r\n}\r\n@media screen and (max-width: 1100px) {\r\n  .mission {\r\n    float: left;\r\n  }\r\n  .mission1 {\r\n    margin-right: 0px;\r\n  }\r\n  .mission2 {\r\n    margin-right: 0px;\r\n  }\r\n\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .slideShow {\r\n    max-width: 100%;\r\n  }\r\n  .image_show {\r\n    width: 100%;\r\n  }\r\n}\r\n.mission:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n.home-title {\r\n  font-size: 130%;\r\n  background-color: rgb(200,200,200);\r\n  padding: 8px;\r\n  font-weight: bold;\r\n}\r\n.home_description {\r\n  font-size: 110%;\r\n}\r\n.image_show {\r\n  height: 400px;\r\n  width: 580px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar xmlns=\"\"></app-navbar>\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a href=\"home\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li *ngIf=\"!authService.isAdmin()  && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n  <div *ngIf=\"voter.status\">\r\n    <h3>\r\n      Thank you\r\n      {{voter.firstName}} {{voter.middleName}} {{voter.lastName}}\r\n      for submitting vote!\r\n    </h3>\r\n  </div>\r\n\r\n  <!--slide show starts-->\r\n  <div class=\"slideShow\">\r\n    <div id=\"container2\">\r\n      <div\r\n        ng2-carouselamos\r\n        class=\"slides-wrapper\"\r\n        [items]=\"items\"\r\n        [width]=\"620\"\r\n        [$prev]=\"prev\"\r\n        [$next]=\"next\"\r\n        [$item]=\"item\"\r\n      > </div>\r\n\r\n\r\n      <ng-template #prev>\r\n        <img width=\"40px\" height=\"40px\" src=\"assets/images/left-arrow.png\" id=\"left\" />\r\n      </ng-template>\r\n      <ng-template #next>\r\n        <img width=\"40px\" height=\"40px\" src=\"assets/images/right-arrow.png\" id=\"right\" />\r\n      </ng-template>\r\n\r\n      <ng-template #item let-item let-i=\"index\">\r\n        <div class=\"items2\">\r\n          <img class=\"image_show\" src=\"{{ item.name }}\">\r\n        </div>\r\n      </ng-template>\r\n\r\n      <div class=\"photoGallery\">\r\n        Photo Gallery\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <!--slide show ends-->\r\n\r\n\r\n  <div class=\"mission mission1\">\r\n    <div class=\"home-title\">\r\n      Our Mission\r\n    </div>\r\n    <div class=\"home_description\">\r\n      Our mission is to digitize the voting process of <b>Teachers Association</b>\r\n      of <b>University of Rajshahi</b>. To cope with the development of the country,\r\n      teachers association electing is arranged online to simplify, easy and fast\r\n      the voting process.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"mission mission2 \">\r\n    <div class=\"home-title\">\r\n      Objectives\r\n    </div>\r\n    <div class=\"home_description\">\r\n      <li>Reviewing the existing voting approach.</li>\r\n      <li>Coming up with an automated  voting system </li>\r\n      <li>Implementing  an automated/ E-voting system </li>\r\n      <li>Validating the system to ensure that only eligible voters are allowed to vote</li>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService, voterService) {
        this.router = router;
        this.authService = authService;
        this.voterService = voterService;
        this.items = [];
        this.published = false;
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.items = [
            { name: '../assets/images/501.jpg' },
            { name: '../assets/images/502.jpg' },
            { name: '../assets/images/503.jpg' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter.status);
            });
        }
    };
    HomeComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    HomeComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    HomeComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_voter_service__["a" /* VoterService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inner-navbar/inner-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/inner-navbar/inner-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n        <li *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n        <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n        <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n        <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n        <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n        <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n      </ul>\r\n\r\n      <form class=\"navbar-form navbar-right\">\r\n        <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n        <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n        <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n      </form>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/inner-navbar/inner-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InnerNavbarComponent = /** @class */ (function () {
    function InnerNavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAdmin = 0;
        this.published = false;
    }
    InnerNavbarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('isAdmin') == 'true') {
            this.isAdmin = 1;
            console.log(this.isAdmin);
        }
        console.log(this.authService.isAdmin());
    };
    InnerNavbarComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    InnerNavbarComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    InnerNavbarComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    InnerNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inner-navbar',
            template: __webpack_require__("./src/app/components/inner-navbar/inner-navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/inner-navbar/inner-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], InnerNavbarComponent);
    return InnerNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/joint-secretary/joint-secretary.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/joint-secretary/joint-secretary.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n  <!--navigation starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navigation ends here-->\r\n\r\n\r\n  <div class=\"row grid\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for Joint Secretary</h2></div>\r\n      <div class=\"panel-body\">\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\"  class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- row -->\r\n\r\n  <ul class=\"pagination\">\r\n    <li ><a href=\"vote-page\">President</a></li>\r\n    <li ><a href=\"vice-president\">Vice President</a></li>\r\n    <li><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li class=\"active\"><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li><a href=\"treasurer\">Treasurer</a></li>\r\n    <li><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/joint-secretary/joint-secretary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JointSecretaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JointSecretaryComponent = /** @class */ (function () {
    function JointSecretaryComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.id = null;
        this.published = false;
    }
    JointSecretaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        var vote_temp2 = localStorage.getItem('joint_secretary_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "Joint Secretary";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
        });
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    JointSecretaryComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    JointSecretaryComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    JointSecretaryComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    JointSecretaryComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate2/" + candidate._id]);
    };
    JointSecretaryComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                console.log(res.data);
                localStorage.setItem('joint_secretary_vote', 'true');
                _this.ngOnInit();
                _this.router.navigate(['treasurer']);
            });
        }
    };
    JointSecretaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-joint-secretary',
            template: __webpack_require__("./src/app/components/joint-secretary/joint-secretary.component.html"),
            styles: [__webpack_require__("./src/app/components/joint-secretary/joint-secretary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_voter_service__["a" /* VoterService */]])
    ], JointSecretaryComponent);
    return JointSecretaryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n\r\n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Sign In</div>\r\n      </div>\r\n\r\n      <div style=\"padding-top:30px\" class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n            <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\"  placeholder=\"Enter your Email\">\r\n          </div>\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password2\"  placeholder=\"Enter your Password\">\r\n          </div>\r\n\r\n          <div style=\"margin-top:10px\" class=\"form-group\">\r\n            <div class=\"col-sm-12 controls\">\r\n              <a id=\"btn-login\" (click)=\"onLoginSubmit()\" class=\"btn btn-success\">Login</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    // username = new FormControl('', [Validators.required]);
    // password = new FormControl('', [Validators.required]);
    function LoginComponent(router, formBuilder, authService, candidateService, adminService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.candidateService = candidateService;
        this.adminService = adminService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.loginForm = this.formBuilder.group({});
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        console.log(user);
        this.authService.authenticateUser(user).subscribe(function (res) {
            console.log(user);
            if (res.success) {
                // get members
                // let searchKey = "Member";
                // // console.log('At search = '+ this.searchKey);
                // this.candidateService.getSearchCandidate(searchKey)
                //   .subscribe(res => {
                //     localStorage.setItem('members',res.data);
                //     // console.log(this.candidates);
                //   });
                // console.log(res.data.isAdmin);
                localStorage.setItem('isAdmin', res.data.isAdmin);
                localStorage.setItem('loginId', res.data._id);
                localStorage.setItem('status', res.data.status);
                localStorage.setItem('president_vote', 'false');
                localStorage.setItem('vice_president_vote', 'false');
                localStorage.setItem('general_secretary_vote', 'false');
                localStorage.setItem('joint_secretary_vote', 'false');
                localStorage.setItem('member_vote', 'false');
                localStorage.setItem('treasurer_vote', 'false');
                localStorage.setItem('rem_member_vote', '10');
                localStorage.setItem('is_member_visited', 'false');
                _this.authService.storeUserDatta(res.token, res.data);
                // this._flashMessagesService.show('You are now Logged In!', { cssClass: 'alert-success' } );
                _this.router.navigate(['/home']);
            }
            else {
                // this._flashMessagesService.show('Email or Password do not match', { cssClass: 'alert-danger' } );
                _this.router.navigate(['/login']);
            }
            _this.adminService.getSingleAdmin()
                .subscribe(function (res) {
                console.log(res.data);
                if (res.data.isPublished == true) {
                    localStorage.setItem('published', 'true');
                }
                else {
                    localStorage.setItem('published', 'false');
                }
            });
        });
    };
    LoginComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_admin_service__["a" /* AdminService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/member/member.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  /*position: absolute;*/\r\n  /*top: 50%;*/\r\n  background-color: #4CAF50; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 15px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  margin: 4px 2px;\r\n  -webkit-transition-duration: 0.4s; /* Safari */\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid #4CAF50;\r\n}\r\n\r\n.button1:hover {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n.member {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  background-color: rgb(245,245,245);\r\n  font-size: 130%;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n\r\n  <!--navigation starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navigation ends here-->\r\n\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for Member</h2></div>\r\n\r\n      <div class=\"member\">\r\n        <b>Rule 1: </b> You can vote maximum 10 members of different department.\r\n        Your can vote more {{ rem_vote }} candidates\r\n      </div>\r\n\r\n      <div class=\"member\">\r\n        <b>Rule 2: </b> On this page you can submit your vote only a time.\r\n        So before leaving this page please confirm that you selected your\r\n        desired candidates and you have clicked on submit button.\r\n      </div>\r\n\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div  class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button  (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\"  class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4>{{message}}</h4>\r\n\r\n      </div>\r\n\r\n      <div class=\"wrapper\">\r\n        <button (click)=\"vote_submit()\" *ngIf=\"!vote_local && !vote_status\"  class=\"button button1\">\r\n          <i class=\"fas fa-thumbs-up\"></i> submit vote\r\n        </button>\r\n      </div><br>\r\n\r\n    </div>\r\n\r\n  </div><!-- row -->\r\n\r\n\r\n  <ul class=\"pagination\">\r\n    <li ><a href=\"vote-page\">President</a></li>\r\n    <li ><a href=\"vice-president\">Vice President</a></li>\r\n    <li><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li><a href=\"treasurer\">Treasurer</a></li>\r\n    <li class=\"active\"><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberComponent = /** @class */ (function () {
    function MemberComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.message = " ";
        this.published = false;
        this.candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_5__models_voter__["a" /* Voter */]();
        this.id = null;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        localStorage.setItem('is_member_visited', 'true');
        var vote_temp2 = localStorage.getItem('member_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "Member";
        // console.log('At search = '+ this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            _this.candidates = res.data;
            // console.log(this.candidates);
        });
        // this.candidates = localStorage.getItem('members');
        //
        // let candid: any;
        // candid = localStorage.getItem('members');
        // console.log(candid);
        this.rem_vote = parseInt(localStorage.getItem('rem_member_vote'));
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    MemberComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    MemberComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    MemberComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    MemberComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                // console.log(res.data);
                // view delete same category candidates one by one
                console.log(candidate);
                var len = _this.candidates.length;
                var len2 = len;
                for (var i = 0; i < len2; i++) {
                    for (var j = 0; j < len; j++) {
                        // console.log(i +" " + j);
                        if (candidate.dept == _this.candidates[j].dept) {
                            _this.candidates.splice(_this.candidates.indexOf(_this.candidates[j]), 1);
                            len--;
                            if (_this.candidates.length == 0) {
                                _this.message = "No candidates left to vote! " +
                                    "Please submit your votes clicking on submit vote button below.";
                            }
                        }
                    }
                }
                // updating remaining vote
                _this.rem_vote = parseInt(localStorage.getItem('rem_member_vote'));
                _this.rem_vote = _this.rem_vote - 1;
                localStorage.setItem('rem_member_vote', _this.rem_vote.toString());
                // console.log('remaining vote:' + this.rem_vote);
                // if remaining vote finished then member_vote will be true
                if (!_this.rem_vote) {
                    localStorage.setItem('member_vote', 'true');
                    _this.ngOnInit();
                    _this.router.navigate(['home']);
                }
            });
        }
    };
    MemberComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate3/" + candidate._id]);
    };
    MemberComponent.prototype.vote_submit = function () {
        localStorage.setItem('member_vote', 'true');
        this.ngOnInit();
        this.router.navigate(['home']);
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member',
            template: __webpack_require__("./src/app/components/member/member.component.html"),
            styles: [__webpack_require__("./src/app/components/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_voter_service__["a" /* VoterService */]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  margin: 0px;\r\n  border-radius: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <img style=\"max-height: 100px; max-width: 100px; float: left;\" src=\"../../../assets/images/ruLogo.png\" alt=\"RU Logo\" >\r\n  <h2 style=\"text-align: center; color: azure\">E-Voting System for RU Teacher's Association</h2>\r\n  <h3 style=\"text-align: center; color: azure\">University of Rajshahi</h3>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-upload-candidate/photo-upload-candidate.component.css":
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n  height: 80px;\r\n  line-height: 80px;\r\n  color: beige;\r\n  background-color: rgb(46, 43, 43);\r\n  font-size: 24px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.card{\r\n  background-color: white;\r\n  -webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n          box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  color:black;\r\n  margin: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/photo-upload-candidate/photo-upload-candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row card\">\r\n        <div class=\"col-sm-12\">\r\n          <h4>Upload Section</h4>\r\n          <div id=\"fileSelector\">\r\n            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\r\n                   multiple ng2FileSelect [uploader]=\"uploader\">\r\n          </div>\r\n          <div>\r\n            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\r\n              <div class=\"col-sm-4\">{{item.file.name}}</div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-success\"\r\n                       [ngStyle]=\"{'width':item.progress+'%'}\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">-->\r\n            <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/photo-upload-candidate/photo-upload-candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadCandidateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var uri = 'http://localhost:3000/product';
var ur2;
var PhotoUploadCandidateComponent = /** @class */ (function () {
    // http://localhost:4200/photo/5aca319a784c6127c01e3f48
    function PhotoUploadCandidateComponent(voterService, route, router) {
        var _this = this;
        this.voterService = voterService;
        this.route = route;
        this.router = router;
        this.attachmentList = [];
        var id = this.route.snapshot.paramMap.get('id');
        ur2 = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].baseUrl + "/candidate/" + id;
        this.product = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: ur2 });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(item);
            _this.router.navigate(['candidate-list']);
        };
    }
    PhotoUploadCandidateComponent.prototype.ngOnInit = function () {
    };
    PhotoUploadCandidateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-upload-candidate',
            template: __webpack_require__("./src/app/components/photo-upload-candidate/photo-upload-candidate.component.html"),
            styles: [__webpack_require__("./src/app/components/photo-upload-candidate/photo-upload-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_voter_service__["a" /* VoterService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], PhotoUploadCandidateComponent);
    return PhotoUploadCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.css":
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n  height: 80px;\r\n  line-height: 80px;\r\n  color: beige;\r\n  background-color: rgb(46, 43, 43);\r\n  font-size: 24px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.card{\r\n  background-color: white;\r\n  -webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n          box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  color:black;\r\n  margin: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row card\">\r\n        <div class=\"col-sm-12\">\r\n          <h4>Upload Section</h4>\r\n          <div id=\"fileSelector\">\r\n            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\r\n                   multiple ng2FileSelect [uploader]=\"uploader\">\r\n          </div>\r\n          <div>\r\n            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\r\n              <div class=\"col-sm-4\">{{item.file.name}}</div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-success\"\r\n                       [ngStyle]=\"{'width':item.progress+'%'}\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">-->\r\n            <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var uri = 'http://localhost:3000/product';
var ur2;
var PhotoUploadComponent = /** @class */ (function () {
    // http://localhost:4200/photo/5aca319a784c6127c01e3f48
    function PhotoUploadComponent(voterService, route, router) {
        var _this = this;
        this.voterService = voterService;
        this.route = route;
        this.router = router;
        this.attachmentList = [];
        var id = this.route.snapshot.paramMap.get('id');
        ur2 = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].baseUrl + "/voter/" + id;
        this.product = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: ur2 });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(item);
            _this.router.navigate(['/voter-list']);
        };
    }
    PhotoUploadComponent.prototype.ngOnInit = function () {
    };
    PhotoUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-upload',
            template: __webpack_require__("./src/app/components/photo-upload/photo-upload.component.html"),
            styles: [__webpack_require__("./src/app/components/photo-upload/photo-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_voter_service__["a" /* VoterService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], PhotoUploadComponent);
    return PhotoUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ".result {\r\n  font-size: 120%;\r\n}\r\n\r\n.imageResult {\r\n  float: right;\r\n  float: top;\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar xmlns=\"\"></app-navbar>\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"home\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li *ngIf=\"!authService.isAdmin()  && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li class=\"active\" *ngIf=\"authService.isLoggedIn()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n\r\n  <div style=\"margin-left: -1px\" id=\"loginbox\" style=\"margin-top:10px;\" class=\"mainbox col-md-12 col-sm-12\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n            <!--<button (click)=\"ngOnInit()\" type=\"button\" class=\"btn btn-default\">All</button>-->\r\n            <button (click)=\"president()\" type=\"button\" class=\"btn btn-default\">President</button>\r\n            <button (click)=\"vice_president()\" type=\"button\" class=\"btn btn-default\">Vice President</button>\r\n            <button (click)=\"members()\" type=\"button\" class=\"btn btn-default\"><span style=\"padding: 9px\">Members</span></button>\r\n            <button (click)=\"general_secretary()\" type=\"button\" class=\"btn btn-default\">General Secretary</button>\r\n            <button (click)=\"joint_secretary()\" type=\"button\" class=\"btn btn-default\">Joint Secretary</button>\r\n            <button (click)=\"treasurer()\" type=\"button\" class=\"btn btn-default\">Treasurer</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n        <div class=\"result\" *ngFor=\"let candidate of result_candidates; let i = index\">\r\n          <p><img class=\"imageResult\" src=\"{{candidate.picture}}\" alt=\"no photo\"></p>\r\n          <p><b>Elected Candidate Name : </b>\r\n            <b>{{candidate.firstName}} {{candidate.middleName}} {{candidate.lastName}}</b>\r\n          </p>\r\n          <p><b>Department : </b>{{candidate.dept}}</p>\r\n          <p><b>Position : </b>{{candidate.position}}</p>\r\n          <p><b>Party : </b>{{candidate.party}}</p>\r\n          <p><b>No. of Votes : </b>{{candidate.total_vote}}</p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <button *ngIf=\"authService.isAdmin() && not_published\" class=\"btn btn-success\" (click)=\"publish()\" style=\"text-align: center; margin-left: 20%\">\r\n      Publish Result\r\n    </button><br>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResultComponent = /** @class */ (function () {
    function ResultComponent(router, authService, voterService, candidateService, adminService) {
        this.router = router;
        this.authService = authService;
        this.voterService = voterService;
        this.candidateService = candidateService;
        this.adminService = adminService;
        this.published = false;
        this.not_published = true;
        this.candidates = new Array();
        this.newCandidates = new Array();
        this.temp_candidates = new Array();
        this.result_candidates = new Array();
        this.all_candidates = new Array();
        this.tempCan = new __WEBPACK_IMPORTED_MODULE_5__models_candidate__["a" /* Candidate */]();
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.president();
        this.adminService.getSingleAdmin()
            .subscribe(function (res) {
            console.log('admin: ');
            console.log(res.data.isPublished);
            if (res.data.isPublished) {
                _this.not_published = false;
            }
        });
        // this.candidateService.getCandidate()
        //   .subscribe(res =>{
        //     this.candidates = res.data;
        //     console.log(this.candidates);
        //
        //     this.sort();
        //   });
        // if(true){
        //   this.president();
        //   this.vice_president();
        //   this.members();
        //   this.general_secretary();
        //   this.joint_secretary();
        //   this.treasurer();
        //   if(true){
        //     this.result_candidates = [];
        //     this.result_candidates = this.all_candidates;
        //     console.log( 'new candidates ' );
        //     console.log( this.all_candidates);
        //     console.log( this.result_candidates);
        //   }
        // }
        // this.result_candidates = this.all_candidates;
    };
    ResultComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    ResultComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    ResultComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    ResultComponent.prototype.sort = function () {
        var length = this.candidates.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // console.log(i + " " + j + " " + this.candidates2[i].total_vote + " " + this.candidates2[j].total_vote);
                if (this.candidates[j].total_vote < this.candidates[j + 1].total_vote) {
                    this.tempCan = this.candidates[j];
                    this.candidates[j] = this.candidates[j + 1];
                    this.candidates[j + 1] = this.tempCan;
                }
            }
        }
        this.result_candidates = [];
        this.result_candidates[0] = this.candidates[0];
        //
        // if(this.candidates[0].position == "President") {
        //   this.result_candidates[0] = this.candidates[0];
        // }
        // if(this.candidates[0].position == "Vice President") {
        //   this.result_candidates[1] = this.candidates[0];
        // }
        // if(this.candidates[0].position == "Member") {
        //   this.result_candidates[2] = this.candidates[0];
        // }
        // if(this.candidates[0].position == "General Secretary") {
        //   this.result_candidates[3] = this.candidates[0];
        // }
        // if(this.candidates[0].position == "Joint Secretary") {
        //   this.result_candidates[4] = this.candidates[0];
        // }
        // if(this.candidates[0].position == "Treasurer") {
        //   this.result_candidates[5] = this.candidates[0];
        // }
    };
    ResultComponent.prototype.president = function () {
        var _this = this;
        this.searchKey = "President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            var j = 0;
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].position == "President") {
                    _this.temp_candidates[j] = res.data[i];
                    j++;
                }
            }
            _this.candidates = _this.temp_candidates; // only president except vice-president
            // console.log(this.temp_candidates);
            // console.log(this.candidates);
            // console.log(res.data);
            _this.newCandidates = _this.temp_candidates;
            _this.sort();
            _this.all_candidates[0] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.vice_president = function () {
        var _this = this;
        this.searchKey = "Vice President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            // console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
            _this.all_candidates[1] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.members = function () {
        var _this = this;
        this.searchKey = "Member";
        // console.log('At search = '+ this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            // console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
            _this.all_candidates[2] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.general_secretary = function () {
        var _this = this;
        this.searchKey = "General Secretary";
        // console.log('At search = '+ this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            // console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
            _this.all_candidates[3] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.joint_secretary = function () {
        var _this = this;
        this.searchKey = "Joint Secretary";
        // console.log('At search = '+ this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            // console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
            _this.all_candidates[4] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.treasurer = function () {
        var _this = this;
        this.searchKey = "Treasurer";
        // console.log('At search = '+ this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            // console.log(res.data);
            _this.candidates = res.data;
            _this.newCandidates = res.data;
            _this.sort();
            _this.all_candidates[5] = _this.candidates[0];
        });
    };
    ResultComponent.prototype.publish = function () {
        var _this = this;
        this.adminService.isPublished()
            .subscribe(function (res) {
            console.log(res.data);
            // localStorage.setItem('published','false');
            _this.ngOnInit();
        });
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/components/result/result.component.html"),
            styles: [__webpack_require__("./src/app/components/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_voter_service__["a" /* VoterService */],
            __WEBPACK_IMPORTED_MODULE_4__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_service__["a" /* AdminService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/teasurer/teasurer.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/teasurer/teasurer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n  <!--navigation starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navigation ends here-->\r\n\r\n\r\n  <div class=\"row grid\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for Treasurer</h2></div>\r\n      <div class=\"panel-body\">\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\"  class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div><!-- row -->\r\n\r\n\r\n  <ul class=\"pagination\">\r\n    <li><a href=\"vote-page\">President</a></li>\r\n    <li ><a href=\"vice-president\">Vice President</a></li>\r\n    <li><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li  class=\"active\"><a href=\"treasurer\">Treasurer</a></li>\r\n    <li><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/teasurer/teasurer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeasurerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeasurerComponent = /** @class */ (function () {
    function TeasurerComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.id = null;
        this.published = false;
    }
    TeasurerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        var vote_temp2 = localStorage.getItem('treasurer_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "Treasurer";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
        });
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    TeasurerComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    TeasurerComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    TeasurerComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    TeasurerComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate2/" + candidate._id]);
    };
    TeasurerComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                console.log(res.data);
                localStorage.setItem('treasurer_vote', 'true');
                _this.ngOnInit();
                _this.router.navigate(['member']);
            });
        }
    };
    TeasurerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-teasurer',
            template: __webpack_require__("./src/app/components/teasurer/teasurer.component.html"),
            styles: [__webpack_require__("./src/app/components/teasurer/teasurer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_voter_service__["a" /* VoterService */]])
    ], TeasurerComponent);
    return TeasurerComponent;
}());



/***/ }),

/***/ "./src/app/components/title/title.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n  background-color: #00b300;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.margin {\r\n  margin-left: 5%;\r\n}\r\n\r\n.logo {\r\n  max-height: 60px;\r\n  max-width: 60px;\r\n  float: left;\r\n}\r\n\r\n.title-text {\r\n  color: white;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.RU {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div class=\"margin\">\r\n    <img class=\"logo\" src=\"../../../assets/images/ruLogo.png\" alt=\"RU Logo\" >\r\n    <h3 class=\"title-text\">E-Voting System for RU Teacher's Association Election</h3>\r\n    <h4 class=\"RU\">University of Rajshahi</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-title',
            template: __webpack_require__("./src/app/components/title/title.component.html"),
            styles: [__webpack_require__("./src/app/components/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/components/update-candidate/update-candidate.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-candidate/update-candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div style=\" margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Update Candidate</div>\r\n      </div>\r\n      <div class=\"panel-body\" >\r\n        <form (submit)=\"updateCandidate(candidate)\"  class=\"form-horizontal\" role=\"form\">\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"col-md-3 control-label\">First Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.firstName\" class=\"form-control\" name=\"firstName\" id=\"firstName\" placeholder=\"Email Address\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Middle Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.middleName\" class=\"form-control\" name=\"middleName\" id=\"middleName\" placeholder=\"Middle Name\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Last Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.lastName\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\" class=\"col-md-3 control-label\">Postion</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.position\" class=\"form-control\" name=\"position\" id=\"position\" placeholder=\"Position\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"dept\" class=\"col-md-3 control-label\">Department</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.dept\" class=\"form-control\" name=\"dept\" id=\"dept\" placeholder=\"Department\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"degree\" class=\"col-md-3 control-label\">Status</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.degree\" class=\"form-control\" name=\"degree\" id=\"degree\" placeholder=\"Degree\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"party\" class=\"col-md-3 control-label\">Party</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.party\" class=\"form-control\" name=\"party\" id=\"party\" placeholder=\"Party\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"dept\" class=\"col-md-3 control-label\">Email</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"col-md-3 control-label\">User Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" [(ngModel)]=\"candidate.username\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <!-- Button -->\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button type=\"submit\" style=\"text-align: center\" id=\"btn-signup\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i>Update</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/update-candidate/update-candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCandidateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateCandidateComponent = /** @class */ (function () {
    function UpdateCandidateComponent(candidateService, route, location, router) {
        this.candidateService = candidateService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.candidate = new __WEBPACK_IMPORTED_MODULE_2__models_candidate__["a" /* Candidate */]();
    }
    UpdateCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.candidateService.getSingleCandidate(id)
            .subscribe(function (res) {
            _this.candidate = res.data;
        });
    };
    UpdateCandidateComponent.prototype.updateCandidate = function (candidate) {
        var _this = this;
        this.candidateService.updateCandidate(candidate)
            .subscribe(function (res) {
            // console.log(res)
            _this.router.navigate(["photo-upload-candidate/" + res.data._id]);
        });
    };
    UpdateCandidateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-candidate',
            template: __webpack_require__("./src/app/components/update-candidate/update-candidate.component.html"),
            styles: [__webpack_require__("./src/app/components/update-candidate/update-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UpdateCandidateComponent);
    return UpdateCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/validate-voter/validate-voter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/validate-voter/validate-voter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  validate-voter works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/validate-voter/validate-voter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateVoterComponent; });
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

var ValidateVoterComponent = /** @class */ (function () {
    function ValidateVoterComponent() {
    }
    ValidateVoterComponent.prototype.ngOnInit = function () {
    };
    ValidateVoterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validate-voter',
            template: __webpack_require__("./src/app/components/validate-voter/validate-voter.component.html"),
            styles: [__webpack_require__("./src/app/components/validate-voter/validate-voter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidateVoterComponent);
    return ValidateVoterComponent;
}());



/***/ }),

/***/ "./src/app/components/vice-president/vice-president.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/vice-president/vice-president.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <!--navbar starts-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navbar ends-->\r\n\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for Vice President</h2></div>\r\n      <div class=\"panel-body\">\r\n\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\" class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div><!-- row -->\r\n\r\n\r\n  <ul class=\"pagination\">\r\n    <li ><a href=\"vote-page\">President</a></li>\r\n    <li class=\"active\"><a href=\"vice-president\">Vice President</a></li>\r\n    <li><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li><a href=\"treasurer\">Treasurer</a></li>\r\n    <li><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/vice-president/vice-president.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VicePresidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VicePresidentComponent = /** @class */ (function () {
    function VicePresidentComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.id = null;
        this.published = false;
    }
    VicePresidentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        var vote_temp2 = localStorage.getItem('vice_president_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "Vice President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            _this.candidates = res.data;
            console.log(_this.candidates);
        });
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    VicePresidentComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    VicePresidentComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    VicePresidentComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    VicePresidentComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate2/" + candidate._id]);
    };
    VicePresidentComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                console.log(res.data);
                localStorage.setItem('vice_president_vote', 'true');
                _this.ngOnInit();
                _this.router.navigate(['general-secretary']);
            });
        }
    };
    VicePresidentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vice-president',
            template: __webpack_require__("./src/app/components/vice-president/vice-president.component.html"),
            styles: [__webpack_require__("./src/app/components/vice-president/vice-president.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_voter_service__["a" /* VoterService */]])
    ], VicePresidentComponent);
    return VicePresidentComponent;
}());



/***/ }),

/***/ "./src/app/components/view-candidate/view-candidate.component.css":
/***/ (function(module, exports) {

module.exports = "td{\r\n  padding: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate/view-candidate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h1 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate Details</h1></div>\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-md-offset-3 col-lg-offset-3 col-xl-offset-3 card grid-item\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div class=\"caption\">\r\n              <p class=\"card-title\" id=\"thumbnail-label\">Candidate for <b> : <span style=\"color: #ff3528\"> {{candidate.position}}</span></b></p>\r\n\r\n              <table>\r\n                <tr>\r\n                  <td><b>Name  </b></td>\r\n                  <td><b> : </b> {{candidate.firstName}} {{candidate.middleName}} {{candidate.lastName}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Department  </b></td>\r\n                  <td><b> : </b> {{candidate.dept}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Party  </b></td>\r\n                  <td><b> : </b> {{candidate.party}} </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Status  </b></td>\r\n                  <td><b> : </b> {{candidate.degree}} </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n\r\n                <li><button (click)=\"canList()\" class=\"btn btn-success pull-left\">\r\n                  <i class=\"fas fa-arrow-left\"></i> get back to Candidate list\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- row -->\r\n\r\n</div> <!-- container grid -->\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate/view-candidate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCandidateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCandidateComponent = /** @class */ (function () {
    function ViewCandidateComponent(candidateService, route, router) {
        this.candidateService = candidateService;
        this.route = route;
        this.router = router;
        this.published = false;
        this.candidate = new __WEBPACK_IMPORTED_MODULE_2__models_candidate__["a" /* Candidate */]();
    }
    ViewCandidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        this.candidateService.getSingleCandidate(this.route.snapshot.params.id)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidate = res.data;
        });
    };
    ViewCandidateComponent.prototype.canList = function () {
        this.router.navigate(['/candidate-list']);
    };
    ViewCandidateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-candidate',
            template: __webpack_require__("./src/app/components/view-candidate/view-candidate.component.html"),
            styles: [__webpack_require__("./src/app/components/view-candidate/view-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ViewCandidateComponent);
    return ViewCandidateComponent;
}());



/***/ }),

/***/ "./src/app/components/view-candidate2/view-candidate2.component.css":
/***/ (function(module, exports) {

module.exports = "td{\r\n  padding: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate2/view-candidate2.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h1 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate Details</h1></div>\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-md-offset-3 col-lg-offset-3 col-xl-offset-3 card grid-item\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div class=\"caption\">\r\n              <p class=\"card-title\" id=\"thumbnail-label\">Candidate for <b> : <span style=\"color: #ff3528\"> {{candidate.position}}</span></b></p>\r\n\r\n              <table>\r\n                <tr>\r\n                  <td><b>Name  </b></td>\r\n                  <td><b> : </b> {{candidate.firstName}} {{candidate.middleName}} {{candidate.lastName}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Department  </b></td>\r\n                  <td><b> : </b> {{candidate.dept}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Party  </b></td>\r\n                  <td><b> : </b> {{candidate.party}} </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Status  </b></td>\r\n                  <td><b> : </b> {{candidate.degree}} </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n\r\n                <li><button (click)=\"canList()\" class=\"btn btn-success pull-left\">\r\n                  <i class=\"fas fa-arrow-left\"></i> get back to Vote Page\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- row -->\r\n\r\n</div> <!-- container grid -->\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate2/view-candidate2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCandidate2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCandidate2Component = /** @class */ (function () {
    function ViewCandidate2Component(candidateService, route, router) {
        this.candidateService = candidateService;
        this.route = route;
        this.router = router;
        this.published = false;
        this.candidate = new __WEBPACK_IMPORTED_MODULE_1__models_candidate__["a" /* Candidate */]();
    }
    ViewCandidate2Component.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        this.candidateService.getSingleCandidate(this.route.snapshot.params.id)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidate = res.data;
        });
    };
    ViewCandidate2Component.prototype.canList = function () {
        this.router.navigate(['/vote-page']);
    };
    ViewCandidate2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-candidate2',
            template: __webpack_require__("./src/app/components/view-candidate2/view-candidate2.component.html"),
            styles: [__webpack_require__("./src/app/components/view-candidate2/view-candidate2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewCandidate2Component);
    return ViewCandidate2Component;
}());



/***/ }),

/***/ "./src/app/components/view-candidate3/view-candidate3.component.css":
/***/ (function(module, exports) {

module.exports = "td{\r\n  padding: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate3/view-candidate3.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row grid\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h1 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate Details</h1></div>\r\n      <div class=\"panel-body\">\r\n\r\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-md-offset-3 col-lg-offset-3 col-xl-offset-3 card grid-item\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div class=\"caption\">\r\n              <p class=\"card-title\" id=\"thumbnail-label\">Candidate for <b> : <span style=\"color: #ff3528\"> {{candidate.position}}</span></b></p>\r\n\r\n              <table>\r\n                <tr>\r\n                  <td><b>Name  </b></td>\r\n                  <td><b> : </b> {{candidate.firstName}} {{candidate.middleName}} {{candidate.lastName}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Department  </b></td>\r\n                  <td><b> : </b> {{candidate.dept}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Party  </b></td>\r\n                  <td><b> : </b> {{candidate.party}} </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Status  </b></td>\r\n                  <td><b> : </b> {{candidate.degree}} </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n\r\n                <li><button (click)=\"canList()\" class=\"btn btn-success pull-left\">\r\n                  <i class=\"fas fa-arrow-left\"></i> get back to member page\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- row -->\r\n\r\n</div> <!-- container grid -->\r\n"

/***/ }),

/***/ "./src/app/components/view-candidate3/view-candidate3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCandidate3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_candidate__ = __webpack_require__("./src/app/models/candidate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCandidate3Component = /** @class */ (function () {
    function ViewCandidate3Component(candidateService, route, router) {
        this.candidateService = candidateService;
        this.route = route;
        this.router = router;
        this.published = false;
        this.candidate = new __WEBPACK_IMPORTED_MODULE_1__models_candidate__["a" /* Candidate */]();
    }
    ViewCandidate3Component.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        this.candidateService.getSingleCandidate(this.route.snapshot.params.id)
            .subscribe(function (res) {
            console.log(res.data);
            _this.candidate = res.data;
        });
    };
    ViewCandidate3Component.prototype.canList = function () {
        this.router.navigate(['/member']);
    };
    ViewCandidate3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-candidate3',
            template: __webpack_require__("./src/app/components/view-candidate3/view-candidate3.component.html"),
            styles: [__webpack_require__("./src/app/components/view-candidate3/view-candidate3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewCandidate3Component);
    return ViewCandidate3Component;
}());



/***/ }),

/***/ "./src/app/components/vote-page/vote-page.component.css":
/***/ (function(module, exports) {

module.exports = ".image {\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.thumbnail {\r\n  min-height: 330px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  background-color: rgb(245,245,245);\r\n}\r\n\r\n.showTwo {\r\n  line-height: 1.5em;\r\n  height: 3em;\r\n  overflow: hidden;\r\n}\r\n\r\n.showOne {\r\n  line-height: 1.5em;\r\n  /*height: 3em;*/\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  width: 100%;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .image {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/vote-page/vote-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <!--navigation starts here-->\r\n  <nav  class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"active\" *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"vote-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--navigation ends here-->\r\n\r\n\r\n  <div class=\"row grid\">\r\n\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\"><h2 style=\"text-align: center; font-family:'Fira Code Light'\">Candidate for President</h2></div>\r\n      <div class=\"panel-body\">\r\n\r\n\r\n        <div class=\"col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 card grid-item\" *ngFor=\"let candidate of candidates\">\r\n          <div class=\"thumbnail\">\r\n            <img  (click)=\"viewCandidate(candidate)\" src=\"{{candidate.picture}}\" class=\"image\">\r\n            <div   (click)=\"viewCandidate(candidate)\" class=\"caption\">\r\n              <h4 class=\"card-title showTwo\" id=\"name\">\r\n                {{ candidate.firstName }} {{ candidate.middleName }} {{ candidate.lastName }}\r\n              </h4>\r\n              <p class=\"showOne\">Dept : <b>{{ candidate.dept }}</b></p>\r\n            </div>\r\n            <div class=\"caption card-footer\">\r\n              <ul class=\"list-inline\">\r\n                <li><button (click)=\"vote_add(candidate)\" *ngIf=\"!vote_local && !vote_status\" class=\"btn btn-success\">\r\n                  <i class=\"fas fa-thumbs-up\"></i> Vote this<br/> candidate\r\n                </button></li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><!-- row -->\r\n\r\n\r\n  <ul class=\"pagination\">\r\n    <li class=\"active\"><a href=\"vote-page\">President</a></li>\r\n    <li ><a href=\"vice-president\">Vice President</a></li>\r\n    <li><a href=\"general-secretary\">General Secretary</a></li>\r\n    <li><a href=\"joint-secretary\">Joint Secretary</a></li>\r\n    <li><a href=\"treasurer\">Treasurer</a></li>\r\n    <li><a href=\"member\">Members</a></li>\r\n\r\n  </ul>\r\n\r\n\r\n</div> <!-- container grid -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/vote-page/vote-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidate_service__ = __webpack_require__("./src/app/services/candidate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voter__ = __webpack_require__("./src/app/models/voter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VotePageComponent = /** @class */ (function () {
    function VotePageComponent(authService, candidateService, router, voterService) {
        this.authService = authService;
        this.candidateService = candidateService;
        this.router = router;
        this.voterService = voterService;
        this.vote_local = false;
        this.vote_status = false;
        this.candidates = new Array();
        this.temp_candidates = new Array();
        this.voter = new __WEBPACK_IMPORTED_MODULE_4__models_voter__["a" /* Voter */]();
        this.id = null;
        this.published = false;
    }
    VotePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        // localStorage.setItem('president_vote','false');
        var vote_temp2 = localStorage.getItem('president_vote');
        this.vote_local = (vote_temp2 == "true");
        var vote_temp = localStorage.getItem('status');
        this.vote_status = (vote_temp == "true");
        this.searchKey = "President";
        console.log('At search = ' + this.searchKey);
        this.candidateService.getSearchCandidate(this.searchKey)
            .subscribe(function (res) {
            var j = 0;
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].position == "President") {
                    _this.temp_candidates[j] = res.data[i];
                    j++;
                }
            }
            _this.candidates = _this.temp_candidates;
            console.log(_this.temp_candidates);
            // console.log(this.candidates);
        });
        // changing status starts
        if (true) {
            this.id = localStorage.getItem('loginId');
            this.voterService.getSingleVoter(this.id)
                .subscribe(function (res) {
                _this.voter = res.data;
                console.log(_this.voter);
            });
        }
        if (localStorage.getItem('member_vote') == "true" &&
            localStorage.getItem('president_vote') == "true" &&
            localStorage.getItem('vice_president_vote') == "true" &&
            localStorage.getItem('general_secretary_vote') == "true" &&
            localStorage.getItem('joint_secretary_vote') == "true" &&
            localStorage.getItem('treasurer_vote') == "true") {
            console.log('hello true');
            localStorage.setItem('status', 'true');
            this.voter.status = true;
            this.voterService.updateStatus(this.voter)
                .subscribe(function (res) {
                console.log(res);
                // this.router.navigate([`photo-upload-candidate/${res.data._id}`]);
            });
        }
        // changing status ends
    };
    VotePageComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    VotePageComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    VotePageComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    VotePageComponent.prototype.viewCandidate = function (candidate) {
        this.router.navigate(["view-candidate2/" + candidate._id]);
    };
    VotePageComponent.prototype.vote_add = function (candidate) {
        var _this = this;
        var r = confirm('Are you sure? You can not change the vote!');
        if (r == true) {
            // console.log(candidate);
            this.candidateService.updateVote(candidate._id)
                .subscribe(function (res) {
                console.log(res.data);
                localStorage.setItem('president_vote', 'true');
                _this.ngOnInit();
                _this.router.navigate(['vice-president']);
            });
        }
    };
    VotePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vote-page',
            template: __webpack_require__("./src/app/components/vote-page/vote-page.component.html"),
            styles: [__webpack_require__("./src/app/components/vote-page/vote-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_candidate_service__["a" /* CandidateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_voter_service__["a" /* VoterService */]])
    ], VotePageComponent);
    return VotePageComponent;
}());



/***/ }),

/***/ "./src/app/components/voter-list/voter-list.component.css":
/***/ (function(module, exports) {

module.exports = "th{\r\n  text-align: center;\r\n}\r\ntd{\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-size: 120%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/voter-list/voter-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"home\"><i class=\"fas fa-home\"></i> Home</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"candidate-list\"><b><i class=\"fas fa-list\"></i> Candidate List</b><span class=\"sr-only\">(current)</span></a></li>\r\n          <li *ngIf=\"!authService.isAdmin() && authService.isLoggedIn()\"><a href=\"voter-page\"> <i class=\"fas fa-list\"></i> Vote Now</a></li>\r\n          <li  class=\"active\" *ngIf=\"authService.isAdmin()\"><a href=\"voter-list\"> <i class=\"fas fa-list\"></i> Voters List</a></li>\r\n          <li *ngIf=\"authService.isAdmin()\"><a href=\"canvassing-report\"><i class=\"far fa-chart-bar\"></i>  Canvassing Report</a></li>\r\n          <li *ngIf=\"authService.isLoggedIn() && published || authService.isAdmin()\"><a href=\"result\"><i class=\"far fa-chart-bar\"></i>  Result </a></li>\r\n          <!--<li *ngIf=\"authService.isAdmin()\"><a href=\"#\"> <i class=\"fas fa-history\"></i>  History Log</a></li>-->\r\n          <li><a href=\"about\"><i class=\"fab fa-adn\"></i> About</a></li>\r\n        </ul>\r\n\r\n        <form class=\"navbar-form navbar-right\">\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"loginPage()\" type=\"submit\" class=\"btn btn-warning\">User Login</button>\r\n          <button  *ngIf=\"!authService.isLoggedIn()\" (click)=\"adminPage()\" type=\"submit\" class=\"btn btn-sm btn-warning\">Admin Login</button>\r\n          <button *ngIf=\"authService.isLoggedIn()\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-warning\">Logout</button>\r\n        </form>\r\n\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n\r\n\r\n\r\n  <div style=\"margin-left: -1px\" id=\"loginbox\" style=\"margin-top:10px;\" class=\"mainbox col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"panel panel-info\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n            <button (click)=\"ngOnInit()\" type=\"button\" class=\"btn btn-default\">All</button>\r\n            <button (click)=\"voted()\" type=\"button\" class=\"btn btn-default\">Voted Voters</button>\r\n            <button (click)=\"unvoted()\" type=\"button\" class=\"btn btn-default\">UnVoted Voters</button>\r\n            <button (click)=\"addVoter()\" type=\"button\" class=\"btn btn-default\"><i class=\"fas fa-plus\"></i> Add Voters</button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel-body\" >\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n\r\n        <nav class=\"navbar navbar-default\">\r\n\r\n          <form class=\"navbar-form navbar-left\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#\">Items Per Page</a></li>\r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Default<span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\">5</a></li>\r\n                    <li><a href=\"#\">10</a></li>\r\n                    <li><a href=\"#\">15</a></li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </form>\r\n\r\n          <form class=\"navbar-form navbar-right\" role=\"search\">\r\n            <div class=\"form-group\">\r\n\r\n\r\n              <input style=\"margin-right: 5px\" type=\"text\" class=\"form-control\" placeholder=\"Search Here\">\r\n            </div>\r\n          </form>\r\n        </nav>\r\n\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr style=\"background-color: #f2f2f8\">\r\n              <th>Firstname</th>\r\n              <th>Lastname</th>\r\n              <th>Dept.</th>\r\n              <th>Photo</th>\r\n              <th>Status</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let voter of voters\">\r\n            <tr>\r\n              <td>{{voter.firstName}}</td>\r\n              <td>{{voter.lastName}}</td>\r\n              <td>{{voter.dept}}</td>\r\n              <td ><img src=\"{{voter.picture}}\" height=\"50px\" width=\"50px\" alt=\"no photo\"></td>\r\n              <td *ngIf=\"!voter.status\">Unvoted</td>\r\n              <td *ngIf=\"voter.status\">Voted</td>\r\n              <td><button (click)=\"deleteVoter(voter)\" class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i> delete</button></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/voter-list/voter-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_voter_service__ = __webpack_require__("./src/app/services/voter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoterListComponent = /** @class */ (function () {
    // newVoters: any = [];
    function VoterListComponent(voterService, router, authService) {
        this.voterService = voterService;
        this.router = router;
        this.authService = authService;
        this.published = false;
        this.voters = new Array();
        this.newVoters = new Array();
        this.backupVoters = new Array();
    }
    VoterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('published') == "true") {
            this.published = true;
        }
        if (localStorage.getItem('is_member_visited') == "true") {
            localStorage.setItem('member_vote', 'true');
        }
        this.voterService.getVoter()
            .subscribe(function (res) {
            _this.voters = res.data;
            _this.backupVoters = res.data;
            // console.log(this.voters);
        });
    };
    VoterListComponent.prototype.deleteVoter = function (voter) {
        var _this = this;
        this.voterService.deleteVoter(voter._id).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.voters.splice(_this.voters.indexOf(voter), 1);
            }
        });
    };
    VoterListComponent.prototype.addVoter = function () {
        this.router.navigate(['add-voter']);
    };
    VoterListComponent.prototype.logOut = function () {
        this.authService.logout();
        // this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
        return false;
    };
    VoterListComponent.prototype.loginPage = function () {
        this.router.navigate(['login']);
    };
    VoterListComponent.prototype.adminPage = function () {
        this.router.navigate(['admin']);
    };
    VoterListComponent.prototype.voted = function () {
        this.newVoters = [];
        var j = 0;
        var max_length = this.backupVoters.length;
        for (var i = 0; i < max_length; i++) {
            if (this.backupVoters[i].status == true) {
                this.newVoters[j] = this.backupVoters[i];
                j++;
                // console.log('true it\'s' + i);
            }
        }
        this.voters = this.newVoters;
        console.log(this.voters);
    };
    VoterListComponent.prototype.unvoted = function () {
        this.newVoters = [];
        var j = 0;
        var max_length = this.backupVoters.length;
        for (var i = 0; i < max_length; i++) {
            if (this.backupVoters[i].status == false) {
                this.newVoters[j] = this.backupVoters[i];
                j++;
                // console.log('true it\'s' + i);
            }
        }
        this.voters = this.newVoters;
        console.log(this.voters);
    };
    VoterListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-voter-list',
            template: __webpack_require__("./src/app/components/voter-list/voter-list.component.html"),
            styles: [__webpack_require__("./src/app/components/voter-list/voter-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_voter_service__["a" /* VoterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], VoterListComponent);
    return VoterListComponent;
}());



/***/ }),

/***/ "./src/app/models/candidate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidate; });
var Candidate = /** @class */ (function () {
    function Candidate() {
    }
    return Candidate;
}());



/***/ }),

/***/ "./src/app/models/voter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Voter; });
var Voter = /** @class */ (function () {
    function Voter() {
    }
    return Voter;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    AdminService.prototype.getSingleAdmin = function () {
        var id = '5b2db5832c038408600e61ee';
        return this.http.get("api/admin/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    AdminService.prototype.isPublished = function () {
        var id = '5b2db5832c038408600e61ee';
        return this.http.post("api/admin/publish/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:5500/user', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('auth/loginregister', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateAdmin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('auth/adminlogin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSiingleProfile = function (loginId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-type', 'application/json');
        return this.http.get("http://localhost:5500/user/" + loginId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.UpdateProfile = function (loginId, User) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        // console.log('In service upadte'+ JSON.stringify(User));
        headers.append('Content-type', 'application/json');
        return this.http.patch("http://localhost:5500/user/" + loginId, User, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:5500/user', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteProfile = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log('In delete profile');
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete("http://localhost:5500/user/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserDatta = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isLoggedIn = function () {
        try {
            var token = localStorage.getItem('id_token');
            this.authToken = token;
        }
        catch (e) {
            return false;
        }
        if (this.authToken) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isAdmin = function () {
        var isAdmin = false;
        try {
            isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
        }
        catch (e) {
            return false;
        }
        if (isAdmin) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/candidate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateService = /** @class */ (function () {
    function CandidateService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CandidateService.prototype.getCandidate = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate", this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.getSingleCandidate = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.registerCandidate = function (candidate) {
        console.log('register candidate: ');
        console.log(candidate);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate", candidate, this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.deleteCandidate = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.updateCandidate = function (candidate) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate/" + candidate._id, candidate, this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.getSearchCandidate = function (id) {
        // console.log('at get Search service:' + id );
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get("api/candidate/search/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CandidateService.prototype.updateVote = function (id) {
        // console.log(id);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/candidate/VoteUpdate/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    CandidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/services/password-validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidationService; });
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

var PasswordValidationService = /** @class */ (function () {
    function PasswordValidationService() {
    }
    PasswordValidationService.prototype.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    PasswordValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PasswordValidationService);
    return PasswordValidationService;
}());



/***/ }),

/***/ "./src/app/services/vote-publish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePublishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VotePublishService = /** @class */ (function () {
    function VotePublishService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    VotePublishService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], VotePublishService);
    return VotePublishService;
}());



/***/ }),

/***/ "./src/app/services/voter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoterService = /** @class */ (function () {
    function VoterService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    VoterService.prototype.getVoter = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'applicationn/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/voter", this.options)
            .map(function (res) { return res.json(); });
    };
    VoterService.prototype.getSingleVoter = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/voter/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    VoterService.prototype.registerVoter = function (voter) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/voter", voter, this.options)
            .map(function (res) { return res.json(); });
    };
    VoterService.prototype.deleteVoter = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/voter/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    VoterService.prototype.updateStatus = function (voter) {
        console.log('voter id: ');
        var id = localStorage.getItem('loginId');
        return this.http.patch("api/voter/" + id, voter, this.options)
            .map(function (res) { return res.json(); });
    };
    VoterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], VoterService);
    return VoterService;
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
    production: false,
    baseUrl: 'api'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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