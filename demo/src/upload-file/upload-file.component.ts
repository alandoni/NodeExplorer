import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { HOST_URL } from './../file.service';

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

  constructor(@Inject(HOST_URL) private hostUrl: string) { 
  }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.srcElement.files;
    if (this.currentPath.charAt(this.currentPath.length - 1) === '/') {
      this.currentPath = this.currentPath.substr(0, this.currentPath.length - 1);
    }
    this.url = this.hostUrl + 'upload/' + this.currentPath + '/' + files[0].name;
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
