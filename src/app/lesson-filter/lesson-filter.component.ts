import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lesson-filter',
  templateUrl: './lesson-filter.component.html',
  styleUrls: ['./lesson-filter.component.css']
})
export class LessonFilterComponent implements OnInit {
  @Input('status') selectedStatus = 'all';
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(data) {
    this.selectedStatus = data.value;
    this.change.emit(this.selectedStatus);
  }
}
