import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileActions } from './../file-actions.enum';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Output() onButtonPressed = new EventEmitter<FileActions>();

  FileActions = FileActions;

  constructor() { }

  ngOnInit() {
  }

}
