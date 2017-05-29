import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileService } from './../file.service';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  @Input() folders: Array<any>;
  @Output() onFolderChanged = new EventEmitter<any>();

  selectedFolder: any;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.folders.map((folder, index) => {
      folder.isOpened = false;
      folder.isSelected = false;
    });
  }

  onFolderOpenClick(folder) {
    this.fileService.getFolders(folder.path + '/' + folder.name).then((folders) => {
      folder.isOpened = true;
      folder.folders = folders;
    });
  }

  onFolderCloseClick(folder) {
    folder.isOpened = false;
  }

  onFolderClick(folder) {
    console.log(folder);
    if (this.selectedFolder) {
      this.selectedFolder.isSelected = false;
    }
    folder.isSelected = true;
    this.selectedFolder = folder;
    this.onFolderChanged.emit(folder);
  }
}
