import { Component } from '@angular/core';
import { FileService } from './file.service';
import { FileActions } from './file-actions.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oldPath: string;
  currentPath: string;
  currentPathFiles: Array<any> = [];
  currentPathFolders: Array<any> = [];
  selectedFile: any;
  fileEditor: boolean;
  fileUpload: boolean;
  fileContent: string;
  copyingFile: boolean;
  cuttingFile: boolean;

  constructor(private fileService: FileService) {
    this.currentPath = fileService.currentPath;
    this.getFiles();
  }

  pathChanged(folder) {
    if (folder.path || folder.name) {
      this.fileService.currentPath = folder.path + '/' + folder.name;
    } else {
      this.fileService.currentPath = folder;
    }
    this.currentPath = this.fileService.currentPath;
    this.getFiles();
  }

  onSearch(text) {
    this.fileService.search(text).then((files) => {
      this.processFiles(files);
    });
  }

  getFiles() {
    const hasInitializedPaths = this.currentPathFolders.length > 0;

    this.fileService.getFiles().then((files: Array<any>) => {
      const initial = {path: '', name: '/', folders: []};
      if (!hasInitializedPaths) {
        this.currentPathFolders.push(initial);
      }

      files.map((file, index) => {
        if (!file.isFile && !hasInitializedPaths) {
          initial.folders.push(file);
        }
      });
      this.processFiles(files);
    });
  }

  processFiles(files: Array<any>) {
    this.currentPathFiles = [];
    return files.map((file, index) => {
      this.currentPathFiles.push(file);
    });
  }

  onFileSelected(file) {
    this.selectedFile = file;
  }

  onFileOpened(file) {
    if (file.isFile) {
      this.openFile(file);
      return;
    }
    this.pathChanged(file);
  }

  openFile(file) {
    this.fileService.openFile(file.path + '/' + file.name).then((fileContent) => {
      this.fileEditor = true;
      this.fileContent = fileContent;
    });
  }

  closeEditor() {
     this.fileEditor = false;
     this.fileContent = '';
     this.getFiles();
  }

  closeUpload() {
    this.fileUpload = false;
    this.getFiles();
  }

  onActionButtonPressed(action: FileActions) {
    switch (action) {
      case FileActions.COPY:
        this.copyingFile = true;
        this.cuttingFile = false;
        break;
      case FileActions.CUT:
        this.copyingFile = false;
        this.cuttingFile = true;
        break;
      case FileActions.PASTE:
        this.pasteFile();
        break;
      case FileActions.DELETE:
        this.fileService.deleteFile(this.selectedFile.path + '/' + this.selectedFile.name).then((result) => {
          this.getFiles();
        });
        break;
      case FileActions.NEW_FOLDER:
        const name = prompt('Please, enter the name of the new folder');
        this.fileService.createFolder(this.currentPath, name).then((result) => {
          this.getFiles();
        });
        break;
      case FileActions.NEW_FILE:
        this.selectedFile = {path: this.currentPath};
        this.fileEditor = true;
        this.fileContent = '';
        break;
      case FileActions.UPLOAD_FILE:
        this.fileUpload = true;
        break;
      case FileActions.READ_FILE:
        this.openFile(this.selectedFile);
        break;
      case FileActions.DOWNLOAD_FILE:
        this.fileService.downloadFile(this.selectedFile.path + '/' + this.selectedFile.name);
        break;
    }
  }

  pasteFile() {
    if (!this.selectedFile.isFile) {
      return;
    }
    const selectedFilePath = this.selectedFile.path + '/' + this.selectedFile.name;
    let destinationFilePath = this.currentPath + '/' + this.selectedFile.name;
    if (this.selectedFile.path === this.currentPath) {
      if (destinationFilePath.lastIndexOf('.') > 0) {
        let ext = destinationFilePath.substr(destinationFilePath.lastIndexOf('.'), destinationFilePath.length);
        destinationFilePath = destinationFilePath.replace(ext, ' (1)') + ext;
      } else {
        destinationFilePath += ' (1)';
      }
    }
    let promise = null;
    if (this.copyingFile) {
      promise = this.fileService.copyFile(selectedFilePath, destinationFilePath);
    }
    if (this.cuttingFile) {
      promise = this.fileService.moveFile(selectedFilePath, destinationFilePath);
    }
    promise.then((files) => {
      this.getFiles();
    });
  }
}
