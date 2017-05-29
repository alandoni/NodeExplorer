import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { FolderComponent } from './folder/folder.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { ActionsComponent } from './actions/actions.component';
import { AddressComponent } from './address/address.component';
import { SearchComponent } from './search/search.component';

import { FileService } from './file.service';
import { FileEditorComponent } from './file-editor/file-editor.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

import { environment } from './../environments/environment';

export * from './actions/actions.component';
export * from './address/address.component';
export * from './file-editor/file-editor.component';
export * from './file-viewer/file-viewer.component';
export * from './folder/folder.component';
export * from './folder-list/folder-list.component';
export * from './search/search.component';
export * from './upload-file/upload-file.component';
export * from './app.component';
export * from './file-actions.enum';
export * from './file.service';

@NgModule({
    declarations: [
        AppComponent,
        FileViewerComponent,
        FolderComponent,
        FolderListComponent,
        ActionsComponent,
        AddressComponent,
        SearchComponent,
        FileEditorComponent,
        UploadFileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        AppComponent,
        FileViewerComponent,
        FolderComponent,
        FolderListComponent,
        ActionsComponent,
        AddressComponent,
        SearchComponent,
        FileEditorComponent,
        UploadFileComponent,
        FileService
    ],
    bootstrap: [AppComponent]
})
export class NFEModule {
    static forRoot(host: string): ModuleWithProviders {
        environment.API_URL = host;
        return {
            ngModule: NFEModule,
            providers: [FileService]
        };
    }
}
