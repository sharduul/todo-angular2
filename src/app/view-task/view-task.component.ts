import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task-list.service';
import { ITask, Task } from '../../service/task';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

	task: ITask;
	taskId: string;

  constructor(private taskService: TaskService, 
  				      private router: Router,
                private route:ActivatedRoute) { }

  ngOnInit() {

  	this.taskId = this.route.snapshot.params['id'];

  	this.taskService.findTaskById(this.taskId)
      .subscribe(
        (task) => {
                    console.log(task);
                    this.task = task[0];
                  }
    )

  }

}
