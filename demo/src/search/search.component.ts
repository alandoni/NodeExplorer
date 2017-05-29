import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.onSearch.emit(event.target.value);
    }
  }
}
