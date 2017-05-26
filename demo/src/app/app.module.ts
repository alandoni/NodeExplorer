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
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
