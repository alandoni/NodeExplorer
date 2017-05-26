import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FileService } from './../file.service';

@Component({
  selector: 'app-file-editor',
  templateUrl: './file-editor.component.html',
  styleUrls: ['./file-editor.component.css']
})
export class FileEditorComponent implements OnInit, OnChanges {

  @Input() file: any;
  @Input() fileContent: string;
  @Output() onFileSaved = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  constructor(private fileService: FileService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  saveFile() {
    let fileName = '';
    if (!this.file || !this.file.name) {
      fileName = prompt('Please, enter the name of the file');
    } else {
      fileName = this.file.name;
    }
    this.fileService.saveFile(this.file.path + '/' + fileName, this.fileContent).then((result) => {
      this.onFileSaved.emit();
    });
  }

  cancel() {
    this.onCancel.emit();
  }
}
