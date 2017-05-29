import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  @Input() files: Array<any>;
  @Output() onFileSelected = new EventEmitter<any>();
  @Output() onFileOpened = new EventEmitter<any>();

  selectedFile: any;

  constructor() { }

  ngOnInit() {
  }

  selectItem(file) {
    if (this.selectedFile) {
      this.selectedFile.isSelected = false;
    }
    file.isSelected = true;
    this.selectedFile = file;
  }

  onFileSelect(file) {
    this.selectItem(file);
    this.onFileSelected.emit(file);
  }

  onFileOpen(file) {
    this.selectItem(file);
    this.onFileOpened.emit(file);
  }
}
