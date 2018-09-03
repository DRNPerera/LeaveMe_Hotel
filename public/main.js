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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br><br><br>\n<div class=\"container\">\n\t   <flash-messages></flash-messages>\n\t  \n</div>\n\n<router-outlet></router-outlet>\n\n\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage-users/manage-users.component */ "./src/app/components/manage-users/manage-users.component.ts");
/* harmony import */ var _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage-leaves/manage-leaves.component */ "./src/app/components/manage-leaves/manage-leaves.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/request-leaves/request-leaves.component */ "./src/app/components/request-leaves/request-leaves.component.ts");
/* harmony import */ var _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/leave-history/leave-history.component */ "./src/app/components/leave-history/leave-history.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/report-genaration/report-genaration.component */ "./src/app/components/report-genaration/report-genaration.component.ts");
/* harmony import */ var _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view-user/view-user.component */ "./src/app/components/view-user/view-user.component.ts");
/* harmony import */ var _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manage-admin/manage-admin.component */ "./src/app/components/manage-admin/manage-admin.component.ts");
/* harmony import */ var _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-user/update-user.component */ "./src/app/components/update-user/update-user.component.ts");
/* harmony import */ var _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/update-post/update-post.component */ "./src/app/components/update-post/update-post.component.ts");
/* harmony import */ var _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/create-pdf/create-pdf.component */ "./src/app/components/create-pdf/create-pdf.component.ts");
/* harmony import */ var _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/control-dates/control-dates.component */ "./src/app/components/control-dates/control-dates.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'manageUsers', component: _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__["ManageUsersComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['All'] } },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'requestLeaves', component: _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__["RequestLeavesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin&Staff'] } },
    { path: 'leaveHistory', component: _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__["LeaveHistoryComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin&Staff'] } },
    { path: 'addPost', component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__["AddPostComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head&Admin'] } },
    { path: 'reportGenaration', component: _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__["ReportGenarationComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'manageLeaves', component: _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__["ManageLeavesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'viewUser', component: _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__["ViewUserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'manageAdmin', component: _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__["ManageAdminComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'updateUser', component: _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__["UpdateUserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'updatePost', component: _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__["UpdatePostComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head&Admin'] } },
    { path: 'createPDF', component: _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__["CreatePDFComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'controlDates', component: _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__["ControlDatesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__["ManageUsersComponent"],
                _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__["ManageLeavesComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__["RequestLeavesComponent"],
                _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__["LeaveHistoryComponent"],
                _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__["AddPostComponent"],
                _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__["ReportGenarationComponent"],
                _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__["ViewUserComponent"],
                _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__["ManageAdminComponent"],
                _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__["UpdateUserComponent"],
                _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__["UpdatePostComponent"],
                _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__["CreatePDFComponent"],
                _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__["ControlDatesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(applicationRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _services_request_service__WEBPACK_IMPORTED_MODULE_26__["RequestService"], _services_post_service__WEBPACK_IMPORTED_MODULE_25__["PostService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"], _services_message_service__WEBPACK_IMPORTED_MODULE_28__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-post/add-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\ninput[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\nbutton[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ntextarea{\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid gray;\n    border-radius: 10px;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Add News</h2>\n\t<form #frm=\"ngForm\" (ngSubmit) = \"addPost(frm)\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>About</label>\n\t\t\t<input type=\"text\" name =\"about\" class = \"form-control\" ngModel #aboutPost=\"ngModel\" required maxlength=\"80\" minlength=\"5\" placeholder=\"Headline(at least 5 letters and less than 80\">\n\t\t</div>\n\t\t    <div *ngIf=\"aboutPost?.touched && aboutPost.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"aboutPost.errors?.required\">\n\t\t\t\t\tHeadline is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"aboutPost.errors?.minlength\">\n\t\t\t\t\tInvalid Headline\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Content</label><br>\n\t\t\t<textarea name =\"content\" rows=\"6\" cols=\"10\" class = \"form-control\" ngModel #contentPost=\"ngModel\" required maxlength=\"500\" minlength=\"10\" placeholder=\"Content......(at least 10 letters and less than 500)\">></textarea>\n\t\t</div>\n\t\t    <div *ngIf=\"contentPost?.touched && contentPost.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t    <div *ngIf=\"contentPost.errors?.required\">\n\t\t\t\t\tContent is Required\n\t\t\t    </div>\n\t\t\t    <div *ngIf=\"contentPost.errors?.minlength\">\n\t\t\t\t\tInvalid Content\n\t\t\t\t</div>\n\t\t    </div>\n\t\t\n\t\t<button type=\"submit\" name=\"button\" class =\"btn btn-success\" [disabled]=\"frm.invalid\">Submit</button>\n\t</form>\n  </div>\n</div>\n<hr>\n<div class = \"container\">\n<h2 class = \"page-header\">All News List</h2>\n<br>\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Publish On</th>\n\t\t\t   <th>About</th>\n\t\t\t   <th>Delete</th>\n\t\t\t   <th>Update</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let post of posts\">\n\t\t\t   <td>{{post.name}}</td>\n\t\t\t   <td>{{post.post}}</td>\n\t\t\t   <td>{{post.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t   <td>{{post.about}}</td>\n\t\t\t   <td><input type=\"button\" (click) = \"deletePost(post._id)\" value= \"Delete\" class =\"btn btn-danger\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t   <td><input type=\"button\" (click) = \"updatePost(post._id)\" value= \"Edit\" class =\"btn btn-warning\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(postService, authService, flashMessage, router) {
        this.postService = postService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    AddPostComponent.prototype.addPost = function (form) {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: form.value.about,
            content: form.value.content
        };
        this.postService.sendPost(post).subscribe(function (request) {
            if (request.state) {
                _this.posts.push(request);
                _this.postService.getAllPost().subscribe(function (request) {
                    _this.posts = request;
                });
            }
            else {
                _this.flashMessage.show(request.msg, { cssClass: 'alert-danger', times: 3000 });
            }
        });
    };
    AddPostComponent.prototype.deletePost = function (id) {
        var post = this.posts;
        this.postService.deletePost(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < post.length; i++) {
                    if (post[i]._id == id) {
                        post.splice(i, 1);
                    }
                }
            }
        });
    };
    AddPostComponent.prototype.updatePost = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updatePost"], navigationExtras);
    };
    AddPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/components/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/components/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Select Dates</h2>\n\t<form (submit) = \"blockDate()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"date\"  [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.ts ***!
  \*********************************************************************/
/*! exports provided: ControlDatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlDatesComponent", function() { return ControlDatesComponent; });
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

var ControlDatesComponent = /** @class */ (function () {
    function ControlDatesComponent() {
    }
    ControlDatesComponent.prototype.ngOnInit = function () {
    };
    ControlDatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-dates',
            template: __webpack_require__(/*! ./control-dates.component.html */ "./src/app/components/control-dates/control-dates.component.html"),
            styles: [__webpack_require__(/*! ./control-dates.component.css */ "./src/app/components/control-dates/control-dates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlDatesComponent);
    return ControlDatesComponent;
}());



/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" id=\"content\" #content>\n\t<div *ngIf=\"user\">\n\t\t<h1 class = \"page-header\">Leaves of {{user.full_name}}</h1>\n\t\t<br>\n\t\t<h3>Post : {{user.post}}</h3>\n\t\t<h3>Contact : {{user.phone}}</h3>\n\t\t<h3>Email : {{user.email}}</h3>\n\t\t<br><br>\n\t\t\n\t\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Requested On</th>\n\t\t\t   <th>Leave Dates</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>State</th>\n\t\t\t   <th>Response On</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let hry of history\">\n\t\t\t   <td>{{hry.req_on | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t   <td>{{hry.date.split(',')[0] | date}} - {{hry.date.split(',')[1] | date}}</td>\n\t\t\t   <td>{{hry.reason}}</td>\n\t\t\t   <td style=\"color:red;\">{{hry.state}}</td>\n\t\t\t   <td>{{hry.state}} on {{hry.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t</tr>\n\t\t\t\n\t\t</table>\n\t\t<br><br>\n\n\t\t<div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-success\" style=\"border: 1px solid #4d4d4d;\">\n\t    </div>\n\t    <div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"downloadPFD()\" value= \"Download PDF\" class =\"btn btn-success\" style=\"border: 1px solid #4d4d4d;\">\n\t    </div>\n\t</div>    \n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.ts ***!
  \***************************************************************/
/*! exports provided: CreatePDFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePDFComponent", function() { return CreatePDFComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreatePDFComponent = /** @class */ (function () {
    function CreatePDFComponent(route, requestService, authService, router) {
        var _this = this;
        this.route = route;
        this.requestService = requestService;
        this.authService = authService;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
            _this.email = params["email"];
        });
    }
    CreatePDFComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserToUpdate(this.id).subscribe(function (user) {
            _this.user = user;
        });
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    CreatePDFComponent.prototype.downloadPFD = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save(this.user.full_name);
    };
    CreatePDFComponent.prototype.redirectBack = function () {
        this.router.navigate(['/reportGenaration']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreatePDFComponent.prototype, "content", void 0);
    CreatePDFComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-pdf',
            template: __webpack_require__(/*! ./create-pdf.component.html */ "./src/app/components/create-pdf/create-pdf.component.html"),
            styles: [__webpack_require__(/*! ./create-pdf.component.css */ "./src/app/components/create-pdf/create-pdf.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreatePDFComponent);
    return CreatePDFComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh5{\n    color:red;\n}\n\n.frame{\n    width:190px;\n    padding:10px;\n    border:1px solid gray;\n    margin:0;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.head{\n    width:170px;\n    font-size: 13px;\n    color: blue;\n    padding:10px;\n    margin:0;\n    background-color: #d9d9d9;\n    border-radius: 10px;\n    border:1px solid #cccccc;\n}\n\n.about{\n    width:928px;\n    font-size: 20px;\n    color: blue;\n    padding:10px;\n    margin:0;\n    background-color: #d9d9d9;\n    border-radius: 10px;\n    border:1px solid #cccccc;\n}\n\n.content{\n    width:950px;\n    font-size: 15px;\n    color: black;\n    padding:10px;\n    margin:0;\n    background-color: white;\n    border-radius: 10px;\n    border:1px solid #cccccc;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div class=\"jumbotron\" style=\"width: 100%; height: 600px; background-color:#e6e6e6; border: 1px solid gray;\n\t\t         border-radius: 10px;\" align=\"center\">\n\t\t<div class=\"content\" style=\"height: 533px;\">\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<img style=\"width:180px;height: 180px;\" src=\"assets/image/image.jpg\" alt=\"image\">\n\t\t\t<div class=\"container\" align=\"center\">\n\t\t\t\t<h2>University of Colombo School of Computing</h2>\n\t\t\t\t<br>\n\t\t\t\t<h5 style=\"color: black;\">Welcome to the Virtual Requesting Leaves Environment for the UCSC Staff Members 2017/2018</h5>\n\t\t\t\t<h5 style=\"color: black;\">UCSC කාර්ය මණ්ඩලයේ සාමාජිකයන් සඳහා වන අතථ්‍ය නිවාඩු ඉල්ලීම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!</h5>\n\t\t\t\t<h5 style=\"color: black;\">UCSC ஊழியர்கள் உறுப்பினர்கள் மெய்நிகர் கோரிக்கை விடுப்பு சூழலுக்கு வரவேற்கிறோம்</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<h3>Site announcements</h3>\n\n\n\t<div *ngFor=\"let post of posts\">\n\t\t<div class=\"jumbotron\" style=\"width: 100%; background-color:#e6e6e6; border: 1px solid gray;\n\t         border-radius: 10px;\" align=\"center\">\n\t\t\t<div class=\"container\" align=\"left\" style=\"color:black;font-size: 15px;\">\n\t\t\t\t<div class=\"content\">\n\t\t\t\t\t<div class=\"about\">\n\t\t\t\t\t\t<div style=\"color: black; font-size: 20px;\">{{post.about}}</div>\n\t\t\t\t\t\t<p style=\"color: black; font-size: 15px;\">by\n\t\t\t\t\t\t\t<span style=\"color: blue;\">{{post.name}}({{post.post}}) </span>-\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span style=\"color:blue;\">{{post.created_at | date:\"MMMM d, y\"}} </span>\n\t\t\t\t\t\t\t<span>at </span>\n\t\t\t\t\t\t\t<span style=\"color:blue;\">{{post.created_at | date:\"h:mm:ss a\"}}</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br> {{post.content}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\">Leaves History</h2>\n\t<br><br>\n\t<table>\n\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t<th>Requested On</th>\n\t\t\t<th>Leave Dates</th>\n\t\t\t<th>Reason</th>\n\t\t\t<th>State</th>\n\t\t\t<th>Response On</th>\n\t    </tr>\n\t\t\t  \n\t    <tr *ngFor = \"let hry of history\">\n\t    \t<td>{{hry.req_on | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t<td>{{hry.date.split(',')[0] | date}} - {{hry.date.split(',')[1] | date}}</td>\n\t\t\t<td>{{hry.reason}}</td>\n\t\t\t<th style=\"color:red;\">{{hry.state}}</th>\n\t\t\t<td>{{hry.state}} on {{hry.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaveHistoryComponent = /** @class */ (function () {
    function LeaveHistoryComponent(authService, requestService) {
        this.authService = authService;
        this.requestService = requestService;
    }
    LeaveHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.authService.getAuthEmail();
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    LeaveHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-history',
            template: __webpack_require__(/*! ./leave-history.component.html */ "./src/app/components/leave-history/leave-history.component.html"),
            styles: [__webpack_require__(/*! ./leave-history.component.css */ "./src/app/components/leave-history/leave-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], LeaveHistoryComponent);
    return LeaveHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\nbutton[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ninput[type=password] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\ninput[type=email] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n<br><br>\n<div class = \"container\" align=\"center\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid white;\n    border-radius: 10px; border: 1px solid gray;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Login</h2>\n\t<br>\n\t<form #frm=\"ngForm\" (ngSubmit) = \"loginUser(frm)\">\n\t\t<div class = \"form-group\">\n\t\t\t<input type=\"text\" name =\"email\" class = \"form-control\" ngModel #emailUser=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{3})+$\" placeholder=\"Enter your e-mail\">\n\t\t</div>\n\t\t\t<div *ngIf=\"emailUser?.touched && emailUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"emailUser.errors?.required\">\n\t\t\t\t\tEmail is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"emailUser.errors?.pattern\">\n\t\t\t\t\tInvalid Email\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br>\n\t\t<div class = \"form-group\">\n\t\t\t<input type=\"password\" name =\"password\" class = \"form-control\" ngModel #passwordUser=\"ngModel\" required maxlength=\"35\" minlength=\"8\" placeholder=\"Enter your password\">\n\t\t</div>\n\t\t\t<div *ngIf=\"passwordUser?.touched && passwordUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.required\">\n\t\t\t\t\tPassword is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.minlength\">\n\t\t\t\t\tInvalid Password\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<br>\n\t\t<button type=\"submit\" name=\"button\" class =\"btn btn-success\" [disabled]=\"frm.invalid\">Login</button>\n\t</form>\n </div>\t\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (form) {
        var _this = this;
        var user = {
            email: form.value.email,
            password: form.value.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.storeData(res.token, res.id, res.name, res.level, res.email, res.post);
                _this.flashMessage.show("You're Loggedin", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\ninput[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\nbutton[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ninput[type=password] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\ninput[type=email] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid gray;\n    border-radius: 10px;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Register Users</h2>\n\t<form #frm=\"ngForm\" (ngSubmit) = \"registerData(frm)\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" name =\"full_name\" class = \"form-control\" ngModel #nameUser=\"ngModel\" required pattern=\"[a-zA-Z][a-zA-Z]+[ ]+[a-zA-Z][a-zA-Z]+\" placeholder=\"FirstName  LastName\">\n\t\t</div>\n\t\t    <div *ngIf=\"nameUser?.touched && nameUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"nameUser.errors?.required\">\n\t\t\t\t\tName is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"nameUser.errors?.pattern\">\n\t\t\t\t\tInvalid Name\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" name =\"phone\" class = \"form-control\" ngModel #phoneUser=\"ngModel\" required maxlength=\"10\" minlength=\"10\" pattern=\"[0][0-9]*\" placeholder=\"0xxxxxxxxx\">\n\t\t</div>\n\t\t\t<div *ngIf=\"phoneUser?.touched && phoneUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"phoneUser.errors?.required\">\n\t\t\t\t\tPhone Number is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"phoneUser.errors?.pattern || phoneUser.errors?.minlength\">\n\t\t\t\t\tInvalid Phone Number\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" name =\"email\" class = \"form-control\" ngModel #emailUser=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{3})+$\" placeholder=\"example@gmail.com\">\n\t\t</div>\n\t\t\t<div *ngIf=\"emailUser?.touched && emailUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"emailUser.errors?.required\">\n\t\t\t\t\tEmail is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"emailUser.errors?.pattern\">\n\t\t\t\t\tInvalid Email\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" name =\"password\" class = \"form-control\" ngModel #passwordUser=\"ngModel\" required maxlength=\"35\" minlength=\"8\" placeholder=\"At least 8 characters\">\n\t\t</div>\n\t\t\t<div *ngIf=\"passwordUser?.touched && passwordUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.required\">\n\t\t\t\t\tPassword is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.minlength\">\n\t\t\t\t\tInvalid Password\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Level</label>\n\t\t\t<input type=\"text\" name=\"state\" class=\"form-control\" ngModel #levelUser=\"ngModel\" required pattern=\"[0 || 1 || 2]\" placeholder=\"Head:0  Admin:1  Staff:2\">\n\t\t</div>\n\t\t    <div *ngIf=\"levelUser?.touched && levelUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"levelUser.errors?.required\">\n\t\t\t\t\tLevel is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"levelUser.errors?.pattern\">\n\t\t\t\t\tInvalid Level\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t<button type=\"submit\" name=\"button\" class =\"btn btn-success\" [disabled]=\"frm.invalid\">Submit</button>\n\t</form>\n  </div>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Contact</th>\n\t\t\t   <th>Delete</th>\n\t\t\t   <th>Update</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.phone}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\" style=\"border: 1px solid #4d4d4d;\"></th>\n\t\t\t   <th><input type=\"button\" (click) = \"updateUser(user._id)\" value= \"Edit\" class =\"btn btn-warning\" style=\"border: 1px solid #4d4d4d;\"></th>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function() { return ManageAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageAdminComponent.prototype.registerData = function (form) {
        var _this = this;
        this.checkPost(form);
        var user = {
            full_name: form.value.full_name,
            post: this.post,
            phone: form.value.phone,
            email: form.value.email,
            password: form.value.password,
            state: form.value.state
        };
        this.authService.registerUser(user).subscribe(function (user) {
            if (user.state) {
                _this.users.push(user);
                _this.authService.getAllUsers().subscribe(function (user) {
                    _this.users = user;
                });
            }
            else {
                _this.flashMessage.show(user.msg, { cssClass: 'alert-danger', times: 3000 });
            }
        });
    };
    ManageAdminComponent.prototype.checkPost = function (form) {
        if (form.value.state == '0') {
            this.post = 'head';
        }
        else if (form.value.state == '1') {
            this.post = 'admin';
        }
        else if (form.value.state == '2') {
            this.post = 'staff';
        }
    };
    ManageAdminComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageAdminComponent.prototype.updateUser = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updateUser"], navigationExtras);
    };
    ManageAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-admin',
            template: __webpack_require__(/*! ./manage-admin.component.html */ "./src/app/components/manage-admin/manage-admin.component.html"),
            styles: [__webpack_require__(/*! ./manage-admin.component.css */ "./src/app/components/manage-admin/manage-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2 class = \"page-header\">All Requested Leaves</h2>\n<br><br>\t\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Requested On</th>\n\t\t\t   <th>Leave Dates</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>View</th>\n\t\t\t   <th>Accept</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let request of requests\">\n\t\t\t   <td>{{request.name}}</td>\n\t\t\t   <td>{{request.post}}</td>\n\t\t\t   <td>{{request.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t   <td>{{request.date.split(',')[0] | date}} - {{request.date.split(',')[1] | date}}</td>\n\t\t\t   <td>{{request.reason}}</td>\n\t\t\t   <td>{{request.describe}}</td>\n\t\t\t   <td><input type=\"button\" (click) = \"viewUser(request.email)\" value= \"History\" class =\"btn btn-success\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t   <td><input type=\"button\" (click) = \"acceptRequest(request)\" value= \"Accept\" class =\"btn btn-warning\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t   <td><input type=\"button\" (click) = \"deleteRequest(request)\" value= \"Cancel\" class =\"btn btn-danger\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeavesComponent", function() { return ManageLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageLeavesComponent = /** @class */ (function () {
    function ManageLeavesComponent(requestService, flashMessage, router, messageService) {
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.messageService = messageService;
    }
    ManageLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getAllRequest().subscribe(function (request) {
            _this.requests = request;
        });
    };
    ManageLeavesComponent.prototype.acceptRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.acceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Accepted Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.messageService.selectedMessage = {
                    _id: null,
                    telephoneNo: "+94710107019" //telephoneNo:form.value.telephone
                };
                _this.messageService.postMessage(_this.messageService.selectedMessage).subscribe(function (res) {
                    console.log('done');
                });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.notacceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Not Accepted ", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.viewUser = function (email) {
        var navigationExtras = {
            queryParams: {
                "email": email
            }
        };
        this.router.navigate(["/viewUser"], navigationExtras);
    };
    ManageLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-leaves',
            template: __webpack_require__(/*! ./manage-leaves.component.html */ "./src/app/components/manage-leaves/manage-leaves.component.html"),
            styles: [__webpack_require__(/*! ./manage-leaves.component.css */ "./src/app/components/manage-leaves/manage-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ManageLeavesComponent);
    return ManageLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\ninput[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\nbutton[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ninput[type=password] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\ninput[type=email] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 40%;\n}\n"

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid gray;\n    border-radius: 10px;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Register Staff</h2>\n\t<form #frm=\"ngForm\" (ngSubmit) = \"registerData(frm)\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" name =\"full_name\" class = \"form-control\" ngModel #nameUser=\"ngModel\" required pattern=\"[a-zA-Z][a-zA-Z]+[ ]+[a-zA-Z][a-zA-Z]+\" placeholder=\"FirstName  LastName\">\n\t\t</div>\n\t\t\t<div *ngIf=\"nameUser?.touched && nameUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"nameUser.errors?.required\">\n\t\t\t\t\tName is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"nameUser.errors?.pattern\">\n\t\t\t\t\tInvalid Name\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" name =\"phone\" class = \"form-control\" ngModel #phoneUser=\"ngModel\" required maxlength=\"10\" minlength=\"10\" pattern=\"[0][0-9]*\" placeholder=\"0xxxxxxxxx\">\n\t\t</div>\n\t\t\t<div *ngIf=\"phoneUser?.touched && phoneUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"phoneUser.errors?.required\">\n\t\t\t\t\tPhone Number is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"phoneUser.errors?.pattern || phoneUser.errors?.minlength\">\n\t\t\t\t\tInvalid Phone Number\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" name =\"email\" class = \"form-control\" ngModel #emailUser=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{3})+$\" placeholder=\"example@gmail.com\">\n\t\t</div>\n\t\t\t<div *ngIf=\"emailUser?.touched && emailUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"emailUser.errors?.required\">\n\t\t\t\t\tEmail is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"emailUser.errors?.pattern\">\n\t\t\t\t\tInvalid Email\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" name =\"password\" class = \"form-control\" ngModel #passwordUser=\"ngModel\" required maxlength=\"35\" minlength=\"8\" placeholder=\"at least 8 characters\">\n\t\t</div>\n\t\t\t<div *ngIf=\"passwordUser?.touched && passwordUser.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.required\">\n\t\t\t\t\tPassword is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"passwordUser.errors?.minlength\">\n\t\t\t\t\tInvalid Password\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t<button type=\"submit\" name=\"button\" class =\"btn btn-success\" [disabled]=\"frm.invalid\">Submit</button>\n\t</form>\n\n  </div>\t\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Contact</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.phone}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\" style=\"border: 1px solid #4d4d4d;\"></th>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageUsersComponent.prototype.registerData = function (form) {
        var _this = this;
        var user = {
            full_name: form.value.full_name,
            post: 'staff',
            phone: form.value.phone,
            email: form.value.email,
            password: form.value.password,
            state: '2'
        };
        this.authService.registerUser(user).subscribe(function (user) {
            if (user.state) {
                _this.users.push(user);
                _this.authService.getUser().subscribe(function (user) {
                    _this.users = user;
                });
            }
            else {
                _this.flashMessage.show(user.msg, { cssClass: 'alert-danger', times: 3000 });
            }
        });
    };
    ManageUsersComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/components/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.css */ "./src/app/components/manage-users/manage-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu{\n\tbackground-color: #004d66;\n}\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n<nav class=\"navbar navbar-inverse\" style=\"background-color:#004d66; height: 60px; font-size: 17px;\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\" >\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a style=\"color:white;\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a style=\"color:black;\" [routerLink]=\"['/login']\">You are not logged in.(<span style=\"color: white;\">Log in</span><span>)</span></a></li>\n\n        <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:black;background-color: #004d66\">You are logged in as <span style=\"color: white;\"> {{user.getAuthName()}} </span><span>(</span><span style=\"color: white;\">Log out</span><span>)</span><span class=\"caret\" style=\"color: white;\"></span></a>\n        \n          <ul class=\"dropdown-menu\">\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin() || authService.isHead()\"><a style=\"color:black;\" [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a style=\"color:black;\" [routerLink]=\"['/requestLeaves']\">Request Leaves</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a style=\"color:black;\" [routerLink]=\"['/leaveHistory']\">History of Leaves</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a style=\"color:black;\" [routerLink]=\"['/manageUsers']\">Manage Staff</a></li>\n            <li *ngIf=\"authService.isAdmin() || authService.isHead()\"><a style=\"color:black;\" [routerLink]=\"['/addPost']\">Add News</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a style=\"color:black;\" [routerLink]=\"['/reportGenaration']\">Report Genaration</a></li>\n            <li *ngIf=\"authService.isHead()\"><a style=\"color:black;\" [routerLink]=\"['/manageAdmin']\">Manage Users</a></li>\n            <li *ngIf=\"authService.isHead()\"><a style=\"color:black;\" [routerLink]=\"['/manageLeaves']\">Manage Leaves</a></li>\n            <li *ngIf=\"authService.isHead()\"><a style=\"color:black;\" [routerLink]=\"['/controlDates']\">Control Dates</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\" (click)=\"logoutUser()\" style=\"color:black;\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessage, user) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.user = user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authService.logout();
        this.flashMessage.show("You're Logged out", { cssClass: 'alert-success', times: 3000 });
        this.router.navigate(['/home']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class = \"col-md-6\">\n   <h1 class = \"page-header\">PROFILE</h1>\t\n\t<div *ngIf=\"user\">\n\t\t<div class=\"jumbotron\" style=\"width: 100%; background-color:#e6e6e6; border: 1px solid gray;\n\t         border-radius: 10px;\" align=\"left\">\n\t\t\t<div class = \"row\"  style=\"color:black;\">\n\t\t\t\t<h3>NAME : {{user.full_name}}</h3>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class = \"row\"  style=\"color:black;\">\n\t\t\t\t<h3>POST : {{user.post}}</h3>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class = \"row\"  style=\"color:black;\">\n\t\t\t\t<h3>CONTACT NO : {{user.phone}}</h3>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class = \"row\"  style=\"color:black;\">\n\t\t\t\t<h3>EMAIL : {{user.email}}</h3>\n\t\t\t</div>\n\t\t</div>\n    </div>\n  </div>\n\n\n  <div class=\"col-md-6\">\n  \t<br>\n\t <img style=\"width:600px;height: 468px;\" src=\"assets/image/home.jpg\" alt=\"image\">\t\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2 class = \"page-header\">Report Genaration</h2>\n<br><br>\t\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Email</th>\n\t\t\t   <th>Reports</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.email}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"viewLeavesAll(user._id,user.email)\" value= \"Download\" class =\"btn btn-success\" style=\"border: 1px solid #4d4d4d;\"></th>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportGenarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGenarationComponent", function() { return ReportGenarationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportGenarationComponent = /** @class */ (function () {
    function ReportGenarationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ReportGenarationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ReportGenarationComponent.prototype.viewLeavesAll = function (id, email) {
        var navigationExtras = {
            queryParams: {
                "id": id,
                "email": email
            }
        };
        this.router.navigate(["/createPDF"], navigationExtras);
    };
    ReportGenarationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-genaration',
            template: __webpack_require__(/*! ./report-genaration.component.html */ "./src/app/components/report-genaration/report-genaration.component.html"),
            styles: [__webpack_require__(/*! ./report-genaration.component.css */ "./src/app/components/report-genaration/report-genaration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportGenarationComponent);
    return ReportGenarationComponent;
}());



/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\ninput[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\nbutton[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ntextarea{\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid white;\n    border-radius: 10px; border: 1px solid gray;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Request Leaves</h2>\n\t<form #frm=\"ngForm\" (ngSubmit) = \"request(frm)\">\n\t\t\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"text\" bsDaterangepicker name =\"date\" class = \"form-control\" ngModel #dateRequest=\"ngModel\" required placeholder=\"Select date range\">\n\t\t</div>\n\t\t    <div *ngIf=\"dateRequest?.touched && dateRequest.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"dateRequest.errors?.required\">\n\t\t\t\t\tDate is Required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Reason</label>\n\t\t\t<input type=\"text\" name =\"reason\" class = \"form-control\" ngModel #reasonRequest=\"ngModel\" required maxlength=\"25\" minlength=\"5\" placeholder=\"Reason\">\n\t\t</div>\n\t\t    <div *ngIf=\"reasonRequest?.touched && reasonRequest.errors\" class=\"alert alert-danger\" style=\"width: 100%; border: 1px solid red;\">\n\t\t\t\t<div *ngIf=\"reasonRequest.errors?.required\">\n\t\t\t\t\tReason is Required\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"reasonRequest.errors?.minlength\">\n\t\t\t\t\tInvalid Request\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>More Text</label><br>\n\t\t\t<textarea name =\"describe\" rows=\"3\" cols=\"10\" class = \"form-control\" ngModel #describeRequest=\"ngModel\" maxlength=\"50\" placeholder=\"More......(limit 50)\">></textarea>\n\t\t</div>\n\t\t<button type=\"submit\" name=\"button\" class =\"btn btn-success\" [disabled]=\"frm.invalid\">Submit</button>\n\t</form>\n  </div>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Requested On</th>\t\n\t\t\t   <th>Leave Dates</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let request of requests\">\n\t\t\t   <td>{{request.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t   <td>{{request.date.split(',')[0] | date}} - {{request.date.split(',')[1] | date}}</td>\n\t\t\t   <td>{{request.reason}}</td>\n\t\t\t   <td><input type=\"button\" (click) = \"deleteRequest(request._id)\" value= \"Delete\" class =\"btn btn-danger\" style=\"border: 1px solid #4d4d4d;\"></td>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLeavesComponent", function() { return RequestLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestLeavesComponent = /** @class */ (function () {
    function RequestLeavesComponent(requestService, authService, flashMessage, router) {
        this.requestService = requestService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    RequestLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getRequest(this.email).subscribe(function (request) {
            _this.requests = request;
        });
    };
    RequestLeavesComponent.prototype.request = function (form) {
        var _this = this;
        var request = {
            name: this.name,
            post: this.post,
            email: this.email,
            date: form.value.date,
            reason: form.value.reason,
            describe: form.value.describe
        };
        this.requestService.sendRequest(request).subscribe(function (request) {
            if (request.state) {
                _this.requests.push(request);
                _this.requestService.getRequest(_this.email).subscribe(function (request) {
                    _this.requests = request;
                });
            }
            else {
                _this.flashMessage.show(request.msg, { cssClass: 'alert-danger', times: 3000 });
            }
        });
    };
    RequestLeavesComponent.prototype.deleteRequest = function (id) {
        var request = this.requests;
        this.requestService.deleteRequest(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < request.length; i++) {
                    if (request[i]._id == id) {
                        request.splice(i, 1);
                    }
                }
            }
        });
    };
    RequestLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-leaves',
            template: __webpack_require__(/*! ./request-leaves.component.html */ "./src/app/components/request-leaves/request-leaves.component.html"),
            styles: [__webpack_require__(/*! ./request-leaves.component.css */ "./src/app/components/request-leaves/request-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestLeavesComponent);
    return RequestLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/update-post/update-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\ninput[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ntextarea{\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid gray;\n    border-radius: 10px;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Edit News</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>About</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"about\" name =\"about\" class = \"form-control\">\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Content</label><br>\n\t\t\t<textarea [(ngModel)]='content' name =\"content\" rows=\"3\" cols=\"10\"></textarea>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\" style=\"border: 1px solid #4d4d4d;\">\n        </div>\n\t</form>\n  </div>\t\n</div>"

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(route, postService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostToUpdate(this.id).subscribe(function (post) {
            _this.name = post.name,
                _this.post = post.post,
                _this.email = post.email,
                _this.about = post.about,
                _this.content = post.content;
        });
    };
    UpdatePostComponent.prototype.updateData = function () {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: this.about,
            content: this.content
        };
        this.postService.updatePost(this.id, post).subscribe(function (res) {
            if (res) {
                _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
        });
    };
    UpdatePostComponent.prototype.redirectBack = function () {
        this.router.navigate(['/addPost']);
    };
    UpdatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-post',
            template: __webpack_require__(/*! ./update-post.component.html */ "./src/app/components/update-post/update-post.component.html"),
            styles: [__webpack_require__(/*! ./update-post.component.css */ "./src/app/components/update-post/update-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());



/***/ }),

/***/ "./src/app/components/update-user/update-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}\n\ninput[type=submit] {\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    color: black;\n}\n\ntextarea{\n    border: 1px solid #4d4d4d;\n    border-radius: 6px;\n    background-color: white;\n    color: black;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"jumbotron\" style=\"width: 50%; background-color:#d9d9d9; border: 1px solid gray;\n    border-radius: 10px;\">\t\n\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid white; border-radius: 10px;\" align=\"center\">Edit Users</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t<h2 class = \"page-header\" style=\"background-color:#006080; color:white;height: 50px; border: 1px solid #4d4d4d; border-radius: 10px;\" align=\"center\">Grant Access</h2>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Level</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"state\" name =\"state\" class = \"form-control\" required>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\" style=\"border: 1px solid #4d4d4d;\">\n        </div>\n\t</form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(route, authService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserToUpdate(this.id).subscribe(function (user) {
            _this.full_name = user.full_name,
                _this.phone = user.phone,
                _this.email = user.email,
                _this.password = user.password,
                _this.state = user.state,
                _this.beforeState = user.state;
        });
    };
    UpdateUserComponent.prototype.updateData = function () {
        var _this = this;
        this.checkPost();
        var user = {
            full_name: this.full_name,
            post: this.post,
            phone: this.phone,
            email: this.email,
            password: this.password,
            state: this.state
        };
        this.authService.updateUser(this.id, user).subscribe(function (res) {
            if (res) {
                if ((_this.beforeState != _this.state) && (_this.id == _this.authService.getAuthId())) {
                    _this.flashMessage.show("Your Level Update Successfuly Please Login as the new Role", { cssClass: 'alert-success', times: 3000 });
                    _this.authService.logout();
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                    _this.router.navigate(['/manageAdmin']);
                }
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageAdmin']);
            }
        });
    };
    UpdateUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageAdmin']);
    };
    UpdateUserComponent.prototype.checkPost = function () {
        if (this.state == '0') {
            this.post = 'head';
        }
        else if (this.state == '1') {
            this.post = 'admin';
        }
        else if (this.state == '2') {
            this.post = 'staff';
        }
    };
    UpdateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/components/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/components/update-user/update-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-user/view-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid black;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2 class = \"page-header\">Leaves History</h2>\n<br><br>\t\n\t<table>\n\t\t\t<tr style=\"background:#006080; color:white;\">\n\t\t\t   <th>Requested On</th>\n\t\t\t   <th>Leave Dates</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>State</th>\n\t\t\t   <th>Response On</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let hry of history\">\n\t\t\t   <td>{{hry.req_on | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t   <td>{{hry.date.split(',')[0] | date}} - {{hry.date.split(',')[1] | date}}</td>\n\t\t\t   <td>{{hry.reason}}</td>\n\t\t\t   <td>{{hry.describe}}</td>\n\t\t\t   <td style=\"color:red;\">{{hry.state}}</td>\n\t\t\t   <td>{{hry.state}} on {{hry.created_at | date:\"MMMM d, y 'at' h:mm:ss a\"}}</td>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n    <br><br>\n\t<div class = \"col-md-3\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-success\" style=\"border: 1px solid #4d4d4d;\">\n\t\t\t<br><br>\n    </div>\t\n</div>\n\n\t\n"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(route, requestService, router) {
        var _this = this;
        this.route = route;
        this.requestService = requestService;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.email = params["email"];
        });
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    ViewUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageLeaves']);
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/components/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/components/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("user/manageUsers", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("user/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.fetchToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ "Authorization": this.authtoken });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get("user/profile", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUser = function () {
        return this.http.get('user/manageUsers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUserToUpdate = function (id) {
        return this.http.get('user/getUser/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.updateUser = function (id, user) {
        return this.http.put('user/updateUser/' + id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllUsers = function () {
        return this.http.get('user/manageAdmin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete('user/manageUsers/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    AuthService.prototype.fetchId = function () {
        var id = localStorage.getItem("id");
        this.authid = id;
    };
    AuthService.prototype.fetchName = function () {
        var name = localStorage.getItem("name");
        this.authname = name;
    };
    AuthService.prototype.fetchLevel = function () {
        var level = localStorage.getItem("level");
        this.authlevel = level;
    };
    AuthService.prototype.fetchEmail = function () {
        var email = localStorage.getItem("email");
        this.authemail = email;
    };
    AuthService.prototype.fetchPost = function () {
        var post = localStorage.getItem("post");
        this.authpost = post;
    };
    AuthService.prototype.storeData = function (token, id, name, level, email, post) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("level", level);
        localStorage.setItem("email", email);
        localStorage.setItem("post", post);
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        this.fetchToken();
        if (this.authtoken != null) {
            return true;
        }
    };
    AuthService.prototype.getAuthName = function () {
        this.fetchName();
        return this.authname;
    };
    AuthService.prototype.getAuthId = function () {
        this.fetchId();
        return this.authid;
    };
    AuthService.prototype.getAuthEmail = function () {
        this.fetchEmail();
        return this.authemail;
    };
    AuthService.prototype.getAuthPost = function () {
        this.fetchPost();
        return this.authpost;
    };
    AuthService.prototype.isHead = function () {
        this.fetchLevel();
        if (this.authlevel == '0') {
            return true;
        }
    };
    AuthService.prototype.isAdmin = function () {
        this.fetchLevel();
        if (this.authlevel == '1') {
            return true;
        }
    };
    AuthService.prototype.isStaff = function () {
        this.fetchLevel();
        if (this.authlevel == '2') {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        var roles = route.data["roles"];
        if (this.authService.loggedIn()) {
            if (this.authService.isHead()) {
                if ((roles[0] == 'Head') || (roles[0] == 'Head&Admin') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else if (this.authService.isAdmin()) {
                if ((roles[0] == 'Admin') || (roles[0] == 'Head&Admin') || (roles[0] == 'Admin&Staff') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else if (this.authService.isStaff()) {
                if ((roles[0] == 'Admin&Staff') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else {
                this.router.navigate(['/']);
                return false;
            }
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = /** @class */ (function () {
    // readonly baseURL = 'request/sendNotification';
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.postMessage = function (message) {
        console.log(message);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/sendNotification", message, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http, router) {
        this.http = http;
        this.router = router;
    }
    PostService.prototype.sendPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("post/savePost", post, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getAllPost = function () {
        return this.http.get('post/getAllPost').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete('post/deletePost/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPostToUpdate = function (id) {
        return this.http.get('post/getPost/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.updatePost = function (id, post) {
        return this.http.put('post/updatePost/' + id, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http, router) {
        this.http = http;
        this.router = router;
    }
    RequestService.prototype.sendRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/manageRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getRequest = function (email) {
        return this.http.get('request/manageRequest/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.viewHistory = function (email) {
        return this.http.get('request/viewHistory/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.deleteRequest = function (id) {
        return this.http.delete('request/manageRequest/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getAllRequest = function () {
        return this.http.get('request/manageRequest').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.acceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/acceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.notacceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/notacceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestService);
    return RequestService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Projects\templates\Manage-Leaves-master\Angular-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map