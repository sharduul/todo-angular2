import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from '../../service/task-list.service';
import { ITask, Task } from '../../service/task';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  form:FormGroup;
  newTask:Task;

  @Input()
  initialValue:any;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  isErrorVisible(field:string, error:string) {

    return this.form.controls[field].dirty
      && this.form.controls[field].errors &&
      this.form.controls[field].errors[error];

  }

  save(form){

    this.newTask = new Task(form.value.name, form.value.description, +form.value.priority);

    this.taskService.createNewTask(this.newTask)
        .subscribe(
      () => {
        alert("task created successfully!!!");
        form.reset();
      },
      error => console.log(`error creating lesson ${error}`)

    )

  }

  reset() {
    this.form.reset();
  }


}
