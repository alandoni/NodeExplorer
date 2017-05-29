webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:5001/files/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileActions; });
var FileActions;
(function (FileActions) {
    FileActions[FileActions["COPY"] = 0] = "COPY";
    FileActions[FileActions["CUT"] = 1] = "CUT";
    FileActions[FileActions["PASTE"] = 2] = "PASTE";
    FileActions[FileActions["DELETE"] = 3] = "DELETE";
    FileActions[FileActions["NEW_FOLDER"] = 4] = "NEW_FOLDER";
    FileActions[FileActions["NEW_FILE"] = 5] = "NEW_FILE";
    FileActions[FileActions["UPLOAD_FILE"] = 6] = "UPLOAD_FILE";
    FileActions[FileActions["READ_FILE"] = 7] = "READ_FILE";
    FileActions[FileActions["DOWNLOAD_FILE"] = 8] = "DOWNLOAD_FILE";
})(FileActions || (FileActions = {}));
//# sourceMappingURL=file-actions.enum.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_actions_enum__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsComponent = (function () {
    function ActionsComponent() {
        this.onButtonPressed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.FileActions = __WEBPACK_IMPORTED_MODULE_1__file_actions_enum__["a" /* FileActions */];
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], ActionsComponent.prototype, "onButtonPressed", void 0);
    ActionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-actions',
            template: __webpack_require__(476),
            styles: [__webpack_require__(466)]
        }), 
        __metadata('design:paramtypes', [])
    ], ActionsComponent);
    return ActionsComponent;
}());
//# sourceMappingURL=actions.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = (function () {
    function AddressComponent() {
        this.onPathChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent.prototype.onKeyDown = function (event) {
        if (event.keyCode === 13) {
            this.onPathChanged.emit(event.target.value);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "currentPath", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddressComponent.prototype, "onPathChanged", void 0);
    AddressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-address',
            template: __webpack_require__(477),
            styles: [__webpack_require__(467)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(fileService) {
        this.fileService = fileService;
        this.currentPathFiles = [];
        this.currentPathFolders = [];
        this.currentPath = fileService.currentPath;
        this.getFiles();
    }
    AppComponent.prototype.pathChanged = function (folder) {
        if (folder.path || folder.name) {
            this.fileService.currentPath = folder.path + '/' + folder.name;
        }
        else {
            this.fileService.currentPath = folder;
        }
        this.currentPath = this.fileService.currentPath;
        this.getFiles();
    };
    AppComponent.prototype.onSearch = function (text) {
        var _this = this;
        this.fileService.search(text).then(function (files) {
            _this.processFiles(files);
        });
    };
    AppComponent.prototype.getFiles = function () {
        var _this = this;
        var hasInitializedPaths = this.currentPathFolders.length > 0;
        this.fileService.getFiles().then(function (files) {
            var initial = { path: '', name: '/', folders: [] };
            if (!hasInitializedPaths) {
                _this.currentPathFolders.push(initial);
            }
            files.map(function (file, index) {
                if (!file.isFile && !hasInitializedPaths) {
                    initial.folders.push(file);
                }
            });
            _this.processFiles(files);
        });
    };
    AppComponent.prototype.processFiles = function (files) {
        var _this = this;
        this.currentPathFiles = [];
        return files.map(function (file, index) {
            _this.currentPathFiles.push(file);
        });
    };
    AppComponent.prototype.onFileSelected = function (file) {
        this.selectedFile = file;
    };
    AppComponent.prototype.onFileOpened = function (file) {
        if (file.isFile) {
            this.openFile(file);
            return;
        }
        this.pathChanged(file);
    };
    AppComponent.prototype.openFile = function (file) {
        var _this = this;
        this.fileService.openFile(file.path + '/' + file.name).then(function (fileContent) {
            _this.fileEditor = true;
            _this.fileContent = fileContent;
        });
    };
    AppComponent.prototype.closeEditor = function () {
        this.fileEditor = false;
        this.fileContent = '';
        this.getFiles();
    };
    AppComponent.prototype.closeUpload = function () {
        this.fileUpload = false;
        this.getFiles();
    };
    AppComponent.prototype.onActionButtonPressed = function (action) {
        var _this = this;
        switch (action) {
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].COPY:
                this.copyingFile = true;
                this.cuttingFile = false;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].CUT:
                this.copyingFile = false;
                this.cuttingFile = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].PASTE:
                this.pasteFile();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].DELETE:
                this.fileService.deleteFile(this.selectedFile.path + '/' + this.selectedFile.name).then(function (result) {
                    _this.getFiles();
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].NEW_FOLDER:
                var name = prompt('Please, enter the name of the new folder');
                this.fileService.createFolder(this.currentPath, name).then(function (result) {
                    _this.getFiles();
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].NEW_FILE:
                this.selectedFile = { path: this.currentPath };
                this.fileEditor = true;
                this.fileContent = '';
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].UPLOAD_FILE:
                this.fileUpload = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].READ_FILE:
                this.openFile(this.selectedFile);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__file_actions_enum__["a" /* FileActions */].DOWNLOAD_FILE:
                this.fileService.downloadFile(this.selectedFile.path + '/' + this.selectedFile.name);
                break;
        }
    };
    AppComponent.prototype.pasteFile = function () {
        var _this = this;
        if (!this.selectedFile.isFile) {
            return;
        }
        var selectedFilePath = this.selectedFile.path + '/' + this.selectedFile.name;
        var destinationFilePath = this.currentPath + '/' + this.selectedFile.name;
        if (this.selectedFile.path === this.currentPath) {
            if (destinationFilePath.lastIndexOf('.') > 0) {
                var ext = destinationFilePath.substr(destinationFilePath.lastIndexOf('.'), destinationFilePath.length);
                destinationFilePath = destinationFilePath.replace(ext, ' (1)') + ext;
            }
            else {
                destinationFilePath += ' (1)';
            }
        }
        var promise = null;
        if (this.copyingFile) {
            promise = this.fileService.copyFile(selectedFilePath, destinationFilePath);
        }
        if (this.cuttingFile) {
            promise = this.fileService.moveFile(selectedFilePath, destinationFilePath);
        }
        promise.then(function (files) {
            _this.getFiles();
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(478),
            styles: [__webpack_require__(468)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileEditorComponent = (function () {
    function FileEditorComponent(fileService) {
        this.fileService = fileService;
        this.onFileSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    FileEditorComponent.prototype.ngOnInit = function () {
    };
    FileEditorComponent.prototype.ngOnChanges = function (changes) {
    };
    FileEditorComponent.prototype.saveFile = function () {
        var _this = this;
        var fileName = '';
        if (!this.file || !this.file.name) {
            fileName = prompt('Please, enter the name of the file');
        }
        else {
            fileName = this.file.name;
        }
        this.fileService.saveFile(this.file.path + '/' + fileName, this.fileContent).then(function (result) {
            _this.onFileSaved.emit();
        });
    };
    FileEditorComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], FileEditorComponent.prototype, "file", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], FileEditorComponent.prototype, "fileContent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], FileEditorComponent.prototype, "onFileSaved", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], FileEditorComponent.prototype, "onCancel", void 0);
    FileEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-file-editor',
            template: __webpack_require__(479),
            styles: [__webpack_require__(469)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === 'function' && _a) || Object])
    ], FileEditorComponent);
    return FileEditorComponent;
    var _a;
}());
//# sourceMappingURL=file-editor.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileViewerComponent = (function () {
    function FileViewerComponent() {
    }
    FileViewerComponent.prototype.ngOnInit = function () {
    };
    FileViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-file-viewer',
            template: __webpack_require__(480),
            styles: [__webpack_require__(470)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileViewerComponent);
    return FileViewerComponent;
}());
//# sourceMappingURL=file-viewer.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FolderListComponent = (function () {
    function FolderListComponent(fileService) {
        this.fileService = fileService;
        this.onFolderChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    FolderListComponent.prototype.ngOnInit = function () {
        this.folders.map(function (folder, index) {
            folder.isOpened = false;
            folder.isSelected = false;
        });
    };
    FolderListComponent.prototype.onFolderOpenClick = function (folder) {
        this.fileService.getFolders(folder.path + '/' + folder.name).then(function (folders) {
            folder.isOpened = true;
            folder.folders = folders;
        });
    };
    FolderListComponent.prototype.onFolderCloseClick = function (folder) {
        folder.isOpened = false;
    };
    FolderListComponent.prototype.onFolderClick = function (folder) {
        console.log(folder);
        if (this.selectedFolder) {
            this.selectedFolder.isSelected = false;
        }
        folder.isSelected = true;
        this.selectedFolder = folder;
        this.onFolderChanged.emit(folder);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], FolderListComponent.prototype, "folders", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], FolderListComponent.prototype, "onFolderChanged", void 0);
    FolderListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-folder-list',
            template: __webpack_require__(481),
            styles: [__webpack_require__(471)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === 'function' && _a) || Object])
    ], FolderListComponent);
    return FolderListComponent;
    var _a;
}());
//# sourceMappingURL=folder-list.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FolderComponent = (function () {
    function FolderComponent() {
        this.onFileSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.onFileOpened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    FolderComponent.prototype.ngOnInit = function () {
    };
    FolderComponent.prototype.selectItem = function (file) {
        if (this.selectedFile) {
            this.selectedFile.isSelected = false;
        }
        file.isSelected = true;
        this.selectedFile = file;
    };
    FolderComponent.prototype.onFileSelect = function (file) {
        this.selectItem(file);
        this.onFileSelected.emit(file);
    };
    FolderComponent.prototype.onFileOpen = function (file) {
        this.selectItem(file);
        this.onFileOpened.emit(file);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], FolderComponent.prototype, "files", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], FolderComponent.prototype, "onFileSelected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], FolderComponent.prototype, "onFileOpened", void 0);
    FolderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-folder',
            template: __webpack_require__(482),
            styles: [__webpack_require__(472)]
        }), 
        __metadata('design:paramtypes', [])
    ], FolderComponent);
    return FolderComponent;
}());
//# sourceMappingURL=folder.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onKeyDown = function (event) {
        if (event.keyCode === 13) {
            this.onSearch.emit(event.target.value);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "onSearch", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(483),
            styles: [__webpack_require__(473)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileComponent = (function () {
    function UploadFileComponent() {
        this.onUploadFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.environment = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.fileChanged = function (event) {
        var files = event.srcElement.files;
        if (this.currentPath.charAt(this.currentPath.length - 1) === '/') {
            this.currentPath = this.currentPath.substr(0, this.currentPath.length - 1);
        }
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + 'upload/' + this.currentPath + '/' + files[0].name;
        console.log(this.url);
    };
    UploadFileComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    UploadFileComponent.prototype.submit = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.onUploadFinished.emit();
        }, 1000);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], UploadFileComponent.prototype, "currentPath", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], UploadFileComponent.prototype, "onUploadFinished", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], UploadFileComponent.prototype, "onCancel", void 0);
    UploadFileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-upload-file',
            template: __webpack_require__(484),
            styles: [__webpack_require__(474)]
        }), 
        __metadata('design:paramtypes', [])
    ], UploadFileComponent);
    return UploadFileComponent;
}());
//# sourceMappingURL=upload-file.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 304;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* NFEModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_viewer_file_viewer_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__folder_folder_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__folder_list_folder_list_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_actions_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__address_address_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__file_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__file_editor_file_editor_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__upload_file_upload_file_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__(118);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__file_actions_enum__ = __webpack_require__(177);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NFEModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var NFEModule = (function () {
    function NFEModule() {
    }
    NFEModule.forRoot = function (host) {
        __WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].API_URL = host;
        return {
            ngModule: NFEModule,
            providers: [__WEBPACK_IMPORTED_MODULE_11__file_service__["a" /* FileService */]]
        };
    };
    NFEModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__file_viewer_file_viewer_component__["a" /* FileViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__folder_folder_component__["a" /* FolderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__folder_list_folder_list_component__["a" /* FolderListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__actions_actions_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__address_address_component__["a" /* AddressComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__file_editor_file_editor_component__["a" /* FileEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__upload_file_upload_file_component__["a" /* UploadFileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__file_viewer_file_viewer_component__["a" /* FileViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__folder_folder_component__["a" /* FolderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__folder_list_folder_list_component__["a" /* FolderListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__actions_actions_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__address_address_component__["a" /* AddressComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__file_editor_file_editor_component__["a" /* FileEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__upload_file_upload_file_component__["a" /* UploadFileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__file_service__["a" /* FileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NFEModule);
    return NFEModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".button {\n\tfloat: left;\n\tborder: 1px solid rgb(220, 220, 255);\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tmargin: 10px;\n\tcursor: pointer;\n}\n\n.button:first-child {\n\tmargin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "input {\n\twidth: 70%;\n\tmargin-right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "body {\n\tmargin: 0;\n}\n\n.left {\n\tfloat: left;\n}\n\n.folders {\n\twidth: 15%;\n}\n\n.files {\n\twidth: 85%;\n}\n\n.clear {\n\tclear: both;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".file-reader-bg {\n\tbackground: rgba(0, 0, 0, 0.7);\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n}\n\n.file-reader {\n\tbackground: white;\n\tpadding: 20px;\n\tposition: absolute;\n\twidth: 70%;\n\tleft: 15%;\n\ttop: 15%;\n\theight: 70%;\n}\n\ntextarea {\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\theight: calc(100% - 50px);\n}\n\n.buttons {\n\tfloat: right;\n}\n\n.button:first-child {\n\tmargin-right: 20px;\n}\n\n.button {\n\tfloat: left;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tborder: 1px solid rgb(210, 210, 255);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "ul {\n\tlist-style: none;\n\tpadding-left: 0; \n}\n\nli {\n\tline-height: 24px;\n}\n\nli > * {\n\tline-height: 24px;\n\tvertical-align: middle;\n}\n\n.padding {\n\tpadding-left: 10px;\n}\n\n.selected {\n\tbackground: rgb(205, 232, 255);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "table {\n\twidth: 100%;\n}\n\nth {\n\ttext-align: left;\n}\n\ntd {\n\tline-height: 24px;\n}\n\ntd.right {\n\ttext-align: right;\n\tpadding-right: 20px;\n}\n\ntd > * {\n\tline-height: 24px;\n\tvertical-align: middle;\n}\n\n.selected {\n\tbackground: rgb(205, 232, 255);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "input {\n\twidth: 20%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".file-reader-bg {\n\tbackground: rgba(0, 0, 0, 0.7);\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n}\n\n.file-reader {\n\tbackground: white;\n\tpadding: 20px;\n\tposition: absolute;\n\twidth: 70%;\n\tleft: 15%;\n\ttop: 15%;\n\theight: 70%;\n}\n\ntextarea {\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\theight: calc(100% - 50px);\n}\n\n.buttons {\n\tfloat: right;\n}\n\n.button:first-child {\n\tmargin-right: 20px;\n}\n\n.button {\n\tfloat: left;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tborder: 1px solid rgb(210, 210, 255);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.COPY)\">\n  Copy\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.CUT)\">\n  Cut\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.PASTE)\">\n  Paste\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.DELETE)\">\n  Delete\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.NEW_FOLDER)\">\n  New folder\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.NEW_FILE)\">\n  New file\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.UPLOAD_FILE)\">\n  Upload file\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.READ_FILE)\">\n  Read file\n</div>\n<div class=\"button\"  (click)=\"onButtonPressed.emit(FileActions.DOWNLOAD_FILE)\">\n  Download file\n</div>"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<input [(value)]=\"currentPath\" (keydown)=\"onKeyDown($event)\" />\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-actions (onButtonPressed)=\"onActionButtonPressed($event)\"></app-actions>\n</div>\n<div class=\"clear\"></div>\n<div>\n\t<app-address [currentPath]=\"currentPath\" (onPathChanged)=\"pathChanged($event)\"></app-address>\n\t<app-search (onSearch)=\"onSearch($event)\"></app-search>\n</div>\n<br />\n<div>\n\t<app-folder-list [folders]=\"currentPathFolders\" (onFolderChanged)=\"pathChanged($event)\" class=\"folders left\"></app-folder-list>\n\t<app-folder [files]=\"currentPathFiles\" class=\"left files\" (onFileSelected)=\"onFileSelected($event)\" (onFileOpened)=\"onFileOpened($event)\"></app-folder>\n</div>\n\n<div *ngIf=\"fileEditor\">\n\t<app-file-editor [fileContent]=\"fileContent\" [file]=\"selectedFile\" (onFileSaved)=\"closeEditor()\" (onCancel)=\"closeEditor()\"></app-file-editor>\n</div>\n\n<div *ngIf=\"fileUpload\">\n\t<app-upload-file [currentPath]=\"currentPath\" (onUploadFinished)=\"closeUpload()\" (onCancel)=\"closeUpload()\"></app-upload-file>\n</div>"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div class=\"file-reader-bg\">\n\t<div class=\"file-reader\">\n\t\t<textarea [(ngModel)]=\"fileContent\"></textarea>\n\t\t<div class=\"buttons\">\n\t\t\t<div class=\"button\" (click)=\"saveFile()\">Save</div>\n\t\t\t<div class=\"button\" (click)=\"cancel()\">Cancel</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<p>\n  file-viewer works!\n</p>\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let folder of folders\">\n    <img src=\"/assets/images/folder-status_01.png\" *ngIf=\"folder.isOpened\" (click)=\"onFolderCloseClick(folder)\"/>\n    <img src=\"/assets/images/folder-status_02.png\" *ngIf=\"!folder.isOpened\" (click)=\"onFolderOpenClick(folder)\"/>\n    <img src=\"/assets/images/file-icon_01.png\" (click)=\"onFolderClick(folder)\"/>\n    <span (click)=\"onFolderClick(folder)\" [ngClass]=\"{'selected': folder.isSelected, 'not-selected': !folder.isSelected}\">{{folder.name}}</span>\n    <div class=\"padding\" *ngIf=\"folder.isOpened\">\n      <app-folder-list [folders]=\"folder.folders\" (onFolderChanged)=\"onFolderClick($event)\"></app-folder-list>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>\n        Name\n      </th>\n      <th width=\"100px\">\n        Size\n      </th>\n      <th>\n        Type\n      </th>\n      <th width=\"200px\">\n        Modified\n      </th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"files\">\n    <tr *ngFor=\"let file of files\">\n      <td (click)=\"onFileSelect(file)\" (dblclick)=\"onFileOpen(file)\">\n        <img src=\"/assets/images/file-icon_02.png\" *ngIf=\"file.isFile\"/>\n        <img src=\"/assets/images/file-icon_01.png\" *ngIf=\"!file.isFile\"/>\n        <span [ngClass]=\"{'selected': file.isSelected, 'not-selected': !file.isSelected}\">{{file.name}}</span>\n      </td>\n      <td class=\"right\">\n        <span *ngIf=\"file.isFile\">{{file.size}}</span>\n      </td>\n      <td>\n        <span *ngIf=\"file.isFile\">{{file.type}}</span>\n      </td>\n      <td>\n        <span>{{file.modified}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<label for=\"search\">\n  Search for:\n</label>\n<input id=\"search\" name=\"search\" value=\"\" (keydown)=\"onKeyDown($event)\" />"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<div class=\"file-reader-bg\">\n\t<div class=\"file-reader\">\n    <form ngNoForm action=\"{{url}}\" method=\"post\" enctype=\"multipart/form-data\" target=\"_blank\" (submit)=\"submit($event)\">\n\t\t  <input type=\"file\" name=\"file\" (change)=\"fileChanged($event)\" />\n      <div class=\"buttons\">\n        <input class=\"button\" type=\"submit\" value=\"Send\" name=\"send\" />\n        <div class=\"button\" (click)=\"cancel()\">Cancel</div>\n      </div>\n    </form>\n\t</div>\n</div>"

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(305);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.current = '/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL;
    }
    FileService.prototype.post = function (url, data) {
        var _this = this;
        return this.http.post(this.baseUrl + url, data, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'text/plain' }) })
            .map(function (response) {
            return _this.handleResponse(response);
        })
            .toPromise()
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.get = function (url) {
        var _this = this;
        return this.http.get(this.baseUrl + url, { withCredentials: true })
            .map(function (response) {
            return _this.handleResponse(response);
        })
            .toPromise()
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.delete = function (url) {
        var _this = this;
        return this.http.delete(this.baseUrl + url, { withCredentials: true })
            .map(function (response) {
            return _this.handleResponse(response);
        })
            .toPromise()
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.download = function (url) {
        var link = document.createElement('a');
        link.download = url.substr(url.lastIndexOf('/') + 1, url.length);
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
    };
    FileService.prototype.handleResponse = function (response) {
        try {
            return response.json();
        }
        catch (ex) {
            return response.text();
        }
    };
    FileService.prototype.handleError = function (error) {
        var err = null;
        try {
            err = error && error.json().description;
        }
        catch (err) {
            throw new Error(error);
        }
        if (err) {
            throw Object.assign(new Error(), error.json());
        }
        else {
            throw new Error(error);
        }
    };
    FileService.prototype.removeDot = function (path) {
        if (path.indexOf('.') === 0) {
            path = path.substr(1);
        }
        if (path === '//') {
            path = '/';
        }
        return path;
    };
    Object.defineProperty(FileService.prototype, "currentPath", {
        get: function () {
            return this.current;
        },
        set: function (path) {
            this.current = this.removeDot(path);
            console.log('Going to ' + path);
        },
        enumerable: true,
        configurable: true
    });
    FileService.prototype.getFiles = function () {
        return this.get(this.current);
    };
    FileService.prototype.getFolders = function (path) {
        return this.get('folder/' + this.removeDot(path));
    };
    FileService.prototype.openFile = function (path) {
        return this.get('read/' + this.removeDot(path));
    };
    FileService.prototype.saveFile = function (path, content) {
        return this.post('/' + path, content);
    };
    FileService.prototype.search = function (fileName) {
        return this.get('search/' + fileName);
    };
    FileService.prototype.copyFile = function (origin, destination) {
        return this.post('copy/' + origin, destination);
    };
    FileService.prototype.moveFile = function (origin, destination) {
        return this.post('move/' + origin, destination);
    };
    FileService.prototype.deleteFile = function (path) {
        return this.delete(path);
    };
    FileService.prototype.createFolder = function (path, name) {
        return this.post('folder/' + path + '/' + name, '');
    };
    FileService.prototype.downloadFile = function (path) {
        this.download('/' + path);
    };
    FileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FileService);
    return FileService;
    var _a;
}());
//# sourceMappingURL=file.service.js.map

/***/ })

},[509]);
//# sourceMappingURL=main.bundle.js.map