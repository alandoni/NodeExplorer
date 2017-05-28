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

export function declarations() {
    return [
        AppComponent,
        FileViewerComponent,
        FolderComponent,
        FolderListComponent,
        ActionsComponent,
        AddressComponent,
        SearchComponent,
        FileEditorComponent,
        UploadFileComponent
    ];
}

export function imports() {
    return [
        BrowserModule,
        FormsModule,
        HttpModule
    ];
}

export function providers() {
    return [FileService];
}

export function bootstrap() {
    return [AppComponent];
}

@NgModule({
    declarations: declarations(),
    imports: imports(),
    providers: providers(),
    bootstrap: bootstrap()
})
export class NFEModule {
    static forRoot(host: string): ModuleWithProviders {
        environment.API_URL = host;
        return {
            ngModule: NFEModule
        }
    }
}
