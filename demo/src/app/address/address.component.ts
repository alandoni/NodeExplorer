import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() currentPath;
  @Output() onPathChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.onPathChanged.emit(event.target.value);
    }
  }
}
