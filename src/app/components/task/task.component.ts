import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../models/Task'; 
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;
   
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeTask(task: Task) {
    const response = confirm('Are you sure to delete the selected Task ?');
    if(response) {
      this.dataService.removeTask(task);
    }
  }
}
