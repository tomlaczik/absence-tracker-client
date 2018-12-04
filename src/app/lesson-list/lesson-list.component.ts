import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  private subjects = [
    {name: "Tantárgy 1", lessons: [
      {group: 6, registered: false},
      {group: 2, registered: true},
      {group: 8, registered: false},
      {group: 11, registered: false},
    ]},
    {name: "Tantárgy 2", lessons: [
      {group: 69, registered: false},
      {group: 5, registered: false},
      {group: 3, registered: true},
    ]}
  ];

  private filteredSubjects;

  constructor(private lessonService: LessonService) {}

  async ngOnInit() {
    this.filteredSubjects = await this.lessonService.getAll();
  }

  onFilterChange(data) {
  }

}
