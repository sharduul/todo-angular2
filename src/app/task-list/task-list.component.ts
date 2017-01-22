import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task-list.service';
import { Task } from '../../service/task';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  allTasks: any[];
  queryStr = new FormControl();

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.findAllTasks()
     // .do(console.log)
      .subscribe(
        tasks => this.allTasks = tasks
    )

    this.queryStr.valueChanges
        .debounceTime(400)
        .subscribe(
          queryStr => this.taskService.filterTasks(queryStr)
                        .subscribe(
                          (tasks) => {
                            console.log(tasks);
                            this.allTasks = tasks;
                          },
                          error => console.log(error)
                        )
         );

  }

  markDone(task){

    console.log(task);
    task.status = true;

    this.taskService.saveTask(task.$key, task)
      .subscribe(

      () => {
        alert("task marked done!!!");
      },
      error => console.log(error)
    )

  }


  deleteTask(task){

    console.log(task);

    this.taskService.deleteTask(task.$key)
      .subscribe(

      () => {
        alert("task deleted!!!");
      },
      error => console.log(error)
    )

  }



}
