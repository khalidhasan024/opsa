import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-input',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output('sortingChange')
  sortingChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortChange(filter: string): void {
    this.sortingChange.emit(filter);
  }

}
