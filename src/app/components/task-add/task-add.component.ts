import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task, priorities } from '../../models/Task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  name: String;
  description: String;
  priority: String;
  dueDate: String;
  hide:boolean;
  priorities = priorities;
  
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.taskAdded.emit({
      name: this.name,
      description: this.description,
      priority: this.priority,
      dueDate: this.dueDate,
      hide: true
    })
    this.name = '';
    this.description = '';
    this.priority = '';
    this.dueDate = '';
  }
}
