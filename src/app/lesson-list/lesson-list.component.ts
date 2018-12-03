import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  private subjects = [
    {name: "Tantárgy 1", lessons: [
      {group: 6},
      {group: 2},
    ]},
    {name: "Tantárgy 2", lessons: [
      {group: 5},
      {group: 3},
    ]}
  ];

  constructor() {}

  ngOnInit() {
  }

}
