import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task-list.service';
import { Task } from '../../service/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  allTasks: any[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.findAllTasks()
      .do(console.log)
      .subscribe(
        tasks => this.allTasks = tasks
    )

  }

  markDone(task){

    console.log(task);

    this.taskService.saveTask(task.$key, task)
      .subscribe(

      () => {
        alert("task marked done!!!");
      },
      error => console.log(error)
    )

  }



}
