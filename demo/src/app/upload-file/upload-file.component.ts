import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input() currentPath: string;
  @Output() onUploadFinished = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  fileName: string;
  url: string;
  environment = environment;

  constructor() { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.srcElement.files;
    if (this.currentPath.charAt(this.currentPath.length - 1) === '/') {
      this.currentPath = this.currentPath.substr(0, this.currentPath.length - 1);
    }
    this.url = environment.API_URL + 'upload/' + this.currentPath + '/' + files[0].name;
    console.log(this.url);
  }

  cancel() {
    this.onCancel.emit();
  }

  submit(event) {
    setTimeout(() => {
      this.onUploadFinished.emit();
    }, 1000);
  }
}
